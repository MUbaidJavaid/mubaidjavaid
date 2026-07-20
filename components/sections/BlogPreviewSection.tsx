'use client'

import { EmptyState } from '@/components/system/EmptyState'
import { posts } from '@/data/posts'
import { blogPreview } from '@/data/site'
import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'

function formatDate (iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export function BlogPreviewSection () {
  const preview = posts.slice(0, 3)
  const [leadPost, ...rest] = preview
  const isEmpty = posts.length === 0
  const reduce = useReducedMotion()

  return (
    <section className='section-anchor relative overflow-hidden surface-page py-12 md:py-16'>
      <div
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_0%,hsl(202_61%_42%/0.09),transparent_68%)]'
        aria-hidden
      />

      <div className='container-wide relative z-10 space-y-8 md:space-y-10'>
        <header className='section-header gap-3'>
          <SectionDisplayTag tag={blogPreview.title} pattern='scope' />
          <p className='section-lead'>{blogPreview.description}</p>
          <Link
            href='/blog'
            className='group inline-flex items-center gap-2 border border-border/70 surface-panel px-4 py-2 text-sm font-semibold text-heading transition-colors hover:border-primary/30 hover:text-primary dark:border-border/50'
          >
            View all articles
            <ArrowRight className='h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5' />
          </Link>
        </header>

        {isEmpty ? (
          <div className='flex justify-center'>
            <EmptyState
              icon={BookOpen}
              title='Articles coming soon'
              description='The blog is being prepared. Explore projects or get in touch if you want to talk architecture, React, or full-stack delivery in the meantime.'
              primaryAction={{ label: 'View projects', href: '/projects' }}
              secondaryAction={{ label: 'Contact', href: '/contact' }}
              className='max-w-lg'
            />
          </div>
        ) : (
          <div className='mx-auto grid max-w-5xl gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-0 lg:overflow-hidden lg:border lg:border-border/60 lg:bg-card lg:shadow-[0_18px_44px_-26px_rgba(15,23,42,0.35)] dark:lg:border-border/45 dark:lg:shadow-[0_18px_44px_-26px_rgba(0,0,0,0.55)]'>
            {/* Featured */}
            {leadPost ? (
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className='lg:border-r lg:border-border/55 dark:lg:border-border/40'
              >
                <Link
                  href={`/blog/${leadPost.slug}`}
                  className='group relative flex h-full min-h-[280px] flex-col overflow-hidden border border-border/60 bg-[linear-gradient(155deg,#0F172A_0%,#152B40_52%,#1F5F86_100%)] p-6 text-white transition-colors sm:p-7 lg:border-0'
                  aria-label={`Read featured article: ${leadPost.title}`}
                >
                  <span
                    className='pointer-events-none absolute inset-0 opacity-[0.1]'
                    aria-hidden
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
                      backgroundSize: '32px 32px'
                    }}
                  />
                  <span
                    className='pointer-events-none absolute bottom-2 right-3 select-none font-heading text-[4.5rem] font-black leading-none tracking-tighter text-white/[0.07] sm:text-[5.25rem]'
                    aria-hidden
                  >
                    01
                  </span>

                  <div className='relative z-[1] flex flex-wrap items-center gap-2'>
                    <span className='border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/95'>
                      Featured
                    </span>
                    <span className='border border-white/15 bg-black/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#C8E6F5]'>
                      {leadPost.category}
                    </span>
                  </div>

                  <h3 className='relative z-[1] mt-5 font-heading !font-semibold uppercase text-[1.15rem] leading-snug tracking-[0.03em] text-white transition-colors group-hover:text-[#DCEAF3] sm:text-[1.3rem]'>
                    {leadPost.title}
                  </h3>

                  <p className='relative z-[1] mt-3 line-clamp-3 text-[13px] leading-relaxed text-white/65'>
                    {leadPost.summary}
                  </p>

                  <div className='relative z-[1] mt-auto flex flex-wrap items-center justify-between gap-3 pt-8'>
                    <div className='flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-white/45'>
                      <time dateTime={leadPost.publishedAt}>
                        {formatDate(leadPost.publishedAt)}
                      </time>
                      <span className='h-px w-3 bg-white/25' aria-hidden />
                      <span>{leadPost.readTime}</span>
                    </div>
                    <span className='inline-flex items-center gap-1.5 text-[12px] font-bold text-[#DCEAF3] transition-all group-hover:gap-2.5'>
                      Read article
                      <ArrowRight className='h-3.5 w-3.5' />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ) : null}

            {/* Supporting */}
            <div className='flex flex-col gap-3 lg:gap-0'>
              {rest.map((post, idx) => {
                const num = String(idx + 2).padStart(2, '0')
                const isLast = idx === rest.length - 1

                return (
                  <motion.div
                    key={post.slug}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{
                      duration: 0.35,
                      delay: 0.05 * (idx + 1),
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className='flex-1'
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className={`group relative flex h-full flex-col overflow-hidden border border-border/60 bg-card p-5 transition-colors hover:bg-muted/30 dark:border-border/45 dark:hover:bg-slate-900/40 sm:p-5 lg:border-0 ${
                        !isLast
                          ? 'lg:border-b lg:border-border/55 dark:lg:border-border/40'
                          : ''
                      }`}
                      aria-label={`Read article: ${post.title}`}
                    >
                      <span
                        className='absolute bottom-[20%] left-0 top-[20%] w-[2px] origin-center scale-y-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-y-100'
                        aria-hidden
                      />
                      <span
                        className='pointer-events-none absolute right-3 top-1 select-none font-heading text-[2.5rem] font-black leading-none tracking-tighter text-heading/[0.05] dark:text-white/[0.07]'
                        aria-hidden
                      >
                        {num}
                      </span>

                      <div className='relative z-[1] flex flex-wrap items-center gap-2'>
                        <span className='font-mono text-[10px] font-bold tracking-[0.16em] text-primary'>
                          {num}
                        </span>
                        <span className='border border-border/55 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-body/65 dark:border-border/40'>
                          {post.category}
                        </span>
                        <span className='text-[11px] text-body/45'>
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className='relative z-[1] mt-2.5 font-heading !font-semibold uppercase text-[0.98rem] leading-snug tracking-[0.03em] text-heading transition-colors group-hover:text-primary sm:text-[1.05rem]'>
                        {post.title}
                      </h3>
                      <p className='relative z-[1] mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-body/65'>
                        {post.summary}
                      </p>

                      <span className='relative z-[1] mt-auto inline-flex items-center gap-1.5 pt-4 text-[12px] font-bold text-primary transition-all group-hover:gap-2.5'>
                        Read article
                        <ArrowRight className='h-3 w-3' />
                      </span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
