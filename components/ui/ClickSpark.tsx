'use client'

import React, {
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
  type MouseEvent,
} from 'react'

interface ClickSparkProps {
  sparkColor?: string
  sparkSize?: number
  sparkRadius?: number
  sparkCount?: number
  duration?: number
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
  extraScale?: number
  global?: boolean
  children?: ReactNode
}

interface Spark {
  x: number
  y: number
  angle: number
  startTime: number
}

export const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = '#2872A1',
  sparkSize = 9,
  sparkRadius = 18,
  sparkCount = 9,
  duration = 420,
  easing = 'ease-out',
  extraScale = 1.1,
  global = false,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sparksRef = useRef<Spark[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let resizeTimeout: ReturnType<typeof setTimeout>

    const resizeCanvas = () => {
      if (global) {
        const width = window.innerWidth
        const height = window.innerHeight
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width
          canvas.height = height
        }
        return
      }

      const parent = canvas.parentElement
      if (!parent) return
      const { width, height } = parent.getBoundingClientRect()
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }
    }

    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 80)
    }

    const ro = global ? null : new ResizeObserver(handleResize)
    const parent = canvas.parentElement
    if (ro && parent) ro.observe(parent)
    window.addEventListener('resize', handleResize)
    resizeCanvas()

    return () => {
      if (ro) ro.disconnect()
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [global])

  const easeFunc = useCallback(
    (t: number) => {
      switch (easing) {
        case 'linear':
          return t
        case 'ease-in':
          return t * t
        case 'ease-in-out':
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        default:
          // ease-out (quad)
          return t * (2 - t)
      }
    },
    [easing],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sparksRef.current = sparksRef.current.filter((spark: Spark) => {
        const elapsed = timestamp - spark.startTime
        if (elapsed >= duration) {
          return false
        }

        const progress = elapsed / duration
        const eased = easeFunc(progress)

        const distance = eased * sparkRadius * extraScale
        const lineLength = sparkSize * (1 - eased)

        const x1 = spark.x + distance * Math.cos(spark.angle)
        const y1 = spark.y + distance * Math.sin(spark.angle)
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle)
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle)

        ctx.strokeStyle = sparkColor
        ctx.lineWidth = 1.6
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        return true
      })

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [sparkColor, sparkSize, sparkRadius, duration, easeFunc, extraScale])

  const emitSparks = (x: number, y: number) => {
    const now = performance.now()
    const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }))

    sparksRef.current.push(...newSparks)
  }

  const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    emitSparks(x, y)
  }

  useEffect(() => {
    if (!global) return

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return
      emitSparks(event.clientX, event.clientY)
    }

    window.addEventListener('pointerdown', handlePointerDown, true)
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown, true)
    }
  }, [global, sparkCount])

  if (global) {
    return (
      <canvas
        ref={canvasRef}
        className='pointer-events-none fixed inset-0 z-[220]'
        aria-hidden
      />
    )
  }

  return (
    <div className='relative inline-flex' onClick={handleClick}>
      <canvas
        ref={canvasRef}
        className='pointer-events-none absolute inset-0'
      />
      {children}
    </div>
  )
}

export default ClickSpark

