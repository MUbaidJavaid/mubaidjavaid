import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
import { services } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
import {
  ArrowUpRight,
  Boxes,
  Gauge,
  Layers3,
  Workflow,
  type LucideIcon
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'Services',
  description:
    'Product engineering, platforms, performance, and architecture partnership — focused offerings by M Ubaid Javaid.',
  path: '/services'
})

const serviceMeta: Array<{
  Icon: LucideIcon
  phase: string
  deliverables: string[]
  fit: string
}> = [
  {
    Icon: Boxes,
    phase: 'Build',
    deliverables: [
      'Discovery → architecture → interface → APIs → launch',
      'Auth, data models, and workflows that hold up in real use',
      'A maintainable codebase your team can extend'
    ],
    fit: 'Best when you need one engineer to own the product end-to-end.'
  },
  {
    Icon: Layers3,
    phase: 'Operate',
    deliverables: [
      'Multi-tenant tenancy and permission models',
      'Admin tools and operational dashboards',
      'Billing and role-aware workflows for daily teams'
    ],
    fit: 'Best for SaaS and internal platforms with real operators.'
  },
  {
    Icon: Gauge,
    phase: 'Optimize',
    deliverables: [
      'Rendering strategy and Core Web Vitals work',
      'Crawlable structure and technical SEO foundations',
      'Caching and performance budgets that stick'
    ],
    fit: 'Best when the product works but feels slow or invisible.'
  },
  {
    Icon: Workflow,
    phase: 'Partner',
    deliverables: [
      'Technical planning and module boundaries',
      'Delivery sequencing that reduces rework',
      'Clear trade-offs before the build expands'
    ],
    fit: 'Best when scope is messy and decisions need a product engineer.'
  }
]

export default function ServicesPage () {
  return (
    <>
      <PageHeroHeader
        subtitle='Services · Focused offerings'
        watermark='SHIP'
        title={
          <>
            Clear scope.
            <span className='block text-[hsl(211_48%_42%)]'>
              Production delivery.
            </span>
          </>
        }
        description='Structured implementation for teams that need dependable full-stack execution—clearer journeys, reliable systems, and maintainable code.'
      >
        <div className='flex flex-wrap items-center gap-4'>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover'
          >
            Start a project
            <ArrowUpRight size={15} aria-hidden />
          </Link>
          <p className='font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-heading/[0.35]'>
            04 offerings · one delivery path
          </p>
        </div>
      </PageHeroHeader>

      <section className='relative isolate overflow-hidden bg-background'>
        <div className='mx-auto w-full max-w-[1280px] px-6 py-6 sm:px-8 md:px-10 lg:px-12'>
          <div className='flex items-center gap-4 border-b border-heading/10 pb-5'>
            <p className='font-mono text-[0.625rem] uppercase tracking-[0.18em] text-heading/[0.35]'>
              Delivery system
            </p>
            <span className='h-px flex-1 bg-heading/10' aria-hidden />
            <p className='font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-[hsl(211_48%_42%)]'>
              Scope → Ship → Handover
            </p>
          </div>
        </div>

        <ul>
          {services.map((service, index) => {
            const meta = serviceMeta[index]
            const Icon = meta?.Icon ?? Boxes
            return (
              <li
                key={service.title}
                className='border-b border-heading/10'
              >
                <article className='mx-auto grid w-full max-w-[1280px] gap-8 px-6 py-12 sm:px-8 md:px-10 md:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-12'>
                  <div>
                    <div className='flex items-center gap-3'>
                      <span className='flex h-11 w-11 items-center justify-center rounded-full border border-heading/[0.15] text-[hsl(211_48%_42%)]'>
                        <Icon size={17} strokeWidth={1.55} aria-hidden />
                      </span>
                      <p className='font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[hsl(211_48%_42%)]'>
                        {String(index + 1).padStart(2, '0')} · {meta?.phase}
                      </p>
                    </div>
                    <h2 className='mt-6 font-display text-[clamp(1.8rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-tight text-heading'>
                      {service.title}
                    </h2>
                    <p className='mt-4 max-w-[40ch] text-sm leading-relaxed text-body md:text-base'>
                      {service.description}
                    </p>
                    <p className='mt-6 max-w-[36ch] border-l-2 border-[hsl(211_48%_42%)] pl-4 text-sm text-heading/70'>
                      {meta?.fit}
                    </p>
                  </div>

                  <div className='border-t border-heading/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0'>
                    <p className='font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-heading/[0.35]'>
                      What ships
                    </p>
                    <ul className='mt-4 divide-y divide-heading/10 border-y border-heading/10'>
                      {meta?.deliverables.map((item, deliverableIndex) => (
                        <li
                          key={item}
                          className='grid grid-cols-[2.25rem_1fr] gap-3 py-4 text-sm leading-relaxed text-heading'
                        >
                          <span className='font-mono text-[0.5625rem] text-[hsl(211_48%_42%)]'>
                            {String(deliverableIndex + 1).padStart(2, '0')}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>

        <div className='mx-auto flex w-full max-w-[1280px] flex-col gap-5 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-10 lg:px-12'>
          <div>
            <p className='font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-heading/[0.35]'>
              Good fit / not a fit
            </p>
            <p className='mt-3 max-w-[48ch] text-sm leading-relaxed text-body'>
              Best for founders and teams who want production systems with clear
              ownership. Not ideal for speculative UI-only experiments without a
              delivery path.
            </p>
          </div>
          <div className='flex flex-wrap gap-3'>
            <Link
              href='/projects'
              className='inline-flex border border-border px-5 py-2.5 text-sm font-medium text-heading transition-colors hover:border-heading'
            >
              Review case studies
            </Link>
            <Link
              href='/contact'
              className='group inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover'
            >
              Start a conversation
              <ArrowUpRight
                size={15}
                className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
