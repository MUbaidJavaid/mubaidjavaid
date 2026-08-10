'use client'

import { BrandSection } from '@/components/brand/system/BrandSection'
import { brandMotion } from '@/lib/brand-system'
import { whyPartnerWithMe, workPhilosophy } from '@/data/site'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'

const BELIEFS = [
  {
    word: 'Clear',
    rest: 'scope',
    note: 'Decide what ships first—and what waits.'
  },
  {
    word: 'Honest',
    rest: 'updates',
    note: 'Trade-offs stay visible while work moves.'
  },
  {
    word: 'Maintainable',
    rest: 'code',
    note: 'Priorities can shift without rewriting the product.'
  }
] as const

/**
 * Philosophy — editorial manifesto spread.
 * Typography carries the idea; principles read like a living table of contents.
 * Intentionally not a rounded dark card — different language from Experience / Contact.
 */
export function BrandPhilosophy () {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)

  return (
    <BrandSection
      id='philosophy'
      layout='band'
      className='relative isolate min-h-0 overflow-hidden bg-[hsl(214_28%_98%)]'
    >
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.35]'
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(hsl(215 20% 70% / 0.18) 1px, transparent 1px), linear-gradient(90deg, hsl(215 20% 70% / 0.18) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 70% 40%, black 20%, transparent 75%)'
        }}
      />

      <div
        className='pointer-events-none absolute -right-24 top-1/4 h-[42%] w-[38%] rounded-full bg-[hsl(211_70%_58%/0.08)] blur-3xl'
        aria-hidden
      />

      <p
        className='pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 font-mono text-[0.625rem] uppercase tracking-[0.4em] text-heading/20 [writing-mode:vertical-rl] rotate-180 lg:left-6 lg:block'
        aria-hidden
      >
        operating beliefs
      </p>

      <div className='relative z-10 mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 md:px-10 md:py-20 lg:px-12 lg:py-24'>
        <div className='flex items-end justify-between gap-6'>
          <div>
            <p className='font-mono text-[0.6875rem] uppercase tracking-[0.26em] text-[hsl(211_48%_42%)]'>
              Engineering philosophy
            </p>
            <p className='mt-3 max-w-[34ch] text-sm text-body'>
              {workPhilosophy.label} — how decisions stay coherent when the brief
              changes.
            </p>
          </div>
          <p className='hidden font-mono text-[0.625rem] uppercase tracking-[0.2em] text-heading/30 sm:block'>
            Ch. 03
          </p>
        </div>

        <div className='mt-12 md:mt-16'>
          <p className='sr-only'>{workPhilosophy.statement}</p>
          <div className='space-y-2 md:space-y-3' aria-hidden>
            {BELIEFS.map((line, i) => (
              <motion.button
                key={line.word}
                type='button'
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  'group flex w-full flex-wrap items-baseline gap-x-3 gap-y-1 text-left transition-opacity duration-300',
                  active === i ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                )}
                initial={reduce ? false : { y: 18 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{
                  duration: brandMotion.durationSlow,
                  delay: reduce ? 0 : i * 0.08,
                  ease: brandMotion.ease
                }}
              >
                <span className='font-mono text-[0.625rem] uppercase tracking-[0.22em] text-heading/35 md:w-10'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className='font-display text-[clamp(2.4rem,7vw,5.75rem)] font-bold leading-[0.92] tracking-[-0.045em] text-heading'>
                  <span
                    className={cn(
                      'transition-colors duration-300',
                      active === i
                        ? 'text-[hsl(211_48%_42%)]'
                        : 'text-heading'
                    )}
                  >
                    {line.word}
                  </span>{' '}
                  <span>{line.rest}</span>
                  <span className='text-heading/25'>
                    {i < BELIEFS.length - 1 ? ',' : '.'}
                  </span>
                </span>
              </motion.button>
            ))}
          </div>

          <motion.p
            key={active}
            className='mt-6 max-w-[42ch] text-sm leading-relaxed text-body md:mt-8 md:text-base'
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: brandMotion.ease }}
          >
            {BELIEFS[active].note}
          </motion.p>
        </div>

        <div className='mt-14 border-t border-heading/10 pt-8 md:mt-20 md:pt-10'>
          <div className='mb-2 flex items-center justify-between gap-4'>
            <p className='font-mono text-[0.625rem] uppercase tracking-[0.2em] text-heading/35'>
              How products get built here
            </p>
            <div className='h-px flex-1 bg-heading/10' aria-hidden />
            <p className='font-mono text-[0.625rem] uppercase tracking-[0.16em] text-heading/30'>
              {String(whyPartnerWithMe.length).padStart(2, '0')} laws
            </p>
          </div>

          <ul className='divide-y divide-heading/10'>
            {whyPartnerWithMe.map((item, i) => (
              <PrincipleRow
                key={item.title}
                index={i}
                title={item.title}
                desc={item.desc}
                reduce={reduce}
              />
            ))}
          </ul>
        </div>
      </div>
    </BrandSection>
  )
}

function PrincipleRow ({
  index,
  title,
  desc,
  reduce
}: {
  index: number
  title: string
  desc: string
  reduce: boolean | null
}) {
  const [open, setOpen] = useState(false)

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6%' }}
      transition={{
        duration: brandMotion.duration,
        delay: reduce ? 0 : 0.05 + index * 0.06,
        ease: brandMotion.ease
      }}
    >
      <button
        type='button'
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className='group grid w-full grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-4 gap-y-2 py-5 text-left md:grid-cols-[4.5rem_minmax(12rem,18rem)_minmax(0,1fr)] md:gap-x-8 md:py-6'
        aria-expanded={open}
      >
        <span className='font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[hsl(211_48%_42%)]'>
          {String(index + 1).padStart(2, '0')}
        </span>

        <span className='relative font-display text-lg font-semibold tracking-tight text-heading md:text-xl'>
          {title}
          <span
            className={cn(
              'absolute -bottom-1 left-0 h-px origin-left bg-[hsl(211_48%_42%)] transition-transform duration-500',
              open ? 'w-full scale-x-100' : 'w-full scale-x-0'
            )}
            aria-hidden
          />
        </span>

        <span
          className={cn(
            'col-span-2 max-w-[52ch] text-sm leading-relaxed text-body transition-opacity duration-300 md:col-span-1',
            open ? 'opacity-100' : 'opacity-55 group-hover:opacity-100'
          )}
        >
          {desc}
        </span>
      </button>
    </motion.li>
  )
}
