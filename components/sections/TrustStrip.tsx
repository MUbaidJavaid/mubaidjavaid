import { trustStrip } from '@/data/site'

export function TrustStrip () {
  return (
    <section
      className='section-anchor border-y border-border/55 bg-white/90 dark:border-border/50 dark:bg-slate-950/85'
      aria-label='Core capabilities'
    >
      <div className='container-wide flex flex-wrap items-center justify-center gap-2.5 py-4 md:py-5'>
        {trustStrip.map((item, index) => (
          <span key={item} className='flex items-center'>
            <span className='rounded-full border border-border/50 bg-[#F8FAFC] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-body/80 transition-all duration-200 hover:border-primary/25 hover:bg-white hover:text-primary dark:border-border/50 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-primary/35 dark:hover:bg-slate-800 dark:hover:text-primary md:text-[10px]'>
              {item}
            </span>
            {index < trustStrip.length - 1 && (
              <span
                className='mx-0.5 hidden h-1 w-1 flex-shrink-0 rounded-full bg-primary/25 md:inline-flex'
                aria-hidden='true'
              />
            )}
          </span>
        ))}
      </div>
    </section>
  )
}
