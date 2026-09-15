'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const SECTIONS = [
  { href: '#proof', id: 'proof', label: 'Proof' },
  { href: '#impact', id: 'impact', label: 'Impact' },
  { href: '#process', id: 'process', label: 'Process' },
  { href: '#technologies', id: 'technologies', label: 'Stack' },
  { href: '#timeline', id: 'timeline', label: 'Path' },
  { href: '#writing', id: 'writing', label: 'Writing' },
  { href: '#contact', id: 'contact', label: 'Contact' }
] as const

/**
 * Persistent homepage wayfinding (Issues 6 / prior 19–20).
 * Fixed rail — not trapped inside the hero.
 */
export function HomeSectionNav () {
  const [active, setActive] = useState<string>('proof')

  useEffect(() => {
    const nodes = SECTIONS.map(s => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[]
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.25, 0.5] }
    )

    nodes.forEach(n => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className='pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block'
      aria-label='Section shortcuts'
    >
      <ul className='pointer-events-auto flex flex-col gap-1 rounded-md border border-heading/10 bg-background/90 p-2 shadow-sm backdrop-blur-md'>
        {SECTIONS.map(item => {
          const isActive = active === item.id
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  'flex min-h-9 items-center justify-between gap-3 px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-heading'
                )}
              >
                <span>{item.label}</span>
                <span
                  className={cn(
                    'h-1.5 w-1.5 rounded-full',
                    isActive ? 'bg-primary-foreground' : 'bg-heading/25'
                  )}
                  aria-hidden
                />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
