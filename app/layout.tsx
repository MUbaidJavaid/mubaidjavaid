import { MobileBottomNav } from '@/components/layout/MobileBottomNav'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { ExperiencePreferences } from '@/components/system/ExperiencePreferences'
import { InitialLoadSplash } from '@/components/system/InitialLoadSplash'
import { NavigationProgress } from '@/components/system/NavigationProgress'
import { ScrollProgressIndicator } from '@/components/system/ScrollProgressIndicator'
import { ThemeProvider } from '@/components/system/ThemeProvider'
import ClickSpark from '@/components/ui/ClickSpark'
import { site } from '@/data/site'
import { Toaster } from 'sonner'
import { personJsonLd, websiteJsonLd } from '@/lib/seo'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: {
    icon: '/mubaidjavaid.png',
    apple: '/mubaidjavaid.png'
  },
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  keywords: [
    'M Ubaid Javaid',
    'Full-Stack Developer',
    'MERN Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'MongoDB',
    'Express.js',
    'Web Developer Pakistan',
    'Full-Stack Developer Multan',
    'Remote Full-Stack Developer',
    'Business Website Developer',
    'Portfolio'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
    images: [
      {
        url: '/mubaidjavaid.png',
        alt: `${site.name} · Full Stack Developer · MERN-stack · Next.js`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.role}`,
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
  viewportFit: 'cover'
}

const themeInitScript = `(function(){try{var k='portfolio-theme',t=localStorage.getItem(k);if(t==='dark'||t==='light'){document.documentElement.classList.add(t)}else{if(!t||t==='system'){if(window.matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.classList.add('dark')}}}catch(e){}})()`

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = [personJsonLd(), websiteJsonLd()]

  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} flex min-h-screen flex-col pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] font-body lg:pb-0`}
      >
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <ThemeProvider>
          <Toaster position='top-center' richColors closeButton />
          <Suspense fallback={null}>
            <NavigationProgress />
          </Suspense>
          <ScrollProgressIndicator />
          <InitialLoadSplash />
          <ClickSpark global />
          <SiteHeader />

          <main className='relative min-w-0 flex-1'>{children}</main>
          <SiteFooter />
          <MobileBottomNav />
          <ExperiencePreferences />
        </ThemeProvider>
      </body>
    </html>
  )
}
