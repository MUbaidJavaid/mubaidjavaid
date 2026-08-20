'use client'

import { brandMotion, brandType } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

/** Writing stage — article desk. */
export function WriteStageVisual ({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const root = useRef<HTMLDivElement>(null)
  const inView = useInView(root, { once: true, margin: '-8%' })

  const lines = [
    { w: '92%', delay: 0 },
    { w: '78%', delay: 0.05 },
    { w: '86%', delay: 0.1 },
    { w: '64%', delay: 0.15 },
    { w: '88%', delay: 0.2 },
    { w: '71%', delay: 0.25 }
  ]

  return (
    <div
      ref={root}
      className={cn('relative flex h-full min-h-[320px] flex-col justify-center p-6 md:p-8 lg:p-10', className)}
    >
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.08]'
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(180deg, black, transparent 90%)'
        }}
      />

      <motion.div
        className='relative z-10 w-full max-w-lg'
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={inView || reduce ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: brandMotion.duration, ease: brandMotion.ease }}
      >
        <p className={cn(brandType.mono, 'text-current/50')}>Workbench notes</p>
        <h3 className='mt-3 font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl'>
          Writing that explains the build.
        </h3>
        <p className='mt-3 max-w-[36ch] text-sm leading-relaxed text-current/70'>
          Architecture decisions, delivery notes, and patterns from shipped products.
        </p>

        <div className='mt-8 border border-current/15 bg-current/[0.04] p-5 md:p-6'>
          <div className='mb-5 flex items-center justify-between'>
            <span className='font-mono text-[0.625rem] uppercase tracking-[0.14em] text-current/45'>
              Draft · Article
            </span>
            <span className='h-1.5 w-1.5 rounded-full bg-current/40' />
          </div>
          <div className='space-y-3'>
            {lines.map((line, i) => (
              <motion.div
                key={i}
                className='h-2 rounded-[1px] bg-current/20'
                style={{ width: line.w }}
                initial={reduce ? false : { scaleX: 0, originX: 0 }}
                animate={inView || reduce ? { scaleX: 1 } : undefined}
                transition={{
                  duration: 0.55,
                  delay: reduce ? 0 : 0.2 + line.delay,
                  ease: brandMotion.ease
                }}
              />
            ))}
          </div>
          <div className='mt-6 flex items-center justify-between border-t border-current/10 pt-4'>
            <span className='font-mono text-[0.625rem] text-current/45'>Read time · 6–8 min</span>
            <span className='text-xs font-medium text-current/80'>Open archive →</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/** Contact stage — next-step path. */
export function ConnectStageVisual ({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const root = useRef<HTMLDivElement>(null)
  const inView = useInView(root, { once: true, margin: '-8%' })

  const steps = [
    { id: '01', title: 'Share context', body: 'Goals, timeline, and constraints.' },
    { id: '02', title: 'Scope together', body: 'What ships first — and what waits.' },
    { id: '03', title: 'Start building', body: 'Clear milestones from day one.' }
  ]

  return (
    <div
      ref={root}
      className={cn('relative flex h-full min-h-[300px] flex-col justify-center p-6 md:p-8 lg:p-10', className)}
    >
      <div className='mb-6'>
        <p className={cn(brandType.mono, 'text-current/55')}>Next step</p>
        <p className='mt-1 text-sm font-medium text-current/80'>
          A short path from message to kickoff
        </p>
      </div>

      <div className='space-y-0'>
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            className='border-t border-current/12 py-5 first:border-t-0 first:pt-0'
            initial={reduce ? false : { opacity: 0, x: 12 }}
            animate={inView || reduce ? { opacity: 1, x: 0 } : undefined}
            transition={{
              duration: brandMotion.duration,
              delay: reduce ? 0 : i * 0.08,
              ease: brandMotion.ease
            }}
          >
            <div className='flex gap-4'>
              <span className='font-mono text-[0.6875rem] text-current/45'>{step.id}</span>
              <div>
                <p className='font-display text-lg font-semibold tracking-tight'>{step.title}</p>
                <p className='mt-1 text-sm text-current/65'>{step.body}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
