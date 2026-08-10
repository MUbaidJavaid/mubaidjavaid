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
  display: 'swap'
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap'
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: {
    icon: '/mubaidjavaid.png',
    apple: '/mubaidjavaid.png'
  },
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`
  },
  description: site.description,
  keywords: [
    'M Ubaid Javaid',
    'Product Engineer',
    'Full-Stack Product Engineer',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'MERN',
    'Web Product Development',
    'Multan',
    'Pakistan'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: `${site.name} · ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
    images: [
      {
        url: '/mubaidjavaid.png',
        alt: `${site.name} · Product Engineer`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} · ${site.role}`,
    description: site.description,
    images: ['/mubaidjavaid.png']
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
