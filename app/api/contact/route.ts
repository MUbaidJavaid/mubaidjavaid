/**
 * Contact Form API Route
 * Handles form submissions with validation
 * Integrates with email service for notifications
 */

import { NextRequest, NextResponse } from "next/server"
import type { ContactMessage, ApiResponse } from "@/lib/types"

// Validation helper
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateContactForm(body: any) {
  const errors: Record<string, string> = {}

  if (!body.name || body.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters"
  }

  if (!validateEmail(body.email)) {
    errors.email = "Please provide a valid email address"
  }

  if (!body.subject || body.subject.trim().length < 5) {
    errors.subject = "Subject must be at least 5 characters"
  }

  if (!body.message || body.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters"
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse<{ messageId: string }>>> {
  try {
    const body = await request.json()

    // Validate form data
    const validation = validateContactForm(body)
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Form validation failed",
            ...validation.errors
          },
          timestamp: new Date()
        },
        { status: 400 }
      )
    }

    // TODO: Integrate with email service (Nodemailer, SendGrid, etc)
    // const emailResult = await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New contact form submission from ${body.name}`,
    //   html: `<p>From: ${body.email}</p><p>Subject: ${body.subject}</p><p>Message: ${body.message}</p>`
    // })

    // TODO: Save to database if configured
    // const message = await db.contactMessages.create({
    //   name: body.name,
    //   email: body.email,
    //   subject: body.subject,
    //   message: body.message,
    //   status: "new"
    // })

    // Mock successful response
    const messageId = `msg_${Date.now()}`

    return NextResponse.json(
      {
        success: true,
        data: { messageId },
        timestamp: new Date()
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: "Failed to process contact form"
        },
        timestamp: new Date()
      },
      { status: 500 }
    )
  }
}

// OPTIONS request for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  })
}
