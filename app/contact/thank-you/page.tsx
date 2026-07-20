import { ThankYouPanel } from '@/components/contact/ThankYouPanel'
import { site } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

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
  return <ThankYouPanel />
}
