import { TrackedCtaLink } from '@/components/analytics/TrackedCtaLink'
import { heroContent, site } from '@/data/site'
import { ArrowUpRight } from 'lucide-react'

/**
 * Hero — brand, one headline, one supporting line, CTA group only.
 * Socials live in the footer (Issue 7 density).
 */
export function BrandHero () {
  return (
    <section
      id='hero'
      data-hero-theme='ink'
      className='relative min-h-[100svh] overflow-hidden bg-[#06080f] text-white'
      style={{ backgroundColor: '#06080f' }}
    >
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.35]'
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.22) 0.7px, transparent 0.8px)',
          backgroundSize: '22px 22px'
        }}
      />

      <div
        className='pointer-events-none absolute -right-24 top-1/4 h-[55%] w-[50%] rounded-full bg-[hsl(211_55%_42%/0.18)] blur-3xl'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute -left-20 bottom-0 h-[40%] w-[40%] rounded-full bg-[hsl(211_48%_28%/0.35)] blur-3xl'
        aria-hidden
      />

      <div
        className='pointer-events-none absolute inset-y-0 right-0 w-[64%] max-w-3xl overflow-hidden bg-[#06080f]'
        aria-hidden
      >
        <picture>
          <source
            media='(min-width: 768px)'
            srcSet='/mubaidjavaid-hero.webp'
            type='image/webp'
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/mubaidjavaid-hero-sm.webp'
            alt=''
            width={640}
            height={1024}
            fetchPriority='high'
            decoding='sync'
            className='absolute inset-x-0 bottom-0 top-[14%] h-[86%] w-full object-cover object-top opacity-[0.38] contrast-[1.08] saturate-[0.7]'
          />
        </picture>
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(90deg, #06080f 0%, rgba(6,8,15,0.88) 28%, rgba(6,8,15,0.42) 58%, rgba(6,8,15,0.22) 100%)'
          }}
        />
        <div
          className='absolute inset-0'
          style={{ backgroundColor: 'rgba(6, 8, 15, 0.28)' }}
        />
        <div
          className='absolute inset-x-0 bottom-0 h-[32%]'
          style={{
            background: 'linear-gradient(to top, #06080f, transparent)'
          }}
        />
      </div>

      <div className='relative z-10 mx-auto flex min-h-[100svh] max-w-[1180px] flex-col justify-center px-6 pb-24 pt-28 md:px-10 lg:px-12'>
        <div className='max-w-xl lg:max-w-2xl'>
          <p className='font-mono text-xs tracking-wide text-highlight-on-ink'>
            {site.role} · {site.roleSecondary}
          </p>

          <h1 className='mt-5 font-display text-[clamp(2.75rem,6.5vw,4.75rem)] font-bold leading-[1.05] tracking-[-0.025em] text-white'>
            {site.name}
          </h1>

          <p className='mt-7 max-w-[40ch] text-base leading-relaxed text-white/65 md:text-lg'>
            {heroContent.paragraph}
          </p>

          <ul
            className='mt-5 flex max-w-xl flex-wrap gap-2.5'
            aria-label='Core skills'
          >
            {heroContent.skills.map(skill => (
              <li
                key={skill}
                className='border border-white/20 bg-white/[0.06] px-4 py-2 text-sm font-semibold tracking-tight text-white'
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className='mt-10 flex flex-wrap items-center gap-4'>
            <TrackedCtaLink
              href='/contact'
              event='discuss_project'
              detail='brand_hero'
              className='cta-primary-ink'
            >
              Discuss your project
              <ArrowUpRight className='h-3.5 w-3.5' aria-hidden />
            </TrackedCtaLink>
            <TrackedCtaLink
              href='/projects'
              event='view_work'
              detail='brand_hero'
              className='inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline'
            >
              View work
              <ArrowUpRight className='h-3.5 w-3.5' aria-hidden />
            </TrackedCtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
