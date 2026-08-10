import { site } from '@/data/site'
import type { Metadata } from 'next'

const defaultKeywords = [
  'M Ubaid Javaid',
  'Product Engineer',
  'Product Engineer Multan',
  'Full-Stack Product Engineer',
  'Next.js Developer',
  'React Developer',
  'Node.js Developer',
  'TypeScript',
  'MERN',
  'Web Product Development',
  'Pakistan'
]

export function pageMetadata (input: {
  title: string
  description: string
  path?: string
  keywords?: string[]
}): Metadata {
  const canonical = new URL(input.path ?? '/', site.url)
  const fullTitle = `${input.title} · ${site.name}`
  const keywords = input.keywords?.length ? input.keywords : defaultKeywords

  return {
    title: fullTitle,
    description: input.description,
    keywords,
    alternates: {
      canonical
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: fullTitle,
      description: input.description,
      url: canonical,
      siteName: site.name,
      type: 'website',
      locale: 'en',
      images: [
        {
          url: '/mubaidjavaid.png',
          width: 1200,
          height: 630,
          alt: `${site.name} · Product Engineer`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: input.description,
      images: ['/mubaidjavaid.png']
    }
  }
}

export function personJsonLd () {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location
    },
    email: site.email,
    url: site.url,
    sameAs: [
      site.github,
      ...(typeof site.linkedin === 'string' && site.linkedin.trim()
        ? [site.linkedin.trim()]
        : [])
    ],
    knowsAbout: [
      'Product Engineering',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'TypeScript'
    ]
  }
}

export function websiteJsonLd () {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description
  }
}

export function contactPageJsonLd () {
  const contactUrl = new URL('/contact', site.url)
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact · ${site.name}`,
    description:
      'Contact M Ubaid Javaid for freelance, contract, remote, and full-time opportunities.',
    url: contactUrl.toString(),
    mainEntity: {
      '@type': 'Person',
      name: site.name,
      jobTitle: site.role,
      email: site.email,
      url: site.url
    }
  }
}
