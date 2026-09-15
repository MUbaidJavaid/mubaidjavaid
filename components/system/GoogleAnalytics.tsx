import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

/** gtag loads after the page is idle so it cannot steal LCP / TBT. */
export function GoogleAnalytics () {
  if (!GA_ID || process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy='lazyOnload'
      />
      <Script id='google-analytics' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { transport_type: 'beacon' });
        `}
      </Script>
    </>
  )
}
