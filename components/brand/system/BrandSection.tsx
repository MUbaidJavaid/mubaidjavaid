'use client'

import { brandSpace, brandType, type BrandLayout } from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

/**
 * Canonical section shell. Every homepage block must use this.
 */
export function BrandSection ({
  id,
  layout = 'split',
  children,
  className
}: {
  id: string
  layout?: BrandLayout
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      data-brand-layout={layout}
      className={cn(
        'border-t border-border/70',
        layout !== 'band' && brandSpace.minSplit,
        className
      )}
    >
      {children}
    </section>
  )
}

/**
 * 12-col split: copy 5 · stage 7 (or reverse). Stage is always the majority.
 */
export function BrandSplit ({
  reverse = false,
  align = 'stretch',
  copy,
  stage
}: {
  reverse?: boolean
  align?: 'stretch' | 'start'
  copy: ReactNode
  stage: ReactNode
}) {
  return (
    <div
      className={cn(
        'grid lg:grid-cols-12',
        align === 'stretch' ? 'lg:items-stretch' : 'lg:items-start'
      )}
    >
      <div
        className={cn(
          'flex flex-col justify-center lg:col-span-5',
          reverse && 'lg:order-2'
        )}
      >
        {copy}
      </div>
      <div
        className={cn(
          'relative lg:col-span-7',
          reverse && 'lg:order-1'
        )}
      >
        {stage}
      </div>
    </div>
  )
}

export function BrandCopy ({
  label,
  title,
  children,
  className
}: {
  label: string
  title: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <div className={cn(brandSpace.railX, brandSpace.railY, className)}>
      <p className={brandType.label}>{label}</p>
      <h2 className={cn('mt-3', brandType.title)}>{title}</h2>
      {children ? <div className={cn(brandSpace.block, brandSpace.stack)}>{children}</div> : null}
    </div>
  )
}
