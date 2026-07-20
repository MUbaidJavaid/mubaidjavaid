'use client'

import { LottiePlayer } from '@/components/ui/LottiePlayer'
import { lottieAssets } from '@/lib/lottie-assets'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

type BlogPostHeroProps = {
  title: string
  subtitle?: string
  summary: string
  category: string
  publishedAt: string
  readTime: string
  noteNo: string
  tags: string[]
}

function formatDate (iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

/** Cinematic Lottie hero — motion-first like LottieFiles product pages. */
export function BlogPostHero ({
  title,
  subtitle,
  summary,
  category,
  publishedAt,
  readTime,
  noteNo,
  tags
}: BlogPostHeroProps) {
  const reduce = useReducedMotion()

  return (
    <section className='relative min-h-[64vh] overflow-hidden bg-[linear-gradient(145deg,#0B1220_0%,#122535_40%,#163E5C_78%,#1A4A6B_100%)] text-white md:min-h-[68vh]'>
      <div
        className='pointer-events-none absolute -left-20 top-24 h-80 w-80 rounded-full bg-[#256e99]/30 blur-3xl'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-[#7DD3FC]/12 blur-3xl'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.12]'
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage:
            'radial-gradient(ellipse 75% 70% at 35% 40%, black 0%, transparent 72%)'
        }}
      />
      <div
        className='pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1220] to-transparent'
        aria-hidden
      />

      <div className='container-wide relative z-10 flex min-h-[64vh] flex-col pb-10 pt-20 md:min-h-[68vh] md:pb-14 md:pt-24'>
        <div className='flex items-center justify-between gap-4'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white'
          >
            <ChevronLeft className='h-4 w-4' aria-hidden />
            All articles
          </Link>
          <span className='font-mono text-[10px] font-bold tracking-[0.18em] text-white/40'>
            NOTE {noteNo} · ARTICLE
          </span>
        </div>

        <div className='mt-8 grid flex-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10'>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className='max-w-3xl'
          >
            <div className='flex flex-wrap items-center gap-3'>
              <span className='font-mono text-[11px] font-bold tracking-[0.2em] text-[#7DD3FC]'>
                NOTE {noteNo}
              </span>
              <span className='h-px w-8 bg-white/25' aria-hidden />
              <span className='border border-white/20 bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C8E6F5]'>
                {category}
              </span>
            </div>

            <h1 className='mt-4 font-heading font-semibold uppercase leading-[1.05] tracking-[-0.02em] text-white text-[clamp(1.75rem,1rem+2.9vw,2.95rem)]'>
              {title}
            </h1>

            {subtitle ? (
              <p className='mt-3 max-w-2xl text-base font-medium text-[#9BC9E0] md:text-lg'>
                {subtitle}
              </p>
            ) : null}

            <p className='mt-4 max-w-2xl text-[15px] leading-[1.8] text-white/65 md:text-base'>
              {summary}
            </p>

            <div className='mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-white/45'>
              <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
              <span className='h-px w-4 bg-white/20' aria-hidden />
              <span>{readTime}</span>
            </div>

            {tags.length > 0 ? (
              <div className='mt-6 flex flex-wrap gap-1.5'>
                {tags.slice(0, 6).map(tag => (
                  <span
                    key={tag}
                    className='border border-white/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.06em] text-white/55'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <a
              href='#article-body'
              className='mt-8 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#7DD3FC] transition-colors hover:text-white'
            >
              Start reading
              <ArrowRight className='h-3.5 w-3.5' />
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className='relative mx-auto flex w-full max-w-md flex-col items-center justify-center border border-white/10 bg-black/20 p-5 lg:max-w-none lg:p-7'
          >
            <p className='relative z-[1] mb-1 self-start font-mono text-[10px] font-bold tracking-[0.2em] text-[#7DD3FC]/75'>
              PUBLISH · WEB
            </p>
            <LottiePlayer
              src={lottieAssets.articleGlobe}
              className='relative z-[1] h-[200px] w-full sm:h-[240px] lg:h-[280px]'
              aria-label='Published article globe animation'
              speed={0.8}
            />
            <div className='relative z-[1] mt-2 flex w-full items-center justify-between gap-3'>
              <p className='font-mono text-[10px] tracking-[0.12em] text-white/40'>
                {category}
              </p>
              <p className='font-mono text-[10px] tracking-[0.12em] text-white/40'>
                {readTime}
              </p>
            </div>
          </motion.div>
        </div>

        <span
          className='pointer-events-none absolute bottom-4 right-4 select-none font-heading text-[clamp(4.5rem,11vw,8rem)] font-black leading-none tracking-tighter text-white/[0.05] md:right-8'
          aria-hidden
        >
          {noteNo}
        </span>
      </div>
    </section>
  )
}
