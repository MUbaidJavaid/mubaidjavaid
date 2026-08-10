'use client'

import { MagneticButton } from '@/components/ui/MagneticButton'
import { navItems, site } from '@/data/site'
import { cn } from '@/lib/utils'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function SiteHeader () {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isElevated, setIsElevated] = useState(false)
  const isHome = pathname === '/'
  /** White nav text only when header is literally over the dark hero */
  const overInkHero = isHome && !isElevated && !isOpen

  useEffect(() => {
    const onScroll = () => setIsElevated(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        'z-50 pt-[env(safe-area-inset-top,0px)] transition-[border-color,background-color,color,backdrop-filter] duration-300',
        // Home: float over dark hero so transparent bg shows ink, not page white
        isHome ? 'fixed inset-x-0 top-0' : 'sticky top-0',
        overInkHero
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-border/70 bg-background/95 text-heading backdrop-blur-md',
        isOpen && 'border-border/70 bg-background text-heading backdrop-blur-md'
      )}
    >
      <div className='container-wide flex h-[4.5rem] items-center justify-between gap-4'>
        <Link
          href='/'
          className='group flex min-w-0 items-center gap-3'
          aria-label={`${site.name} home`}
        >
          <span
            className={cn(
              'flex h-9 w-9 shrink-0 items-center justify-center border font-display text-[0.6875rem] font-bold tracking-[-0.03em] transition-colors',
              overInkHero
                ? 'border-white/30 text-white group-hover:border-white'
                : 'border-heading/20 text-heading group-hover:border-[hsl(211_48%_42%)] group-hover:text-[hsl(211_48%_42%)]'
            )}
          >
            MJ
          </span>
          <span className='min-w-0'>
            <span
              className={cn(
                'block truncate font-display text-base font-bold leading-none tracking-tight md:text-lg',
                overInkHero ? 'text-white' : 'text-heading'
              )}
            >
              {site.name}
            </span>
            <span
              className={cn(
                'mt-1 block font-mono text-[0.5rem] uppercase tracking-[0.18em]',
                overInkHero ? 'text-white/45' : 'text-muted-foreground'
              )}
            >
              {site.role}
            </span>
          </span>
        </Link>

        <nav className='hidden items-center gap-7 lg:flex' aria-label='Primary'>
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'group relative flex h-[4.5rem] items-center gap-1.5 text-[0.8125rem] font-medium tracking-wide transition-colors',
                  overInkHero
                    ? isActive
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                    : isActive
                      ? 'text-heading'
                      : 'text-body hover:text-heading'
                )}
              >
                <span
                  className={cn(
                    'font-mono text-[0.4375rem] transition-colors',
                    overInkHero ? 'text-white/30' : 'text-heading/25'
                  )}
                  aria-hidden
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.label}
                <span
                  className={cn(
                    'absolute inset-x-0 bottom-0 h-px origin-left transition-transform duration-300',
                    overInkHero ? 'bg-white' : 'bg-[hsl(211_48%_42%)]',
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  )}
                  aria-hidden
                />
              </Link>
            )
          })}
        </nav>

        <div className='hidden items-center gap-5 lg:flex'>
          <span
            className={cn(
              'inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em]',
              overInkHero ? 'text-white/60' : 'text-muted-foreground'
            )}
          >
            <span
              className={cn(
                'h-1.5 w-1.5 rounded-full',
                overInkHero ? 'bg-[hsl(211_90%_60%)]' : 'bg-highlight'
              )}
              aria-hidden
            />
            Available
          </span>
          <MagneticButton
            href='/contact'
            className={cn(
              'inline-flex items-center px-4 py-2.5 text-[0.8125rem] font-medium transition-colors',
              overInkHero
                ? 'border border-white/40 bg-white/5 text-white hover:border-white hover:bg-white/10'
                : 'bg-primary text-primary-foreground hover:bg-primary-hover'
            )}
          >
            Start a project
            <ArrowUpRight className='ml-2 h-3.5 w-3.5' aria-hidden />
          </MagneticButton>
        </div>

        <button
          type='button'
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center border transition-colors lg:hidden',
            overInkHero ? 'border-white/25' : 'border-heading/15',
            overInkHero ? 'text-white' : 'text-heading'
          )}
          onClick={() => setIsOpen(v => !v)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className='fixed inset-x-0 bottom-0 top-[calc(4.5rem+env(safe-area-inset-top,0px))] overflow-y-auto border-t border-border/70 bg-[hsl(214_28%_98%)] text-heading lg:hidden'>
          <nav
            className='container-wide flex min-h-full flex-col py-8'
            aria-label='Mobile'
          >
            <p className='mb-5 font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-[hsl(211_48%_42%)]'>
              Navigation
            </p>
            {navItems.map((item, index) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'group flex items-center border-t border-heading/10 py-4 font-display text-[clamp(1.6rem,8vw,2.3rem)] font-semibold tracking-tight text-body transition-colors last:border-b hover:text-heading',
                    isActive && 'text-heading'
                  )}
                >
                  <span className='mr-5 font-mono text-[0.5625rem] font-normal tracking-normal text-[hsl(211_48%_42%)]'>
                    /{String(index + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                  <ArrowUpRight
                    className='ml-auto h-4 w-4 text-heading/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-heading'
                    aria-hidden
                  />
                </Link>
              )
            })}
            <Link
              href='/contact'
              className='mt-8 inline-flex min-h-12 items-center justify-between bg-primary px-5 text-sm font-semibold text-primary-foreground'
            >
              Start a project
              <ArrowUpRight className='h-4 w-4' aria-hidden />
            </Link>
            <div className='mt-auto flex items-end justify-between gap-6 pt-10'>
              <p className='max-w-[24ch] text-xs leading-relaxed text-body'>
                Product engineering for teams who value clarity and lasting
                craft.
              </p>
              <span className='font-mono text-[0.5rem] uppercase tracking-[0.14em] text-heading/35'>
                {site.location}
              </span>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
