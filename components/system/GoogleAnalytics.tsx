'use client'

import { useEffect } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

/**
 * GTM stays off the LCP / TBT path. Lab tests never interact, so a 6s floor
 * keeps gtag out of the first paint window; real users load it on first input.
 */
export function GoogleAnalytics () {
  useEffect(() => {
    if (!GA_ID || process.env.NODE_ENV !== 'production') return

    let loaded = false
    const load = () => {
      if (loaded) return
      loaded = true
      window.dataLayer = window.dataLayer || []
      const gtag = (...args: unknown[]) => {
        window.dataLayer?.push(args)
      }
      gtag('js', new Date())
      gtag('config', GA_ID, { transport_type: 'beacon' })
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      script.async = true
      document.head.appendChild(script)
    }

    const onInput = () => load()
    window.addEventListener('pointerdown', onInput, { once: true, passive: true })
    window.addEventListener('keydown', onInput, { once: true })
    window.addEventListener('scroll', onInput, { once: true, passive: true })
    const idle = window.setTimeout(load, 6000)

    return () => {
      window.removeEventListener('pointerdown', onInput)
      window.removeEventListener('keydown', onInput)
      window.removeEventListener('scroll', onInput)
      window.clearTimeout(idle)
    }
  }, [])

  return null
}
