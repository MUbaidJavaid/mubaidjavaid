import { site } from '@/data/site'
import type { MetadataRoute } from 'next'

export default function robots (): MetadataRoute.Robots {
  const origin = new URL(site.url).origin

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/contact/thank-you']
      }
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin
  }
}
