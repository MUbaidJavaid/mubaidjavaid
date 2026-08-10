import { experience, site } from '@/data/site'

export function AboutPersonJsonLd () {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    url: `${site.url}about`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Multan',
      addressCountry: 'PK'
    },
    knowsAbout: [
      'Product Engineering',
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'TypeScript',
      'SaaS platforms',
      'REST APIs'
    ],
    worksFor: {
      '@type': 'Organization',
      name: experience.roles.find(r => r.current)?.company ?? 'Evolvo-Technologies'
    }
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
