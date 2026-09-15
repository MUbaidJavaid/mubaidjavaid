'use client'

import { trackCta } from '@/lib/analytics'
import Link from 'next/link'
import type { ComponentProps } from 'react'

type TrackedCtaLinkProps = ComponentProps<typeof Link> & {
  event: Parameters<typeof trackCta>[0]
  detail?: string
}

/** Client Link wrapper that fires GA conversion events when gtag is present. */
export function TrackedCtaLink ({
  event,
  detail,
  onClick,
  children,
  ...props
}: TrackedCtaLinkProps) {
  return (
    <Link
      {...props}
      onClick={e => {
        trackCta(event, detail)
        onClick?.(e)
      }}
    >
      {children}
    </Link>
  )
}
