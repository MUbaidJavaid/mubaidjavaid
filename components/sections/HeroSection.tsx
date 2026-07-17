'use client'

import { HeroCodeDecor } from '@/components/hero/HeroCodeDecor'
import { TypingTagline } from '@/components/hero/TypingTagline'
import { DiscoveryCallModal } from '@/components/system/DiscoveryCallModal'
import { heroTaglines } from '@/data/site'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

const STACK = [
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'TypeScript'
] as const

const TRUST_ITEMS = [
  'MERN Stack + Next.js',
  'End-to-End Product Delivery',
  'Business-Focused Engineering',
  'Scalable Architecture'
] as const

export function HeroSection () {
  const reduce = useReducedMotion()

  return (
    <section
      id='hero'
      className='relative overflow-hidden surface-page'
      style={{ minHeight: 'min(92vh, 840px)' }}
    >
      {/* Primary radial gradient - centered top */}
      <div
        className='pointer-events-none absolute inset-0'
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 110% 90% at 50% -5%, #256e99 / 0.25, transparent 65%)'
        }}
      />

      {/* Secondary accent gradients - corners */}
      <div
        className='pointer-events-none absolute inset-0'
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 70% at 100% 80%, #1e5a82 / 0.12, transparent 60%),' +
            'radial-gradient(ellipse 60% 60% at 0% 70%, #256e99 / 0.1, transparent 65%)'
        }}
      />

      {/* Animated gradient wave effect */}
      <motion.div
        className='pointer-events-none absolute inset-0'
        aria-hidden
        animate={{
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          background:
            'radial-gradient(circle at 50% 50%, #256e99 / 0.06, transparent 70%)'
        }}
      />

      <HeroCodeDecor />

      {/* ── Content ── */}
      <div className='container-wide relative z-10 flex min-w-0 flex-col items-center justify-center pb-20 pt-10 text-center sm:pt-16 lg:pt-20'>
        {/* ── Name branding ── */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className='mb-6'
        >
          {/* Kicker   no emoji, clean label */}
          <p
            className='display-kicker mb-4 tracking-[0.22em]'
            style={{ color: 'hsl(202 61% 38%)' }}
          >
            Full-Stack Developer &middot; Multan, Pakistan
          </p>

          {/* Primary name — fluid up to 144px on large screens */}
          <h1 className='font-heading font-black leading-none tracking-[-0.03em] text-[rgb(12,12,12)] dark:text-heading'>
            M Ubaid Javaid
          </h1>

          {/* Animated role directly beneath name */}
          <div className='mt-3.5 flex items-center justify-center gap-3'>
            <span
              className='block h-px w-7 flex-shrink-0'
              style={{ background: 'hsl(202 61% 37% / 0.35)' }}
              aria-hidden
            />
            <TypingTagline
              phrases={heroTaglines}
              className='text-fluid-base font-semibold tracking-wide text-primary'
            />
            <span
              className='block h-px w-7 flex-shrink-0'
              style={{ background: 'hsl(202 61% 37% / 0.35)' }}
              aria-hidden
            />
          </div>
        </motion.div>

        {/* ── Tech stack pills ── */}
        <motion.div
          className='mb-8 flex flex-wrap items-center justify-center gap-2'
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {STACK.map(tech => (
            <span
              key={tech}
              className='text-fluid-xs rounded-full border px-3 py-1 font-medium tracking-wide'
              style={{
                borderColor: 'hsl(202 61% 37% / 0.22)',
                background: 'hsl(202 61% 37% / 0.05)',
                color: 'hsl(202 61% 40%)'
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* ── Value proposition ── */}
        <motion.p
          className='text-fluid-base mx-auto max-w-[54ch] leading-[1.88] text-body'
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          I design, build, and ship scalable web applications: from lean MVPs to
          full-product platforms, with clean architecture, reliable backends,
          and user-facing experiences that support real business outcomes.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          className='mt-9 flex flex-wrap items-center justify-center gap-4'
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
        >
          <Link
            href='/contact'
            id='hero-cta-hire'
            className='text-fluid-sm inline-flex items-center gap-2 rounded-none px-7 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-px hover:shadow-lg active:scale-[0.98]'
            style={{
              background:
                'linear-gradient(160deg, hsl(202 61% 37%), hsl(202 64% 27%))',
              boxShadow: '0 6px 22px -6px hsl(202 61% 37% / 0.45)'
            }}
          >
            Get in Touch
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.2'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden
            >
              <path d='M5 12h14M12 5l7 7-7 7' />
            </svg>
          </Link>

          <Link
            href='/projects'
            id='hero-cta-work'
            className='text-fluid-sm inline-flex items-center gap-2 rounded-none border px-7 py-3 font-semibold transition-all duration-200 hover:-translate-y-px hover:bg-primary/[0.06] active:scale-[0.98]'
            style={{
              borderColor: 'hsl(202 61% 37% / 0.32)',
              color: 'hsl(202 61% 37%)'
            }}
          >
            View Projects
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.2'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden
            >
              <path d='M5 12h14M12 5l7 7-7 7' />
            </svg>
          </Link>
        </motion.div>

        {/* ── Availability ── */}
        <motion.p
          className='mt-5 flex items-center justify-center gap-2 text-[0.78rem] text-body/65'
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.38 }}
        >
          <span
            className='h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500'
            aria-hidden
          />
          Available for freelance, contract, and full-time roles
        </motion.p>

        {/* ── Trust strip ── */}
        <motion.div
          className='mt-12 w-full max-w-5xl sm:mt-16'
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.46 }}
        >
          <div className='mx-auto mb-6 flex items-center justify-center gap-3 sm:mb-8' aria-hidden>
            <span className='h-px w-10 bg-gradient-to-r from-transparent to-border/80 sm:w-14' />
            <span className='font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-primary/55'>
              Focus
            </span>
            <span className='h-px w-10 bg-gradient-to-l from-transparent to-border/80 sm:w-14' />
          </div>

          <ul
            className='grid grid-cols-2 sm:grid-cols-4'
            aria-label='Core strengths'
          >
            {TRUST_ITEMS.map((item, index) => (
              <li
                key={item}
                className='group relative flex flex-col items-center px-3 py-4 text-center sm:px-5 sm:py-1'
              >
                {/* Desktop vertical rules between columns */}
                {index > 0 && (
                  <span
                    className='pointer-events-none absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-border/55 sm:block'
                    aria-hidden
                  />
                )}
                {/* Mobile horizontal rules under top row */}
                {index < 2 && (
                  <span
                    className='pointer-events-none absolute inset-x-4 bottom-0 h-px bg-border/45 sm:hidden'
                    aria-hidden
                  />
                )}
                {index % 2 === 1 && (
                  <span
                    className='pointer-events-none absolute left-0 top-3 bottom-3 w-px bg-border/45 sm:hidden'
                    aria-hidden
                  />
                )}

                <span className='mb-2.5 font-mono text-[10px] font-bold tabular-nums tracking-[0.2em] text-primary/50 transition-colors duration-300 group-hover:text-primary'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className='max-w-[16ch] text-balance text-[11px] font-semibold uppercase leading-[1.45] tracking-[0.1em] text-body/70 transition-colors duration-300 group-hover:text-heading sm:max-w-[18ch] sm:text-[11.5px]'>
                  {item}
                </span>
                <span
                  className='mt-3 h-0.5 w-0 rounded-full bg-primary/50 transition-all duration-300 ease-out group-hover:w-8'
                  aria-hidden
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className='pointer-events-none absolute inset-x-0 bottom-0 h-20'
        aria-hidden
        style={{
          background:
            'linear-gradient(to bottom, transparent, hsl(var(--background) / 0.45))'
        }}
      />

      {/* Discovery Call Modal - Appears after 5 seconds */}
      <DiscoveryCallModal showDelay={5000} />
    </section>
  )
}
