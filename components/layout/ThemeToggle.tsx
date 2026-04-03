'use client'

import { useTheme } from '@/components/system/ThemeProvider'
import { cn } from '@/lib/utils'
import { Monitor, Moon, Sun } from 'lucide-react'

export function ThemeToggle ({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()

  const cycle = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  const Icon =
    theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor
  const label =
    theme === 'light'
      ? 'Light theme'
      : theme === 'dark'
        ? 'Dark theme'
        : 'System theme'

  return (
    <button
      type='button'
      onClick={cycle}
      aria-label={`${label}. Click to change appearance.`}
      title={`${label}: click to cycle`}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-white/80 text-heading shadow-sm transition-colors hover:border-primary/35 hover:bg-primary/5 hover:text-primary dark:border-border/50 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-primary/15',
        className
      )}
    >
      <Icon className='h-4 w-4' aria-hidden />
    </button>
  )
}
