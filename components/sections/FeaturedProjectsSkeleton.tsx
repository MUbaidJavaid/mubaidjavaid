import { ProjectCardsGridSkeleton } from '@/components/system/page-skeletons'
import { Skeleton } from '@/components/ui/skeleton'

/** Shown while the Featured Projects chunk loads: skeletons only in this section, not on the global splash. */
export function FeaturedProjectsSkeleton () {
  return (
    <section className='section-anchor relative overflow-hidden surface-muted py-10'>
      <div className='absolute inset-0'>
        <div className='absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl' />
        <div className='absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-primary/[0.06] blur-3xl' />
      </div>

      <div className='container-wide relative z-10 space-y-10 py-16 lg:py-20'>
        <div className='flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end'>
          <div className='max-w-3xl space-y-4'>
            <Skeleton className='h-3 w-28' />
            <Skeleton className='h-9 max-w-md sm:h-10' />
            <Skeleton className='h-4 max-w-2xl' />
            <Skeleton className='h-4 max-w-xl' />
          </div>
          <Skeleton className='h-11 w-44 rounded-full' />
        </div>

        <ProjectCardsGridSkeleton count={3} />
      </div>
    </section>
  )
}
