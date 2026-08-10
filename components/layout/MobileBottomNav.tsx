'use client'

import { cn } from '@/lib/utils'
import { BookOpen, FolderKanban, Home, Mail } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { href: '/', label: 'Home', Icon: Home },
  { href: '/projects', label: 'Work', Icon: FolderKanban },
  { href: '/blog', label: 'Writing', Icon: BookOpen },
  { href: '/contact', label: 'Contact', Icon: Mail }
] as const

export function MobileBottomNav () {
  const pathname = usePathname()

  return (
    <nav
      className='fixed inset-x-0 bottom-0 z-[100] border-t border-border/70 bg-background/95 backdrop-blur-md lg:hidden'
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
                'flex min-h-[44px] min-w-0 flex-1 flex-col items-center justify-center gap-0.5 py-1 text-[10px] font-medium tracking-tight transition-colors',
                isActive ? 'text-heading' : 'text-muted-foreground hover:text-heading'
              )}
            >
              <Icon
                className='h-5 w-5 shrink-0'
                strokeWidth={isActive ? 2 : 1.6}
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
