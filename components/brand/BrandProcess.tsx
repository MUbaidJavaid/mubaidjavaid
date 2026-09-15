'use client'

import { TrackedCtaLink } from '@/components/analytics/TrackedCtaLink'
import { BrandSection } from '@/components/brand/system/BrandSection'
import { brandSpace, brandType } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'

const STEPS = [
  {
    title: 'Discover',
    body: 'Lock the primary user, one workflow, and definition of done.'
  },
  {
    title: 'Plan',
    body: 'Architecture note, stack boundaries, and a staging target.'
  },
  {
    title: 'Design',
    body: 'Interface structure that supports the real operational path.'
  },
  {
    title: 'Build',
    body: 'Vertical slice first — auth through persisted outcome.'
  },
  {
    title: 'Launch',
    body: 'QA, observability basics, and a calm go-live checklist.'
  },
  {
    title: 'Handover',
    body: 'Readable docs so your team can extend without archaeology.'
  }
] as const

/**
 * Process — bold numbered path (Issue 8: replace dense honeycomb).
 */
export function BrandProcess () {
  return (
    <BrandSection id='process' layout='band' className='min-h-0'>
      <div
        className={cn(
          'container-wide flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
          brandSpace.railY
        )}
      >
        <div>
          <p className={brandType.label}>Process</p>
          <h2 className={cn('mt-3', brandType.title)}>
            Delivery as one continuous path.
          </h2>
          <p className={cn('mt-4', brandType.lead)}>
            Six clear phases — from discovery to handover — so scope, build,
            and release stay coherent.
          </p>
        </div>
        <TrackedCtaLink
          href='/contact'
          event='discuss_project'
          detail='brand_process'
          className='cta-primary shrink-0'
        >
          Discuss your project
          <ArrowUpRight className='h-3.5 w-3.5' aria-hidden />
        </TrackedCtaLink>
      </div>

      <div className='border-t border-border/70 bg-muted/25'>
        <ol className='container-wide grid gap-0 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-3 lg:py-20'>
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className='border-b border-border/70 py-8 sm:border-r sm:px-6 lg:[&:nth-child(3n)]:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r'
            >
              <p className='font-mono text-xs tracking-wide text-highlight'>
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className='mt-3 font-display text-2xl font-semibold tracking-tight text-heading'>
                {step.title}
              </h3>
              <p className='mt-3 max-w-[36ch] text-sm leading-relaxed text-body'>
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </BrandSection>
  )
}
