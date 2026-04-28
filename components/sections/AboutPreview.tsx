'use client'

import { useGsapReveal } from '@/components/motion/useGsapReveal'
import { WhyPartnerCodeCard } from '@/components/ui/CodeStyleCard'
import { aboutPreview, whyPartnerWithMe, workPhilosophy } from '@/data/site'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export function AboutPreview () {
  const leftRef  = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useGsapReveal(leftRef,  { y: 28, stagger: 0.10, start: 'top 84%' })
  useGsapReveal(rightRef, { y: 28, delay: 0.15,   start: 'top 84%' })

  const preferences = [
    'Freelance / Contract',
    'Remote Work',
    'Full-time Roles',
    'Startup Friendly'
  ]

  return (
    <section className='section-anchor surface-page py-16 md:py-20'>
      <div className='container-wide grid gap-12 lg:grid-cols-[1.1fr_0.9fr]'>

        {/* Left column */}
        <div ref={leftRef} className='space-y-6'>
          <p className='section-label' data-reveal>About</p>
          <h2 className='section-heading' data-reveal>
            Building practical web products with{' '}
            <span className='section-heading-accent'>clean engineering</span>{' '}
            and clear UX
          </h2>
          <p className='text-body-base leading-relaxed text-body' data-reveal>
            {aboutPreview.bodyOne}
          </p>
          <p className='text-body-base leading-relaxed text-body' data-reveal>
            {aboutPreview.bodyTwo}
          </p>

          {/* Availability preferences */}
          <div className='grid grid-cols-2 gap-2 pt-1' data-reveal>
            {preferences.map(pref => (
              <div key={pref} className='flex items-center gap-2.5 py-1.5'>
                <CheckCircle2 className='h-3.5 w-3.5 shrink-0 text-primary' strokeWidth={2} />
                <span className='text-[0.82rem] font-medium text-body'>{pref}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className='flex flex-wrap gap-3 pt-2' data-reveal>
            <Link
              href='/about'
              className='group inline-flex items-center gap-2 bg-heading px-6 py-3 text-[0.875rem] font-semibold text-white transition-all duration-200 hover:bg-primary'
            >
              Discover My Journey
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
            <Link
              href='/contact'
              className='group inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-5 py-3 text-[0.875rem] font-semibold text-primary transition-all hover:border-primary/50 hover:bg-primary/10'
            >
              Quick intro call
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>

          {/* Availability callout */}
          <div
            data-reveal
            className='border border-border/50 bg-white p-5 dark:border-border/50 dark:bg-card'
          >
            <div className='flex items-center gap-3'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30'>
                <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-500' />
              </div>
              <div>
                <p className='text-[0.875rem] font-semibold text-heading'>Available for work</p>
                <p className='text-[0.78rem] text-body/60'>Open to new opportunities</p>
              </div>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
              {['Freelance', 'Contract', 'Full-time'].map(type => (
                <span
                  key={type}
                  className='border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary'
                >
                  {type}
                </span>
              ))}
            </div>
            <Link
              href='/contact'
              className='mt-4 flex w-full items-center justify-center gap-2 border border-primary/20 py-2.5 text-[0.8375rem] font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary/5'
            >
              Let&apos;s work together
              <ArrowRight className='h-3.5 w-3.5' />
            </Link>
          </div>
        </div>

        {/* Right column */}
        <aside ref={rightRef} className='space-y-6'>
          <WhyPartnerCodeCard
            approach={whyPartnerWithMe}
            philosophy={workPhilosophy}
          />
        </aside>
      </div>
    </section>
  )
}
