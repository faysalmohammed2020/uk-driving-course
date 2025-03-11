import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



export async function POST(req: NextRequest) {
    try {
      const body = await req.json().catch(() => null); // Handle invalid JSON
  
      if (!body || typeof body !== "object") {
        return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
      }
  
      const { name, email, password, role, phone } = body;
  
      // Validate required fields
      if (!name || !email || !password || !role) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
  
      // Check if the user already exists
      const existingUser = await prisma.users.findUnique({
        where: { email },
      });
  
      if (existingUser) {
        return NextResponse.json(
          { error: "User with this email already exists" },
          { status: 400 }
        );
      }
  
      // Hash the password
    //   const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create the user
      const newUser = await prisma.users.create({
        data: {
          name,
          email,
          password,
          role,
          phone,
        },
      });
  
      return NextResponse.json(
        { message: "User registered successfully", user: newUser },
        { status: 201 }
      );
    } catch (error) {
      console.error("Error registering user:", error);
      
      return NextResponse.json(
        { error: "Internal server error" }, // Properly formatted error response
        { status: 500 }
      );
    }
  }
