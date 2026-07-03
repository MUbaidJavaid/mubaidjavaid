'use client'

import { useTheme } from '@/components/system/ThemeProvider'
import { site } from '@/data/site'
import Script from 'next/script'

type LinkedInProfileBadgeProps = {
  size?: 'small' | 'medium' | 'large'
  layout?: 'VERTICAL' | 'HORIZONTAL'
  className?: string
}

function LinkedInBadgeMarkup ({
  theme,
  size,
  layout,
  vanity,
  name
}: {
  theme: 'light' | 'dark'
  size: 'small' | 'medium' | 'large'
  layout: 'VERTICAL' | 'HORIZONTAL'
  vanity: string
  name: string
}) {
  const profileUrl = `https://pk.linkedin.com/in/${vanity}?trk=profile-badge`

  return (
    <div
      className='badge-base LI-profile-badge'
      data-locale='en_US'
      data-size={size}
      data-theme={theme}
      data-type={layout}
      data-vanity={vanity}
      data-version='v1'
    >
      <a className='badge-base__link LI-simple-link' href={profileUrl}>
        {name}
      </a>
    </div>
  )
}

/** Official LinkedIn profile badge — theme follows site light/dark mode. */
export function LinkedInProfileBadge ({
  size = 'medium',
  layout = 'VERTICAL',
  className
}: LinkedInProfileBadgeProps) {
  const { resolved } = useTheme()
  const vanity =
    typeof site.linkedinVanity === 'string' ? site.linkedinVanity.trim() : ''

  if (!vanity) return null

  return (
    <>
      <Script
        src='https://platform.linkedin.com/badges/js/profile.js'
        strategy='lazyOnload'
      />
      <div className={className} aria-label='LinkedIn profile badge'>
        <div className={resolved === 'dark' ? 'hidden' : undefined}>
          <LinkedInBadgeMarkup
            theme='light'
            size={size}
            layout={layout}
            vanity={vanity}
            name={site.name}
          />
        </div>
        <div className={resolved === 'light' ? 'hidden' : undefined}>
          <LinkedInBadgeMarkup
            theme='dark'
            size={size}
            layout={layout}
            vanity={vanity}
            name={site.name}
          />
        </div>
      </div>
    </>
  )
}
