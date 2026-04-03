'use client'

import { cn } from '@/lib/utils'
import { BookOpen, FolderKanban, Home, Mail } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { href: '/', label: 'Home', Icon: Home },
  { href: '/projects', label: 'Projects', Icon: FolderKanban },
  { href: '/blog', label: 'Blog', Icon: BookOpen },
  { href: '/contact', label: 'Contact', Icon: Mail }
] as const

/**
 * Thumb-zone navigation on small screens only. Keeps primary routes one tap away.
 */
export function MobileBottomNav () {
  const pathname = usePathname()

  return (
    <nav
      className='fixed inset-x-0 bottom-0 z-[100] border-t border-border/60 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75 dark:border-border/50 dark:bg-slate-950/92 dark:supports-[backdrop-filter]:bg-slate-950/85 lg:hidden'
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-label='Primary'
    >
      <div className='mx-auto flex h-14 max-w-lg items-stretch justify-around px-1'>
        {items.map(({ href, label, Icon }) => {
          const isActive =
            pathname === href ||
            (href !== '/' && pathname.startsWith(`${href}/`))
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex min-h-[44px] min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-lg py-1 text-[10px] font-semibold tracking-tight transition-colors active:scale-[0.97]',
                isActive
                  ? 'text-primary'
                  : 'text-body/65 hover:text-heading'
              )}
            >
              <Icon
                className={cn(
                  'h-[22px] w-[22px] shrink-0',
                  isActive ? 'text-primary' : 'text-body/55'
                )}
                strokeWidth={isActive ? 2.25 : 1.75}
                aria-hidden
              />
              <span className='truncate'>{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
