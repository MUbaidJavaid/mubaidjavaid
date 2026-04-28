'use client'

import { motion, useReducedMotion } from 'framer-motion'

/* ── Floating tilted geometric square ── */
function FloatingTile ({
  size,
  style,
  rotate,
  delay = 0,
  opacity = 0.35,
  blur = 0
}: {
  size: number
  style?: React.CSSProperties
  rotate: number
  delay?: number
  opacity?: number
  blur?: number
}) {
  return (
    <motion.div
      className='pointer-events-none absolute rounded-xl border-2'
      style={{
        width: size,
        height: size,
        rotate: `${rotate}deg`,
        opacity,
        filter: blur ? `blur(${blur}px)` : undefined,
        borderColor: '#256e99',
        background: 'linear-gradient(135deg, #256e99 / 0.15, #1e5a82 / 0.08)',
        ...style
      }}
      animate={{
        y: [0, -15, 0],
        x: [0, 5, 0],
        rotate: [`${rotate}deg`, `${rotate + 8}deg`, `${rotate}deg`]
      }}
      transition={{
        duration: 12 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    />
  )
}

interface PageHeroHeaderProps {
  title: string | React.ReactNode
  subtitle?: string | React.ReactNode
  description?: string | React.ReactNode
  children?: React.ReactNode
}

export function PageHeroHeader ({
  title,
  subtitle,
  description,
  children
}: PageHeroHeaderProps) {
  const reduce = useReducedMotion()

  return (
    <section className='relative overflow-hidden surface-page py-16 md:py-24'>
      {/* Primary radial gradient - centered top */}
      <div
        className='pointer-events-none absolute inset-0'
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 110% 90% at 50% -5%, #256e99 / 0.25, transparent 65%)'
        }}
      />

      {/* Secondary accent gradients - corners */}
      <div
        className='pointer-events-none absolute inset-0'
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 70% at 100% 80%, #1e5a82 / 0.12, transparent 60%),' +
            'radial-gradient(ellipse 60% 60% at 0% 70%, #256e99 / 0.1, transparent 65%)'
        }}
      />

      {/* Animated gradient wave effect */}
      <motion.div
        className='pointer-events-none absolute inset-0'
        aria-hidden
        animate={{
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          background:
            'radial-gradient(circle at 50% 50%, #256e99 / 0.06, transparent 70%)'
        }}
      />

      {/* Floating decorative tiles */}
      {!reduce && (
        <>
          {/* Top left area */}
          <FloatingTile
            size={104}
            style={{ top: '5%', left: '2%' }}
            rotate={14}
            delay={0}
            opacity={0.32}
            blur={0}
          />
          <FloatingTile
            size={64}
            style={{ top: '18%', left: '12%' }}
            rotate={-7}
            delay={1.6}
            opacity={0.28}
            blur={0}
          />

          {/* Top right area */}
          <FloatingTile
            size={128}
            style={{ top: '3%', right: '4%' }}
            rotate={-19}
            delay={0.9}
            opacity={0.3}
            blur={0}
          />
          <FloatingTile
            size={76}
            style={{ top: '28%', right: '2%' }}
            rotate={11}
            delay={2.3}
            opacity={0.27}
            blur={0}
          />

          {/* Left side */}
          <FloatingTile
            size={52}
            style={{ top: '55%', left: '3%' }}
            rotate={23}
            delay={1}
            opacity={0.25}
            blur={0}
          />

          {/* Right side */}
          <FloatingTile
            size={82}
            style={{ top: '60%', right: '5%' }}
            rotate={-13}
            delay={3}
            opacity={0.26}
            blur={0}
          />

          {/* Center area */}
          <FloatingTile
            size={68}
            style={{ top: '12%', left: '50%', transform: 'translateX(-50%)' }}
            rotate={45}
            delay={2}
            opacity={0.24}
            blur={0}
          />
        </>
      )}

      {/* Content */}
      <div className='container-wide relative z-10 flex justify-center'>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto flex max-w-4xl flex-col items-center space-y-4 text-center md:space-y-6'
        >
          {/* Kicker/Label */}
          {subtitle && (
            <motion.p
              className='text-xs font-semibold uppercase tracking-[0.22em]'
              style={{ color: '#256e99' }}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Main heading */}
          <motion.h1
            className='font-heading font-extrabold leading-none tracking-[-0.03em] text-heading'
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
            initial={reduce ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              className='mx-auto max-w-2xl text-base leading-[1.8] text-body sm:text-lg'
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}

          {/* Additional children */}
          {children && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className='pointer-events-none absolute inset-x-0 bottom-0 h-16'
        aria-hidden
        style={{
          background:
            'linear-gradient(to bottom, transparent, hsl(var(--background) / 0.6))'
        }}
      />
    </section>
  )
}
