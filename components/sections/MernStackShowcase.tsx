'use client'

import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { getTechLogo } from '@/lib/techLogos'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const LAYERS = [
  {
    id: 'mongo',
    letter: 'M',
    name: 'MongoDB',
    role: 'Database',
    line: 'Document data that stays flexible as the product grows.',
    color: '#47A248'
  },
  {
    id: 'express',
    letter: 'E',
    name: 'Express',
    role: 'API layer',
    line: 'Clean routes, auth, and integrations — contracts first.',
    color: '#000000'
  },
  {
    id: 'react',
    letter: 'R',
    name: 'React',
    role: 'Interface',
    line: 'UI that stays maintainable when features keep landing.',
    color: '#61DAFB'
  },
  {
    id: 'node',
    letter: 'N',
    name: 'Node.js',
    role: 'Runtime',
    line: 'One language end-to-end — faster delivery, fewer seams.',
    color: '#339933'
  }
] as const

const EASE = [0.22, 1, 0.36, 1] as const
const N = LAYERS.length

/**
 * In-flow callout (no absolute overflow cut on scroll).
 * Spine aligned to circle centers. Heading: MERN-STACK.
 */
export function MernStackShowcase () {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const current = LAYERS[active]
  const nextLogo = getTechLogo('Next.js')
  const currentLogo = getTechLogo(current.name)

  useEffect(() => {
    if (paused || reduceMotion) return
    const id = window.setInterval(() => {
      setActive(prev => (prev + 1) % N)
    }, 3500)
    return () => window.clearInterval(id)
  }, [paused, reduceMotion])

  const select = (i: number) => {
    setActive(i)
    setPaused(true)
  }

  /** Center callout under active icon: (i+0.5)/N of row width, minus half box */
  const calloutShift = `clamp(0%, calc(${((active + 0.5) / N) * 100}% - 140px), calc(100% - min(280px, 86%)))`

  return (
    <section className='section-anchor overflow-visible border-t border-border/50 surface-page py-14 md:py-20'>
      <div className='container-wide space-y-8 md:space-y-10'>
        <header className='section-header'>
          <SectionDisplayTag tag='MERN-STACK' pattern='brace' />
          <p className='section-lead'>
            MongoDB, Express, React, and Node.js — the spine I use to ship
            full-stack products. Next.js when SEO and performance matter.
          </p>
        </header>

        <div
          className='relative mx-auto w-full max-w-3xl overflow-visible'
          onMouseLeave={() => setPaused(false)}
        >
          {/* Letters */}
          <div className='mb-1 flex justify-between px-1 sm:px-4'>
            {LAYERS.map((layer, i) => (
              <span
                key={`${layer.id}-letter`}
                className='w-14 text-center font-heading text-[11px] font-semibold uppercase tracking-[0.12em] sm:w-16'
                style={{
                  color:
                    active === i ? layer.color : 'hsl(var(--body) / 0.65)'
                }}
              >
                {layer.letter}
              </span>
            ))}
          </div>

          {/* Circles + spine through exact centers */}
          <div
            className='relative z-[1] flex items-center justify-between px-1 sm:px-4'
            role='list'
            aria-label='MERN stack'
          >
            <span
              aria-hidden
              className='pointer-events-none absolute left-[10%] right-[10%] top-1/2 h-px -translate-y-1/2 bg-border/80'
            />

            {LAYERS.map((layer, i) => {
              const logo = getTechLogo(layer.name)
              const isActive = active === i

              return (
                <button
                  key={layer.id}
                  type='button'
                  role='listitem'
                  onMouseEnter={() => select(i)}
                  onFocus={() => select(i)}
                  onClick={() => select(i)}
                  className='relative z-[1] outline-none focus-visible:ring-2 focus-visible:ring-primary/35'
                  aria-pressed={isActive}
                  aria-label={`${layer.name} — ${layer.role}`}
                >
                  <motion.span
                    className='flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 bg-white dark:bg-card sm:h-16 sm:w-16'
                    initial={false}
                    animate={{
                      borderColor: isActive ? layer.color : 'hsl(var(--border))',
                      scale: isActive ? 1.06 : 1,
                      boxShadow: isActive
                        ? `0 0 0 3px ${layer.color}20`
                        : '0 0 0 0px transparent'
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.3,
                      ease: EASE
                    }}
                  >
                    {logo ? (
                      <Image
                        src={`${logo}?v=2`}
                        alt={layer.name}
                        width={40}
                        height={40}
                        className='h-9 w-9 object-contain sm:h-10 sm:w-10'
                        unoptimized
                      />
                    ) : (
                      <span
                        className='font-heading text-lg font-bold'
                        style={{ color: layer.color }}
                      >
                        {layer.letter}
                      </span>
                    )}
                  </motion.span>
                </button>
              )
            })}
          </div>

          {/* In-flow box — full height in layout, no absolute clip on scroll */}
          <div className='relative mt-2 w-full overflow-visible pb-2'>
            <div
              className='relative w-[min(280px,86%)] transition-[margin] duration-500 ease-out'
              style={{ marginLeft: calloutShift }}
            >
              <div
                className='relative z-10 bg-white px-3.5 py-3 text-left shadow-[0_8px_22px_-12px_rgba(15,23,42,0.25)] dark:bg-card'
                style={{
                  borderWidth: 2,
                  borderStyle: 'solid',
                  borderColor: current.color
                }}
              >
                <span
                  aria-hidden
                  className='absolute left-1/2 top-0 z-[1] h-0 w-0 -translate-x-1/2 -translate-y-[calc(100%-2px)] border-x-[7px] border-b-[7px] border-x-transparent border-b-white dark:border-b-card'
                />
                <span
                  aria-hidden
                  className='absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 -translate-y-full border-x-[8px] border-b-[8px] border-x-transparent'
                  style={{ borderBottomColor: current.color }}
                />

                <AnimatePresence mode='wait' initial={false}>
                  <motion.div
                    key={current.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -3 }}
                    transition={{ duration: 0.22, ease: EASE }}
                    className='flex items-start gap-2.5'
                  >
                    {currentLogo ? (
                      <span className='mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md'>
                        <Image
                          src={`${currentLogo}?v=2`}
                          alt=''
                          width={32}
                          height={32}
                          className='h-8 w-8 object-contain'
                          unoptimized
                        />
                      </span>
                    ) : null}
                    <div className='min-w-0'>
                      <p
                        className='font-heading text-[10px] font-semibold uppercase tracking-[0.12em]'
                        style={{ color: current.color }}
                      >
                        {current.letter} · {current.role}
                      </p>
                      <h3 className='mt-0.5 font-heading text-[15px] font-semibold uppercase tracking-[0.04em] text-heading sm:text-base'>
                        {current.name}
                      </h3>
                      <p className='mt-1 text-[13px] leading-snug text-body/80'>
                        {current.line}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-auto flex max-w-3xl items-center justify-center gap-2.5 text-center'>
          {nextLogo ? (
            <Image
              src={nextLogo}
              alt='Next.js'
              width={20}
              height={20}
              className='h-5 w-5 object-contain opacity-80'
              unoptimized
            />
          ) : null}
          <p className='text-[13px] text-body/70'>
            <span className='font-heading font-semibold uppercase tracking-[0.08em] text-heading/80'>
              Next.js
            </span>
            {' — '}
            when the product needs App Router, SEO, and speed.
          </p>
        </div>
      </div>
    </section>
  )
}
