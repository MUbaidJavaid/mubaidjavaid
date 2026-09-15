import { experience, site } from '@/data/site'
import type { Metadata } from 'next'

const ogImage = {
  url: site.ogImage,
  width: 1200,
  height: 630,
  alt: `${site.name} · ${site.role} · ${site.roleSecondary}`
}

export function pageMetadata (input: {
  title: string
  description: string
  path?: string
}): Metadata {
  const canonical = new URL(input.path ?? '/', site.url)
  // Layout template appends ` · ${site.name}` — do not duplicate here.
  const brandedTitle = `${input.title} · ${site.name}`

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: brandedTitle,
      description: input.description,
      url: canonical,
      siteName: site.name,
      type: 'website',
      locale: 'en',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description: input.description,
      images: [site.ogImage]
    }
  }
}

export function personJsonLd () {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}#person`,
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Multan',
      addressCountry: 'PK'
    },
    email: site.email,
    url: site.url,
    image: new URL(site.ogImage, site.url).toString(),
    sameAs: [
      site.github,
      ...(typeof site.linkedin === 'string' && site.linkedin.trim()
        ? [site.linkedin.trim()]
        : [])
    ],
    knowsAbout: [
      'Software Engineering',
      'Full-Stack Development',
      'MERN Stack',
      'Next.js',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'TypeScript',
      'Fintech',
      'Healthcare software',
      'SaaS'
    ],
    worksFor: {
      '@type': 'Organization',
      name:
        experience.roles.find(r => r.current)?.company ?? 'Evolvo-Technologies'
    }
  }
}

export function websiteJsonLd () {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: 'en',
    publisher: { '@id': `${site.url}#person` }
  }
}

/** Google ProfilePage — use only on /about (person-primary page). */
export function profilePageJsonLd () {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${site.url}about#profile`,
    url: `${site.url}about`,
    name: `About ${site.name}`,
    mainEntity: personJsonLd()
  }
}

export function contactPageJsonLd () {
  const contactUrl = new URL('/contact', site.url)
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Discuss your project · ${site.name}`,
    description:
      'Contact M Ubaid Javaid for freelance, contract, remote, and full-time full-stack opportunities.',
    url: contactUrl.toString(),
    mainEntity: { '@id': `${site.url}#person` }
  }
}

export function creativeWorkJsonLd (input: {
  name: string
  description: string
  url: string
  image?: string
  keywords?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: input.name,
    description: input.description,
    url: input.url,
    ...(input.image
      ? { image: new URL(input.image, site.url).toString() }
      : {}),
    ...(input.keywords?.length ? { keywords: input.keywords.join(', ') } : {}),
    author: { '@id': `${site.url}#person` },
    creator: { '@id': `${site.url}#person` }
  }
}

export function breadcrumbJsonLd (
  items: Array<{ name: string; path: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, site.url).toString()
    }))
  }
}
