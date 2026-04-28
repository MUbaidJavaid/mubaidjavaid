'use client'

import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
import { ClickSpark } from '@/components/ui/ClickSpark'
import { contactCta, site } from '@/data/site'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

type ContactLinkItem = {
  kicker: string
  label: string
  href: string
  external?: boolean
  icon: ReactNode
}

function getContactLinks (): ContactLinkItem[] {
  const links: ContactLinkItem[] = [
    {
      kicker: 'Email',
      label: site.email,
      href: `mailto:${site.email}`,
      icon: (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-5 w-5 stroke-primary transition-colors group-hover/link:stroke-white'
        >
          <rect x='2' y='4' width='20' height='16' rx='2' />
          <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
        </svg>
      )
    },
    {
      kicker: 'GitHub',
      label: 'View profile',
      href: site.github,
      external: true,
      icon: (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-5 w-5 stroke-primary transition-colors group-hover/link:stroke-white'
        >
          <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9.1 17.44 9 18v4' />
          <path d='M9 18c-4.51 2-5-2-7-2' />
        </svg>
      )
    }
  ]
  if (typeof site.linkedin === 'string' && site.linkedin.trim()) {
    links.push({
      kicker: 'LinkedIn',
      label: 'Connect on LinkedIn',
      href: site.linkedin.trim(),
      external: true,
      icon: (
        <Linkedin
          className='h-5 w-5 stroke-primary text-primary transition-colors group-hover/link:text-white'
          strokeWidth={1.8}
        />
      )
    })
  }
  return links
}

const budgets = ['Under $1k', '$1k - $3k', '$3k - $8k', '$8k+', "Let's discuss"]

const inputCls =
  'w-full border border-border surface-panel px-4 py-3 text-sm text-heading outline-none transition-all duration-200 placeholder:text-body/50 hover:border-body/40 focus:border-primary focus:ring-2 focus:ring-primary/15 dark:border-border/50 dark:placeholder:text-slate-500 dark:focus:ring-primary/25'

export function ContactPageClient () {
  const contactLinks = getContactLinks()
  return (
    <>
      <PageHeroHeader
        subtitle='Contact'
        title={
          <>
            Let&apos;s turn your scope into{' '}
            <span style={{ color: '#256e99' }}>production-ready delivery</span>
          </>
        }
        description={contactCta.body}
      />

      <section className='section-anchor relative overflow-hidden surface-page py-10'>
        <div className='container-wide relative z-10 space-y-8 lg:space-y-10'>
          <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
            <div className='border border-border/30 surface-panel p-5 shadow-sm dark:border-border/50'>
              <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary/75'>
                Response
              </p>
              <p className='mt-2 text-2xl font-black tracking-[-0.03em] text-heading'>
                24h
              </p>
              <p className='mt-1 text-sm leading-relaxed text-body/75'>
                I review scope and reply with a practical next step.
              </p>
            </div>
            <div className='border border-border/30 surface-panel p-5 shadow-sm dark:border-border/50'>
              <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary/75'>
                Focus
              </p>
              <p className='mt-2 text-2xl font-black tracking-[-0.03em] text-heading'>
                Product
              </p>
              <p className='mt-1 text-sm leading-relaxed text-body/75'>
                Business sites, dashboards, APIs, and full-stack builds.
              </p>
            </div>
            <div className='border border-border/30 surface-panel p-5 shadow-sm dark:border-border/50'>
              <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary/75'>
                Model
              </p>
              <p className='mt-2 text-2xl font-black tracking-[-0.03em] text-heading'>
                Flexible
              </p>
              <p className='mt-1 text-sm leading-relaxed text-body/75'>
                Freelance, contract, remote, or full-time collaboration.
              </p>
            </div>
            <div className='border border-border/30 bg-[#256e99]/[0.08] p-5 shadow-sm dark:border-border/50'>
              <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary/75'>
                Status
              </p>
              <p className='mt-2 text-2xl font-black tracking-[-0.03em] text-heading'>
                Open
              </p>
              <p className='mt-1 text-sm leading-relaxed text-body/75'>
                Available for new projects and scoped engagements.
              </p>
            </div>
          </div>

          <div className='grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10'>
            <div className='space-y-5'>
              <div className='border border-border/30 bg-white/90 p-6 shadow-sm backdrop-blur-sm dark:border-border/50 dark:bg-slate-900/85'>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-green-500/10 p-2'>
                    <span className='block h-2 w-2 rounded-full bg-green-500 animate-pulse' />
                  </div>
                  <div>
                    <p className='font-semibold text-heading'>
                      Available for new projects
                    </p>
                    <p className='text-xs text-body/60'>
                      Freelance · Contract · Remote · Full-time
                    </p>
                  </div>
                </div>
                <p className='mt-4 text-sm leading-relaxed text-body/75'>
                  Share the outcome you want, what exists today, and any hard
                  constraints. I&apos;ll come back with the most direct way to
                  move forward.
                </p>
              </div>

              <div className='grid gap-3'>
                {contactLinks.map(link => (
                  <Link
                    key={link.kicker}
                    href={link.href}
                    {...(link.external
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                    className='group/link flex items-center gap-4 border border-border/30 surface-panel p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_12px_30px_rgba(37,110,153,.08)] dark:border-border/50'
                  >
                    <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center border border-border/60 bg-[#F8FAFC] transition-all duration-200 group-hover/link:border-primary group-hover/link:bg-primary dark:border-border/50 dark:bg-slate-900/80'>
                      {link.icon}
                    </div>
                    <div className='min-w-0 flex-1'>
                      <p className='text-[10px] font-bold uppercase tracking-[0.14em] text-body/50'>
                        {link.kicker}
                      </p>
                      <p className='mt-0.5 truncate text-sm font-semibold text-heading transition-colors group-hover/link:text-primary'>
                        {link.label}
                      </p>
                    </div>
                    <span className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border/50 bg-[#F8FAFC] text-heading/40 transition-all group-hover/link:border-primary/30 group-hover/link:bg-primary/10 group-hover/link:text-primary dark:border-border/50 dark:bg-slate-900/60'>
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className='border border-border/30 surface-panel p-6 sm:p-8 lg:p-9 dark:border-border/50'>
              <div className='mb-6 space-y-2 text-center lg:text-left'>
                <p className='display-kicker'>Project inquiry</p>
                <h2 className='section-heading text-xl sm:text-2xl'>
                  Send a message
                </h2>
                <p className='mx-auto max-w-xl text-sm leading-relaxed text-body/80 lg:mx-0'>
                  I&apos;ll review your requirements and respond within 24 hours
                  with the clearest next step for scope, timeline, and
                  implementation.
                </p>
              </div>

              <form
                className='flex flex-col gap-5'
                onSubmit={e => e.preventDefault()}
              >
                <div className='grid gap-5 sm:grid-cols-2'>
                  <div className='space-y-1.5'>
                    <label
                      htmlFor='contact-name'
                      className='text-xs font-semibold tracking-[0.04em] text-body/70'
                    >
                      Full name
                    </label>
                    <input
                      id='contact-name'
                      type='text'
                      placeholder='Your full name'
                      className={inputCls}
                    />
                  </div>
                  <div className='space-y-1.5'>
                    <label
                      htmlFor='contact-email'
                      className='text-xs font-semibold tracking-[0.04em] text-body/70'
                    >
                      Email address
                    </label>
                    <input
                      id='contact-email'
                      type='email'
                      placeholder='example@company.com'
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className='space-y-1.5'>
                  <label
                    htmlFor='contact-type'
                    className='text-xs font-semibold tracking-[0.04em] text-body/70'
                  >
                    Project type
                  </label>
                  <input
                    id='contact-type'
                    type='text'
                    placeholder='e.g. Business website, dashboard, full-stack app, API workflow'
                    className={inputCls}
                  />
                </div>

                <div className='space-y-1.5'>
                  <label
                    htmlFor='contact-message'
                    className='text-xs font-semibold tracking-[0.04em] text-body/70'
                  >
                    Message
                  </label>
                  <textarea
                    id='contact-message'
                    rows={5}
                    placeholder='Tell me about your project: business goal, users, required features, current blockers, and timeline.'
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <div className='space-y-2'>
                  <p className='text-xs font-semibold tracking-[0.04em] text-body/70'>
                    Budget range
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {budgets.map((b, i) => (
                      <label key={b} className='cursor-pointer'>
                        <input
                          type='radio'
                          name='budget'
                          value={b}
                          defaultChecked={i === 0}
                          className='peer sr-only'
                        />
                        <span className='block border border-border surface-panel px-3.5 py-2 text-xs font-semibold text-body/70 transition-all duration-150 hover:border-primary/30 hover:text-heading peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground dark:border-border/50 dark:peer-checked:text-primary-foreground'>
                          {b}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <ClickSpark>
                  <button
                    type='submit'
                    className='group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden bg-primary py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,110,153,.22)] transition-all duration-200 hover:bg-[#1e5a82] hover:shadow-[0_14px_36px_rgba(37,110,153,.28)] active:scale-[0.99]'
                  >
                    Send message
                    <span className='transition-transform duration-200 group-hover:translate-x-0.5'>
                      →
                    </span>
                    <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full' />
                  </button>
                </ClickSpark>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
