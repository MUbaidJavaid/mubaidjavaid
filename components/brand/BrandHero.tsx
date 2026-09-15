import { TrackedCtaLink } from '@/components/analytics/TrackedCtaLink'
import { heroContent, site } from '@/data/site'
import { cn } from '@/lib/utils'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

const socials = [
  { href: `mailto:${site.email}`, label: 'Email', Icon: Mail },
  { href: site.github, label: 'GitHub', Icon: Github },
  { href: site.linkedin, label: 'LinkedIn', Icon: Linkedin }
] as const

const sectionShortcuts = [
  { href: '#proof', label: 'Proof' },
  { href: '#impact', label: 'Impact' },
  { href: '#contact', label: 'Contact' }
] as const

/**
 * Server-rendered cinematic hero. Portrait is a real <img> with
 * fetchPriority=high so Lighthouse can discover the LCP request from HTML.
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

      <p
        className='pointer-events-none absolute bottom-[-0.08em] right-[-0.04em] select-none font-display text-[clamp(5rem,22vw,14rem)] font-bold leading-none tracking-[-0.06em] text-white/[0.04]'
        aria-hidden
      >
        MERN
      </p>

      <div className='relative z-10 mx-auto flex min-h-[100svh] max-w-[1180px] flex-col justify-center px-6 pb-28 pt-28 md:px-10 lg:px-12'>
        <div className='max-w-xl lg:max-w-2xl'>
          {/* Issue 5: ≥12px; Issue 3/4 style — sentence case, not long all-caps */}
          <p className='font-mono text-xs tracking-wide text-highlight-on-ink'>
            {site.role} · {site.roleSecondary}
          </p>

          <h1 className='mt-5 font-display text-[clamp(3.25rem,8.5vw,6.75rem)] font-bold leading-[0.92] tracking-[-0.045em] text-white'>
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

          {/* Issue 6 + 18: sentence-case primary CTA, shared ink style */}
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

          {/* Issue 15: socials inside content grid, not viewport edge */}
          <div className='mt-10 flex items-center gap-5'>
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className='inline-flex min-h-11 items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white'
              >
                <Icon size={20} strokeWidth={1.5} aria-hidden />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Issue 16: visible labels beside dots */}
      <nav
        className='absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 md:right-8 lg:block'
        aria-label='Section shortcuts'
      >
        <ul className='flex flex-col gap-3'>
          {sectionShortcuts.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  'group flex items-center justify-end gap-3 rounded-sm px-2 py-1.5 text-xs font-semibold tracking-wide text-white/70 transition-colors hover:bg-white/10 hover:text-white',
                  i === 0 && 'bg-white/10 text-white'
                )}
              >
                <span>{item.label}</span>
                <span
                  className={cn(
                    'h-1.5 w-1.5 rounded-full bg-white/25 transition-colors group-hover:bg-white',
                    i === 0 && 'bg-highlight-soft'
                  )}
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='absolute bottom-6 left-0 right-0 z-20 flex justify-end px-6 lg:hidden'>
        <a
          href='#proof'
          className='font-mono text-xs tracking-wide text-white/50'
        >
          Scroll to proof ↓
        </a>
      </div>
    </section>
  )
}
