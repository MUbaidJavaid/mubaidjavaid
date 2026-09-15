import { MobileBottomNav } from '@/components/layout/MobileBottomNav'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { ExperiencePreferences } from '@/components/system/ExperiencePreferences'
import { GoogleAnalytics } from '@/components/system/GoogleAnalytics'
import { NavigationProgress } from '@/components/system/NavigationProgress'
import { ScrollProgressIndicator } from '@/components/system/ScrollProgressIndicator'
import { SmoothScroll } from '@/components/system/SmoothScroll'
import { site } from '@/data/site'
import { Toaster } from 'sonner'
import { personJsonLd, websiteJsonLd } from '@/lib/seo'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Plus_Jakarta_Sans, Syne } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'

/**
 * Typography research (2026 portfolio / product-engineer standards):
 * - Syne → distinctive geometric display used for creative & founder portfolios
 * - Plus Jakarta Sans → contemporary product body; warmer & more intentional than Inter/DM Sans
 * - IBM Plex Mono → technical labels only
 */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
  preload: true
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
  preload: true
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
  preload: false
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  },
  title: {
    default: `${site.name} · ${site.role} (${site.roleSecondary})`,
    template: `%s · ${site.name}`
  },
  description: site.description,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: `${site.name} · ${site.role} (${site.roleSecondary})`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
    locale: 'en',
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} · ${site.role}`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} · ${site.role} (${site.roleSecondary})`,
    description: site.description,
    images: [site.ogImage]
  },
  robots: {
    index: true,
    follow: true
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = [personJsonLd(), websiteJsonLd()]

  return (
    <html lang='en' className='light'>
      <head>
        <link
          rel='preload'
          as='image'
          href='/mubaidjavaid-hero-sm.webp'
          type='image/webp'
          media='(max-width: 767px)'
          fetchPriority='high'
        />
        <link
          rel='preload'
          as='image'
          href='/mubaidjavaid-hero.webp'
          type='image/webp'
          media='(min-width: 768px)'
          fetchPriority='high'
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${syne.variable} ${ibmPlexMono.variable} flex min-h-screen flex-col pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] font-body lg:pb-0`}
      >
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <GoogleAnalytics />
        <Toaster position='top-center' richColors closeButton />
        <SmoothScroll />
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>
        <ScrollProgressIndicator />
        <SiteHeader />
        <main className='relative min-w-0 flex-1'>{children}</main>
        <SiteFooter />
        <MobileBottomNav />
        <ExperiencePreferences />
      </body>
    </html>
  )
}
