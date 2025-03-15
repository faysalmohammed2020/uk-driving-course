// import { type NextRequest, NextResponse } from "next/server"
// import fs from "fs/promises"
// import path from "path"

// export async function POST(request: NextRequest) {
//   try {
//     const { setId, updatedSet } = await request.json()

//     // Log the received data for debugging
//     console.log("Updating question set:", { setId })

//     // Path to the JSON file
//     const filePath = path.join(process.cwd(), "app", "(main)", "[locale]", "data", "allquestions.json")

//     // Log the file path for debugging
//     console.log("File path:", filePath)

//     // Check if file exists
//     try {
//       await fs.access(filePath)
//     } catch (error) {
//       console.error("File does not exist:", filePath)
//       return NextResponse.json({ error: `File not found: allquestions.json` }, { status: 404 })
//     }

//     // Read the current file content
//     let fileContent
//     try {
//       fileContent = await fs.readFile(filePath, "utf8")
//     } catch (error) {
//       console.error("Error reading file:", error)
//       return NextResponse.json({ error: `Failed to read file: allquestions.json` }, { status: 500 })
//     }

//     // Parse the JSON content
//     let questionSets
//     try {
//       questionSets = JSON.parse(fileContent)
//     } catch (error) {
//       console.error("Error parsing JSON:", error)
//       return NextResponse.json({ error: "Invalid JSON in file" }, { status: 500 })
//     }

//     // Find and update the specific question set
//     const setIndex = questionSets.findIndex((set: any) => set.id === setId)

//     if (setIndex === -1) {
//       console.error("Question set not found in file:", setId)
//       return NextResponse.json({ error: `Question set ID ${setId} not found in file` }, { status: 404 })
//     }

//     questionSets[setIndex] = updatedSet

//     // Write the updated content back to the file
//     try {
//       await fs.writeFile(filePath, JSON.stringify(questionSets, null, 2), "utf8")
//     } catch (error) {
//       console.error("Error writing file:", error)
//       return NextResponse.json({ error: "Failed to write updated content to file" }, { status: 500 })
//     }

//     return NextResponse.json({
//       success: true,
//       message: `Successfully updated question set ${setId}`,
//     })
//   } catch (error) {
//     console.error("Error updating question set:", error)
//     return NextResponse.json(
//       { error: "Failed to update question set", details: (error as Error).message },
//       { status: 500 },
//     )
//   }
// }






import { type NextRequest, NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    const { setId, updatedSet, isNewSet } = await request.json()

    // Log the received data for debugging
    console.log("Processing question set:", { setId, isNewSet })

    // Path to the JSON file
    const filePath = path.join(process.cwd(), "app", "(main)", "[locale]", "data", "allquestions.json")

    // Log the file path for debugging
    console.log("File path:", filePath)

    // Check if file exists
    try {
      await fs.access(filePath)
    } catch (error) {
      console.error("File does not exist:", filePath)
      return NextResponse.json({ error: `File not found: allquestions.json` }, { status: 404 })
    }

    // Read the current file content
    let fileContent
    try {
      fileContent = await fs.readFile(filePath, "utf8")
    } catch (error) {
      console.error("Error reading file:", error)
      return NextResponse.json({ error: `Failed to read file: allquestions.json` }, { status: 500 })
    }

    // Parse the JSON content
    let questionSets
    try {
      questionSets = JSON.parse(fileContent)
    } catch (error) {
      console.error("Error parsing JSON:", error)
      return NextResponse.json({ error: "Invalid JSON in file" }, { status: 500 })
    }

    if (isNewSet) {
      // Add the new question set
      console.log("Adding new question set with ID:", setId)

      // Check if a set with this ID already exists
      const existingSetIndex = questionSets.findIndex((set: any) => set.id === setId)
      if (existingSetIndex !== -1) {
        console.warn("A question set with this ID already exists, using a new ID")
        // Generate a new ID if this one is taken
        updatedSet.id = Math.max(...questionSets.map((set: any) => set.id), 0) + 1
      }

      questionSets.push(updatedSet)
    } else {
      // Find and update the specific question set
      const setIndex = questionSets.findIndex((set: any) => set.id === setId)

      if (setIndex === -1) {
        console.error("Question set not found in file:", setId)
        return NextResponse.json({ error: `Question set ID ${setId} not found in file` }, { status: 404 })
      }

      questionSets[setIndex] = updatedSet
    }

    // Write the updated content back to the file
    try {
      await fs.writeFile(filePath, JSON.stringify(questionSets, null, 2), "utf8")
    } catch (error) {
      console.error("Error writing file:", error)
      return NextResponse.json({ error: "Failed to write updated content to file" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: isNewSet
        ? `Successfully created new question set with ID ${updatedSet.id}`
        : `Successfully updated question set ${setId}`,
    })
  } catch (error) {
    console.error("Error processing question set:", error)
    return NextResponse.json(
      { error: "Failed to process question set", details: (error as Error).message },
      { status: 500 },
    )
  }
}

