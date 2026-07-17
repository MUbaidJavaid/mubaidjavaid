'use client'

import { HeroCodeDecor } from '@/components/hero/HeroCodeDecor'
import {
  SectionDisplayTag,
  type SectionDisplayPattern
} from '@/components/ui/SectionDisplayTag'
import { motion, useReducedMotion } from 'framer-motion'

interface PageHeroHeaderProps {
  title: string | React.ReactNode
  subtitle?: string
  description?: string | React.ReactNode
  children?: React.ReactNode
  /** Code-style frame around the page label — defaults to [BRACKETS] */
  tagPattern?: SectionDisplayPattern
}

export function PageHeroHeader ({
  title,
  subtitle,
  description,
  children,
  tagPattern = 'bracket'
}: PageHeroHeaderProps) {
  const reduce = useReducedMotion()

  return (
    <section className='relative overflow-hidden surface-page py-16 md:py-24'>
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

      {/* Content */}
      <div className='container-wide relative z-10 flex justify-center'>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto flex w-full min-w-0 max-w-4xl flex-col items-center space-y-4 text-center md:space-y-6'
        >
          {/* Mega bold page label — same weight as home section tags */}
          {subtitle ? (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='w-full'
            >
              <SectionDisplayTag
                as='h1'
                tag={subtitle}
                pattern={tagPattern}
              />
            </motion.div>
          ) : null}

          {/* Supporting line — smaller / lighter */}
          <motion.p
            className='text-fluid-xl font-heading font-semibold leading-[1.2] tracking-[-0.02em] text-[rgb(12,12,12)] dark:text-heading'
            initial={reduce ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {title}
          </motion.p>

          {/* Description */}
          {description && (
            <motion.p
              className='text-fluid-base mx-auto max-w-2xl leading-[1.8] text-body'
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}

          {/* Additional children */}
          {children && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className='pointer-events-none absolute inset-x-0 bottom-0 h-16'
        aria-hidden
        style={{
          background:
            'linear-gradient(to bottom, transparent, hsl(var(--background) / 0.6))'
        }}
      />
    </section>
  )
}
