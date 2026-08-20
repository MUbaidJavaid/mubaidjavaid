import { Skeleton } from '@/components/ui/skeleton'

/** Shown while the Featured Projects chunk loads. */
export function FeaturedProjectsSkeleton () {
  return (
    <section className='section-anchor surface-muted py-12 md:py-14'>
      <div className='container-wide space-y-8'>
        <div className='section-header gap-4'>
          <Skeleton className='mx-auto h-10 w-48' />
          <Skeleton className='mx-auto h-4 max-w-md' />
          <Skeleton className='mx-auto h-9 w-28' />
        </div>
        <div className='flex flex-wrap justify-center gap-2'>
          <Skeleton className='h-8 w-24' />
          <Skeleton className='h-8 w-28' />
          <Skeleton className='h-8 w-20' />
        </div>
        <div className='overflow-hidden border border-border/70 dark:border-border/50'>
          <div className='grid lg:grid-cols-2'>
            <Skeleton className='aspect-[16/11] w-full rounded-none lg:min-h-[280px]' />
            <div className='space-y-3 p-5 sm:p-6'>
              <Skeleton className='h-3 w-28' />
              <Skeleton className='h-7 w-4/5' />
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-5/6' />
              <Skeleton className='mt-4 h-20 w-full' />
              <div className='flex gap-2 pt-2'>
                <Skeleton className='h-9 w-28' />
                <Skeleton className='h-9 w-20' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
