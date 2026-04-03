'use client'

import { site } from '@/data/site'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const SPLASH_MS = 1400
const FADE_MS = 480
const PROGRESS_DURATION_MS = 1150

/**
 * Branded first-load overlay: progress bar and subtle fade-out.
 * No card skeletons here (those appear only in project sections while grids load).
 */
export function InitialLoadSplash () {
  const [phase, setPhase] = useState<'on' | 'off'>('on')
  const [progress, setProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReducedMotion(reduced)

    if (reduced) {
      setProgress(100)
      const t = window.setTimeout(() => setPhase('off'), 700)
      return () => window.clearTimeout(t)
    }

    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now
      const elapsed = now - startRef.current
      const next = Math.min(100, (elapsed / PROGRESS_DURATION_MS) * 100)
      setProgress(next)
      if (next < 100) {
        rafRef.current = requestAnimationFrame(tick)
      }
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
  }, [])

  return (
    <AnimatePresence>
      {phase === 'on' ? (
        <motion.div
          key='initial-splash'
          className='fixed inset-0 z-[250] flex flex-col overflow-hidden bg-[#FAFBFC] dark:bg-slate-950'
          role='status'
          aria-live='polite'
          aria-label='Loading website'
          aria-busy='true'
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reducedMotion ? 0.12 : FADE_MS / 1000,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <div className='pointer-events-none absolute inset-0 opacity-[0.5]' aria-hidden>
            <div className='absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,hsl(var(--primary)/0.11),transparent_58%)]' />
            <div className='absolute bottom-0 left-1/2 h-[42vh] w-[120%] -translate-x-1/2 rounded-[100%] bg-gradient-to-t from-slate-200/25 to-transparent blur-3xl' />
          </div>

          <div className='relative flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-12'>
            <Image
              src='/mubaidjavaid.png'
              alt={site.name}
              width={64}
              height={64}
              className='h-16 w-16 object-cover shadow-[0_22px_50px_-18px_hsl(var(--primary)/0.45)]'
              priority
            />
            <p className='mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/85'>
              Full Stack Developer
            </p>
            <p className='mt-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/90'>
              {site.name}
            </p>
            <h1 className='mt-4 max-w-lg text-center font-heading text-[1.65rem] font-semibold tracking-tight text-heading sm:text-[1.85rem]'>
              Crafting fast, thoughtful web experiences
            </h1>
            <p className='mt-3 max-w-md text-center text-base leading-relaxed text-body/80'>
              Almost there: polishing layout, assets, and interactions for a
              smooth first impression.
            </p>

            <div className='mt-14 flex w-full max-w-[min(100%,320px)] flex-col gap-2'>
              <div className='flex justify-between text-[10px] font-medium uppercase tracking-[0.14em] text-body/50'>
                <span>Loading</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className='h-1.5 overflow-hidden rounded-full bg-slate-200/95 dark:bg-slate-800'>
                <motion.div
                  className='h-full rounded-full bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(202_55%_42%))]'
                  style={{ width: `${progress}%` }}
                  transition={{ type: 'tween', ease: 'linear', duration: 0.08 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
