import { AboutPersonJsonLd } from '@/components/about/AboutPersonJsonLd'
import { BrandContact } from '@/components/brand/BrandContact'
import { BrandPhilosophy } from '@/components/brand/BrandPhilosophy'
import { BrandTimeline } from '@/components/brand/BrandTimeline'
import { aboutPreview, experience, heroContent, site } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description:
    'M Ubaid Javaid is a Product Engineer in Multan building web products with clear architecture, reliable backends, and lasting craft.',
  path: '/about'
})

const highlights = [
  'Architecture that stays readable after launch',
  'Interfaces that support real operational workflows',
  'Handover your team can extend without reverse-engineering'
]

export default function AboutPage () {
  const currentRole = experience.roles.find(role => role.current)

  return (
    <>
      <AboutPersonJsonLd />

      <section className='relative isolate overflow-hidden border-b border-heading/10 bg-[hsl(214_28%_98%)]'>
        <div
          className='pointer-events-none absolute inset-0 opacity-40'
          aria-hidden
          style={{
            backgroundImage:
              'linear-gradient(90deg, transparent calc(25% - 1px), hsl(215 24% 70% / 0.13) 25%, transparent calc(25% + 1px), transparent calc(75% - 1px), hsl(215 24% 70% / 0.13) 75%, transparent calc(75% + 1px))'
          }}
        />
        <p
          className='pointer-events-none absolute -right-[0.04em] top-[0.02em] select-none font-display text-[clamp(8rem,24vw,21rem)] font-bold leading-none tracking-[-0.1em] text-heading/[0.025]'
          aria-hidden
        >
          01
        </p>

        <div className='relative mx-auto grid min-h-[min(900px,calc(100svh-5rem))] w-full max-w-[1380px] gap-x-12 px-6 pb-16 pt-14 sm:px-8 md:px-10 md:pb-20 md:pt-20 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:px-12 lg:py-24 xl:gap-x-20'>
          <div className='mb-8 flex items-center justify-between lg:col-start-1 lg:mb-0 lg:self-start'>
            <p className='font-mono text-[0.625rem] uppercase tracking-[0.24em] text-[hsl(211_48%_42%)]'>
              About · {site.role}
            </p>
            <p className='hidden font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-heading/35 sm:block'>
              Multan / PK
            </p>
          </div>

          <div className='relative mx-auto w-full max-w-[470px] lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:mx-0 lg:justify-self-end lg:self-center'>
            <div
              className='absolute -left-3 -top-3 h-24 w-24 border-l border-t border-[hsl(211_48%_42%/0.55)] md:-left-5 md:-top-5'
              aria-hidden
            />
            <div className='relative aspect-[4/5] overflow-hidden bg-muted shadow-[0_35px_80px_-45px_hsl(215_35%_15%/0.55)]'>
              <Image
                src='/mubaidjavaid-hero-banaer.jpg'
                alt={`${site.name}, Product Engineer`}
                fill
                sizes='(max-width: 1024px) 90vw, 430px'
                className='object-cover object-top saturate-[0.88] transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015] hover:saturate-100'
                priority
              />
              <div
                className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(215_35%_12%/0.72)] via-transparent to-transparent'
                aria-hidden
              />
              <div className='absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-white/15 px-5 py-5 text-white md:px-6'>
                <div>
                  <p className='font-mono text-[0.5rem] uppercase tracking-[0.2em] text-white/55'>
                    Independent profile
                  </p>
                  <p className='mt-1.5 font-display text-lg font-semibold'>
                    {site.name}
                  </p>
                </div>
                <span className='flex h-8 w-8 items-center justify-center rounded-full border border-white/30'>
                  <ArrowDownRight className='h-3.5 w-3.5' aria-hidden />
                </span>
              </div>
            </div>
            <p className='absolute -right-7 top-10 hidden font-mono text-[0.5rem] uppercase tracking-[0.28em] text-heading/30 [writing-mode:vertical-rl] xl:block'>
              Product engineering · 2026
            </p>
          </div>

          <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:mt-8 lg:self-center'>
            <h1 className='max-w-[13ch] font-display text-[clamp(2.85rem,5.8vw,5.8rem)] font-bold leading-[0.9] tracking-[-0.055em] text-heading'>
              I engineer the
              <span className='block text-[hsl(211_48%_42%)]'>
                confidence to ship.
              </span>
            </h1>

            <div className='mt-8 grid gap-6 border-t border-heading/10 pt-7 md:grid-cols-[1fr_1.35fr] md:gap-10'>
              <p className='font-mono text-[0.5625rem] uppercase leading-relaxed tracking-[0.15em] text-heading/40'>
                Currently
                <span className='mt-2 block text-heading/70'>
                  {currentRole
                    ? `${currentRole.role} · ${currentRole.company}`
                    : site.role}
                </span>
              </p>
              <div>
                <p className='text-base leading-relaxed text-heading md:text-lg'>
                  {aboutPreview.bodyOne}
                </p>
                <p className='mt-3 text-sm leading-relaxed text-body'>
                  {heroContent.paragraph}
                </p>
              </div>
            </div>
          </div>

          <div className='mt-10 lg:col-start-1 lg:row-start-3 lg:mt-12'>
            <div className='grid border-y border-heading/10 sm:grid-cols-3 sm:divide-x sm:divide-heading/10'>
              {highlights.map((item, i) => (
                <div
                  key={item}
                  className='group border-b border-heading/10 py-5 last:border-b-0 sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:pr-0'
                >
                  <span className='font-mono text-[0.5625rem] text-[hsl(211_48%_42%)]'>
                    /{String(i + 1).padStart(2, '0')}
                  </span>
                  <p className='mt-3 max-w-[22ch] text-sm leading-relaxed text-heading transition-transform duration-300 group-hover:translate-x-1'>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className='mt-8 flex flex-wrap items-center gap-x-7 gap-y-4'>
              <Link
                href='/contact'
                className='group inline-flex min-h-11 items-center gap-3 bg-heading px-5 text-sm font-semibold text-white transition-colors hover:bg-[hsl(211_48%_38%)]'
              >
                Start a project
                <ArrowUpRight
                  className='h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                  aria-hidden
                />
              </Link>
              <Link
                href='/projects'
                className='group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-heading'
              >
                Explore selected work
                <span className='h-px w-8 bg-heading/25 transition-all group-hover:w-12 group-hover:bg-heading' />
              </Link>
              <Link
                href={site.github}
                target='_blank'
                rel='noreferrer'
                className='font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-heading/45 transition-colors hover:text-heading'
              >
                GitHub ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BrandTimeline />
      <BrandPhilosophy />
      <BrandContact />
    </>
  )
}
