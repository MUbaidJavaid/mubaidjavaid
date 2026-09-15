'use client'

import { site } from '@/data/site'
import { brandMotion, brandType } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'

/** Quiet brand thank-you beat — display line + next steps. */
export function ThankYouPanel () {
  const reduce = useReducedMotion()

  return (
    <section className='relative isolate overflow-hidden bg-[hsl(214_28%_98%)]'>
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.28]'
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(hsl(215 24% 70% / 0.14) 1px, transparent 1px), linear-gradient(90deg, hsl(215 24% 70% / 0.14) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 40%, black 15%, transparent 75%)'
        }}
      />
      <p
        className='pointer-events-none absolute -right-[0.04em] top-[0.05em] select-none font-display text-[clamp(6rem,18vw,14rem)] font-bold leading-none tracking-[-0.08em] text-heading/[0.03]'
        aria-hidden
      >
        SENT
      </p>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: brandMotion.durationSlow,
          ease: brandMotion.ease
        }}
        className='relative z-10 mx-auto flex min-h-[70vh] w-full max-w-[720px] flex-col justify-center px-6 py-20 sm:px-8 md:px-10'
      >
        <p className={brandType.label}>Message received</p>
        <h1 className={cn('mt-5', brandType.titleHero)}>
          Thanks.
          <br />
          <span className='text-highlight'>
            I&apos;ll reply within 24 hours.
          </span>
        </h1>
        <p className='mt-6 max-w-[42ch] text-sm leading-relaxed text-body md:text-base'>
          Your inquiry is in. Expect a practical next step—not a generic
          auto-response. If anything is urgent, email directly.
        </p>

        <div className='mt-10 flex flex-wrap gap-3'>
          <Link
            href='/'
            className='cta-primary'
          >
            Back to home
            <ArrowRight className='h-3.5 w-3.5' aria-hidden />
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className='inline-flex min-h-11 items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-heading transition-colors hover:border-heading'
          >
            <Mail className='h-4 w-4' aria-hidden />
            Email directly
          </Link>
        </div>

        <p className={cn('mt-8', brandType.mono)}>
          <Link href='/contact' className='link-underline text-heading'>
            Back to contact
          </Link>
        </p>
      </motion.div>
    </section>
  )
}
