import { site } from '@/data/site'
import { contactPayloadSchema } from '@/lib/contact-schema'
import { escapeHtml } from '@/lib/email-html'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

function getResend () {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

function contactEmailHtml (input: {
  name: string
  email: string
  projectType: string
  message: string
  budget: string
}) {
  const brand = '#246b96'
  const brandDeep = '#1e5a82'
  const n = escapeHtml(input.name)
  const e = escapeHtml(input.email)
  const pt = escapeHtml(input.projectType)
  const msg = escapeHtml(input.message).replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>')
  const bud = escapeHtml(input.budget)

  return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f4f7fb;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f7fb;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;">
            <tr>
              <td style="background:linear-gradient(135deg, ${brand} 0%, ${brandDeep} 100%);padding:28px 24px;text-align:center;">
                <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">New portfolio inquiry</h1>
                <p style="margin:10px 0 0;font-size:13px;color:rgba(255,255,255,0.88);">${escapeHtml(site.name)} · Contact form</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 24px;color:#334155;font-size:15px;line-height:1.6;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr><td style="padding:0 0 14px;"><strong style="color:${brand};font-size:12px;text-transform:uppercase;letter-spacing:0.06em;">Name</strong><br/><span style="color:#0f172a;">${n}</span></td></tr>
                  <tr><td style="padding:0 0 14px;"><strong style="color:${brand};font-size:12px;text-transform:uppercase;letter-spacing:0.06em;">Email</strong><br/><a href="mailto:${encodeURIComponent(input.email)}" style="color:${brand};">${e}</a></td></tr>
                  <tr><td style="padding:0 0 14px;"><strong style="color:${brand};font-size:12px;text-transform:uppercase;letter-spacing:0.06em;">Project type</strong><br/><span style="color:#0f172a;">${pt}</span></td></tr>
                  <tr><td style="padding:0 0 14px;"><strong style="color:${brand};font-size:12px;text-transform:uppercase;letter-spacing:0.06em;">Budget</strong><br/><span style="color:#0f172a;">${bud}</span></td></tr>
                  <tr><td style="padding:0 0 8px;"><strong style="color:${brand};font-size:12px;text-transform:uppercase;letter-spacing:0.06em;">Message</strong></td></tr>
                  <tr><td style="padding:12px 14px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;color:#0f172a;font-size:14px;line-height:1.65;">${msg}</td></tr>
                </table>
                <p style="margin:24px 0 0;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#64748b;">Reply directly to this email to respond   <strong>Reply-To</strong> is set to the sender.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

export async function POST (request: Request) {
  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!raw || typeof raw !== 'object') {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const body = raw as Record<string, unknown>

  const parsed = contactPayloadSchema.safeParse(body)
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors
    return NextResponse.json(
      { error: 'Validation failed', fieldErrors },
      { status: 400 }
    )
  }

  const { name, email, projectType, message, budget } = parsed.data

  const resend = getResend()
  if (!resend) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json(
      { error: 'Email is not configured on the server' },
      { status: 503 }
    )
  }

  const to =
    process.env.CONTACT_TO_EMAIL?.trim() || site.email
  const from =
    process.env.RESEND_FROM?.trim() ||
    `Portfolio Contact <onboarding@resend.dev>`

  const subject = `Portfolio inquiry from ${name}`

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject,
    html: contactEmailHtml({
      name,
      email,
      projectType,
      message,
      budget
    })
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to send email', ok: false },
      { status: 502 }
    )
  }

  if (!data?.id) {
    console.error('Resend returned no message id', data)
    return NextResponse.json(
      {
        error:
          'Email provider did not confirm delivery. Check RESEND_FROM domain and logs.',
        ok: false
      },
      { status: 502 }
    )
  }

  return NextResponse.json({
    ok: true,
    delivered: true,
    id: data.id
  })
}
