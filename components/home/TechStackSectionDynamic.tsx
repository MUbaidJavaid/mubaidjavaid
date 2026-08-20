'use client'

import { Skeleton } from '@/components/ui/skeleton'
import dynamic from 'next/dynamic'

const TechStackSection1 = dynamic(
  () =>
    import('@/components/ui/skill1').then(mod => ({
      default: mod.TechStackSection1
    })),
  {
    ssr: false,
    loading: () => (
      <section className='section-anchor section-padding surface-muted'>
        <div className='container-wide space-y-6'>
          <div className='space-y-3'>
            <Skeleton className='h-3 w-24' />
            <Skeleton className='h-9 max-w-md' />
            <Skeleton className='h-4 max-w-xl' />
          </div>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className='flex items-center gap-3 rounded-xl border border-border/60 p-4'>
                <Skeleton className='h-10 w-10 rounded-lg' />
                <div className='flex-1 space-y-2'>
                  <Skeleton className='h-4 w-20' />
                  <Skeleton className='h-3 w-14' />
                </div>
              </div>
            ))}
          </div>
          <Skeleton className='h-48 w-full rounded-2xl' />
        </div>
      </section>
    )
  }
)

/**
 * Heavy client-only canvas / DOM animation: load after first paint to trim main bundle work.
 */
export function TechStackSectionDynamic () {
  return <TechStackSection1 />
}
