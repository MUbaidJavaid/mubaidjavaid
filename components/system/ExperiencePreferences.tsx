'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

const DISMISS_KEY = 'portfolio-prefs-banner-dismissed'

/** Light-only privacy notice — no theme controls. */
export function ExperiencePreferences () {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(DISMISS_KEY)) setVisible(true)
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

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          className='fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] left-4 right-4 z-[120] max-w-sm border border-border/80 bg-background p-4 shadow-sm lg:bottom-6 lg:left-6'
          role='dialog'
          aria-label='Privacy notice'
        >
          <div className='flex items-start justify-between gap-3'>
            <div>
              <p className='text-sm font-medium text-heading'>Local preferences</p>
              <p className='mt-1 text-xs leading-relaxed text-body'>
                Theme is light-only. Motion respects your system reduced-motion
                setting. No cross-site profiling.
              </p>
            </div>
            <button
              type='button'
              onClick={dismiss}
              className='shrink-0 p-1 text-muted-foreground hover:text-heading'
              aria-label='Dismiss'
            >
              <X className='h-4 w-4' />
            </button>
          </div>
          <button
            type='button'
            onClick={dismiss}
            className='mt-3 text-xs font-medium text-heading underline-offset-2 hover:underline'
          >
            Got it
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
