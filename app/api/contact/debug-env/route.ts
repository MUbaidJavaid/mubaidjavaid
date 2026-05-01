import { NextResponse } from 'next/server'

/**
 * Development only: confirms .env.local is loaded (no secret values exposed).
 * Visit GET /api/contact/debug-env while running `npm run dev`
 */
export async function GET () {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const key = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL

  return NextResponse.json({
    RESEND_API_KEY_present: Boolean(key && key.length > 8),
    CONTACT_TO_EMAIL_present: Boolean(to && to.includes('@'))
  })
}
