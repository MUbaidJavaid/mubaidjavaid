'use client'

import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
import { ClickSpark } from '@/components/ui/ClickSpark'
import { LottiePlayer } from '@/components/ui/LottiePlayer'
import { contactCta, site } from '@/data/site'
import { lottieAssets } from '@/lib/lottie-assets'
import {
  BUDGET_OPTIONS,
  contactPayloadSchema,
  type ContactPayload
} from '@/lib/contact-schema'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  AlertCircle,
  ArrowRight,
  Github,
  Linkedin,
  Loader2,
  Mail
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

type ContactLinkItem = {
  kicker: string
  label: string
  href: string
  external?: boolean
  icon: typeof Mail
}

function getContactLinks (): ContactLinkItem[] {
  const links: ContactLinkItem[] = [
    {
      kicker: 'Email',
      label: site.email,
      href: `mailto:${site.email}`,
      icon: Mail
    },
    {
      kicker: 'GitHub',
      label: 'github.com profile',
      href: site.github,
      external: true,
      icon: Github
    }
  ]
  if (typeof site.linkedin === 'string' && site.linkedin.trim()) {
    links.push({
      kicker: 'LinkedIn',
      label: 'Connect professionally',
      href: site.linkedin.trim(),
      external: true,
      icon: Linkedin
    })
  }
  return links
}

const inputCls =
  'w-full border border-border/55 bg-transparent px-4 py-3 text-sm text-heading outline-none transition-colors duration-200 placeholder:text-body/40 hover:border-primary/25 focus:border-primary focus:ring-1 focus:ring-primary/20 dark:border-border/40'

const inputErrorCls =
  'border-red-400 focus:border-red-500 focus:ring-red-500/20 dark:border-red-500/60'

export function ContactPageClient () {
  const router = useRouter()
  const contactLinks = getContactLinks()
  const [submitting, setSubmitting] = useState(false)
  const [submitBanner, setSubmitBanner] = useState<null | {
    tone: 'pending' | 'error' | 'success'
    title: string
    detail?: string
  }>(null)

  const SUBMIT_TOAST = 'contact-form-submit'

  const form = useForm<ContactPayload>({
    resolver: zodResolver(contactPayloadSchema),
    defaultValues: {
      name: '',
      email: '',
      projectType: '',
      message: '',
      budget: BUDGET_OPTIONS[0]
    }
  })

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = form

  const budgetValue = watch('budget')

  async function onSubmit (data: ContactPayload) {
    setSubmitting(true)
    setSubmitBanner({
      tone: 'pending',
      title: 'Sending…',
      detail: 'Please wait a moment.'
    })
    toast.loading('Sending your message…', { id: SUBMIT_TOAST })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean
        delivered?: boolean
        id?: string
        error?: string
        fieldErrors?: Record<string, string[]>
      }

      toast.dismiss(SUBMIT_TOAST)

      if (!res.ok) {
        const apiMsg =
          typeof json.error === 'string'
            ? json.error
            : 'Server rejected the request'
        const fields = json.fieldErrors
        const firstField =
          fields &&
          Object.values(fields).find(v => Array.isArray(v) && v[0])?.[0]
        const msg = firstField ? `${apiMsg}: ${firstField}` : apiMsg
        setSubmitBanner({
          tone: 'error',
          title: 'Not sent',
          detail: msg
        })
        toast.error(msg)
        return
      }

      if (!json.delivered || !json.id) {
        const msg =
          'Could not confirm delivery. Try emailing directly if this continues.'
        setSubmitBanner({ tone: 'error', title: 'Not confirmed', detail: msg })
        toast.error(msg)
        return
      }

      setSubmitBanner({
        tone: 'success',
        title: 'Sent successfully',
        detail: 'Opening thank-you…'
      })
      toast.success('Message delivered.')

      reset({
        name: '',
        email: '',
        projectType: '',
        message: '',
        budget: BUDGET_OPTIONS[0]
      })
      window.setTimeout(() => {
        router.push('/contact/thank-you')
      }, 900)
    } catch {
      toast.dismiss(SUBMIT_TOAST)
      const msg = 'Network error — check your connection or email directly.'
      setSubmitBanner({
        tone: 'error',
        title: 'Connection failed',
        detail: msg
      })
      toast.error(msg)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageHeroHeader
        subtitle='Contact'
        tagPattern='terminal'
        title={
          <>
            Let&apos;s turn your scope into{' '}
            <span style={{ color: '#256e99' }}>production-ready delivery</span>
          </>
        }
        description={contactCta.body}
      />

      <section className='section-anchor relative surface-page pb-16 pt-4 md:pb-20 md:pt-6'>
        <div className='container-wide relative z-10 space-y-10 md:space-y-12'>
          {/* Quiet trust strip */}
          <div className='grid gap-6 border-y border-border/50 py-5 dark:border-border/35 md:grid-cols-3 md:gap-0 md:py-6'>
            {[
              { n: '01', t: '24h reply', d: 'Practical next step, not a generic auto-response.' },
              { n: '02', t: 'Product focus', d: 'Sites, dashboards, APIs, and full-stack builds.' },
              { n: '03', t: 'Flexible model', d: 'Freelance, contract, remote, or full-time.' }
            ].map((item, i) => (
              <div
                key={item.n}
                className={cn(
                  'md:px-6',
                  i > 0 && 'md:border-l md:border-border/50 dark:md:border-border/35',
                  i === 0 && 'md:pl-0',
                  i === 2 && 'md:pr-0'
                )}
              >
                <p className='font-mono text-[10px] font-bold tracking-[0.16em] text-primary/75'>
                  {item.n}
                </p>
                <p className='mt-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-heading'>
                  {item.t}
                </p>
                <p className='mt-1.5 text-[13px] leading-relaxed text-body/65'>
                  {item.d}
                </p>
              </div>
            ))}
          </div>

          {/* Main composition: sidebar + form */}
          <div className='grid min-w-0 gap-8 lg:grid-cols-[minmax(0,17.5rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] xl:gap-14'>
            {/* Sidebar */}
            <aside className='min-w-0 space-y-6 lg:sticky lg:top-28 lg:self-start'>
              <div className='border border-border/55 p-5 dark:border-border/40'>
                <div className='flex items-center gap-2'>
                  <span
                    className='h-2 w-2 bg-emerald-500'
                    aria-hidden
                  />
                  <p className='font-mono text-[10px] font-bold tracking-[0.16em] text-primary'>
                    AVAILABLE
                  </p>
                </div>
                <p className='mt-3 text-[15px] font-semibold leading-snug text-heading'>
                  Open for new scoped work
                </p>
                <p className='mt-2 text-[13px] leading-relaxed text-body/65'>
                  Share goals, constraints, and timeline — I&apos;ll reply with
                  the clearest path forward.
                </p>
                <div className='mt-4 border-t border-border/45 pt-4 dark:border-border/35'>
                  <LottiePlayer
                    src={lottieAssets.contactMail}
                    className='mx-auto h-[140px] w-full max-w-[200px]'
                    aria-label='Email outreach animation'
                    speed={0.85}
                  />
                </div>
              </div>

              <div>
                <p className='font-mono text-[10px] font-bold tracking-[0.16em] text-body/45'>
                  DIRECT
                </p>
                <ul className='mt-3 space-y-2'>
                  {contactLinks.map(link => {
                    const Icon = link.icon
                    return (
                      <li key={link.kicker}>
                        <Link
                          href={link.href}
                          {...(link.external
                            ? { target: '_blank', rel: 'noreferrer' }
                            : {})}
                          className='group flex items-center gap-3 border border-border/50 px-3.5 py-3 transition-colors hover:border-primary/30 dark:border-border/35'
                        >
                          <Icon
                            className='h-4 w-4 shrink-0 text-primary'
                            strokeWidth={1.75}
                            aria-hidden
                          />
                          <span className='min-w-0 flex-1'>
                            <span className='block text-[10px] font-bold uppercase tracking-[0.12em] text-body/45'>
                              {link.kicker}
                            </span>
                            <span className='mt-0.5 block truncate text-[13px] font-semibold text-heading transition-colors group-hover:text-primary'>
                              {link.label}
                            </span>
                          </span>
                          <ArrowRight className='h-3.5 w-3.5 shrink-0 text-body/30 transition-transform group-hover:translate-x-0.5 group-hover:text-primary' />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </aside>

            {/* Form */}
            <div className='min-w-0 border border-border/55 dark:border-border/40'>
              <div className='border-b border-border/50 px-5 py-5 dark:border-border/35 sm:px-8 sm:py-6'>
                <p className='font-mono text-[10px] font-bold tracking-[0.16em] text-primary'>
                  PROJECT INQUIRY
                </p>
                <h2 className='mt-2 font-heading text-[1.2rem] font-semibold uppercase tracking-[0.03em] text-heading sm:text-[1.3rem]'>
                  Send a message
                </h2>
                <p className='mt-2 max-w-xl text-[13px] leading-relaxed text-body/65 sm:text-sm'>
                  Include outcome, current state, and any hard constraints. I
                  reply within 24 hours.
                </p>
              </div>

              <form
                className='flex flex-col gap-5 px-5 py-6 sm:gap-6 sm:px-8 sm:py-8'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div className='grid gap-4 sm:grid-cols-2 sm:gap-5'>
                  <div className='space-y-1.5'>
                    <label
                      htmlFor='contact-name'
                      className='text-[11px] font-bold uppercase tracking-[0.08em] text-body/55'
                    >
                      Full name
                    </label>
                    <input
                      id='contact-name'
                      type='text'
                      autoComplete='name'
                      placeholder='Your full name'
                      maxLength={120}
                      className={cn(inputCls, errors.name && inputErrorCls)}
                      {...register('name')}
                    />
                    {errors.name ? (
                      <p className='text-xs text-red-600 dark:text-red-400'>
                        {errors.name.message}
                      </p>
                    ) : null}
                  </div>
                  <div className='space-y-1.5'>
                    <label
                      htmlFor='contact-email'
                      className='text-[11px] font-bold uppercase tracking-[0.08em] text-body/55'
                    >
                      Email address
                    </label>
                    <input
                      id='contact-email'
                      type='email'
                      autoComplete='email'
                      placeholder='you@company.com'
                      maxLength={254}
                      className={cn(inputCls, errors.email && inputErrorCls)}
                      {...register('email')}
                    />
                    {errors.email ? (
                      <p className='text-xs text-red-600 dark:text-red-400'>
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className='space-y-1.5'>
                  <label
                    htmlFor='contact-type'
                    className='text-[11px] font-bold uppercase tracking-[0.08em] text-body/55'
                  >
                    Project type
                  </label>
                  <input
                    id='contact-type'
                    type='text'
                    placeholder='Business website, dashboard, API, full-stack app…'
                    maxLength={200}
                    className={cn(inputCls, errors.projectType && inputErrorCls)}
                    {...register('projectType')}
                  />
                  {errors.projectType ? (
                    <p className='text-xs text-red-600 dark:text-red-400'>
                      {errors.projectType.message}
                    </p>
                  ) : null}
                </div>

                <div className='space-y-1.5'>
                  <label
                    htmlFor='contact-message'
                    className='text-[11px] font-bold uppercase tracking-[0.08em] text-body/55'
                  >
                    Message
                  </label>
                  <textarea
                    id='contact-message'
                    rows={6}
                    placeholder='Goal, users, must-haves, blockers, and timeline.'
                    maxLength={8000}
                    className={cn(
                      inputCls,
                      'resize-y min-h-[140px]',
                      errors.message && inputErrorCls
                    )}
                    {...register('message')}
                  />
                  {errors.message ? (
                    <p className='text-xs text-red-600 dark:text-red-400'>
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>

                <div className='space-y-2.5'>
                  <p className='text-[11px] font-bold uppercase tracking-[0.08em] text-body/55'>
                    Budget range
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {BUDGET_OPTIONS.map(b => (
                      <label key={b} className='cursor-pointer'>
                        <input
                          type='radio'
                          value={b}
                          className='peer sr-only'
                          checked={budgetValue === b}
                          onChange={() =>
                            form.setValue('budget', b, { shouldValidate: true })
                          }
                        />
                        <span className='block border border-border/55 px-3 py-2 text-xs font-semibold text-body/65 transition-colors hover:border-primary/30 hover:text-heading peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground dark:border-border/40'>
                          {b}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.budget ? (
                    <p className='text-xs text-red-600 dark:text-red-400'>
                      {errors.budget.message}
                    </p>
                  ) : null}
                </div>

                {submitBanner ? (
                  <div
                    role='status'
                    aria-live='polite'
                    className={cn(
                      'border text-sm',
                      submitBanner.tone === 'pending' &&
                        'flex gap-3 border-primary/30 bg-primary/[0.05] px-4 py-3',
                      submitBanner.tone === 'error' &&
                        'flex gap-3 border-red-400/50 bg-red-500/[0.05] px-4 py-3 dark:border-red-500/40',
                      submitBanner.tone === 'success' &&
                        'flex flex-col items-center gap-3 border-border/50 px-4 py-5 sm:flex-row sm:items-center'
                    )}
                  >
                    {submitBanner.tone === 'success' ? (
                      <>
                        <LottiePlayer
                          src={lottieAssets.thankYou}
                          className='h-[96px] w-[96px] shrink-0'
                          aria-label='Thank you animation'
                          loop
                          speed={1}
                        />
                        <div className='text-center sm:text-left'>
                          <p className='font-semibold text-heading'>
                            {submitBanner.title}
                          </p>
                          {submitBanner.detail ? (
                            <p className='mt-1 text-body/65'>
                              {submitBanner.detail}
                            </p>
                          ) : null}
                        </div>
                      </>
                    ) : (
                      <>
                        {submitBanner.tone === 'pending' ? (
                          <Loader2
                            className='mt-0.5 h-5 w-5 shrink-0 animate-spin text-primary'
                            aria-hidden
                          />
                        ) : (
                          <AlertCircle
                            className='mt-0.5 h-5 w-5 shrink-0 text-red-600 dark:text-red-400'
                            aria-hidden
                          />
                        )}
                        <div className='min-w-0'>
                          <p className='font-semibold text-heading'>
                            {submitBanner.title}
                          </p>
                          {submitBanner.detail ? (
                            <p className='mt-1 text-body/70'>
                              {submitBanner.detail}
                            </p>
                          ) : null}
                        </div>
                      </>
                    )}
                  </div>
                ) : null}

                <ClickSpark>
                  <button
                    type='submit'
                    disabled={submitting}
                    aria-busy={submitting}
                    className='group mt-1 flex w-full items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60'
                  >
                    {submitting ? (
                      <>
                        <Loader2 className='h-4 w-4 animate-spin' aria-hidden />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowRight className='h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5' />
                      </>
                    )}
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
