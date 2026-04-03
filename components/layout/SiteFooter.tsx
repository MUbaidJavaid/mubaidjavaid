import { site } from '@/data/site'
import Link from 'next/link'

export function SiteFooter () {
  return (
    <footer className='section-anchor relative overflow-hidden surface-muted'>
      {/* Large background name - hidden on mobile, visible from sm and up */}
      <div
        className='pointer-events-none absolute inset-0 hidden items-center justify-center overflow-visible px-4 py-8 select-none sm:flex sm:px-6'
        aria-hidden
      >
        <span
          className='whitespace-nowrap font-heading font-extrabold leading-none tracking-tighter text-slate-300/[0.07] dark:text-slate-500/[0.08]'
          style={{
            letterSpacing: '-0.02em',
            fontSize: 'clamp(11.68rem, min(22vw, 12vh), 13rem)'
          }}
        >
          {site.name}
        </span>
      </div>

      {/* Availability CTA row */}
      <div className='relative z-10 border-y border-border/80 surface-panel'>
        <div className='container-wide flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <p className='text-[0.69rem] font-semibold uppercase tracking-[0.2em] text-primary'>
              Open to work
            </p>
            <p className='mt-1 text-sm font-semibold text-heading sm:text-base'>
              Available for freelance, contract, and full-time roles.
            </p>
          </div>
          <Link
            href='/contact'
            className='inline-flex self-start bg-[linear-gradient(165deg,#2872A1,#1F5F86)] px-4 py-2 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:brightness-[1.03] hover:shadow-float sm:self-auto'
          >
            Start a Conversation
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className='container-wide relative z-10 grid gap-7 py-10 md:grid-cols-[1.6fr_1fr_1fr]'>
        <div className='space-y-3'>
          <p className='font-heading text-lg font-semibold text-heading'>
            {site.name}
          </p>
          <p className='text-[0.69rem] font-semibold uppercase tracking-[0.14em] text-primary'>
            Full-Stack Developer · MERN Stack · Next.js
          </p>
          <p className='max-w-sm text-sm leading-relaxed text-body'>
            Building fast, maintainable, and production-ready web applications
            for businesses and product teams.
          </p>
          <p className='text-sm text-body'>{site.location}</p>
        </div>

        <div className='space-y-4'>
          <p className='text-[0.69rem] font-semibold uppercase tracking-[0.14em] text-body/70'>
            Navigation
          </p>
          <nav className='flex flex-col gap-2.5 text-sm text-body'>
            {[
              { href: '/', label: 'Home' },
              { href: '/projects', label: 'Projects' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/contact', label: 'Contact' }
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className='transition-colors hover:text-heading'
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className='space-y-4'>
          <p className='text-[0.69rem] font-semibold uppercase tracking-[0.14em] text-body/70'>
            Connect
          </p>
          <div className='flex flex-col gap-2.5 text-sm text-body'>
            <Link
              href={`mailto:${site.email}`}
              className='transition-colors hover:text-primary'
            >
              {site.email}
            </Link>
            <Link
              href={site.github}
              target='_blank'
              rel='noreferrer'
              className='transition-colors hover:text-primary'
            >
              GitHub
            </Link>
            {typeof site.linkedin === 'string' && site.linkedin.trim() ? (
              <Link
                href={site.linkedin.trim()}
                target='_blank'
                rel='noreferrer'
                className='transition-colors hover:text-primary'
              >
                LinkedIn
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className='relative z-10 border-t border-border/60 dark:border-border/50'>
        <div className='container-wide flex flex-col items-center justify-between gap-1.5 py-5 text-sm text-body sm:flex-row'>
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Full-Stack Developer · Multan, Pakistan</p>
        </div>
      </div>
    </footer>
  )
}
