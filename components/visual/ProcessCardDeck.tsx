'use client'

import { brandType } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

export type ProcessPhase = {
  step: string
  description: string
  details: string[]
}

const AUTO_MS = 4200
const LIFT_MS = 420

/**
 * Tall rounded process deck — front card lifts behind the stack.
 */
export function ProcessCardDeck ({
  phases,
  active,
  onActiveChange,
  paused
}: {
  phases: ProcessPhase[]
  active: number
  onActiveChange: (index: number) => void
  paused?: boolean
}) {
  const reduce = useReducedMotion()
  const n = phases.length
  const prevActive = useRef(active)
  const [liftingKey, setLiftingKey] = useState<string | null>(null)

  useEffect(() => {
    if (paused || reduce || n < 2) return
    const id = window.setInterval(() => {
      onActiveChange((active + 1) % n)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [active, n, onActiveChange, paused, reduce])

  useEffect(() => {
    if (prevActive.current === active) return
    if (reduce) {
      prevActive.current = active
      return
    }
    const leaving = phases[prevActive.current]?.step ?? null
    prevActive.current = active
    if (!leaving) return
    setLiftingKey(leaving)
    const t = window.setTimeout(() => setLiftingKey(null), LIFT_MS)
    return () => window.clearTimeout(t)
  }, [active, phases, reduce])

  return (
    <div className='relative mx-auto h-[min(78vh,680px)] w-full max-w-[460px]'>
      <div
        className='pointer-events-none absolute inset-x-6 bottom-2 h-24 rounded-full bg-heading/10 blur-3xl'
        aria-hidden
      />

      {phases.map((phase, i) => {
        const offset = (i - active + n) % n
        const isFront = offset === 0
        const isLifting = liftingKey === phase.step
        if (offset > 3 && !isLifting) return null

        const stackY = 28 + offset * 28
        const stackX = offset * 20
        const stackScale = 1 - offset * 0.035
        const stackRotate = -offset * 2.2

        return (
          <motion.article
            key={phase.step}
            className={cn(
              'absolute inset-x-0 top-0 flex flex-col overflow-hidden',
              'h-[76%] min-h-[400px]',
              'rounded-[1.75rem] bg-background',
              'border border-border/70',
              'shadow-[0_28px_70px_-30px_hsl(215_48%_18%/0.48),inset_0_1px_0_0_hsl(0_0%_100%/0.8)]',
              isFront &&
                !isLifting &&
                'shadow-[0_36px_80px_-28px_hsl(215_48%_18%/0.55),inset_0_1px_0_0_hsl(0_0%_100%/0.9)]'
            )}
            style={{
              zIndex: isLifting ? n + 8 : n - offset,
              transformOrigin: '50% 100%'
            }}
            initial={false}
            animate={
              isLifting
                ? {
                    y: -72,
                    x: 48,
                    scale: 1.03,
                    rotate: 10,
                    opacity: 0.94
                  }
                : {
                    y: stackY,
                    x: stackX,
                    scale: stackScale,
                    rotate: reduce ? 0 : stackRotate,
                    opacity: 1
                  }
            }
            transition={
              reduce
                ? { duration: 0 }
                : isLifting
                  ? { duration: 0.38, ease: [0.22, 1, 0.36, 1] }
                  : {
                      type: 'spring',
                      stiffness: 300,
                      damping: 26,
                      mass: 0.8
                    }
            }
            aria-hidden={!isFront}
          >
            {/* Header band */}
            <div className='relative flex items-center justify-between px-6 pb-4 pt-6 md:px-8 md:pt-7'>
              <div>
                <p className={cn(brandType.mono, 'text-muted-foreground')}>
                  Phase {String(i + 1).padStart(2, '0')}
                </p>
                <p className='mt-1 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-heading/45'>
                  How it works
                </p>
              </div>
              <div
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-2xl border text-sm font-display font-semibold transition-colors',
                  isFront && !isLifting
                    ? 'border-highlight/40 bg-highlight/10 text-highlight'
                    : 'border-border bg-muted/60 text-muted-foreground'
                )}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>

            <div className='mx-6 h-px bg-border/70 md:mx-8' />

            {/* Body */}
            <div className='flex flex-1 flex-col px-6 py-6 md:px-8 md:py-7'>
              <h3 className='font-display text-2xl font-semibold leading-tight tracking-tight text-heading md:text-[1.75rem]'>
                {phase.step}
              </h3>
              <p className='mt-3 max-w-[32ch] text-[0.9375rem] leading-relaxed text-body'>
                {phase.description}
              </p>

              <ol className='mt-8 flex flex-1 flex-col gap-4'>
                {phase.details.map((line, di) => (
                  <li
                    key={line}
                    className='flex gap-3.5 rounded-2xl border border-border/60 bg-muted/35 px-4 py-3.5'
                  >
                    <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background font-mono text-[0.6875rem] font-medium text-heading shadow-sm'>
                      {di + 1}
                    </span>
                    <span className='pt-0.5 text-sm leading-snug text-heading/85'>{line}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Footer accent */}
            <div className='mt-auto flex items-center justify-between border-t border-border/60 px-6 py-4 md:px-8'>
              <span className='font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground'>
                Delivery path
              </span>
              <span
                className={cn(
                  'h-1.5 w-8 rounded-full transition-colors',
                  isFront && !isLifting ? 'bg-highlight' : 'bg-border'
                )}
              />
            </div>
          </motion.article>
        )
      })}
    </div>
  )
}

export function useProcessDeck (count: number) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % count) + count) % count)
      setPaused(true)
      window.setTimeout(() => setPaused(false), AUTO_MS * 1.5)
    },
    [count]
  )

  return { active, setActive, goTo, paused, setPaused }
}
