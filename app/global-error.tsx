'use client'

import { Inter, Manrope } from 'next/font/google'
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

const themeInitScript = `(function(){try{var k='portfolio-theme',t=localStorage.getItem(k);if(t==='dark'||t==='light'){document.documentElement.classList.add(t)}else{if(!t||t==='system'){if(window.matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.classList.add('dark')}}}catch(e){}})()`

export default function GlobalError ({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-body`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <div className='flex min-h-screen flex-col items-center justify-center surface-page px-6 py-16'>
          <div className='w-full max-w-md border border-border/80 bg-gradient-to-b from-white to-[#F8FAFC] px-8 py-12 text-center shadow-card dark:border-border/50 dark:from-slate-900 dark:to-slate-950'>
            <h1 className='font-heading text-xl font-bold text-heading'>
              Something went wrong
            </h1>
            <p className='mt-3 text-sm text-body'>
              Please refresh the page or try again in a moment.
            </p>
            <button
              type='button'
              onClick={() => reset()}
              className='mt-8 inline-flex w-full items-center justify-center  bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary-hover hover:shadow-lg'
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
