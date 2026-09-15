import { pageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import { ContactPageClient } from './ContactPageClient'

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'Discuss your project',
  description:
    'Contact M Ubaid Javaid for freelance, contract, or full-time full-stack work. Next.js, MERN, and production web products. Form, email, LinkedIn, and GitHub.',
  path: '/contact'
})

export default function ContactPage () {
  return <ContactPageClient />
}
