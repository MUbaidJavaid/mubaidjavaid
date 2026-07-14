import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
import { services } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'Services',
  description:
    'Explore full-stack development services by M Ubaid Javaid, including product architecture, business websites with Next.js, dashboard systems, API integrations, and ongoing product support.',
  path: '/services'
})

export default function ServicesPage () {
  return (
    <>
      <PageHeroHeader
        subtitle='Services'
        title={
          <>
            Development support built for real{' '}
            <span style={{ color: '#256e99' }}>business outcomes</span>
          </>
        }
        description='I provide structured implementation support for teams that need dependable full-stack execution, not short-term patchwork. Each engagement is scoped around outcomes: clearer user journeys, reliable system behavior, maintainable code, and measurable product progress.'
      />

      <section className='section-anchor surface-page py-10 md:py-14'>
        <div className='container-wide relative z-10 space-y-10'>
          <div className='max-w-3xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary/80'>
              How engagement works
            </p>
            <p className='mt-2 text-[15px] leading-relaxed text-body'>
              We start with goals, scope, and delivery constraints, then align
              on technical direction, milestones, and communication rhythm. This
              keeps implementation transparent and reduces surprises in
              timeline, feature quality, and production readiness.
            </p>
          </div>

          <div className='mx-auto max-w-4xl'>
            {services.map((service, index) => {
              const num = String(index + 1).padStart(2, '0')
              const isLast = index === services.length - 1

              return (
                <article key={service.title} className='group'>
                  <div className='grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 py-6 sm:gap-x-8 sm:py-7 md:gap-x-10'>
                    <span className='text-fluid-mega font-heading font-semibold leading-none tracking-tight text-heading/90'>
                      {num}
                    </span>

                    <div className='min-w-0'>
                      <div className='flex items-start gap-2'>
                        <h3 className='font-heading !font-semibold uppercase text-[1.05rem] leading-snug tracking-[0.04em] text-heading transition-colors group-hover:text-primary sm:text-lg md:text-xl'>
                          {service.title}
                        </h3>
                        <ArrowUpRight
                          className='mt-0.5 h-4 w-4 shrink-0 text-primary opacity-80 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5 sm:mt-1 sm:h-5 sm:w-5'
                          strokeWidth={2.25}
                          aria-hidden
                        />
                      </div>
                      <p className='section-copy mt-2.5 max-w-2xl text-body/80'>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {!isLast && (
                    <div
                      className='h-px w-full bg-border/80 dark:bg-border/50'
                      aria-hidden
                    />
                  )}
                </article>
              )
            })}
          </div>

          <div className='flex flex-wrap gap-3'>
            <Link
              href='/projects'
              className='border border-border surface-panel px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
            >
              Review case studies
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover'
            >
              Start a conversation
              <ArrowUpRight className='h-4 w-4' aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
