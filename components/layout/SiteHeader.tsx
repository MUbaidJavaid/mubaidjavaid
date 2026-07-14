'use client'

import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { ClickSpark } from '@/components/ui/ClickSpark'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { navItems, site } from '@/data/site'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function SiteHeader () {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isElevated, setIsElevated] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsElevated(window.scrollY > 14)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-border/60 bg-white/85 pt-[env(safe-area-inset-top,0px)] backdrop-blur-xl transition-all duration-300 dark:border-border/50 dark:bg-slate-950/90',
        isElevated && 'shadow-card'
      )}
    >
      <div className='container-wide flex h-[70px] items-center justify-between gap-4'>
        <Link
          href='/'
          className='flex min-w-0 items-center gap-2.5 leading-tight'
          aria-label={`${site.name} home`}
        >
          <span className='inline-flex h-9 shrink-0 items-center justify-center bg-[linear-gradient(140deg,#246b96,hsl(202_64%_27%))] px-2.5 font-mono text-sm font-bold text-white shadow-card ring-1 ring-white/15'>
            {'>_'}
          </span>
          <span className='truncate font-mono text-[22px] font-bold tracking-tight text-primary'>
            {'UBAID.DEV'}
          </span>
        </Link>
        <nav className='hidden items-center gap-6 lg:flex'>
          {navItems.map(item => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(`${item.href}/`))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative pb-1 text-[15px] font-medium text-body transition-colors hover:text-primary',
                  isActive && 'text-heading'
                )}
              >
                {item.label}
                {isActive && (
                  <span className='pointer-events-none absolute inset-x-0 -bottom-0.5 mx-auto h-[2px] w-6 rounded-full bg-primary' />
                )}
              </Link>
            )
          })}
        </nav>

        <div className='hidden items-center gap-2 lg:flex'>
          {/* <ThemeToggle /> */}
          <span className='inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-body dark:text-slate-400'>
            <span className='h-1.5 w-1.5 rounded-full bg-primary' />
            Open to work
          </span>
          <ClickSpark>
            <MagneticButton
              href='/contact'
              className='inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-card transition-[box-shadow,background-color] duration-200 hover:bg-primary-hover hover:shadow-float'
            >
              Hire Me
            </MagneticButton>
          </ClickSpark>
        </div>

        <button
          type='button'
          aria-label='Toggle menu'
          className='inline-flex border border-border/90 bg-white p-2.5 text-heading shadow-card dark:border-border/60 dark:bg-slate-900 dark:text-slate-100 lg:hidden'
          onClick={() => setIsOpen(value => !value)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className='border-t border-border bg-white/95 px-5 py-4 backdrop-blur-lg dark:border-border/50 dark:bg-slate-950/95 lg:hidden'>
          <div className='container-wide space-y-1'>
            {navItems.map(item => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block  px-3.5 py-2.5 text-[15px] font-medium text-body transition-colors hover:bg-secondary hover:text-heading',
                    isActive && 'bg-slate-900 text-white hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className='mt-3 flex items-center justify-between gap-2'>
              <ThemeToggle />
              <Link
                href='/contact'
                onClick={() => setIsOpen(false)}
                className='inline-flex flex-1 items-center justify-center bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover'
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
