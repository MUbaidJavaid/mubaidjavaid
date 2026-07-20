'use client'

import { LottiePlayer } from '@/components/ui/LottiePlayer'
import { site } from '@/data/site'
import { lottieAssets } from '@/lib/lottie-assets'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'

/** Single-screen thank-you: Lottie + actions only. */
export function ThankYouPanel () {
  const reduce = useReducedMotion()

  return (
    <section className='section-anchor flex min-h-[70vh] items-center justify-center surface-page px-4 py-16 md:py-20'>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className='mx-auto flex w-full max-w-md flex-col items-center text-center'
      >
        <LottiePlayer
          src={lottieAssets.thankYou}
          className='h-[220px] w-full max-w-[280px] sm:h-[260px]'
          aria-label='Message sent successfully animation'
          loop
          speed={0.9}
        />

        <div className='mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-center'>
          <Link
            href='/'
            className='inline-flex items-center justify-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover'
          >
            Back to home
            <ArrowRight className='h-3.5 w-3.5' aria-hidden />
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className='inline-flex items-center justify-center gap-2 border border-border/65 px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-primary/35 hover:text-primary dark:border-border/50'
          >
            <Mail className='h-4 w-4' aria-hidden />
            Email directly
          </Link>
        </div>

        <p className='mt-5 text-xs text-body/55'>
          <Link href='/contact' className='font-semibold text-primary'>
            Back to contact
          </Link>
        </p>
      </motion.div>
    </section>
  )
}
