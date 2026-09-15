import { TrackedCtaLink } from '@/components/analytics/TrackedCtaLink'
import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
import { services } from '@/data/site'
import { brandType } from '@/lib/brand-system'
import { pageMetadata } from '@/lib/seo'
import { cn } from '@/lib/utils'
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
  title: 'Hire Next.js & MERN Developer',
  description:
    'Contract and freelance full-stack development: Next.js, MERN, SaaS MVPs, fintech and healthcare web apps. Based in Multan, open to remote. Discuss your project.',
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
        subtitle='Services · Hire Next.js & MERN'
        watermark='HIRE'
        title={
          <>
            Hire a full-stack
            <br />
            <span className='text-highlight'>
              Next.js & MERN engineer.
            </span>
          </>
        }
        description='Contract and freelance delivery for SaaS MVPs, fintech and healthcare web apps, and production platforms — based in Multan, available remotely.'
      >
        <div className='flex flex-wrap items-center gap-4'>
          <TrackedCtaLink
            href='/contact'
            event='discuss_project'
            detail='services_hero'
            className='cta-primary'
          >
            Discuss your project
            <ArrowUpRight size={15} aria-hidden />
          </TrackedCtaLink>
          <p className='font-mono text-xs tracking-wide text-heading/[0.35]'>
            04 offerings · one delivery path
          </p>
        </div>
      </PageHeroHeader>

      <section className='relative isolate overflow-hidden bg-background'>
        <div className='mx-auto w-full max-w-[1280px] px-6 py-6 sm:px-8 md:px-10 lg:px-12'>
          <div className='flex items-center gap-4 border-b border-heading/10 pb-5'>
            <p className='font-mono text-xs tracking-wide text-heading/[0.35]'>
              Delivery system
            </p>
            <span className='h-px flex-1 bg-heading/10' aria-hidden />
            <p className='font-mono text-xs tracking-wide text-highlight'>
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
                      <span className='flex h-11 w-11 items-center justify-center rounded-full border border-heading/[0.15] text-highlight'>
                        <Icon size={17} strokeWidth={1.55} aria-hidden />
                      </span>
                      <p className='font-mono text-xs tracking-wide text-highlight'>
                        {String(index + 1).padStart(2, '0')} · {meta?.phase}
                      </p>
                    </div>
                    <h2 className={cn('mt-6', brandType.title)}>
                      {service.title}
                    </h2>
                    <p className='mt-4 max-w-[40ch] text-sm leading-relaxed text-body md:text-base'>
                      {service.description}
                    </p>
                    <p className='mt-6 max-w-[36ch] border-l-2 border-highlight pl-4 text-sm text-heading/70'>
                      {meta?.fit}
                    </p>
                  </div>

                  <div className='border-t border-heading/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0'>
                    <p className='font-mono text-xs tracking-wide text-heading/[0.35]'>
                      What ships
                    </p>
                    <ul className='mt-4 divide-y divide-heading/10 border-y border-heading/10'>
                      {meta?.deliverables.map((item, deliverableIndex) => (
                        <li
                          key={item}
                          className='grid grid-cols-[2.25rem_1fr] gap-3 py-4 text-sm leading-relaxed text-heading'
                        >
                          <span className='font-mono text-xs text-highlight'>
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

        <section
          id='how-i-work'
          className='mx-auto w-full max-w-[1280px] border-t border-heading/10 px-6 py-14 sm:px-8 md:px-10 md:py-20 lg:px-12'
        >
          <p className='font-mono text-xs tracking-wide text-highlight'>
            How I work
          </p>
          <h2 className={cn('mt-4 max-w-[18ch]', brandType.title)}>
            Remote-ready process from Multan.
          </h2>
          <p className='mt-4 max-w-[52ch] text-sm leading-relaxed text-body md:text-base'>
            Built for founders and CTOs who want staging URLs, written scope,
            and honest timelines — not vanity “always online” claims.
          </p>
          <ol className='mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {[
              {
                t: 'Scope',
                d: 'One primary workflow, constraints, and definition of done before heavy build.'
              },
              {
                t: 'Staging',
                d: 'Clickable staging early. Decisions happen against a running product.'
              },
              {
                t: 'Async rhythm',
                d: 'PKT timezone with scheduled overlap. Weekly written updates with what changed / blocked.'
              },
              {
                t: 'Handover',
                d: 'Readable architecture, env docs, and a path your team can extend.'
              }
            ].map((item, i) => (
              <li key={item.t} className='border-t border-heading/10 pt-4'>
                <span className='font-mono text-xs text-highlight'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className='mt-2 font-display text-lg font-semibold text-heading'>
                  {item.t}
                </p>
                <p className='mt-2 text-sm leading-relaxed text-body'>{item.d}</p>
              </li>
            ))}
          </ol>
          <div className='mt-10 flex flex-wrap gap-3'>
            <Link
              href='/projects/quikpos-saas-point-of-sale'
              className='text-sm font-semibold text-heading underline-offset-4 hover:underline'
            >
              QuikPOS proof →
            </Link>
            <Link
              href='/projects/vitalis-health-healthcare-platform'
              className='text-sm font-semibold text-heading underline-offset-4 hover:underline'
            >
              Vitalis proof →
            </Link>
            <Link
              href='/blog/remote-engineer-pakistan-timezone-git-staging'
              className='text-sm font-semibold text-heading underline-offset-4 hover:underline'
            >
              Remote working notes →
            </Link>
          </div>
        </section>

        <div className='mx-auto flex w-full max-w-[1280px] flex-col gap-5 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-10 lg:px-12'>
          <div>
            <p className='font-mono text-xs tracking-wide text-heading/[0.35]'>
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
            <TrackedCtaLink
              href='/contact'
              event='discuss_project'
              detail='services_footer'
              className='group inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover'
            >
              Discuss your project
              <ArrowUpRight
                size={15}
                className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                aria-hidden
              />
            </TrackedCtaLink>
          </div>
        </div>
      </section>
    </>
  )
}
