'use client'

import { CodeVisualizer } from '@/components/visual/CodeVisualizer'
import { NetworkGraph } from '@/components/visual/NetworkGraph'
import { ProductPlane } from '@/components/visual/ProductPlane'
import { WorkflowPath } from '@/components/visual/WorkflowPath'
import {
  ConnectStageVisual,
  WriteStageVisual
} from '@/components/visual/MotionStageVisuals'
import {
  brandSpace,
  type BrandStageMedia,
  type BrandStageTone
} from '@/lib/brand-system'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

const toneClass: Record<BrandStageTone, string> = {
  paper: 'bg-background text-heading',
  muted: 'bg-muted/55 text-heading',
  ink: 'bg-primary text-primary-foreground'
}

type DiagramKind = 'network' | 'workflow'

type BrandStageProps = {
  tone?: BrandStageTone
  /** Exactly one media type per stage */
  media: BrandStageMedia
  /** product */
  productSrc?: string
  productAlt?: string
  productPriority?: boolean
  /** Opt-in scroll parallax — keep off in grids */
  productParallax?: boolean
  /** diagram */
  diagram?: DiagramKind
  diagramNodes?: Array<{ id: string; x: number; y: number; label: string }>
  /** motion — approved role maps to editorial stage visual */
  motionRole?: 'craft' | 'write' | 'connect'
  /** Optional overlay content (metrics, captions) — still same system */
  children?: ReactNode
  className?: string
  /** Fill parent height (split layouts) */
  fill?: boolean
}

/**
 * Canonical visual stage. One media type. One tone. No freestyle.
 */
export function BrandStage ({
  tone = 'muted',
  media,
  productSrc,
  productAlt = '',
  productPriority,
  productParallax = false,
  diagram = 'network',
  diagramNodes,
  motionRole = 'craft',
  children,
  className,
  fill = true
}: BrandStageProps) {
  return (
    <div
      data-brand-stage={media}
      data-brand-tone={tone}
      className={cn(
        'relative overflow-hidden',
        toneClass[tone],
        fill && 'min-h-[50vh] h-full lg:min-h-full',
        className
      )}
    >
      {media === 'product' && productSrc ? (
        <ProductPlane
          src={productSrc}
          alt={productAlt}
          priority={productPriority}
          parallax={productParallax}
          className='absolute inset-0 h-full w-full'
        />
      ) : null}

      {media === 'diagram' ? (
        <div className='absolute inset-0 flex items-center p-5 md:p-8 lg:p-10'>
          {diagram === 'workflow' ? (
            <WorkflowPath className='h-full w-full' />
          ) : (
            <NetworkGraph className='h-full w-full' nodes={diagramNodes} />
          )}
        </div>
      ) : null}

      {media === 'motion' ? (
        motionRole === 'write' ? (
          <WriteStageVisual className='absolute inset-0 h-full w-full' />
        ) : (
          <ConnectStageVisual className='absolute inset-0 h-full w-full' />
        )
      ) : null}

      {media === 'code' ? (
        <div
          className={cn(
            'absolute inset-0 flex items-center',
            brandSpace.railX,
            brandSpace.railY
          )}
        >
          <div
            className='pointer-events-none absolute inset-0 opacity-[0.07]'
            aria-hidden
            style={{
              backgroundImage:
                'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />
          <CodeVisualizer className='relative z-10 w-full max-w-xl' />
        </div>
      ) : null}

      {children ? (
        <div className='relative z-10'>{children}</div>
      ) : null}
    </div>
  )
}
