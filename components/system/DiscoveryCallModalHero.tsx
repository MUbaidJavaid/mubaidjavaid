'use client'

import { site } from '@/data/site'
import { motion, useReducedMotion } from 'framer-motion'
import { Calendar, CheckCircle2, Video } from 'lucide-react'

/** Discovery modal left panel: real imagery + purposeful session UI (readable, on-brand). */
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85'

export function DiscoveryCallModalHero () {
  const reduce = useReducedMotion()
  const parts = site.name.split(/\s+/).filter(Boolean)
  /** First name-style label for headings (drops a leading initial like “M”). */
  const displayHostName = (() => {
    if (parts.length <= 1) return site.name
    if (parts[0]!.length === 1) return parts.slice(1).join(' ')
    return site.name
  })()
  const hostInitial =
    parts.length >= 2
      ? `${parts[0]?.[0] ?? ''}${
          parts[parts.length - 1]?.[0] ?? ''
        }`.toUpperCase()
      : parts[0]?.slice(0, 2).toUpperCase() ?? 'MJ'

  const panelMotion = reduce
    ? {}
    : {
        y: [0, -6, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut' as const
        }
      }

  const staggerMotion = reduce
    ? {}
    : {
        y: [0, -4, 0],
        transition: {
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut' as const,
          delay: 1.1
        }
      }

  return (
    <div className='relative h-full min-h-[280px] w-full shrink-0 overflow-hidden sm:min-h-0'>
      {/* Native img avoids Next/Image optimizer quirks that could break the modal pane. */}
      <img
        src={HERO_IMAGE}
        alt=''
        className='pointer-events-none absolute inset-0 h-full w-full scale-[1.02] object-cover object-[center_30%]'
        loading='lazy'
        decoding='async'
      />

      {/* Brand wash + vignette so overlays stay readable */}
      <div className='pointer-events-none absolute inset-0' aria-hidden>
        <div className='absolute inset-0 bg-gradient-to-br from-[hsl(202_61%_22%_/0.78)] via-[hsl(202_61%_32%_/0.55)] to-[hsl(188_72%_28%_/0.65)]' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,255,255,0.22),transparent_55%)]' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/25' />
      </div>

      {/* Session + outcomes   meaningful context for the modal copy */}
      <div className='relative z-[1] flex h-full flex-col justify-end gap-3 p-5 sm:p-7 sm:justify-center sm:gap-4'>
        <motion.div
          className='rounded-2xl border border-white/25 bg-white/15 p-[1px] shadow-[0_20px_50px_-12px_rgba(15,42,74,0.45)] backdrop-blur-md'
          animate={panelMotion}
        >
          <div className='rounded-[0.9375rem] bg-white/[0.12] px-4 py-3.5'>
            <div className='mb-3 flex items-center justify-between gap-2'>
              <span className='inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/95'>
                <span className='relative flex h-2 w-2' aria-hidden>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75' />
                  <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
                </span>
                1:1 session
              </span>
              <span className='flex items-center gap-1 text-[11px] font-medium text-white/85'>
                <Video className='h-3.5 w-3.5 opacity-90' aria-hidden />{' '}
                30&nbsp;minutes
              </span>
            </div>

            <p className='mb-3 text-[13px] font-semibold leading-snug text-white sm:text-sm'>
              Video discovery with {displayHostName}
            </p>

            <div className='flex items-center gap-3'>
              <div className='flex flex-1 items-center gap-2 rounded-xl bg-black/25 px-3 py-2 ring-1 ring-white/15'>
                <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/95 text-[11px] font-bold text-slate-700 shadow-sm'>
                  You
                </span>
                <div className='min-w-0'>
                  <p className='truncate text-[11px] font-medium text-white/95'>
                    Your goals &amp; timeline
                  </p>
                  <p className='text-[10px] text-white/65'>
                    Confidential, no obligation
                  </p>
                </div>
              </div>
              <div className='flex shrink-0 items-center gap-2 rounded-xl bg-black/25 px-3 py-2 ring-1 ring-white/15'>
                <span
                  className='flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-inner'
                  style={{
                    background:
                      'linear-gradient(145deg, hsl(188 72% 42%), hsl(202 61% 36%))'
                  }}
                >
                  {hostInitial}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='rounded-2xl border border-white/20 bg-black/22 px-4 py-3 shadow-lg backdrop-blur-md sm:max-w-[92%]'
          animate={staggerMotion}
        >
          <div className='mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-200/95'>
            <Calendar className='h-3.5 w-3.5' aria-hidden /> What we unpack
          </div>
          <ul className='space-y-2 text-[12px] leading-snug text-white/92'>
            <li className='flex gap-2'>
              <CheckCircle2
                className='mt-0.5 h-4 w-4 shrink-0 text-emerald-300/95'
                aria-hidden
              />
              <span>
                Clarify product goals &amp; priorities for your build.
              </span>
            </li>
            <li className='flex gap-2'>
              <CheckCircle2
                className='mt-0.5 h-4 w-4 shrink-0 text-emerald-300/95'
                aria-hidden
              />
              <span>Explore scope, stack fit, and realistic milestones.</span>
            </li>
            <li className='flex gap-2'>
              <CheckCircle2
                className='mt-0.5 h-4 w-4 shrink-0 text-emerald-300/95'
                aria-hidden
              />
              <span>Leave with a clear, practical roadmap next steps.</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Soft bottom blend into modal chrome */}
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/25 to-transparent sm:h-10' />
    </div>
  )
}
