'use client'

import { brandMotion } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageHeroHeaderProps {
  title: string | ReactNode
  subtitle?: string
  description?: string | ReactNode
  children?: ReactNode
  /** Soft watermark glyph / word in the hero */
  watermark?: string
  className?: string
  /** @deprecated Kept for call-site compat — ignored in editorial brand */
  tagPattern?: string
}

/**
 * Shared editorial page hero for depth routes.
 * Same typography/spacing tokens as the homepage brand system —
 * layout varies per page via children and optional watermark.
 */
export function PageHeroHeader ({
  title,
  subtitle,
  description,
  children,
  watermark,
  className
}: PageHeroHeaderProps) {
  const reduce = useReducedMotion()

  return (
    <section
      className={cn(
        'relative isolate overflow-hidden border-b border-border/70 bg-[hsl(214_28%_98%)]',
        className
      )}
    >
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.28]'
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(hsl(215 24% 70% / 0.14) 1px, transparent 1px), linear-gradient(90deg, hsl(215 24% 70% / 0.14) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 70% 20%, black 10%, transparent 72%)'
        }}
      />
      <div
        className='pointer-events-none absolute -right-28 top-[-20%] h-[22rem] w-[22rem] rounded-full bg-[hsl(211_70%_58%/0.08)] blur-3xl'
        aria-hidden
      />
      {watermark ? (
        <p
          className='pointer-events-none absolute -right-[0.04em] top-[0.02em] select-none font-display text-[clamp(5rem,16vw,12rem)] font-bold leading-none tracking-[-0.08em] text-heading/[0.03]'
          aria-hidden
        >
          {watermark}
        </p>
      ) : null}

      <div className='relative z-10 container-wide py-20 md:py-28'>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: brandMotion.durationSlow,
            ease: brandMotion.ease
          }}
        >
          {subtitle ? (
            <p className='font-mono text-[0.6875rem] uppercase tracking-[0.26em] text-[hsl(211_48%_42%)]'>
              {subtitle}
            </p>
          ) : null}
          <h1 className='mt-5 max-w-[16ch] font-display text-[clamp(2.6rem,6vw,5.2rem)] font-bold leading-[0.94] tracking-[-0.045em] text-heading'>
            {title}
          </h1>
          {description ? (
            <div className='mt-7 max-w-xl text-sm leading-relaxed text-body md:text-base'>
              {description}
            </div>
          ) : null}
          {children ? <div className='mt-10'>{children}</div> : null}
        </motion.div>
      </div>
    </section>
  )
}
