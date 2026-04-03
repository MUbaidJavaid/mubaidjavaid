'use client'

import { useTheme } from '@/components/system/ThemeProvider'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Settings2, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const DISMISS_KEY = 'portfolio-prefs-banner-dismissed'
const CONSENT_KEY = 'portfolio-experience-consent'

/**
 * Ethical personalization: explicit consent, local-only storage, undo by clearing site data.
 * Theme and motion preferences only; no cross-site profiling.
 */
export function ExperiencePreferences () {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(DISMISS_KEY)
      if (!dismissed) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, '1')
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  const allow = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'granted')
    } catch {
      /* ignore */
    }
    dismiss()
  }

  const essentialOnly = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'essential')
      localStorage.removeItem('portfolio-theme')
    } catch {
      /* ignore */
    }
    setTheme('system')
    dismiss()
  }

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(v => !v)}
        className={cn(
          'fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))] left-4 z-[120] flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white text-heading shadow-float transition-all hover:border-primary/40 hover:text-primary dark:border-border/50 dark:bg-slate-900 dark:text-slate-100 lg:bottom-6',
          'dark:border-border/50 dark:bg-slate-900 dark:text-slate-100'
        )}
        aria-expanded={open}
        aria-controls='experience-preferences-panel'
        aria-label='Experience and privacy preferences'
      >
        <Settings2 className='h-5 w-5' aria-hidden />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id='experience-preferences-panel'
            role='dialog'
            aria-modal='true'
            aria-labelledby='prefs-title'
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className='fixed bottom-[calc(6.5rem+env(safe-area-inset-bottom,0px))] left-4 z-[121] w-[min(calc(100vw-2rem),20rem)] rounded-2xl border border-border/70 bg-white p-4 text-sm shadow-float dark:border-border/50 dark:bg-slate-900 lg:bottom-20'
          >
            <div className='flex items-start justify-between gap-2'>
              <div>
                <p
                  id='prefs-title'
                  className='font-heading font-semibold text-heading dark:text-slate-50'
                >
                  Display
                </p>
                <p className='mt-1 text-xs leading-relaxed text-body dark:text-slate-400'>
                  Theme is saved only in your browser. No analytics from this
                  control; you can reset anytime via site data.
                </p>
              </div>
              <button
                type='button'
                onClick={() => setOpen(false)}
                className='rounded-md p-1 text-body hover:bg-muted hover:text-heading dark:hover:bg-slate-800'
                aria-label='Close'
              >
                <X className='h-4 w-4' />
              </button>
            </div>
            <div className='mt-3 flex flex-wrap gap-2'>
              {(
                [
                  ['light', 'Light'],
                  ['dark', 'Dark'],
                  ['system', 'System']
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type='button'
                  onClick={() => setTheme(value)}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors',
                    theme === value
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border/80 text-body hover:border-primary/35 dark:border-border/50 dark:text-slate-300'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className='mt-3 text-[11px] leading-relaxed text-body/80 dark:text-slate-500'>
              This site does not profile visitors. Preferences help readability
              only.
            </p>
            <Link
              href='/contact'
              className='mt-2 inline-block text-[11px] font-semibold text-primary hover:underline'
              onClick={() => setOpen(false)}
            >
              Questions? Contact
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {visible ? (
          <motion.div
            role='region'
            aria-label='Privacy and display preferences'
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className='fixed bottom-4 left-4 right-4 z-[119] mx-auto max-w-lg rounded-2xl border border-border/70 bg-white/95 p-4 text-sm shadow-float backdrop-blur-md dark:border-border/50 dark:bg-slate-900/95 lg:left-auto lg:right-6'
          >
            <p className='font-medium text-heading dark:text-slate-50'>
              Remember display settings on this device?
            </p>
            <p className='mt-1 text-xs leading-relaxed text-body dark:text-slate-400'>
              Optional: saves theme only (local storage). No ads or cross-site
              profiling. You can change or clear this anytime.
            </p>
            <div className='mt-3 flex flex-wrap gap-2'>
              <button
                type='button'
                onClick={allow}
                className='rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-hover'
              >
                Allow & continue
              </button>
              <button
                type='button'
                onClick={essentialOnly}
                className='rounded-full border border-border/80 px-4 py-2 text-xs font-semibold text-heading hover:bg-muted dark:border-border/50 dark:text-slate-200 dark:hover:bg-slate-800'
              >
                Essential only
              </button>
              <button
                type='button'
                onClick={dismiss}
                className='rounded-full px-3 py-2 text-xs font-medium text-body underline-offset-2 hover:underline dark:text-slate-400'
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
