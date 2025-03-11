import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
// GET request to fetch users
export async function GET() {
  try {
    const users = await prisma.users.findMany();
    console.log("Fetched Users from DB:", users); // Debug log

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
  }
}
