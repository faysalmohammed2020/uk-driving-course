import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt"; // Ensure bcrypt is installed

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check if the request body is valid
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { name, email, password, role, phone } = body;

    // Validate required fields
    if (!name || !email || !password || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 400 });
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.users.create({
      data: {
        name,
        email,
        password,
        role,
        phone,
        emailVerified: false, 
       
      },
    });

    return NextResponse.json({ message: "User registered successfully", user: newUser }, { status: 201 });

  } catch (error) {
    console.error("Error registering user:", error instanceof Error ? error.message : error);

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
