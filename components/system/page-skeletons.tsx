import { Skeleton } from '@/components/ui/skeleton'
import { site } from '@/data/site'

/** Root / generic route - matches typical inner page density */
export function PageLoadingSkeleton () {
  return (
    <section className='section-anchor min-h-[60vh] surface-page py-16 md:py-24'>
      <div className='container-wide space-y-10'>
        <div className='space-y-4'>
          <Skeleton className='h-3 w-24 ' />
          <Skeleton className='h-10 max-w-xl ' />
          <Skeleton className='h-4 max-w-2xl ' />
          <Skeleton className='h-4 max-w-lg ' />
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className='space-y-3 border border-border/60 surface-muted-soft p-5 dark:border-border/50'
            >
              <Skeleton className='aspect-video w-full ' />
              <Skeleton className='h-4 w-3/4 ' />
              <Skeleton className='h-3 w-full ' />
              <Skeleton className='h-3 w-5/6 ' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Blog listing layout */
export function BlogListLoadingSkeleton () {
  return (
    <section className='section-anchor relative min-h-[70vh] surface-page py-20'>
      <div className='pointer-events-none absolute inset-0 opacity-40'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_0%,hsl(var(--primary)/0.06),transparent_65%)]' />
      </div>
      <div className='container-wide relative z-10 space-y-8'>
        <div className='flex flex-wrap items-end justify-between gap-6'>
          <div className='space-y-3'>
            <Skeleton className='h-3 w-20 ' />
            <Skeleton className='h-10 w-[min(100%,420px)] ' />
            <Skeleton className='h-4 w-[min(100%,340px)] ' />
          </div>
          <div className='flex gap-2'>
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className='h-14 w-20 ' />
            ))}
          </div>
        </div>
        <div className='space-y-12'>
          <div className='overflow-hidden border border-border/60 surface-panel shadow-sm dark:border-border/50'>
            <div className='flex flex-col lg:min-h-[280px] lg:flex-row'>
              <div className='min-h-[200px] flex-1 space-y-4 bg-[#0F172A]/90 p-7 lg:max-w-[46%]'>
                <Skeleton className='h-6 w-36  bg-white/15' />
                <Skeleton className='h-8 w-full max-w-sm  bg-white/10' />
                <Skeleton className='h-16 w-full  bg-white/10' />
                <Skeleton className='h-4 w-40  bg-white/10' />
              </div>
              <div className='flex flex-1 flex-col justify-center gap-4 border-t border-border/50 bg-background/30 p-7 dark:bg-card/20 lg:border-l lg:border-t-0'>
                <Skeleton className='h-4 w-full ' />
                <Skeleton className='h-4 w-full ' />
                <Skeleton className='h-4 w-[90%] ' />
                <div className='flex flex-wrap gap-2 pt-1'>
                  <Skeleton className='h-7 w-16 ' />
                  <Skeleton className='h-7 w-20 ' />
                  <Skeleton className='h-7 w-14 ' />
                </div>
                <Skeleton className='mt-2 h-11 w-44 ' />
              </div>
            </div>
          </div>
          <div className='space-y-5'>
            <div className='border-b border-border/60 pb-4'>
              <Skeleton className='h-3 w-20 ' />
              <Skeleton className='mt-2 h-7 w-48 ' />
              <Skeleton className='mt-2 h-4 w-full max-w-md ' />
            </div>
            <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className='flex min-h-[200px] flex-col border border-border/60 surface-panel p-6 shadow-sm dark:border-border/50'
                >
                  <Skeleton className='mb-3 h-5 w-24 ' />
                  <Skeleton className='mb-2 h-5 w-full ' />
                  <Skeleton className='mb-2 h-4 w-full ' />
                  <Skeleton className='mb-2 h-4 w-[94%] ' />
                  <Skeleton className='mt-auto h-4 w-32 ' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Single blog post */
export function BlogPostLoadingSkeleton () {
  return (
    <article className='section-anchor min-h-[70vh] surface-page py-10'>
      <div className='container-wide grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]'>
        <div className='border border-border/60 surface-panel p-6 sm:p-8 lg:p-10 dark:border-border/50'>
          <Skeleton className='mb-6 h-4 w-32 ' />
          <Skeleton className='mb-4 h-3 w-48 ' />
          <Skeleton className='mb-6 h-12 w-full max-w-3xl ' />
          <Skeleton className='mb-8 h-16 w-full max-w-2xl ' />
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className='mb-8 space-y-3'>
              <Skeleton className='h-7 w-2/3 ' />
              <Skeleton className='h-4 w-full ' />
              <Skeleton className='h-4 w-full ' />
              <Skeleton className='h-4 w-4/5 ' />
            </div>
          ))}
        </div>
        <aside className='hidden lg:block'>
          <div className='sticky top-28 border border-border surface-muted p-6 dark:border-border/50'>
            <Skeleton className='mb-4 h-3 w-24 ' />
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className='mb-3 h-4 w-full ' />
            ))}
          </div>
        </aside>
      </div>
    </article>
  )
}

/** Card grid only: use inside project sections while the grid chunk loads */
export function ProjectCardsGridSkeleton ({ count = 6 }: { count?: number }) {
  return (
    <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className='overflow-hidden rounded-xl border border-border/60 surface-panel shadow-card dark:border-border/50'
        >
          <Skeleton className='h-56 w-full sm:h-64' />
          <div className='space-y-3 p-5'>
            <div className='flex items-center justify-between'>
              <Skeleton className='h-3 w-24' />
              <Skeleton className='h-3.5 w-3.5' />
            </div>
            <Skeleton className='h-6 w-[85%]' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-[90%]' />
            <Skeleton className='h-4 w-3/4' />
            <Skeleton className='mt-1 h-6 w-40 rounded-sm' />
            <div className='flex items-center justify-between border-t border-border/60 pt-3'>
              <div className='flex gap-1.5'>
                <Skeleton className='h-5 w-14 rounded-full' />
                <Skeleton className='h-5 w-12 rounded-full' />
                <Skeleton className='h-5 w-10 rounded-full' />
              </div>
              <Skeleton className='h-4 w-20' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/** Projects grid */
export function ProjectsGridLoadingSkeleton () {
  return (
    <section className='section-anchor min-h-[60vh] surface-page py-10 md:py-14'>
      <div className='container-wide space-y-8'>
        <div className='space-y-3'>
          <Skeleton className='h-3 w-24 ' />
          <Skeleton className='h-10 max-w-md ' />
          <Skeleton className='h-4 max-w-2xl ' />
        </div>
        <ProjectCardsGridSkeleton count={6} />
      </div>
    </section>
  )
}

/** Case study detail */
export function ProjectDetailLoadingSkeleton () {
  return (
    <div className='surface-page'>
      <div className='border-b border-border/60 surface-muted py-6 dark:border-border/50'>
        <div className='container-wide flex justify-between'>
          <Skeleton className='h-5 w-40 ' />
          <Skeleton className='h-9 w-28 ' />
        </div>
      </div>
      <div className='container-wide space-y-6 pt-10'>
        <Skeleton className='h-3 w-28 ' />
        <Skeleton className='h-12 max-w-4xl ' />
        <Skeleton className='h-20 max-w-3xl ' />
        <div className='flex flex-wrap gap-2'>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className='h-8 w-20 ' />
          ))}
        </div>
      </div>
      <div className='container-wide mt-10'>
        <Skeleton className='aspect-[21/10] w-full ' />
      </div>
      <div className='container-wide grid gap-10 py-12 lg:grid-cols-[1fr_22rem]'>
        <div className='space-y-10'>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className='space-y-3'>
              <Skeleton className='h-3 w-24 ' />
              <Skeleton className='h-8 w-48 ' />
              <Skeleton className='h-24 w-full ' />
            </div>
          ))}
        </div>
        <div className='hidden space-y-4 lg:block'>
          <Skeleton className='h-40 w-full ' />
          <Skeleton className='h-32 w-full ' />
        </div>
      </div>
    </div>
  )
}

/** Simple text pages: About, Services */
export function DocumentPageLoadingSkeleton () {
  return (
    <section className='section-anchor min-h-[60vh] surface-page py-10 md:py-14'>
      <div className='container-wide max-w-3xl space-y-6'>
        <Skeleton className='h-3 w-24 ' />
        <Skeleton className='h-12 w-full ' />
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className='h-4 w-full ' />
        ))}
      </div>
    </section>
  )
}

/** Contact - two columns */
export function ContactPageLoadingSkeleton () {
  return (
    <section className='section-anchor min-h-[70vh] surface-page py-10'>
      <div className='container-wide grid gap-12 lg:grid-cols-[1.05fr_0.95fr]'>
        <div className='space-y-6'>
          <Skeleton className='h-3 w-24 ' />
          <Skeleton className='h-10 w-full max-w-lg ' />
          <Skeleton className='h-24 w-full ' />
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className='h-20 w-full ' />
          ))}
        </div>
        <div className='space-y-4 border border-border/60 surface-panel p-8 dark:border-border/50'>
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className='h-12 w-full ' />
          ))}
          <Skeleton className='h-12 w-full ' />
        </div>
      </div>
    </section>
  )
}

/** Branded route transition: no card skeletons (those belong in project sections only). */
export function GlobalRouteLoadingShell () {
  return (
    <div className='relative min-h-[calc(100vh-12rem)] overflow-hidden surface-muted'>
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.45]'
        aria-hidden
      >
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,hsl(var(--primary)/0.09),transparent_55%)]' />
      </div>
      <div className='relative flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center px-6 py-16'>
        <div className='flex h-14 w-14 items-center justify-center bg-[linear-gradient(140deg,hsl(var(--primary)),hsl(202_64%_27%))] text-base font-bold text-white shadow-lg  dark:ring-slate-800'>
          MU
        </div>
        <p className='mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary/85'>
          {site.name}
        </p>
        <p className='mt-2 max-w-sm text-center text-sm text-body/75'>
          Loading your next screen…
        </p>
        <div className='mt-10 h-1 w-[min(100%,280px)] overflow-hidden rounded-full bg-slate-200/90 dark:bg-slate-700/80'>
          <div className='h-full w-1/3 animate-route-load-bar rounded-full bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(202_64%_42%))]' />
        </div>
      </div>
    </div>
  )
}
