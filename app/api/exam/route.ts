
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     let { userId, examId, examTitle, score, total, status } = body;

//     console.log("📩 Received Data:", body);

//     // Validate required fields
//     if (!userId || examId === undefined || score === undefined || total === undefined || !status || !examTitle) {
//       console.error("❌ Missing required fields:", body);
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     // Ensure all numeric fields are properly converted
//     examId = Number(examId);
//     score = Number(score);
//     total = Number(total);

//     if (isNaN(examId) || isNaN(score) || isNaN(total)) {
//       console.error("❌ Invalid examId, score, or total:", { examId, score, total });
//       return NextResponse.json({ error: "Invalid examId, score, or total" }, { status: 400 });
//     }

//     // Save exam result to the database
//     const examResult = await prisma.examResult.create({
//       data: {
//         userId,
//         examId,
//         examTitle,
//         score,
//         total,
//         status,
//       },
//     });

//     console.log("✅ ExamResult saved successfully:", examResult);
//     return NextResponse.json(examResult, { status: 201 });

//   } catch (error: any) {
//     console.error("❌ Error creating ExamResult:", JSON.stringify(error, null, 2));
//     return NextResponse.json(
//       { error: "Failed to create ExamResult", details: error.message || "Unknown error" },
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// }


// ✅ GET Method: Fetch Exam Results

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { userId, examId, examTitle, score, total, status } = body;

    console.log("📩 Received Data:", body);

    // Validate required fields
    if (!userId || examId === undefined || score === undefined || total === undefined || !status || !examTitle) {
      console.error("❌ Missing required fields:", body);
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Ensure all numeric fields are properly converted
    examId = Number(examId);
    score = Number(score);
    total = Number(total);

    if (isNaN(examId) || isNaN(score) || isNaN(total)) {
      console.error("❌ Invalid examId, score, or total:", { examId, score, total });
      return NextResponse.json({ error: "Invalid examId, score, or total" }, { status: 400 });
    }

    // Ensure the status is a string (validate it if necessary)
    if (typeof status !== "string") {
      console.error("❌ Invalid status:", status);
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const examResult = await prisma.examResult.create({
      data: {
        userId,
        examId,
        examTitle,
        score,
        total,
        status,
      },
    });

    console.log("✅ ExamResult saved successfully:", examResult);
    return NextResponse.json(examResult, { status: 201 });

  } catch (error: unknown) {
    // Safe error handling
    if (error instanceof Error) {
      console.error("❌ Error creating ExamResult:", error.message, error.stack);
    } else {
      console.error("❌ Unknown error occurred:", error);
    }
    return NextResponse.json(
      { error: "Failed to create ExamResult", details: (error instanceof Error ? error.message : "Unknown error") },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}


export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const examId = searchParams.get("examId");
    const userId = searchParams.get("userId");

    // Ensure at least one filter is provided
    if (!examId && !userId) {
      return NextResponse.json({ error: "Provide examId or userId" }, { status: 400 });
    }

    // Convert examId to number if provided
    const examIdNumber = examId ? Number(examId) : undefined;
    if (examId && isNaN(examIdNumber)) {
      return NextResponse.json({ error: "Invalid examId" }, { status: 400 });
    }

    // Fetch results based on filters
    const examResults = await prisma.examResult.findMany({
      where: {
        ...(examIdNumber !== undefined && { examId: examIdNumber }),
        ...(userId && { userId }),
      },
      orderBy: { createdAt: "desc" }, // Sort latest first
    });

    return NextResponse.json(examResults, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching ExamResults:", error);
    return NextResponse.json(
      { error: "Failed to fetch ExamResults" },
      { status: 500 }
    );
  }
}
