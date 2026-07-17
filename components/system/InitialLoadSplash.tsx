'use client'

import { site } from '@/data/site'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const PRIMARY = '#246b96'
const SPLASH_MS = 2000
const PROGRESS_MS = 1650
const EXIT_S = 0.48
const EASE = [0.22, 1, 0.36, 1] as const

const GLYPHS = [
  { t: '</>', x: '10%', y: '20%' },
  { t: '{ }', x: '84%', y: '24%' },
  { t: '>_', x: '14%', y: '74%' },
  { t: '[ ]', x: '80%', y: '70%' }
] as const

/**
 * Polished brand splash — one focal mark, ring progress, quiet exit.
 */
export function InitialLoadSplash () {
  const [phase, setPhase] = useState<'on' | 'off'>('on')
  const [progress, setProgress] = useState(0)
  const reduceMotion = useReducedMotion()
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (phase !== 'on') return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [phase])

  useEffect(() => {
    if (reduceMotion) {
      setProgress(100)
      const t = window.setTimeout(() => setPhase('off'), 420)
      return () => window.clearTimeout(t)
    }

    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now
      const t = Math.min(1, (now - startRef.current) / PROGRESS_MS)
      const eased = 1 - (1 - t) ** 2.6
      setProgress(Math.min(100, eased * 100))
      if (t < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    const done = window.setTimeout(() => {
      setProgress(100)
      setPhase('off')
    }, SPLASH_MS)

    return () => {
      window.clearTimeout(done)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [reduceMotion])

  const ringR = 58
  const ringC = 2 * Math.PI * ringR
  const dashOffset = ringC * (1 - progress / 100)
  const pct = Math.round(progress)

  return (
    <AnimatePresence mode='wait'>
      {phase === 'on' ? (
        <motion.div
          key='splash'
          className='fixed inset-0 z-[250] flex flex-col overflow-hidden'
          role='status'
          aria-live='polite'
          aria-label='Loading website'
          aria-busy='true'
          initial={{ opacity: 1 }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: -24,
                  transition: { duration: EXIT_S, ease: EASE }
                }
          }
        >
          {/* Base */}
          <div
            className='absolute inset-0 bg-[#F8FAFC] dark:bg-[#070c14]'
            aria-hidden
          />
          <div
            className='absolute inset-0'
            aria-hidden
            style={{
              background: `
                radial-gradient(ellipse 90% 55% at 50% -5%, ${PRIMARY}1f, transparent 58%),
                radial-gradient(ellipse 45% 40% at 95% 90%, hsl(188 50% 38% / 0.1), transparent 55%)
              `
            }}
          />

          {/* Quiet glyphs */}
          {!reduceMotion &&
            GLYPHS.map((g, i) => (
              <motion.span
                key={g.t}
                className='pointer-events-none absolute select-none font-mono text-[13px] text-primary/20 dark:text-primary/15'
                style={{ left: g.x, top: g.y }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
              >
                {g.t}
              </motion.span>
            ))}

          {/* Stage */}
          <div className='relative z-10 flex flex-1 flex-col items-center justify-center px-6'>
            {/* Mark + ring */}
            <motion.div
              className='relative flex h-[148px] w-[148px] items-center justify-center sm:h-[164px] sm:w-[164px]'
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <svg
                className='absolute inset-0 h-full w-full -rotate-90'
                viewBox='0 0 148 148'
                aria-hidden
              >
                <circle
                  cx='74'
                  cy='74'
                  r={ringR}
                  fill='none'
                  strokeWidth='1.5'
                  className='stroke-border/50'
                />
                <circle
                  cx='74'
                  cy='74'
                  r={ringR}
                  fill='none'
                  stroke={PRIMARY}
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeDasharray={ringC}
                  strokeDashoffset={dashOffset}
                  style={{ transition: 'stroke-dashoffset 80ms linear' }}
                />
              </svg>

              <div className='relative z-[1] flex h-[76px] w-[76px] flex-col items-center justify-center bg-[linear-gradient(145deg,#246b96,#1a5478)] text-white shadow-[0_18px_36px_-14px_rgba(36,107,150,0.55)] ring-1 ring-white/25 sm:h-[84px] sm:w-[84px]'>
                <span className='font-mono text-[22px] font-bold leading-none tracking-tight sm:text-[24px]'>
                  {'>_'}
                  {!reduceMotion && (
                    <motion.span
                      className='ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[1px] bg-white/90 align-middle'
                      animate={{ opacity: [1, 0.15, 1] }}
                      transition={{
                        duration: 1.05,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                      aria-hidden
                    />
                  )}
                </span>
              </div>
            </motion.div>

            {/* Percent — tied to the ring */}
            <motion.p
              className='mt-5 font-mono text-[11px] tabular-nums tracking-[0.2em] text-heading/55'
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.35 }}
            >
              {pct.toString().padStart(2, '0')}%
            </motion.p>

            {/* Wordmark */}
            <motion.p
              className='mt-6 font-mono text-[14px] font-semibold tracking-tight text-heading sm:text-[15px]'
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.4, ease: EASE }}
            >
              <span className='text-primary'>{'<'}</span>
              UBAID.dev
              <span className='text-primary'>{' />'}</span>
            </motion.p>

            <motion.p
              className='mt-2.5 font-heading text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/75'
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.4, ease: EASE }}
            >
              Full-Stack Developer
            </motion.p>

            {/* Single thin status line */}
            <motion.div
              className='mt-9 flex w-full max-w-[220px] flex-col gap-2'
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.35 }}
            >
              <div className='h-px overflow-hidden bg-border/60 dark:bg-border/35'>
                <div
                  className='h-full'
                  style={{
                    width: `${progress}%`,
                    backgroundColor: PRIMARY,
                    transition: 'width 80ms linear'
                  }}
                />
              </div>
              <p className='text-center font-mono text-[10px] tracking-[0.14em] text-body/40'>
                {pct < 40
                  ? 'layout'
                  : pct < 75
                    ? 'assets'
                    : pct < 98
                      ? 'polish'
                      : 'ready'}
              </p>
            </motion.div>
          </div>

          <p className='relative z-10 pb-7 text-center font-mono text-[9px] tracking-[0.2em] text-body/35'>
            {site.name.toUpperCase()}
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
