/**
 * Single public origin for canonicals, sitemap, OG, and host redirects.
 * Set NEXT_PUBLIC_SITE_URL to your custom domain when ready, e.g.
 * https://mubaidjavaid.com — both Vercel hosts should 301 here.
 */
const FALLBACK = 'https://mubaidjavaid.vercel.app'

export function getSiteOrigin (): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    FALLBACK
  const withProtocol = raw.startsWith('http') ? raw : `https://${raw}`
  return withProtocol.replace(/\/$/, '')
}

export function getSiteUrl (): string {
  return `${getSiteOrigin()}/`
}

export function getCanonicalHost (): string {
  return new URL(getSiteOrigin()).host
}

/** Preview / alternate Vercel hosts that must not be indexed. */
export const PREVIEW_HOSTS = [
  'mubaidjavaid-ten.vercel.app'
] as const
