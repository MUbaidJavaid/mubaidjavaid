import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
import { site } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
import { CheckCircle2, Mail } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Thank you',
    description: `Your message was sent to ${site.name}. You will receive a reply within 24 hours.`,
    path: '/contact/thank-you'
  }),
  robots: { index: false, follow: true }
}

export default function ContactThankYouPage () {
  return (
    <>
      <PageHeroHeader
        subtitle='Message received'
        title={
          <>
            Thank you —{' '}
            <span style={{ color: '#256e99' }}>I&apos;ll be in touch</span>
          </>
        }
        description={`Your note is on its way. I read every inquiry and typically reply within 24 hours at ${site.email}. If it&apos;s urgent, you can also reach me directly via email.`}
      />

      <section className='section-anchor surface-page pb-16 pt-4'>
        <div className='container-wide mx-auto max-w-lg'>
          <div className='border border-border/60 surface-panel p-6 text-center shadow-sm dark:border-border/50 sm:p-8'>
            <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary'>
              <CheckCircle2 className='h-8 w-8' aria-hidden />
            </div>
            <p className='mt-4 text-sm leading-relaxed text-body'>
              You can safely close this tab or continue exploring the site.
            </p>
            <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center'>
              <Link
                href='/'
                className='inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover'
              >
                Back to home
              </Link>
              <Link
                href={`mailto:${site.email}`}
                className='inline-flex items-center justify-center gap-2 rounded-lg border border-border surface-muted-soft px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-primary/40 hover:text-primary dark:border-border/50'
              >
                <Mail className='h-4 w-4' aria-hidden />
                Email {site.email}
              </Link>
            </div>
            <p className='mt-6 text-xs text-body/60'>
              Wrong inbox? Use the contact form again from{' '}
              <Link href='/contact' className='font-semibold text-primary'>
                Contact
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
