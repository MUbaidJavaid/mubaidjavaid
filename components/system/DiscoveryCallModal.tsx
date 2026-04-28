'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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
              className='relative w-full max-w-5xl h-[80vh] rounded-2xl bg-white shadow-2xl overflow-hidden'
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className='absolute right-4 top-4 z-10 rounded-lg p-1.5 transition-colors hover:bg-gray-100'
                aria-label='Close modal'
              >
                <X size={24} className='text-gray-600' />
              </button>

              {/* Content wrapper - Horizontal layout */}
              <div className='flex flex-row gap-0 h-full overflow-hidden'>
                {/* Left side - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className='relative hidden w-1/2 flex-shrink-0 sm:flex sm:items-center sm:justify-center'
                  style={{
                    background:
                      'linear-gradient(135deg, hsl(202 61% 37% / 0.06), hsl(188 72% 34% / 0.03))'
                  }}
                >
                  {/* Hero visual with gradient background */}
                  <div className='relative h-full w-full flex items-center justify-center p-8 overflow-hidden'>
                    {imageSrc &&
                    imageSrc !== '/images/portfolio-marking.png' ? (
                      <img
                        src={imageSrc}
                        alt='Portfolio marking'
                        className='h-full w-full object-cover'
                      />
                    ) : (
                      // Beautiful geometric illustration
                      <div className='relative w-full h-full flex items-center justify-center'>
                        <svg
                          viewBox='0 0 300 300'
                          className='w-full h-full max-w-xs'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          {/* Background circles */}
                          <circle
                            cx='150'
                            cy='150'
                            r='140'
                            fill='hsl(202 61% 37% / 0.05)'
                          />
                          <circle
                            cx='150'
                            cy='150'
                            r='100'
                            fill='none'
                            stroke='hsl(202 61% 37%)'
                            strokeWidth='2'
                            opacity='0.2'
                          />

                          {/* Main icon group */}
                          <g transform='translate(150, 150)'>
                            {/* Outer rotating ring */}
                            <circle
                              r='80'
                              fill='none'
                              stroke='hsl(202 61% 37%)'
                              strokeWidth='1.5'
                              opacity='0.15'
                            />

                            {/* Laptop/screen */}
                            <rect
                              x='-45'
                              y='-35'
                              width='90'
                              height='60'
                              rx='4'
                              fill='none'
                              stroke='hsl(202 61% 37%)'
                              strokeWidth='2.5'
                            />
                            <rect
                              x='-40'
                              y='-30'
                              width='80'
                              height='45'
                              fill='hsl(202 61% 37% / 0.08)'
                            />
                            <rect
                              x='-35'
                              y='-25'
                              width='70'
                              height='35'
                              fill='hsl(202 61% 37% / 0.15)'
                            />

                            {/* Screen content dots */}
                            <circle
                              cx='-20'
                              cy='-12'
                              r='2'
                              fill='hsl(202 61% 37%)'
                            />
                            <circle
                              cx='0'
                              cy='-12'
                              r='2'
                              fill='hsl(202 61% 37%)'
                            />
                            <circle
                              cx='20'
                              cy='-12'
                              r='2'
                              fill='hsl(202 61% 37%)'
                            />
                            <line
                              x1='-25'
                              y1='-5'
                              x2='25'
                              y2='-5'
                              stroke='hsl(202 61% 37%)'
                              strokeWidth='1'
                              opacity='0.4'
                            />

                            {/* Keyboard base */}
                            <rect
                              x='-50'
                              y='28'
                              width='100'
                              height='8'
                              rx='2'
                              fill='hsl(202 61% 37% / 0.12)'
                              stroke='hsl(202 61% 37%)'
                              strokeWidth='1.5'
                            />

                            {/* Decorative elements */}
                            <circle
                              cx='-65'
                              cy='-50'
                              r='3'
                              fill='hsl(188 72% 34%)'
                              opacity='0.6'
                            />
                            <circle
                              cx='70'
                              cy='60'
                              r='2.5'
                              fill='hsl(202 61% 37%)'
                              opacity='0.4'
                            />
                          </g>

                          {/* Corner accents */}
                          <rect
                            x='20'
                            y='20'
                            width='20'
                            height='2'
                            fill='hsl(202 61% 37%)'
                            opacity='0.3'
                          />
                          <rect
                            x='260'
                            y='260'
                            width='20'
                            height='2'
                            fill='hsl(202 61% 37%)'
                            opacity='0.3'
                          />
                        </svg>

                        {/* Animated gradient overlay */}
                        <motion.div
                          className='absolute inset-0 rounded-lg'
                          style={{
                            background:
                              'radial-gradient(circle at 30% 30%, hsl(202 61% 37% / 0.1) 0%, transparent 50%)'
                          }}
                          animate={{
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Right side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className='flex-1 flex flex-col justify-center p-8'
                >
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
                  <h2 className='mb-2 text-xl font-bold leading-tight text-heading sm:text-2xl'>
                    Book a Free
                    <br />
                    <span style={{ color: 'hsl(202 61% 37%)' }}>
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
                        className='flex-shrink-0 rounded-full flex items-center justify-center w-4 h-4'
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
                        className='flex-shrink-0 rounded-full flex items-center justify-center w-4 h-4'
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
                        className='flex-shrink-0 rounded-full flex items-center justify-center w-4 h-4'
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
                    className='inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:shadow-lg active:scale-[0.98] sm:text-sm'
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
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
