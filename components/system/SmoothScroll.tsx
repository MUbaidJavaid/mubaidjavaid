'use client'

import { useEffect } from 'react'

/** Lenis loads after first paint so it cannot compete with LCP. */
export function SmoothScroll () {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let cancelled = false
    let frame = 0
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null

    const timer = window.setTimeout(() => {
      void (async () => {
        const { default: Lenis } = await import('lenis')
        if (cancelled) return
        lenis = new Lenis({
          duration: 1.1,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true
        })
        const raf = (time: number) => {
          lenis?.raf(time)
          frame = requestAnimationFrame(raf)
        }
        frame = requestAnimationFrame(raf)
      })()
    }, 900)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
      cancelAnimationFrame(frame)
      lenis?.destroy()
    }
  }, [])

  return null
}
