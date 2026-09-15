import { pageMetadata, contactPageJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'
import { ContactPageClient } from './ContactPageClient'

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact for freelance, contract, or full-time full-stack work. Form, email, LinkedIn, GitHub.',
  path: '/contact'
})

export default function ContactPage () {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageJsonLd())
        }}
      />
      <ContactPageClient />
    </>
  )
}
