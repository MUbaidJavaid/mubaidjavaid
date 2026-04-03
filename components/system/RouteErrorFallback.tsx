'use client'

import { AlertCircle } from 'lucide-react'

type RouteErrorFallbackProps = {
  reset: () => void
  digest?: string
  /** Shown in development to aid debugging */
  errorMessage?: string
}

/**
 * Calm, production-ready error UI with clear recovery action.
 */
export function RouteErrorFallback ({
  reset,
  digest,
  errorMessage
}: RouteErrorFallbackProps) {
  const isDev = process.env.NODE_ENV === 'development'

  return (
    <section className='section-anchor min-h-[55vh] surface-page py-16 md:py-24'>
      <div className='container-wide flex justify-center'>
        <div className='w-full max-w-md border border-border/80 bg-gradient-to-b from-white to-[#F8FAFC] px-8 py-12 text-center shadow-card dark:border-border/50 dark:from-slate-900 dark:to-slate-950'>
          <div className='mx-auto mb-6 flex h-14 w-14 items-center justify-center  text-red-600'>
            <AlertCircle className='h-7 w-7' strokeWidth={1.5} aria-hidden />
          </div>
          <h1 className='font-heading text-xl font-bold text-heading sm:text-2xl'>
            Something didn&apos;t load right
          </h1>
          <p className='mt-3 text-sm leading-relaxed text-body'>
            A brief hiccup on our side. Your work is safe - try again and
            we&apos;ll reload this section.
          </p>
          {isDev && errorMessage ? (
            <p className='mt-4  px-3 py-2 text-red-700 font-mono text-[11px] text-body/80'>
              {errorMessage}
            </p>
          ) : null}
          {isDev && digest ? (
            <p className='mt-2 text-[11px] text-body/50'>Digest: {digest}</p>
          ) : null}
          <button
            type='button'
            onClick={() => reset()}
            className='mt-8 inline-flex w-full items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary-hover hover:shadow-lg active:scale-[0.98]'
          >
            Try again
          </button>
        </div>
      </div>
    </section>
  )
}
