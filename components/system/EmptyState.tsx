import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'

type EmptyStateProps = {
  icon: LucideIcon
  title: string
  description: string
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
  className?: string
}

/**
 * Reusable empty state for lists (blog, projects, search results).
 */
export function EmptyState ({
  icon: Icon,
  title,
  description,
  primaryAction,
  secondaryAction,
  className
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-lg flex-col items-center border border-border/80 bg-gradient-to-b from-white to-[#F8FAFC] px-8 py-14 text-center shadow-card dark:border-border/50 dark:from-slate-900 dark:to-slate-950',
        className
      )}
      role='status'
      aria-live='polite'
    >
      <div className='mb-5 flex h-16 w-16 items-center justify-center  border border-primary/15 bg-primary/[0.08] text-primary'>
        <Icon className='h-8 w-8' strokeWidth={1.5} aria-hidden />
      </div>
      <h2 className='font-heading text-xl font-bold text-heading sm:text-2xl'>
        {title}
      </h2>
      <p className='mt-3 text-sm leading-relaxed text-body sm:text-base'>
        {description}
      </p>
      <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
        {primaryAction ? (
          <Link
            href={primaryAction.href}
            className='inline-flex  bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary-hover hover:shadow-lg'
          >
            {primaryAction.label}
          </Link>
        ) : null}
        {secondaryAction ? (
          <Link
            href={secondaryAction.href}
            className='inline-flex border border-border surface-panel px-5 py-2.5 text-sm font-semibold text-heading transition-all hover:border-primary/30 hover:text-primary dark:border-border/50'
          >
            {secondaryAction.label}
          </Link>
        ) : null}
      </div>
    </div>
  )
}
