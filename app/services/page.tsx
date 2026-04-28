import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
import { services } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
import { Blocks, Brain, Cog, Database, LayoutGrid, Wrench } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = 86400

const serviceIcons = [Blocks, LayoutGrid, Brain, Database, Cog, Wrench]

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

      <section className='section-anchor surface-page py-10'>
        <div className='container-wide relative z-10 space-y-6'>
          <div className='surface-muted p-5 md:p-6'>
            <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary/80'>
              How engagement works
            </p>
            <p className='mt-2 text-sm leading-[1.8] text-body'>
              We start with goals, scope, and delivery constraints, then align
              on technical direction, milestones, and communication rhythm. This
              keeps implementation transparent and reduces surprises in
              timeline, feature quality, and production readiness.
            </p>
          </div>

          <div className='grid gap-px overflow-hidden bg-border md:grid-cols-2 lg:grid-cols-3'>
            {services.map((service, index) => (
              <article
                key={service.title}
                className='group relative bg-background p-5 sm:p-6 md:p-7 transition-all duration-500 hover:bg-card active:scale-[0.98]'
              >
                <div className='mb-6 flex items-center justify-between'>
                  <div className='flex h-7 w-full items-start justify-start gap-2 transition-all duration-300 group-hover:border-primary/40 '>
                    {(() => {
                      const Icon = serviceIcons[index % serviceIcons.length]
                      return <Icon className='h-5 w-5 text-primary' />
                    })()}

                    <h3 className='font-heading text-[15px] font-bold leading-snug text-heading transition-colors duration-300 group-hover:text-primary'>
                      {service.title}
                    </h3>
                  </div>
                  {/* <div className='w-full items-end flex justify-end'>
                  <ArrowUpRight className='h-4 w-4 text-foreground/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary' />
                </div> */}
                </div>
                <p className='line-clamp-4 text-[13px] leading-relaxed text-body/70'>
                  {service.description}
                </p>
                <div className='absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100' />
              </article>
            ))}
          </div>
          <div className='flex flex-wrap gap-3'>
            <Link
              href='/projects'
              className='border border-border surface-panel px-5 py-2.5 text-sm font-semibold text-heading shadow-card transition-all duration-200 hover:bg-secondary hover:shadow-float dark:border-border/50 dark:hover:bg-slate-800'
            >
              Review Case Studies
            </Link>
            <Link
              href='/contact'
              className=' bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all duration-200  hover:bg-primary-hover hover:shadow-float'
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
