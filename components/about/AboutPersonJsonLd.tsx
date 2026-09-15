import { profilePageJsonLd } from '@/lib/seo'

/** About page — ProfilePage + Person (Google-documented ProfilePage use case). */
export function AboutPersonJsonLd () {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd()) }}
    />
  )
}
