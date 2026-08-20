import type { ReactNode } from 'react'

/**
 * Product-style preview chrome for case study visuals.
 */
export function BrowserFrame ({
  children,
  className = '',
  url = 'preview.local'
}: {
  children: ReactNode
  className?: string
  url?: string
}) {
  return (
    <div
      className={`overflow-hidden border border-border/60 bg-[#E8ECF2] shadow-[0_22px_50px_-24px_rgba(15,23,42,0.35)] dark:border-border/45 dark:bg-slate-900 ${className}`}
    >
      <div className='flex items-center gap-2 border-b border-border/50 bg-[#F1F4F8] px-3 py-2.5 dark:border-border/40 dark:bg-slate-950/80 sm:px-4'>
        <div className='flex gap-1.5' aria-hidden>
          <span className='h-2.5 w-2.5 bg-[#FF5F57]/90' />
          <span className='h-2.5 w-2.5 bg-[#FEBC2E]/90' />
          <span className='h-2.5 w-2.5 bg-[#28C840]/90' />
        </div>
        <div className='ml-2 min-w-0 flex-1 border border-border/40 bg-white px-3 py-1 text-center font-mono text-[10px] text-body/50 dark:border-border/40 dark:bg-slate-950 dark:text-slate-400 sm:text-[11px]'>
          <span className='truncate'>{url}</span>
        </div>
      </div>
      <div className='relative bg-card'>{children}</div>
    </div>
  )
}
