import { pageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'
import { ContactPageClient } from './ContactPageClient'

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact M Ubaid Javaid for freelance, contract, remote, and full-time opportunities. Get in touch for business websites, MERN Stack applications, Next.js development, and full-stack product delivery.',
  path: '/contact',
  keywords: [
    'M Ubaid Javaid',
    'Contact M Ubaid Javaid',
    'Hire Full-Stack Developer',
    'Freelance MERN Developer Pakistan',
    'Next.js Developer hire',
    'Full-Stack Developer freelance',
    'Contract developer remote',
  ],
})

export default function ContactPage () {
  return <ContactPageClient />
}
