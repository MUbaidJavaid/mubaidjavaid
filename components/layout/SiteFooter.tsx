import { site } from '@/data/site'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const footerNav = [
  { href: '/projects', label: 'Work' },
  { href: '/blog', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
] as const

export function SiteFooter () {
  return (
    <footer className='relative isolate overflow-hidden bg-[hsl(215_48%_11%)] text-white'>
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.14]'
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(211 70% 72% / 0.55) 1px, transparent 1.1px)',
          backgroundSize: '22px 22px',
          maskImage:
            'linear-gradient(to right, transparent, black 55%, black 100%)'
        }}
      />
      <p
        className='pointer-events-none absolute -bottom-[0.18em] -right-[0.04em] select-none font-display text-[clamp(8rem,24vw,22rem)] font-bold leading-none tracking-[-0.09em] text-white/[0.025]'
        aria-hidden
      >
        MJ
      </p>

      <div className='relative container-wide pb-8 pt-16 md:pb-10 md:pt-24 lg:pt-28'>
        <div className='grid gap-14 border-b border-white/10 pb-16 md:pb-20 lg:grid-cols-[1.45fr_0.55fr] lg:items-end'>
          <div>
            <div className='flex items-center gap-3'>
              <span className='h-px w-10 bg-[hsl(211_55%_68%)]' />
              <p className='font-mono text-[0.625rem] uppercase tracking-[0.22em] text-[hsl(211_70%_72%)]'>
                Have a product in mind?
              </p>
            </div>
            <h2 className='mt-7 max-w-[11ch] font-display text-[clamp(2.8rem,6.8vw,6.5rem)] font-bold leading-[0.9] tracking-[-0.055em] text-white'>
              Let&apos;s build something
              <span className='block text-[hsl(211_55%_68%)]'>that lasts.</span>
            </h2>
          </div>

          <div className='lg:pb-2'>
            <p className='max-w-[34ch] text-sm leading-relaxed text-white/55'>
              Clear architecture, thoughtful interfaces, and engineering your
              team can confidently extend.
            </p>
            <Link
              href='/contact'
              className='group mt-7 inline-flex min-h-12 items-center gap-5 border-b border-white/35 pb-2 text-sm font-semibold text-white transition-colors hover:border-[hsl(211_55%_68%)]'
            >
              Start a conversation
              <ArrowUpRight
                className='h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                aria-hidden
              />
            </Link>
          </div>
        </div>

        <div className='grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.55fr] lg:py-14'>
          <div>
            <Link
              href='/'
              className='group inline-flex items-center gap-4'
              aria-label={`${site.name} home`}
            >
              <span className='flex h-11 w-11 items-center justify-center border border-white/20 font-display text-sm font-bold text-white transition-colors group-hover:border-[hsl(211_55%_68%)]'>
                MJ
              </span>
              <span>
                <span className='block font-display text-lg font-semibold text-white'>
                  {site.name}
                </span>
                <span className='mt-0.5 block font-mono text-[0.5rem] uppercase tracking-[0.16em] text-white/40'>
                  {site.role} · {site.location}
                </span>
              </span>
            </Link>
            <a
              href={`mailto:${site.email}`}
              className='mt-7 block w-fit text-sm text-white/60 transition-colors hover:text-white'
            >
              {site.email}
            </a>
          </div>

          <div className='grid grid-cols-2 gap-8'>
            <div>
              <p className='font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-white/35'>
                Navigate
              </p>
              <nav className='mt-5 flex flex-col gap-3 text-sm text-white/65'>
                {footerNav.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='w-fit transition-colors hover:text-white'
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className='font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-white/35'>
                Connect
              </p>
              <div className='mt-5 flex flex-col gap-3 text-sm text-white/65'>
                <Link
                  href={`mailto:${site.email}`}
                  className='w-fit transition-colors hover:text-white'
                >
                  Email
                </Link>
                <Link
                  href={site.github}
                  target='_blank'
                  rel='noreferrer'
                  className='w-fit transition-colors hover:text-white'
                >
                  GitHub ↗
                </Link>
                <Link
                  href={site.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  className='w-fit transition-colors hover:text-white'
                >
                  LinkedIn ↗
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between'>
          <p className='font-mono uppercase tracking-[0.12em]'>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className='font-mono uppercase tracking-[0.12em]'>
            Designed and engineered with intent
          </p>
        </div>
      </div>
    </footer>
  )
}
