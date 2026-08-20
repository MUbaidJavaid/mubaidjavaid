import Link from 'next/link'

function LostIllustration () {
  return (
    <div
      className='relative mx-auto mb-10 h-40 w-40 sm:h-44 sm:w-44'
      aria-hidden
    >
      <div className='absolute inset-0  bg-[linear-gradient(145deg,hsl(var(--primary)/0.12),transparent_55%)]' />
      <div className='absolute inset-[12%] border border-border/60 surface-panel shadow-[0_12px_40px_rgba(15,23,42,.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)]' />
      <div className='absolute left-1/2 top-[28%] h-10 w-10 -translate-x-1/2  bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(239_48%_38%))] opacity-90 shadow-md' />
      <div className='absolute bottom-[22%] left-1/2 flex -translate-x-1/2 gap-1.5'>
        <span className='h-2 w-2  bg-primary/30' />
        <span className='h-2 w-2  bg-primary/50' />
        <span className='h-2 w-2  bg-primary/25' />
      </div>
      <span className='absolute -right-1 -top-1 flex h-9 min-w-[2.25rem] items-center justify-center border border-border/80 surface-panel px-2 font-heading text-xs font-extrabold text-primary shadow-sm dark:border-border/50'>
        404
      </span>
    </div>
  )
}

export default function NotFound () {
  return (
    <section className='section-padding relative min-h-[60vh] overflow-hidden surface-page'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_0%,hsl(var(--primary)/0.06),transparent_70%)]' />
      </div>
      <div className='container-wide relative text-center'>
        <LostIllustration />
        <p className='text-xs font-semibold uppercase tracking-[0.2em] text-primary/90'>
          Page not found
        </p>
        <h1 className='section-heading mx-auto mt-3 max-w-xl text-[1.85rem] sm:text-[2.35rem]'>
          This page doesn&apos;t exist{' '}
          <span className='text-body/80'>(or maybe it was moved).</span>
        </h1>
        <p className='mx-auto mt-4 max-w-md text-sm leading-relaxed text-body'>
          The link may be outdated or the URL was mistyped. Head home or browse
          projects - everything public is still here.
        </p>
        <div className='mt-10 flex flex-wrap items-center justify-center gap-3'>
          <Link
            href='/'
            className='inline-flex  bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary-hover hover:shadow-lg active:scale-[0.98]'
          >
            Go home
          </Link>
          <Link
            href='/projects'
            className='inline-flex border border-border surface-panel px-6 py-3 text-sm font-semibold text-heading transition-all hover:border-primary/35 hover:text-primary active:scale-[0.98] dark:border-border/50'
          >
            View projects
          </Link>
        </div>
      </div>
    </section>
  )
}
