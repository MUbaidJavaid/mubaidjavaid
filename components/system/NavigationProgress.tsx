'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

/**
 * Slim top bar on route change - YouTube/Medium-style perceived performance.
 * Skips the first paint (initial load) so it only runs on client navigations.
 */
export function NavigationProgress () {
  const pathname = usePathname()
  const first = useRef(true)
  const [phase, setPhase] = useState<'idle' | 'running' | 'done'>('idle')
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }

    setPhase('running')
    setWidth(12)
    const raf = requestAnimationFrame(() => setWidth(78))
    const t1 = setTimeout(() => setWidth(100), 220)
    const t2 = setTimeout(() => {
      setPhase('done')
      setWidth(0)
      setTimeout(() => setPhase('idle'), 200)
    }, 420)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [pathname])

  if (phase === 'idle' && width === 0) return null

  return (
    <div
      className='pointer-events-none fixed left-0 right-0 top-0 z-[200] h-[3px] overflow-hidden'
      aria-hidden
    >
      <div
        className='h-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.55)] transition-[width,opacity] duration-300 ease-out'
        style={{
          width: `${width}%`,
          opacity: phase === 'done' ? 0 : 1,
          transitionDuration: phase === 'done' ? '200ms' : '280ms'
        }}
      />
    </div>
  )
}
