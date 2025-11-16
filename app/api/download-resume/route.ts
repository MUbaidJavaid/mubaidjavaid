/**
 * Resume Download API Route
 * Securely serves resume file with proper headers
 * Allows for tracking and logging of downloads
 */

import { NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join } from "path"

export async function GET(
  request: NextRequest
): Promise<NextResponse> {
  try {
    // Get the resume file from public directory
    const resumePath = join(process.cwd(), "public", "resume.pdf")

    // Read the file
    const fileBuffer = await readFile(resumePath)

    // TODO: Log download event to database
    // await db.downloads.create({
    //   type: "resume",
    //   timestamp: new Date(),
    //   userAgent: request.headers.get("user-agent")
    // })

    // Return file with appropriate headers
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="MubaidJavaid_Resume.pdf"',
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "public, max-age=3600"
      }
    })
  } catch (error) {
    console.error("Resume download error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to download resume"
      },
      { status: 500 }
    )
  }
}
