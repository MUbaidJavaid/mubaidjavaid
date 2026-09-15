import { PREVIEW_HOSTS, getCanonicalHost, getSiteOrigin } from '@/lib/site-url'
import { NextResponse, type NextRequest } from 'next/server'

/**
 * Phase-1 host policy:
 * - Preview aliases always get X-Robots-Tag: noindex
 * - 308 to canonical only when NEXT_PUBLIC_ENFORCE_CANONICAL_HOST=true
 *   (enable AFTER this repo is Production on the canonical host / custom domain)
 */
export function middleware (request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase() ?? ''
  const canonicalHost = getCanonicalHost().toLowerCase()
  const enforce = process.env.NEXT_PUBLIC_ENFORCE_CANONICAL_HOST === 'true'
  const isLocal =
    host === 'localhost' || host === '127.0.0.1' || host.endsWith('.localhost')

  const isPreview = PREVIEW_HOSTS.some(h => host === h)
  const isWrongHost = Boolean(host) && !isLocal && host !== canonicalHost

  if (enforce && (isPreview || isWrongHost)) {
    const origin = getSiteOrigin()
    const target = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      origin
    )
    const res = NextResponse.redirect(target, 308)
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return res
  }

  if (isPreview || (isWrongHost && !isLocal)) {
    const res = NextResponse.next()
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return res
  }

  // Thank-you is a conversion confirmation page — keep out of the index.
  if (request.nextUrl.pathname === '/contact/thank-you') {
    const res = NextResponse.next()
    res.headers.set('X-Robots-Tag', 'noindex, follow')
    return res
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)'
  ]
}
