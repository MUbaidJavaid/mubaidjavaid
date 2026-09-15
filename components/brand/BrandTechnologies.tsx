'use client'

import { BrandSection } from '@/components/brand/system/BrandSection'
import { MotionReveal } from '@/components/brand/system/MotionReveal'
import { technologyGroups } from '@/data/site'
import { brandMotion, brandType } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

/**
 * Technologies — logos + horizontal category tabs (Issue 17).
 */
export function BrandTechnologies () {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const group = technologyGroups[active]

  useEffect(() => {
    if (reduce || paused) return
    const id = window.setInterval(() => {
      setActive(i => (i + 1) % technologyGroups.length)
    }, 3800)
    return () => window.clearInterval(id)
  }, [reduce, paused])

  return (
    <BrandSection id='technologies' layout='band' className='min-h-0 bg-muted/40'>
      <div className='container-wide py-14 md:py-20 lg:py-24'>
        <div className='mx-auto max-w-2xl text-center'>
          <MotionReveal>
            <p className={brandType.label}>Technologies</p>
          </MotionReveal>
          <MotionReveal delay={0.05}>
            <h2 className={cn('mt-3', brandType.title)}>
              One stack. One system.
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className={cn('mx-auto mt-4', brandType.lead, 'max-w-md text-center')}>
              Tools chosen for clarity and shipping speed — grouped the way
              production products actually get built.
            </p>
          </MotionReveal>
        </div>

        <div
          className='relative mx-auto mt-12 max-w-5xl md:mt-16'
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Issue 17: horizontal labels above the grid */}
          <nav
            className='mb-6 flex flex-wrap items-center justify-center gap-2'
            aria-label='Technology groups'
          >
            {technologyGroups.map((g, i) => {
              const isActive = i === active
              return (
                <button
                  key={g.id}
                  type='button'
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    'px-3 py-2 text-xs font-medium tracking-wide transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm ring-2 ring-primary/30 ring-offset-2 ring-offset-muted'
                      : 'border border-transparent text-muted-foreground hover:border-border hover:bg-background hover:text-heading'
                  )}
                >
                  {g.label}
                </button>
              )
            })}
          </nav>

          <p className='mb-5 text-center font-mono text-xs tracking-wide text-muted-foreground'>
            {String(active + 1).padStart(2, '0')} · {group.label}
          </p>

          <AnimatePresence mode='wait'>
            <motion.ul
              key={group.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{
                duration: brandMotion.duration,
                ease: brandMotion.ease
              }}
              className='grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4'
            >
              {group.items.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: reduce ? 0 : i * 0.03,
                    ease: brandMotion.ease
                  }}
                  className={cn(
                    'flex min-h-[9.5rem] flex-col items-center justify-center gap-4',
                    'border border-border/70 bg-white px-4 py-7',
                    'shadow-[0_16px_36px_-24px_hsl(215_48%_18%/0.4)]',
                    'transition-colors hover:border-heading/25'
                  )}
                >
                  <span className='grid h-14 w-14 place-items-center sm:h-16 sm:w-16'>
                    <Image
                      src={item.logo}
                      alt=''
                      width={64}
                      height={64}
                      className='!h-14 !w-14 object-contain sm:!h-16 sm:!w-16'
                    />
                  </span>
                  <span className='text-center font-mono text-xs tracking-wide text-heading'>
                    {item.name}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </BrandSection>
  )
}
