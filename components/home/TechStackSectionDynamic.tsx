'use client'

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
        <div className='container-wide'>
          <div className='skeleton-shimmer min-h-[480px] rounded-2xl sm:min-h-[520px]' />
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
