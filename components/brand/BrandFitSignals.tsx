'use client'

import { BrandSection } from '@/components/brand/system/BrandSection'
import { fitSignals } from '@/data/site'
import { brandMotion } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  Boxes,
  Compass,
  GitBranch,
  ShieldCheck,
  type LucideIcon
} from 'lucide-react'
import Link from 'next/link'

const phases: Array<{ label: string; detail: string; Icon: LucideIcon }> = [
  { label: 'Scope', detail: 'Decide the right product', Icon: Compass },
  { label: 'Build', detail: 'Engineer the full system', Icon: Boxes },
  { label: 'Operate', detail: 'Ship for real teams', Icon: ShieldCheck },
  { label: 'Extend', detail: 'Hand over without friction', Icon: GitBranch }
]

/**
 * Delivery blueprint — four outcomes connected as one production path.
 */
export function BrandFitSignals () {
  const reduce = useReducedMotion()

  return (
    <BrandSection
      id='fit'
      layout='band'
      className='relative isolate min-h-0 overflow-hidden bg-[hsl(214_28%_97%)]'
    >
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.32]'
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(hsl(215 24% 70% / 0.14) 1px, transparent 1px), linear-gradient(90deg, hsl(215 24% 70% / 0.14) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'linear-gradient(to bottom, transparent, black 24%, black 78%, transparent)'
        }}
      />
      <p
        className='pointer-events-none absolute -right-[0.03em] top-[0.05em] select-none font-display text-[clamp(6rem,18vw,15rem)] font-bold leading-none tracking-[-0.08em] text-heading/[0.025]'
        aria-hidden
      >
        SHIP
      </p>

      <div className='relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-12 pt-16 sm:px-8 md:px-10 md:pb-16 md:pt-20 lg:px-12 lg:pb-20 lg:pt-24'>
        <div className='grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-end'>
          <div>
            <p className='font-mono text-[0.6875rem] uppercase tracking-[0.26em] text-[hsl(211_48%_42%)]'>
              What you get delivered · 04 phases
            </p>
            <h2 className='mt-5 font-display text-[clamp(2.7rem,5.5vw,5.2rem)] font-bold leading-[0.93] tracking-[-0.05em] text-heading'>
              Clear scope.
              <span className='block text-[hsl(211_48%_42%)]'>
                Production delivery.
              </span>
            </h2>
          </div>

          <div className='lg:pb-1'>
            <p className='max-w-[45ch] text-sm leading-relaxed text-body md:text-base'>
              One engineering path from product decisions to a maintainable
              release—architecture, interface, backend, launch, and handover
              stay coherent.
            </p>
            <div className='mt-7 flex items-center gap-3' aria-hidden>
              <span className='font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-heading/[0.35]'>
                Scope
              </span>
              <span className='relative h-px flex-1 bg-heading/[0.15]'>
                <motion.span
                  className='absolute inset-y-0 left-0 w-full origin-left bg-[hsl(211_48%_42%)]'
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: brandMotion.ease }}
                />
              </span>
              <span className='font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-[hsl(211_48%_42%)]'>
                Handover
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='relative z-10 border-y border-heading/10 bg-background/[0.55]'>
        <ol className='relative mx-auto grid w-full max-w-[1280px] md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-heading/10'>
          <div
            className='pointer-events-none absolute left-0 right-0 top-0 hidden h-px bg-[hsl(211_48%_42%)] lg:block'
            aria-hidden
          />
          {fitSignals.map((item, i) => (
            <motion.li
              key={item.title}
              className={cn(
                'group relative min-h-[310px] overflow-hidden px-6 py-8 transition-colors duration-300 hover:bg-white/[0.65] sm:px-8 md:min-h-[340px] md:px-10 md:py-10 lg:px-7',
                i > 0 && 'border-t border-heading/10 md:border-t-0',
                i >= 2 && 'md:border-t lg:border-t-0',
                i % 2 === 1 &&
                  'md:border-l md:border-heading/10 lg:border-l-0'
              )}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{
                duration: brandMotion.duration,
                delay: reduce ? 0 : 0.05 + i * brandMotion.stagger,
                ease: brandMotion.ease
              }}
            >
              <span
                className='pointer-events-none absolute -right-[0.04em] top-[0.04em] font-display text-[7rem] font-bold leading-none tracking-[-0.08em] text-heading/[0.035]'
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className='relative flex h-full flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span className='flex h-11 w-11 items-center justify-center rounded-full border border-heading/[0.15] text-[hsl(211_48%_42%)] transition-all duration-300 group-hover:border-[hsl(211_48%_42%/0.4)] group-hover:bg-[hsl(211_48%_42%)] group-hover:text-white'>
                    {(() => {
                      const Icon = phases[i]?.Icon ?? Compass
                      return <Icon size={17} strokeWidth={1.55} aria-hidden />
                    })()}
                  </span>
                  <span className='font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-heading/[0.35]'>
                    {phases[i]?.label}
                  </span>
                </div>

                <div className='mt-auto pt-10'>
                  <p className='font-mono text-[0.5rem] uppercase tracking-[0.14em] text-[hsl(211_48%_42%)]'>
                    {phases[i]?.detail}
                  </p>
                  <h3 className='mt-3 font-display text-xl font-semibold leading-tight tracking-tight text-heading'>
                    {item.title}
                  </h3>
                  <p className='mt-4 text-sm leading-relaxed text-body'>
                    {item.body}
                  </p>
                </div>

                <span
                  className='absolute -bottom-8 left-0 h-0.5 w-full origin-left scale-x-0 bg-[hsl(211_48%_42%)] transition-transform duration-500 group-hover:scale-x-100'
                  aria-hidden
                />
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      <div className='relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-10 lg:px-12'>
        <p className='font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-heading/[0.35]'>
          One owner · one decision path · one maintainable release
        </p>
        <Link
          href='/projects'
          className='group inline-flex items-center gap-2 text-sm font-semibold text-heading'
        >
          Review delivered products
          <ArrowUpRight
            size={15}
            className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
            aria-hidden
          />
        </Link>
      </div>
    </BrandSection>
  )
}
