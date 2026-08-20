'use client'

import { brandType } from '@/lib/brand-system'
import { whyPartnerWithMe } from '@/data/site'
import { cn } from '@/lib/utils'
import { CodeVisualizer } from '@/components/visual/CodeVisualizer'

const PILLARS = whyPartnerWithMe.map(item => item.title)

/**
 * Compact engineering panel — fills the stage without empty top/bottom void.
 */
export function PhilosophyCodePanel ({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-primary text-primary-foreground',
        className
      )}
    >
      {/* Panel chrome */}
      <div className='flex items-center justify-between border-b border-primary-foreground/10 px-5 py-3 md:px-8'>
        <div className='flex items-center gap-2'>
          <span className='h-2 w-2 rounded-full bg-primary-foreground/25' />
          <span className='h-2 w-2 rounded-full bg-primary-foreground/25' />
          <span className='h-2 w-2 rounded-full bg-primary-foreground/25' />
        </div>
        <span className='font-mono text-[0.625rem] uppercase tracking-[0.14em] text-primary-foreground/55'>
          product.engineering.ts
        </span>
      </div>

      <div className='relative px-5 py-6 md:px-8 md:py-8'>
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.06]'
          aria-hidden
          style={{
            backgroundImage:
              'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        <p className={cn(brandType.mono, 'relative z-10 !text-primary-foreground/50')}>
          How products get built here
        </p>

        <div className='relative z-10 mt-5 rounded-sm border border-primary-foreground/10 bg-primary-foreground/[0.04] p-4 md:p-5'>
          <CodeVisualizer className='w-full' />
        </div>

        <div className='relative z-10 mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4'>
          {PILLARS.map((title, i) => (
            <div
              key={title}
              className='border border-primary-foreground/10 bg-primary-foreground/[0.04] px-3 py-2.5'
            >
              <p className='font-mono text-[0.5625rem] text-primary-foreground/45'>
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className='mt-1 text-[0.6875rem] font-medium leading-snug text-primary-foreground/90'>
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
