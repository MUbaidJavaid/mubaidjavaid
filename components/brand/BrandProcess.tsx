'use client'

import { BrandSection } from '@/components/brand/system/BrandSection'
import { ProcessHoneycomb } from '@/components/visual/ProcessHoneycomb'
import { brandSpace, brandType } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import Link from 'next/link'

/**
 * Process — honeycomb diagram (reference layout, brand navy/steel theme).
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
            Six interlocking phases — from discovery to maintenance — so scope,
            build, and handover stay coherent.
          </p>
        </div>
        <Link
          href='/contact'
          className='link-underline shrink-0 text-sm font-medium text-heading'
        >
          Start a project
        </Link>
      </div>

      <div className='border-t border-border/70 bg-muted/25'>
        <div className='container-wide flex justify-center py-12 md:py-16 lg:py-20'>
          <ProcessHoneycomb />
        </div>
      </div>
    </BrandSection>
  )
}
