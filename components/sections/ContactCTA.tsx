'use client'

import { contactCta, site } from '@/data/site'
import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { ArrowRight, Github, Mail } from 'lucide-react'
import Link from 'next/link'

const discussionTopics = [
  'Full-stack web application projects',
  'Next.js business websites',
  'Long-term product collaboration'
] as const

/** Home contact band — matches Projects / Blog section rhythm. */
export function ContactCTA () {
  return (
    <section className='section-anchor relative overflow-hidden surface-muted py-12 md:py-16'>
      <div
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_0%,hsl(202_61%_42%/0.09),transparent_68%)]'
        aria-hidden
      />

      <div className='container-wide relative z-10 space-y-8 md:space-y-10'>
        <header className='section-header gap-3'>
          <SectionDisplayTag tag='Contact' pattern='terminal' />
          <p className='section-lead'>{contactCta.body}</p>
        </header>

        <div className='mx-auto max-w-5xl overflow-hidden border border-border/60 bg-card shadow-[0_18px_44px_-26px_rgba(15,23,42,0.35)] dark:border-border/45 dark:shadow-[0_18px_44px_-26px_rgba(0,0,0,0.55)]'>
          <div className='grid lg:grid-cols-[1.2fr_0.8fr]'>
            {/* Primary ask */}
            <div className='flex flex-col justify-center gap-5 border-b border-border/55 p-6 sm:p-7 lg:border-b-0 lg:border-r dark:border-border/40'>
              <div className='space-y-2.5'>
                <h3 className='font-heading !font-semibold uppercase text-[1.15rem] leading-snug tracking-[0.03em] text-heading sm:text-[1.25rem]'>
                  {contactCta.title}
                </h3>
                <p className='flex items-center gap-2 text-[13px] text-body/65'>
                  <span
                    className='h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-500'
                    aria-hidden
                  />
                  {contactCta.support}
                </p>
              </div>

              <div className='flex flex-wrap gap-2.5'>
                <Link
                  href='/contact'
                  className='inline-flex items-center gap-2 bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover'
                >
                  Start a conversation
                  <ArrowRight className='h-3.5 w-3.5' />
                </Link>
                <Link
                  href={`mailto:${site.email}`}
                  className='inline-flex items-center gap-2 border border-border/65 px-4 py-2 text-sm font-medium text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
                >
                  <Mail className='h-3.5 w-3.5' aria-hidden />
                  Email
                </Link>
              </div>
            </div>

            {/* Good fits + links */}
            <div className='flex flex-col justify-between gap-6 p-6 sm:p-7'>
              <div>
                <p className='text-[10px] font-bold uppercase tracking-[0.16em] text-primary/80'>
                  Good fits
                </p>
                <ul className='mt-4 divide-y divide-border/55 dark:divide-border/40'>
                  {discussionTopics.map((text, i) => (
                    <li
                      key={text}
                      className='flex items-start gap-3 py-3 first:pt-0 last:pb-0'
                    >
                      <span className='mt-0.5 font-mono text-[10px] font-bold tracking-[0.14em] text-primary/70'>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className='text-[13.5px] leading-snug text-heading/85'>
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='space-y-3 border-t border-border/55 pt-5 dark:border-border/40'>
                <Link
                  href={`mailto:${site.email}`}
                  className='group flex items-center justify-between gap-3 text-[13px] text-body transition-colors hover:text-primary'
                >
                  <span className='truncate font-medium'>{site.email}</span>
                  <Mail className='h-3.5 w-3.5 shrink-0 opacity-45 transition-opacity group-hover:opacity-100' />
                </Link>
                <Link
                  href={site.github}
                  target='_blank'
                  rel='noreferrer'
                  className='group flex items-center justify-between gap-3 text-[13px] text-body transition-colors hover:text-primary'
                >
                  <span className='font-medium'>GitHub profile</span>
                  <Github className='h-3.5 w-3.5 shrink-0 opacity-45 transition-opacity group-hover:opacity-100' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
