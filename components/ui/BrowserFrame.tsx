import type { ReactNode } from 'react'

/**
 * Product-style preview chrome - frames case study visuals without implying a fake screenshot source.
 */
export function BrowserFrame ({
  children,
  className = '',
  url = 'preview.local'
}: {
  children: ReactNode
  className?: string
  /** Shown in the address bar (decorative) */
  url?: string
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-[#E8ECF2] shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)] ring-1 ring-black/[0.04] dark:border-border/50 dark:bg-slate-800/90 dark:ring-white/[0.06] ${className}`}
    >
      <div className='flex items-center gap-2 border-b border-[#0F172A]/8 bg-[#F1F4F8] px-3 py-2.5 sm:px-4'>
        <div className='flex gap-1.5'>
          <span className='h-2.5 w-2.5 rounded-full bg-[#FF5F57]/90' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/90' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#28C840]/90' />
        </div>
        <div className='ml-2 min-w-0 flex-1 rounded-md border border-[#0F172A]/6 bg-white px-3 py-1 text-center font-mono text-[10px] text-body/50 dark:border-border/40 dark:bg-slate-950 dark:text-slate-400 sm:text-[11px]'>
          <span className='truncate'>{url}</span>
        </div>
      </div>
      <div className='relative surface-panel'>{children}</div>
    </div>
  )
}
