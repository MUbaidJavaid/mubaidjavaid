'use client'

import { brandMotion, brandType } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

/** Soft stage shell — tone without forcing product/diagram media. */
export function SectionStage ({
  tone = 'muted',
  className,
  children
}: {
  tone?: 'paper' | 'muted' | 'ink'
  className?: string
  children: ReactNode
}) {
  const toneClass = {
    paper: 'bg-background text-heading',
    muted: 'bg-muted/55 text-heading',
    ink: 'bg-primary text-primary-foreground'
  }[tone]

  return (
    <div className={cn('relative h-full min-h-[min(52vh,520px)] overflow-hidden', toneClass, className)}>
      {children}
    </div>
  )
}

/** Technologies — interactive stack map (not architecture/network reuse). */
export function TechStackVisual ({
  items,
  active,
  onActive
}: {
  items: readonly string[]
  active: string
  onActive: (tech: string) => void
}) {
  const reduce = useReducedMotion()
  const root = useRef<HTMLDivElement>(null)
  const inView = useInView(root, { once: true, margin: '-10%' })
  const groups = [
    { title: 'Interface', keys: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { title: 'Server', keys: ['Node.js', 'Express', 'Convex'] },
    { title: 'Data', keys: ['MongoDB', 'PostgreSQL'] },
    { title: 'Ship', keys: ['Docker', 'Vercel', 'Git'] }
  ].map(g => ({
    ...g,
    keys: g.keys.filter(k => items.includes(k as (typeof items)[number]))
  })).filter(g => g.keys.length > 0)

  return (
    <div ref={root} className='flex h-full flex-col justify-center p-6 md:p-8 lg:p-10'>
      <div className='mb-6 flex items-end justify-between gap-3'>
        <div>
          <p className={cn(brandType.mono, 'text-current/55')}>Stack map</p>
          <p className='mt-1 text-sm font-medium text-current/80'>Chosen for clarity and shipping speed</p>
        </div>
        <span className='font-mono text-[0.625rem] uppercase tracking-[0.14em] text-current/45'>
          {String(items.length).padStart(2, '0')} tools
        </span>
      </div>

      <div className='space-y-3'>
        {groups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={inView || reduce ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: brandMotion.duration, delay: reduce ? 0 : gi * 0.06 }}
            className='border border-current/12 bg-current/[0.03] p-3 md:p-4'
          >
            <p className='mb-2.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-current/45'>
              {String(gi + 1).padStart(2, '0')} · {group.title}
            </p>
            <div className='flex flex-wrap gap-2'>
              {group.keys.map(tech => {
                const on = tech === active
                return (
                  <button
                    key={tech}
                    type='button'
                    onMouseEnter={() => onActive(tech)}
                    onFocus={() => onActive(tech)}
                    className={cn(
                      'border px-3 py-1.5 font-mono text-[0.6875rem] transition-colors',
                      on
                        ? 'border-current bg-current text-[hsl(var(--background))]'
                        : 'border-current/20 text-current/75 hover:border-current/40 hover:text-current'
                    )}
                  >
                    {tech}
                  </button>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <p className='mt-6 font-display text-xl font-semibold tracking-tight text-current md:text-2xl'>
        {active}
      </p>
    </div>
  )
}

/** Open source — inspectable public work, not system diagram. */
export function OpenSourceStageVisual ({
  links
}: {
  links: readonly { label: string; href: string; note: string }[]
}) {
  const reduce = useReducedMotion()
  const root = useRef<HTMLDivElement>(null)
  const inView = useInView(root, { once: true, margin: '-10%' })

  return (
    <div ref={root} className='flex h-full flex-col justify-center p-6 md:p-8 lg:p-10'>
      <p className={cn(brandType.mono, 'text-current/50')}>Public surface</p>
      <h3 className='mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl'>
        Code you can open.
      </h3>
      <p className='mt-3 max-w-[34ch] text-sm leading-relaxed text-current/70'>
        Repositories, experiments, and project history — verify before you hire.
      </p>

      <div className='mt-8 space-y-3'>
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            target='_blank'
            rel='noreferrer'
            className='block border border-current/15 bg-current/[0.04] px-4 py-4 transition-colors hover:border-current/35 hover:bg-current/[0.07]'
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={inView || reduce ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: brandMotion.duration, delay: reduce ? 0 : i * 0.08 }}
          >
            <div className='flex items-start justify-between gap-3'>
              <div>
                <p className='font-mono text-[0.625rem] text-current/45'>
                  {String(i + 1).padStart(2, '0')} · Repository
                </p>
                <p className='mt-1.5 font-display text-lg font-semibold'>{link.label}</p>
                <p className='mt-1 text-sm text-current/65'>{link.note}</p>
              </div>
              <span className='mt-1 text-sm text-current/70'>↗</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
