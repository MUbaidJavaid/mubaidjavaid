'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useCallback, useRef, useState } from 'react'

type MagneticButtonProps = {
  href: string
  className?: string
  children: React.ReactNode
  /** 0–1: how strongly the button follows the cursor */
  strength?: number
}

/**
 * Subtle magnetic pull toward cursor: purposeful micro-interaction for primary CTAs.
 */
export function MagneticButton ({
  href,
  className,
  children,
  strength = 0.22
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      setOffset({
        x: (e.clientX - cx) * strength,
        y: (e.clientY - cy) * strength
      })
    },
    [strength]
  )

  const onLeave = useCallback(() => setOffset({ x: 0, y: 0 }), [])

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`
      }}
      className={cn(
        'inline-flex will-change-transform transition-[transform,box-shadow] duration-200 ease-out',
        className
      )}
    >
      {children}
    </Link>
  )
}
