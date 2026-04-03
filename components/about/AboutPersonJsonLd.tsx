import { experience, site } from '@/data/site'

export function AboutPersonJsonLd () {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: 'Full-Stack Developer',
    description:
      'Full-Stack Developer specialising in React, Next.js, Node.js, Express and MongoDB.',
    url: `${site.url}about`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Multan',
      addressCountry: 'PK'
    },
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'TypeScript',
      'REST APIs'
    ],
    worksFor: {
      '@type': 'Organization',
      name: experience.roles.find(r => r.current)?.company ?? 'Evolvo'
    }
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
