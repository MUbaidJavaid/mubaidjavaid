'use client'

import { brandMotion, brandType } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const PHASES = [
  { id: '01', label: 'Discover', hint: 'Brief' },
  { id: '02', label: 'Shape', hint: 'Structure' },
  { id: '03', label: 'Build', hint: 'Ship-ready' },
  { id: '04', label: 'Prove', hint: 'Validate' },
  { id: '05', label: 'Launch', hint: 'Live' }
] as const

/** Mini product silhouettes — denser as delivery progresses. */
function PhaseFrame ({ index }: { index: number }) {
  const density = index + 1
  return (
    <div className='relative aspect-[5/4] w-full overflow-hidden border border-border/80 bg-background'>
      <div className='absolute inset-x-0 top-0 h-5 border-b border-border/60 bg-muted/50'>
        <div className='flex h-full items-center gap-1 px-2'>
          <span className='h-1.5 w-1.5 rounded-full bg-border' />
          <span className='h-1.5 w-1.5 rounded-full bg-border' />
          <span className='h-1.5 w-1.5 rounded-full bg-border' />
        </div>
      </div>
      <div className='absolute inset-x-2 bottom-2 top-7 flex flex-col gap-1.5'>
        {Array.from({ length: Math.min(density, 4) }).map((_, row) => (
          <div key={row} className='flex flex-1 gap-1.5'>
            <div
              className={cn(
                'h-full rounded-[1px] bg-primary/10',
                row === 0 ? 'w-[38%]' : 'w-[28%]'
              )}
            />
            <div
              className={cn(
                'h-full flex-1 rounded-[1px]',
                row < density - 1 ? 'bg-highlight/15' : 'bg-muted'
              )}
            />
          </div>
        ))}
        {density >= 4 ? (
          <div className='mt-auto flex h-2 gap-1'>
            <div className='h-full flex-1 bg-primary/25' />
            <div className='h-full w-8 bg-highlight/40' />
          </div>
        ) : null}
      </div>
    </div>
  )
}

/**
 * Editorial delivery sequence — replaces the generic squiggle path.
 * Scroll progress fills the rail; no pin / no Lenis conflict.
 */
export function ProcessDeliveryVisual ({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const root = useRef<HTMLDivElement>(null)
  const inView = useInView(root, { once: true, margin: '-10%' })
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ['start 80%', 'end 45%']
  })
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div
      ref={root}
      className={cn(
        'relative overflow-hidden bg-[linear-gradient(180deg,hsl(214_28%_96%)_0%,hsl(214_22%_93%)_100%)] text-heading',
        className
      )}
      role='img'
      aria-label='Product delivery sequence from discovery to launch'
    >
      <div
        className='pointer-events-none absolute inset-0 opacity-40'
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)'
        }}
      />

      <div className='relative z-10 px-5 py-8 md:px-8 md:py-10 lg:px-10'>
        <div className='mb-6 flex items-end justify-between gap-4'>
          <div>
            <p className={brandType.mono}>Delivery sequence</p>
            <p className='mt-1 text-sm font-medium text-heading/75'>
              One path from brief to production
            </p>
          </div>
          <span className='hidden font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground sm:inline'>
            05 phases
          </span>
        </div>

        {/* Progress rail */}
        <div className='relative mb-8 h-[2px] w-full bg-border/80'>
          <motion.div
            className='absolute inset-y-0 left-0 bg-highlight'
            style={{ width: reduce ? '100%' : progress }}
          />
        </div>

        <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4'>
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.id}
              className='flex flex-col gap-3'
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={inView || reduce ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: brandMotion.duration,
                delay: reduce ? 0 : i * 0.07,
                ease: brandMotion.ease
              }}
            >
              <div className='flex items-center justify-between'>
                <span className='font-mono text-[0.625rem] text-muted-foreground'>
                  {phase.id}
                </span>
                <span className='font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-muted-foreground/80'>
                  {phase.hint}
                </span>
              </div>
              <PhaseFrame index={i} />
              <p className='font-display text-sm font-semibold tracking-tight text-heading md:text-base'>
                {phase.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
