'use client'

import { ClickSpark } from '@/components/ui/ClickSpark'
import { contactCta, site } from '@/data/site'
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
  ArrowUpRight,
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
      label: 'github.com/MUbaidJavaid',
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
  'w-full border border-heading/15 bg-transparent px-4 py-3 text-sm text-heading outline-none transition-colors duration-200 placeholder:text-muted-foreground hover:border-heading/35 focus:border-[hsl(211_48%_42%)] focus:ring-2 focus:ring-[hsl(211_48%_42%/0.15)]'

const inputErrorCls =
  'border-red-400 focus:border-red-500 focus:ring-red-500/20'

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
    <section className='relative isolate bg-[hsl(214_28%_98%)] px-3 py-8 sm:px-4 md:px-5 md:py-12 lg:px-6 lg:py-16'>
      <div className='relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[1.75rem] bg-[hsl(215_48%_13%)] md:rounded-[2.25rem]'>
        <div
          className='pointer-events-none absolute left-8 top-8 h-28 w-44 opacity-20'
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(circle, hsl(211 70% 72% / 0.7) 1px, transparent 1.1px)',
            backgroundSize: '10px 10px'
          }}
        />

        <div className='grid lg:grid-cols-[0.86fr_1.14fr]'>
          <aside className='relative px-6 py-12 text-white sm:px-8 md:px-12 md:py-16 lg:min-h-[760px] lg:px-14 lg:py-20'>
            <p className='font-mono text-[0.625rem] uppercase tracking-[0.22em] text-[hsl(211_70%_72%)]'>
              Let&apos;s work together
            </p>
            <h1 className='mt-5 max-w-[10ch] font-display text-[clamp(2.65rem,5vw,4.9rem)] font-bold leading-[0.94] tracking-[-0.045em] text-white'>
              Your vision.
              <span className='block text-[hsl(211_55%_68%)]'>
                My commitment.
              </span>
            </h1>
            <p className='mt-6 max-w-[38ch] text-sm leading-relaxed text-white/65 md:text-base'>
              {contactCta.body}
            </p>

            <div className='mt-10 flex items-center gap-3 border-y border-white/10 py-4'>
              <span className='relative flex h-2.5 w-2.5'>
                <span className='absolute -inset-1 rounded-full border border-emerald-400/30' />
                <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400' />
              </span>
              <p className='font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-white/50'>
                {contactCta.support}
              </p>
            </div>

            <p className='mt-10 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-[hsl(211_70%_72%)]'>
              Direct channels
            </p>
            <ul className='mt-3 divide-y divide-white/10 border-y border-white/10'>
              {contactLinks.map(link => {
                const Icon = link.icon
                return (
                  <li key={link.kicker}>
                    <Link
                      href={link.href}
                      {...(link.external
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                      className='group flex min-h-16 items-center gap-4 py-4'
                    >
                      <span className='flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[hsl(211_70%_72%)] transition-colors group-hover:border-white/50 group-hover:bg-white/5'>
                        <Icon size={16} strokeWidth={1.7} aria-hidden />
                      </span>
                      <span className='min-w-0 flex-1'>
                        <span className='block font-mono text-[0.5rem] uppercase tracking-[0.14em] text-white/35'>
                          {link.kicker}
                        </span>
                        <span className='mt-1 block truncate text-sm font-semibold text-white/85 transition-colors group-hover:text-white'>
                          {link.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={15}
                        className='text-white/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white'
                        aria-hidden
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className='mt-8 border-l-2 border-[hsl(211_55%_68%)] pl-4'>
              <p className='font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-[hsl(211_70%_72%)]'>
                What to include
              </p>
              <p className='mt-2 max-w-[40ch] text-sm leading-relaxed text-white/55'>
                Outcome, current state, hard constraints, and timeline. That is
                enough to start a useful reply.
              </p>
            </div>
          </aside>

          <div className='relative bg-[hsl(214_32%_97%)] px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:min-h-[760px] lg:px-16 lg:py-20'>
            <svg
              className='pointer-events-none absolute -left-[4.75rem] top-0 hidden h-full w-20 lg:block'
              viewBox='0 0 80 760'
              preserveAspectRatio='none'
              aria-hidden
            >
              <path
                d='M80 0H55C8 58 72 104 45 164C18 222 74 271 38 337C4 401 78 453 34 522C5 568 64 631 48 684C39 714 47 740 59 760H80Z'
                fill='hsl(214 32% 97%)'
              />
            </svg>
            <p
              className='pointer-events-none absolute right-5 top-2 select-none font-display text-[clamp(5rem,12vw,10rem)] font-bold leading-none tracking-[-0.08em] text-heading/[0.025]'
              aria-hidden
            >
              SAY
            </p>
            <div className='flex items-end justify-between gap-4 border-b border-heading/10 pb-5'>
              <div>
                <p className='font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[hsl(211_48%_42%)]'>
                  Project inquiry
                </p>
                <h2 className='mt-3 font-display text-2xl font-semibold tracking-tight text-heading md:text-3xl'>
                  Send a message
                </h2>
              </div>
              <p className='hidden font-mono text-[0.5rem] uppercase tracking-[0.14em] text-heading/[0.3] sm:block'>
                Reply within 24h
              </p>
            </div>

            <form
              className='mt-8 flex flex-col gap-5 sm:gap-6'
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className='grid gap-4 sm:grid-cols-2 sm:gap-5'>
                <div className='space-y-1.5'>
                  <label
                    htmlFor='contact-name'
                    className='font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-heading/[0.45]'
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
                    <p className='text-xs text-red-600'>{errors.name.message}</p>
                  ) : null}
                </div>
                <div className='space-y-1.5'>
                  <label
                    htmlFor='contact-email'
                    className='font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-heading/[0.45]'
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
                    <p className='text-xs text-red-600'>
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className='space-y-1.5'>
                <label
                  htmlFor='contact-type'
                  className='font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-heading/[0.45]'
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
                  <p className='text-xs text-red-600'>
                    {errors.projectType.message}
                  </p>
                ) : null}
              </div>

              <div className='space-y-1.5'>
                <label
                  htmlFor='contact-message'
                  className='font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-heading/[0.45]'
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
                    'min-h-[140px] resize-y',
                    errors.message && inputErrorCls
                  )}
                  {...register('message')}
                />
                {errors.message ? (
                  <p className='text-xs text-red-600'>
                    {errors.message.message}
                  </p>
                ) : null}
              </div>

              <div className='space-y-2.5'>
                <p className='font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-heading/[0.45]'>
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
                      <span className='block border border-heading/15 px-3 py-2 text-xs font-semibold text-body transition-colors hover:border-[hsl(211_48%_42%/0.4)] hover:text-heading peer-checked:border-[hsl(211_48%_42%)] peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-[hsl(211_48%_42%/0.25)]'>
                        {b}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.budget ? (
                  <p className='text-xs text-red-600'>
                    {errors.budget.message}
                  </p>
                ) : null}
              </div>

              {submitBanner ? (
                <div
                  role='status'
                  aria-live='polite'
                  className={cn(
                    'flex gap-3 border px-4 py-3 text-sm',
                    submitBanner.tone === 'pending' &&
                      'border-[hsl(211_48%_42%/0.3)] bg-[hsl(211_48%_42%/0.05)]',
                    submitBanner.tone === 'error' &&
                      'border-red-400/50 bg-red-500/[0.05]',
                    submitBanner.tone === 'success' &&
                      'border-heading/15 bg-[hsl(214_28%_98%)]'
                  )}
                >
                  {submitBanner.tone === 'pending' ? (
                    <Loader2
                      className='mt-0.5 h-5 w-5 shrink-0 animate-spin text-[hsl(211_48%_42%)]'
                      aria-hidden
                    />
                  ) : submitBanner.tone === 'error' ? (
                    <AlertCircle
                      className='mt-0.5 h-5 w-5 shrink-0 text-red-600'
                      aria-hidden
                    />
                  ) : (
                    <span className='mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[hsl(152_48%_42%)]' />
                  )}
                  <div className='min-w-0'>
                    <p className='font-semibold text-heading'>
                      {submitBanner.title}
                    </p>
                    {submitBanner.detail ? (
                      <p className='mt-1 text-body'>{submitBanner.detail}</p>
                    ) : null}
                  </div>
                </div>
              ) : null}

              <ClickSpark>
                <button
                  type='submit'
                  disabled={submitting}
                  aria-busy={submitting}
                  className='group mt-1 flex w-full items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60'
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
  )
}
