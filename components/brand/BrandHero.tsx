import { heroContent, site } from '@/data/site'
import { cn } from '@/lib/utils'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const socials = [
  { href: `mailto:${site.email}`, label: 'Email', Icon: Mail },
  { href: site.github, label: 'GitHub', Icon: Github },
  { href: site.linkedin, label: 'LinkedIn', Icon: Linkedin }
] as const

/**
 * Server-rendered cinematic hero.
 * Decorative portrait is a CSS background (not an <img>) so LCP is the H1.
 * No client JS / Framer Motion on first paint.
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
        className='pointer-events-none absolute -right-24 top-1/4 h-[55%] w-[50%] rounded-full bg-[hsl(211_80%_48%/0.16)] blur-3xl'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute -left-20 bottom-0 h-[40%] w-[40%] rounded-full bg-[hsl(215_48%_30%/0.35)] blur-3xl'
        aria-hidden
      />

      <div
        className='pointer-events-none absolute inset-y-0 right-0 w-[64%] max-w-3xl overflow-hidden bg-[#06080f]'
        aria-hidden
      >
        <div
          className='absolute inset-x-0 bottom-0 top-[14%] bg-cover bg-top opacity-[0.38] contrast-[1.08] saturate-[0.7]'
          style={{
            backgroundImage:
              'image-set(url("/mubaidjavaid-hero-sm.webp") 1x, url("/mubaidjavaid-hero.webp") 2x)',
            backgroundPosition: '50% 0%'
          }}
        />
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

      <p
        className='pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 font-mono text-[0.625rem] uppercase tracking-[0.42em] text-white/35 [writing-mode:vertical-rl] rotate-180 md:left-5 lg:left-8 lg:block'
        aria-hidden
      >
        product · engineer
      </p>

      <div className='relative z-10 mx-auto flex min-h-[100svh] max-w-[1180px] flex-col justify-center px-6 pb-24 pt-28 md:px-10 lg:px-12'>
        <div className='max-w-xl lg:max-w-2xl'>
          <p className='font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-[hsl(211_90%_68%)]'>
            {site.role}
          </p>

          <div className='mt-5 flex items-start gap-4 md:gap-5'>
            <span
              className='mt-3 hidden font-mono text-[0.625rem] uppercase tracking-[0.35em] text-white/40 [writing-mode:vertical-rl] rotate-180 sm:block'
              aria-hidden
            >
              Engineer
            </span>

            <h1 className='font-display text-[clamp(3.25rem,8.5vw,6.75rem)] font-bold leading-[0.92] tracking-[-0.045em] text-white'>
              {site.name}
            </h1>
          </div>

          <p className='mt-7 max-w-[34ch] text-base leading-relaxed text-white/65 md:text-lg'>
            {heroContent.line} {site.role} based in {site.location} — building
            platforms teams can ship and extend.
          </p>

          <ul
            className='mt-5 flex max-w-xl flex-wrap gap-2.5'
            aria-label='Core skills'
          >
            {heroContent.skills.map(skill => (
              <li
                key={skill}
                className='rounded-full bg-white/[0.08] px-4 py-2 text-[0.8125rem] font-semibold tracking-tight text-white'
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className='mt-10'>
            <Link
              href='/projects'
              className={cn(
                'group relative inline-flex items-center overflow-visible',
                'border border-white/40 bg-white/[0.03] px-8 py-3.5 pl-10',
                'text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-white',
                'transition-colors duration-300',
                'hover:border-white/70 hover:bg-white/[0.06]'
              )}
            >
              <span
                className='absolute left-0 top-1/2 h-[2px] w-10 origin-center -translate-x-1/2 -translate-y-1/2 bg-[hsl(211_90%_60%)] transition-transform duration-300 group-hover:scale-x-125'
                aria-hidden
              />
              View work
            </Link>
          </div>
        </div>
      </div>

      <div className='absolute bottom-8 left-5 z-20 hidden flex-col gap-4 md:left-8 lg:flex'>
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
            aria-label={label}
            className='text-white/45 transition-colors hover:text-[hsl(211_90%_68%)]'
          >
            <Icon size={16} strokeWidth={1.5} />
          </a>
        ))}
      </div>

      <nav
        className='absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center md:right-8 lg:flex'
        aria-label='Section shortcuts'
      >
        <div className='flex flex-col items-center gap-5'>
          {['#proof', '#impact', '#contact'].map((href, i) => (
            <a
              key={href}
              href={href}
              className='flex h-4 w-4 items-center justify-center'
              aria-label={['Scroll', 'Work', 'Connect'][i]}
            >
              <span
                className={cn(
                  'h-1.5 w-1.5 rounded-full bg-white/25',
                  i === 0 && 'bg-[hsl(211_90%_60%)]'
                )}
                aria-hidden
              />
            </a>
          ))}
        </div>
        <a
          href='#proof'
          className='mt-10 font-mono text-[0.5625rem] uppercase tracking-[0.35em] text-white/40 [writing-mode:vertical-rl]'
        >
          Scroll
        </a>
      </nav>

      <div className='absolute bottom-6 left-0 right-0 z-20 flex items-center justify-between px-6 lg:hidden'>
        <div className='flex gap-4'>
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={label}
              className='text-white/50'
            >
              <Icon size={16} strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <a
          href='#proof'
          className='font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-white/40'
        >
          Scroll ↓
        </a>
      </div>
    </section>
  )
}
