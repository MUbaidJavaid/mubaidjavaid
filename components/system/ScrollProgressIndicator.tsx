'use client'

import { useEffect, useRef } from 'react'

/** Native scroll progress — no Framer Motion on the layout critical path. */
export function ScrollProgressIndicator () {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      el.style.transform = `scaleX(${progress})`
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={ref}
      className='pointer-events-none fixed left-0 right-0 top-[calc(4.25rem+env(safe-area-inset-top,0px))] z-[49] h-px origin-left scale-x-0 bg-heading will-change-transform'
      aria-hidden
    />
  )
}
