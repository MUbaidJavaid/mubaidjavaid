'use client'

import { brandMotion } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

type ProofStat = {
  value: string
  numeric?: number
  suffix?: string
  label: string
  shortLabel: string
  href: string
}

function AnimatedValue ({
  value,
  numeric,
  suffix = ''
}: {
  value: string
  numeric?: number
  suffix?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })
  const [n, setN] = useState(reduce ? (numeric ?? 0) : 0)

  useEffect(() => {
    if (numeric === undefined || !inView) return
    if (reduce) {
      setN(numeric)
      return
    }
    const start = performance.now()
    const dur = 1000
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round(numeric * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, numeric, reduce])

  if (numeric === undefined) {
    return (
      <span ref={ref} className='font-display text-5xl font-bold tabular-nums leading-none md:text-6xl'>
        {value}
      </span>
    )
  }

  return (
    <span ref={ref} className='font-display text-5xl font-bold tabular-nums leading-none md:text-6xl'>
      {String(reduce ? numeric : n).padStart(2, '0')}
      {suffix}
    </span>
  )
}

/** Three inspectable signals presented as a dark verification instrument. */
export function ProofSignalStage ({
  stats,
  className
}: {
  stats: ProofStat[]
  className?: string
}) {
  const reduce = useReducedMotion()
  const root = useRef<HTMLDivElement>(null)
  const inView = useInView(root, { once: true, margin: '-10%' })

  const signals = [
    {
      id: '01',
      title: 'Shipped products',
      body: 'Case studies with architecture, workflow, and outcomes.',
      href: '/projects'
    },
    {
      id: '02',
      title: 'Published writing',
      body: 'Notes you can read before the first call.',
      href: '/blog'
    },
    {
      id: '03',
      title: 'Fast reply',
      body: 'Typical first response within a business day.',
      href: '/contact'
    }
  ]

  return (
    <div
      ref={root}
      className={cn('relative z-10 border-t border-white/10', className)}
      aria-label='Proof signal index'
    >
      <div className='mx-auto w-full max-w-[1280px] px-6 pb-16 pt-8 sm:px-8 md:px-10 md:pb-20 md:pt-10 lg:px-12 lg:pb-24'>
        <div className='flex items-center gap-4 pb-5'>
          <p className='font-mono text-[0.625rem] uppercase tracking-[0.2em] text-white/[0.38]'>
            Live proof index
          </p>
          <span className='h-px flex-1 bg-white/10' aria-hidden />
          <span className='font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-[hsl(211_70%_68%)]'>
            03 signals · online
          </span>
        </div>

        <div className='grid border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-white/10'>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.href}
              className='relative border-b border-white/10 last:border-b-0 md:border-b-0'
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={inView || reduce ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: brandMotion.duration,
                delay: reduce ? 0 : i * 0.08,
                ease: brandMotion.ease
              }}
            >
              <Link
                href={stat.href}
                className='group relative flex h-full min-h-[280px] flex-col overflow-hidden px-1 py-8 sm:px-4 md:min-h-[340px] md:px-8 md:py-10'
              >
                <span
                  className='pointer-events-none absolute -right-[0.04em] -top-[0.16em] font-display text-[8rem] font-bold leading-none tracking-[-0.08em] text-white/[0.025]'
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className='relative flex items-center justify-between gap-4'>
                  <p className='font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-[hsl(211_70%_68%)]'>
                    Signal {String(i + 1).padStart(2, '0')}
                  </p>
                  <span className='inline-flex items-center gap-2 font-mono text-[0.5rem] uppercase tracking-[0.13em] text-white/[0.3]'>
                    <span className='h-1 w-1 rounded-full bg-[hsl(152_58%_55%)]' />
                    Verified
                  </span>
                </div>

                <div className='relative mt-10 text-white transition-colors group-hover:text-[hsl(211_65%_72%)]'>
                <AnimatedValue
                  value={stat.value}
                  numeric={stat.numeric}
                  suffix={stat.suffix}
                />
                </div>

                <div className='relative mt-auto pt-9'>
                  <p className='font-display text-xl font-semibold tracking-tight text-white md:text-2xl'>
                  {stat.label}
                  </p>
                  <p className='mt-3 max-w-[28ch] text-sm leading-relaxed text-white/[0.48]'>
                    {signals[i]?.body}
                  </p>
                  <span className='mt-6 inline-flex items-center gap-2 font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-white/[0.42] transition-colors group-hover:text-white'>
                    Open {stat.shortLabel}
                    <ArrowUpRight
                      size={13}
                      className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                      aria-hidden
                    />
                  </span>
                </div>

                <motion.span
                  className='absolute bottom-0 left-0 h-0.5 w-full origin-left bg-[hsl(211_65%_62%)]'
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={inView || reduce ? { scaleX: 1 } : undefined}
                  transition={{
                    duration: 0.8,
                    delay: reduce ? 0 : 0.25 + i * 0.12,
                    ease: brandMotion.ease
                  }}
                  aria-hidden
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
