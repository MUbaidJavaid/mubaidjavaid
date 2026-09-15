/**
 * Single public origin for canonicals, sitemap, OG, and host redirects.
 *
 * Prefer NEXT_PUBLIC_SITE_URL (custom domain or primary).
 * Never publish preview hosts (e.g. mubaidjavaid-ten.vercel.app) as canonical —
 * even if that value is mistakenly set in Vercel env.
 */
const FALLBACK = 'https://mubaidjavaid.vercel.app'

function normalizeOrigin (raw: string): string {
  const withProtocol = raw.startsWith('http') ? raw : `https://${raw}`
  return withProtocol.replace(/\/$/, '')
}

function isUnsafeSeoHost (origin: string): boolean {
  try {
    const host = new URL(origin).host.toLowerCase()
    if (host === 'mubaidjavaid.vercel.app') return false
    if (host.includes('mubaidjavaid-ten')) return true
    if (host.includes('-git-') && host.endsWith('.vercel.app')) return true
    return false
  } catch {
    return true
  }
}

export function getSiteOrigin (): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) {
    const origin = normalizeOrigin(fromEnv)
    if (!isUnsafeSeoHost(origin)) return origin
  }

  // Do not use VERCEL_PROJECT_PRODUCTION_URL — it can be a preview alias.
  return FALLBACK
}

export function getSiteUrl (): string {
  return `${getSiteOrigin()}/`
}

export function getCanonicalHost (): string {
  return new URL(getSiteOrigin()).host
}

/** Preview / alternate Vercel hosts that must not be indexed. */
export const PREVIEW_HOSTS = ['mubaidjavaid-ten.vercel.app'] as const
