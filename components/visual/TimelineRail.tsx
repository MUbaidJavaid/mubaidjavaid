'use client'

import { brandMotion } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useRef } from 'react'

type Item = {
  year: string
  title: string
  role: string
  body: string
  location: string
  current: boolean
  technologies: readonly string[]
}

/**
 * Light editorial career trajectory — connected milestones, not cards.
 */
export function TimelineRail ({ items }: { items: Item[] }) {
  const root = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const inView = useInView(root, { once: true, margin: '-12%' })

  return (
    <div ref={root} className='relative mx-auto max-w-6xl'>
      {/* Mobile vertical route */}
      <div
        className='pointer-events-none absolute bottom-4 left-[5px] top-2 w-px bg-heading/10 md:hidden'
        aria-hidden
      />
      <motion.div
        className='pointer-events-none absolute left-[5px] top-2 w-px origin-top bg-[hsl(211_48%_42%)] md:hidden'
        aria-hidden
        initial={reduce ? false : { scaleY: 0 }}
        animate={inView || reduce ? { scaleY: 1 } : undefined}
        transition={{ duration: 1.1, ease: brandMotion.ease }}
        style={{ height: 'calc(100% - 1.5rem)' }}
      />

      {/* Desktop horizontal route */}
      <div
        className='pointer-events-none absolute left-0 right-0 top-[5px] hidden h-px bg-heading/10 md:block'
        aria-hidden
      />
      <motion.div
        className='pointer-events-none absolute left-0 right-0 top-[5px] hidden h-px origin-left bg-[hsl(211_48%_42%)] md:block'
        aria-hidden
        initial={reduce ? false : { scaleX: 0 }}
        animate={inView || reduce ? { scaleX: 1 } : undefined}
        transition={{ duration: 1.15, ease: brandMotion.ease }}
      />

      <ol className='grid gap-0 md:grid-cols-2 md:divide-x md:divide-heading/10'>
        {items.map((item, i) => (
            <motion.li
              key={`${item.title}-${item.year}`}
              className='relative pb-12 pl-8 last:pb-0 md:px-10 md:pb-0 md:pt-14 md:first:pl-0 md:last:pr-0'
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={inView || reduce ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: brandMotion.durationSlow,
                delay: reduce ? 0 : 0.12 + i * 0.12,
                ease: brandMotion.ease
              }}
            >
              <div className='absolute left-0 top-0 z-10 flex h-[11px] w-[11px] items-center justify-center rounded-full bg-[hsl(214_28%_97%)] md:top-0'>
                <span
                  className={cn(
                    'h-[7px] w-[7px] rounded-full border border-heading/30 bg-[hsl(214_28%_97%)]',
                    item.current &&
                      'border-[hsl(211_48%_42%)] bg-[hsl(211_48%_42%)] shadow-[0_0_0_6px_hsl(211_48%_42%/0.1)]'
                  )}
                  aria-hidden
                />
              </div>

              <span
                className='pointer-events-none absolute right-2 top-8 select-none font-display text-[clamp(4rem,9vw,7.5rem)] font-bold leading-none tracking-[-0.08em] text-heading/[0.035] md:right-8 md:top-10'
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className='relative'>
                <div className='flex flex-wrap items-center gap-3'>
                  <p className='font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[hsl(211_48%_42%)]'>
                    {item.year}
                  </p>
                  {item.current ? (
                    <span className='inline-flex items-center gap-2 font-mono text-[0.5rem] uppercase tracking-[0.13em] text-[hsl(152_48%_34%)]'>
                      <span className='h-1.5 w-1.5 rounded-full bg-[hsl(152_48%_42%)]' />
                      Current
                    </span>
                  ) : null}
                </div>

                <div className='mt-6 border-l-2 border-[hsl(211_48%_42%)] pl-4'>
                  <h3 className='font-display text-2xl font-semibold tracking-tight text-heading md:text-3xl'>
                    {item.title}
                  </h3>
                  <p className='mt-1.5 text-sm font-medium text-heading/60'>
                    {item.role}
                  </p>
                </div>

                <p className='mt-6 max-w-[44ch] text-sm leading-relaxed text-body'>
                  {item.body}
                </p>

                <div className='mt-6 flex items-center gap-2 border-t border-heading/10 pt-4 font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-heading/35'>
                  <MapPin size={12} strokeWidth={1.6} aria-hidden />
                  {item.location}
                </div>

                <div className='mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5'>
                  {item.technologies.map((technology, technologyIndex) => (
                    <span
                      key={technology}
                      className='inline-flex items-center gap-2 font-mono text-[0.5rem] uppercase tracking-[0.09em] text-heading/40'
                    >
                      {technologyIndex > 0 ? (
                        <span
                          className='h-0.5 w-0.5 rounded-full bg-[hsl(211_48%_42%)]'
                          aria-hidden
                        />
                      ) : null}
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
        ))}
      </ol>
    </div>
  )
}
