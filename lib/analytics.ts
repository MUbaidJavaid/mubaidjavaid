'use client'

type Gtag = (...args: unknown[]) => void

function getGtag (): Gtag | undefined {
  if (typeof window === 'undefined') return undefined
  return (window as Window & { gtag?: Gtag }).gtag
}

/** Lightweight conversion events — only fires when GA is loaded. */
export function trackCta (
  action: 'discuss_project' | 'view_work' | 'contact_submit' | 'case_cta',
  detail?: string
) {
  const gtag = getGtag()
  if (!gtag) return
  gtag('event', action, {
    event_category: 'conversion',
    event_label: detail ?? action
  })
}
