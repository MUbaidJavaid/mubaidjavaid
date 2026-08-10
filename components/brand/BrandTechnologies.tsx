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
 * Technologies — large original logos + broken right rail (segment gaps).
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
          className='relative mt-12 md:mt-16'
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <p
            className='pointer-events-none absolute -left-1 top-1/2 hidden -translate-y-1/2 font-mono text-[0.625rem] uppercase tracking-[0.35em] text-muted-foreground [writing-mode:vertical-rl] rotate-180 lg:left-0 lg:block'
            aria-hidden
          >
            Skills
          </p>

          <div className='relative mx-auto grid max-w-5xl grid-cols-[1fr_auto] items-center gap-5 md:gap-8 lg:pl-10'>
            <div className='min-w-0'>
              <p className='mb-5 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground'>
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
                      {/* Equal footprint — original brand marks, large */}
                      <span className='grid h-14 w-14 place-items-center sm:h-16 sm:w-16'>
                        <Image
                          src={item.logo}
                          alt={item.name}
                          width={64}
                          height={64}
                          className='!h-14 !w-14 object-contain sm:!h-16 sm:!w-16'
                        />
                      </span>
                      <span className='text-center font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-heading'>
                        {item.name}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>

            {/* Broken vertical rail — segments with gaps, not one continuous line */}
            <nav
              className='flex flex-col items-center justify-center gap-4 py-4 md:gap-5'
              aria-label='Technology groups'
            >
              {technologyGroups.map((g, i) => {
                const isActive = i === active
                return (
                  <button
                    key={g.id}
                    type='button'
                    aria-label={g.label}
                    aria-current={isActive ? 'true' : undefined}
                    title={g.label}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className='group flex w-8 items-center justify-center'
                  >
                    <span
                      className={cn(
                        'block h-11 w-[2px] rounded-full transition-all duration-300 md:h-14',
                        isActive
                          ? 'w-[3px] scale-y-110 bg-[hsl(211_48%_42%)]'
                          : 'bg-heading/18 group-hover:bg-heading/40'
                      )}
                    />
                  </button>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </BrandSection>
  )
}
