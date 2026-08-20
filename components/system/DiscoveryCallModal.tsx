'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { DiscoveryCallModalHero } from '@/components/system/DiscoveryCallModalHero'

interface DiscoveryCallModalProps {
  showDelay?: number // milliseconds before showing the modal
  imageSrc?: string
}

export function DiscoveryCallModal ({
  showDelay = 5000,
  imageSrc = '/images/portfolio-marking.png'
}: DiscoveryCallModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Check if modal has already been dismissed in this session
    const sessionDismissed = sessionStorage.getItem('discovery_modal_dismissed')

    if (sessionDismissed) {
      return // Don't show if already dismissed in this session
    }

    // Set timer to show modal after delay
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, showDelay)

    return () => clearTimeout(timer)
  }, [showDelay])

  const handleClose = () => {
    setIsOpen(false)
    // Mark as dismissed for this session only
    // When user closes website and reopens, this will be cleared
    sessionStorage.setItem('discovery_modal_dismissed', 'true')
  }

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key='backdrop'
            className='fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            aria-hidden
          />

          {/* Modal - Properly centered */}
          <motion.div
            key='modal'
            className='fixed inset-0 z-[1000] flex items-center justify-center p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='relative flex h-[min(85vh,720px)] max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white text-slate-900 shadow-2xl dark:bg-white dark:text-slate-900'
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className='absolute right-4 top-4 z-20 rounded-lg p-1.5 transition-colors hover:bg-gray-100'
                aria-label='Close modal'
              >
                <X size={24} className='text-gray-600' />
              </button>

              {/* Body: min-h-0 so nested overflow-y-auto can scroll (Book a Call stays reachable). */}
              <div className='flex min-h-0 flex-1 flex-row gap-0'>
                {/* Left side - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className='relative hidden min-h-0 w-1/2 flex-shrink-0 overflow-hidden sm:flex sm:flex-col'
                >
                  {imageSrc && imageSrc !== '/images/portfolio-marking.png' ? (
                    <img
                      src={imageSrc}
                      alt='Portfolio marking'
                      className='h-full min-h-[280px] w-full object-cover'
                    />
                  ) : (
                    <DiscoveryCallModalHero />
                  )}
                </motion.div>

                {/* Right side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className='flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-y-contain px-6 py-10 sm:p-10'
                >
                  <div className='mx-auto my-auto flex w-full max-w-md flex-col'>
                    {/* Badge */}
                    <div className='mb-3 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1'>
                      <div
                        className='h-2 w-2 rounded-full animate-pulse'
                        style={{ background: 'hsl(202 61% 37%)' }}
                      />
                      <span className='text-[11px] font-semibold uppercase tracking-wider text-gray-600'>
                        Limited Availability
                      </span>
                    </div>

                    {/* Headline */}
                    {/* Explicit text color: global `h2 { text-heading }` uses light ink in dark mode   invisible on this white card. */}
                    <h2 className='mb-2 text-xl font-bold leading-tight text-slate-900 sm:text-2xl'>
                      Book a Free
                      <br />
                      <span className='text-[hsl(202_61%_37%)]'>
                        Discovery Call
                      </span>
                    </h2>

                    {/* Description */}
                    <p className='mb-5 text-xs leading-relaxed text-gray-600 sm:text-sm'>
                      In your first discovery session, we'll unpack your goals,
                      explore the right approach, and outline what it takes to
                      build it right.
                    </p>

                    {/* Features list */}
                    <ul className='mb-6 space-y-2 text-xs text-gray-700 sm:text-sm'>
                      <li className='flex items-center gap-2'>
                        <span
                          className='flex-shrink-0 flex h-4 w-4 items-center justify-center rounded-full'
                          style={{ background: 'hsl(202 61% 37% / 0.1)' }}
                        >
                          <svg
                            width='10'
                            height='10'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='hsl(202 61% 37%)'
                            strokeWidth='3'
                          >
                            <polyline points='20 6 9 17 4 12' />
                          </svg>
                        </span>
                        <span>30-minute personalized consultation</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <span
                          className='flex-shrink-0 flex h-4 w-4 items-center justify-center rounded-full'
                          style={{ background: 'hsl(202 61% 37% / 0.1)' }}
                        >
                          <svg
                            width='10'
                            height='10'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='hsl(202 61% 37%)'
                            strokeWidth='3'
                          >
                            <polyline points='20 6 9 17 4 12' />
                          </svg>
                        </span>
                        <span>Discuss your project requirements</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <span
                          className='flex-shrink-0 flex h-4 w-4 items-center justify-center rounded-full'
                          style={{ background: 'hsl(202 61% 37% / 0.1)' }}
                        >
                          <svg
                            width='10'
                            height='10'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='hsl(202 61% 37%)'
                            strokeWidth='3'
                          >
                            <polyline points='20 6 9 17 4 12' />
                          </svg>
                        </span>
                        <span>Get a custom roadmap</span>
                      </li>
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href='/contact'
                      onClick={handleClose}
                      className='inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg px-5 py-3 text-xs font-semibold text-white transition-all duration-200 hover:shadow-lg active:scale-[0.98] sm:w-auto sm:py-2.5 sm:text-sm'
                      style={{
                        background:
                          'linear-gradient(160deg, hsl(202 61% 37%), hsl(202 64% 27%))',
                        boxShadow: '0 6px 22px -6px hsl(202 61% 37% / 0.45)'
                      }}
                    >
                      Book a Call
                      <svg
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        aria-hidden
                      >
                        <path d='M5 12h14M12 5l7 7-7 7' />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
