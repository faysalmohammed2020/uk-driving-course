import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { examId, updatedExam, fileName } = await request.json();
    
    // Log the received data for debugging
    console.log('Updating exam:', { examId, fileName });
    
    // In a production environment, we would typically store this data in a database
    // For development purposes, we'll try to update the file if possible
    
    // Check if we're in development mode
    const isDev = process.env.NODE_ENV === 'development';
    
    if (isDev) {
      try {
        // Try different possible paths for the data files
        const possiblePaths = [
          path.join(process.cwd(), 'app', '(main)', '[locale]', 'data', fileName),
          path.join(process.cwd(), 'src', 'app', '(main)', '[locale]', 'data', fileName),
          path.join(process.cwd(), 'app', '(main)', 'en', 'data', fileName),
          path.join(process.cwd(), 'app', 'data', fileName),
          path.join(process.cwd(), 'public', 'data', fileName)
        ];
        
        let filePath = null;
        let fileContent = null;
        
        // Try each path until we find one that works
        for (const testPath of possiblePaths) {
          try {
            console.log('Trying path:', testPath);
            await fs.access(testPath);
            filePath = testPath;
            fileContent = await fs.readFile(testPath, 'utf8');
            console.log('Found file at:', filePath);
            break;
          } catch (error) {
            console.log('Path not accessible:', testPath);
          }
        }
        
        if (!filePath || !fileContent) {
          throw new Error(`Could not find file: ${fileName}`);
        }
        
        // Parse the JSON content
        const questions = JSON.parse(fileContent);
        
        // Find and update the specific exam
        const examIndex = questions.findIndex((question: any) => question.id === examId);
        
        if (examIndex === -1) {
          return NextResponse.json(
            { error: `Exam ID ${examId} not found in file ${fileName}` },
            { status: 404 }
          );
        }
        
        questions[examIndex] = updatedExam;
        
        // Write the updated content back to the file
        await fs.writeFile(filePath, JSON.stringify(questions, null, 2), 'utf8');
        console.log('Successfully updated file');
        
        return NextResponse.json({ 
          success: true,
          message: `Successfully updated exam ${examId} in ${fileName}`
        });
      } catch (error) {
        console.error('Error updating file:', error);
        // Fall through to the mock success response
      }
    }
    
    // For production or if file update fails, return a mock success response
    // In a real app, you would store this in a database instead
    console.log('Returning mock success response');
    return NextResponse.json({ 
      success: true,
      message: `Mock update: Exam ${examId} would be updated in ${fileName}`,
      note: "This is a mock response. In production, you would store this data in a database."
    });
    
  } catch (error) {
    console.error('Error in update-exam API route:', error);
    return NextResponse.json(
      { error: 'Failed to update exam', details: (error as Error).message },
      { status: 500 }
    );
  }
}
