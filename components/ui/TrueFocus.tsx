'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState, type CSSProperties } from 'react'

interface TrueFocusProps {
  sentence?: string
  separator?: string
  manualMode?: boolean
  blurAmount?: number
  borderColor?: string
  glowColor?: string
  animationDuration?: number
  pauseBetweenAnimations?: number
  className?: string
}

interface FocusRect {
  x: number
  y: number
  width: number
  height: number
}

export const TrueFocus = ({
  sentence = 'Maintainable • Reusable • Reliable • Practical',
  separator = ' | ',
  manualMode = false,
  blurAmount = 4,
  borderColor = '#2872A1',
  glowColor = 'rgba(40,114,161,0.5)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = ''
}: TrueFocusProps) => {
  const parts = sentence
    .split(separator)
    .map(w => w.trim())
    .filter(Boolean)
  const segments = parts.length
    ? parts.flatMap((part, i) => (i === 0 ? [part] : [separator, part]))
    : []
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [lastActiveIndex, setLastActiveIndex] = useState<number>(0)
  const isHoveringRef = useRef(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  })

  // Auto-rotate: phrase → | → phrase → | → phrase (focus ruka on | then next word)
  useEffect(() => {
    if (manualMode || !segments.length) return
    const interval = setInterval(() => {
      if (!isHoveringRef.current) {
        setCurrentIndex(prev => (prev + 1) % segments.length)
      }
    }, (animationDuration + pauseBetweenAnimations) * 1000)

    return () => clearInterval(interval)
  }, [manualMode, animationDuration, pauseBetweenAnimations, segments.length])

  useEffect(() => {
    if (!wordRefs.current[currentIndex] || !containerRef.current) return

    const parentRect = containerRef.current.getBoundingClientRect()
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect()

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    })
  }, [currentIndex, segments.length])

  const handleMouseEnter = (index: number) => {
    isHoveringRef.current = true
    if (manualMode) {
      setLastActiveIndex(currentIndex)
    }
    setCurrentIndex(index)
  }

  const handleMouseLeave = () => {
    isHoveringRef.current = false
    if (manualMode && segments.length) {
      setCurrentIndex(lastActiveIndex)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-wrap mx-auto items-center gap-x-0 ${className}`}
      style={{ userSelect: 'none', outline: 'none' }}
      aria-hidden='true'
    >
      {segments.map((segment, index) => {
        const isActive = index === currentIndex
        return (
          <span
            key={`${segment}-${index}`}
            ref={el => {
              wordRefs.current[index] = el
            }}
            className={`${manualMode ? 'cursor-default' : ''} ${
              segment === separator ? 'select-none mx-2' : ''
            }`}
            style={
              {
                filter: isActive ? 'blur(0px)' : `blur(${blurAmount}px)`,
                transition: `filter ${animationDuration}s ease`
              } as CSSProperties
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {segment}
          </span>
        )
      })}

      <motion.div
        className='pointer-events-none absolute top-0 left-0 box-border'
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: 1
        }}
        transition={{ duration: animationDuration }}
        style={
          {
            '--border-color': borderColor,
            '--glow-color': glowColor
          } as CSSProperties
        }
      >
        <span
          className='absolute -top-2 -left-2 h-3 w-3 rounded-[3px] border-[2px] border-r-0 border-b-0'
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--glow-color))'
          }}
        />
        <span
          className='absolute -top-2 -right-2 h-3 w-3 rounded-[3px] border-[2px] border-l-0 border-b-0'
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--glow-color))'
          }}
        />
        <span
          className='absolute -bottom-2 -left-2 h-3 w-3 rounded-[3px] border-[2px] border-r-0 border-t-0'
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--glow-color))'
          }}
        />
        <span
          className='absolute -bottom-2 -right-2 h-3 w-3 rounded-[3px] border-[2px] border-l-0 border-t-0'
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--glow-color))'
          }}
        />
      </motion.div>
    </div>
  )
}

export default TrueFocus
