import { EmptyState } from '@/components/system/EmptyState'
import { posts } from '@/data/posts'
import { blogPreview } from '@/data/site'
import { SectionDisplayTag } from '@/components/ui/SectionDisplayTag'
import { BookOpen } from 'lucide-react'
import Link from 'next/link'

function formatDate (iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export function BlogPreviewSection () {
  const [leadPost, ...supportingPosts] = posts.slice(0, 3)
  const isEmpty = posts.length === 0

  return (
    <section className='section-anchor relative overflow-hidden surface-page py-20'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_0%,rgba(40,114,161,.05),transparent_65%)] dark:bg-[radial-gradient(ellipse_50%_60%_at_100%_0%,rgba(56,189,248,.06),transparent_65%)]' />
        <div
          className='absolute inset-0 dark:opacity-[0.45]'
          style={{
            backgroundImage:
              'linear-gradient(rgba(15,23,42,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,.022) 1px,transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage:
              'radial-gradient(ellipse 90% 80% at 50% 50%,black 0%,transparent 80%)'
          }}
        />
      </div>

      <div className='container-wide relative z-10 space-y-8'>
        <div className='section-header'>
          <SectionDisplayTag tag={blogPreview.title} pattern='scope' />
          <p className='section-lead text-body/70'>
            {blogPreview.description}
          </p>
          <Link
            href='/blog'
            className='group inline-flex items-center gap-2 border border-[#0F172A]/10 bg-white px-5 py-2 text-body-sm font-semibold text-heading shadow-[0_1px_4px_rgba(15,23,42,.05)] transition-all hover:-translate-y-px hover:border-primary/30 hover:text-primary hover:shadow-[0_4px_12px_rgba(15,23,42,.08)] dark:border-border/50 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-primary/40'
          >
            View all articles
            <span className='text-[.68rem] transition-transform group-hover:translate-x-0.5'>
              →
            </span>
          </Link>
        </div>

        {isEmpty ? (
          <div className='flex justify-center pt-2'>
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
          <div className='flex flex-col gap-4'>
            {leadPost ? (
              <Link
                href={`/blog/${leadPost.slug}`}
                className='group relative overflow-hidden  border border-white/[.06] bg-gradient-to-br from-[#0F172A] via-[#1B2A3D] to-[#1F5F86] p-7 shadow-[0_8px_40px_rgba(15,23,42,.2)] transition-all duration-200 '
                aria-label={`Read featured article: ${leadPost.title}`}
              >
                {/* Chunky rounded squares at corner — wide + clipped (half-cut) */}
                <span
                  aria-hidden
                  className='pointer-events-none absolute -right-8 z-0 aspect-square w-[clamp(9rem,22vw,10.75rem)] max-w-none -rotate-[15deg] rounded-[1.35rem] border border-white/22 bg-gradient-to-br from-white/[0.18] via-white/[0.06] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] dark:from-white/15 max-sm:-top-16 sm:-top-[4.85rem]'
                />
                <span
                  aria-hidden
                  className='pointer-events-none absolute -right-2 z-0 aspect-square w-[clamp(4rem,9vw,4.75rem)] -rotate-[10deg] rounded-xl border border-[#98C5E0]/28 bg-transparent opacity-[0.85] max-sm:-top-7 sm:-top-5'
                />
                <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[.04] to-transparent transition-transform duration-700 group-hover:translate-x-full' />
                <span
                  aria-hidden
                  className='pointer-events-none absolute right-4 top-0 z-[1] select-none font-heading text-[5.5rem] font-extrabold leading-none text-white/[.08]'
                >
                  01
                </span>

                <div className='relative z-[2] mb-4 flex flex-wrap items-center gap-2'>
                  <span className=' border border-[#98C5E0]/40 bg-[#1B4F74]/40 px-2.5 py-1 text-[.62rem] font-bold uppercase tracking-[.1em] text-[#D6EAF6]'>
                    {leadPost.category}
                  </span>
                  <span className='text-[.63rem] text-white/40'>
                    <time dateTime={leadPost.publishedAt}>
                      {formatDate(leadPost.publishedAt)}
                    </time>
                  </span>
                  <span className='h-[3px] w-[3px]  bg-white/20' />
                  <span className='text-[.63rem] text-white/35'>
                    {leadPost.readTime}
                  </span>
                </div>

                <h3 className='text-fluid-lg relative z-[2] mb-3 font-heading !font-semibold uppercase leading-[1.25] tracking-[0.04em] text-white transition-colors group-hover:text-[#DCEAF3]'>
                  {leadPost.title}
                </h3>
                <p className='relative z-[2] mb-2 section-copy text-white/55'>
                  {leadPost.summary}
                </p>
                {leadPost.intro && (
                  <p className='relative z-[2] text-[.74rem] leading-[1.7] text-white/40'>
                    {leadPost.intro}
                  </p>
                )}

                <span className='relative z-[2] mt-6 inline-flex items-center gap-2 text-[.72rem] font-bold tracking-[.02em] text-[#DCEAF3] transition-all group-hover:gap-3'>
                  Read featured article
                  <span className='text-[.65rem]'>→</span>
                </span>
              </Link>
            ) : null}

            <div className='flex flex-col gap-3'>
              {supportingPosts.map((post, idx) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className='group relative overflow-hidden border border-[#0F172A]/[.08] surface-panel p-5 shadow-[0_1px_6px_rgba(15,23,42,.04)] transition-all duration-200 hover:border-primary/20 hover:shadow-[0_6px_24px_rgba(15,23,42,.09)] dark:border-border/50 dark:hover:shadow-[0_6px_24px_rgba(0,0,0,0.35)]'
                  aria-label={`Read article: ${post.title}`}
                >
                  <span
                    aria-hidden
                    className='pointer-events-none absolute -right-6 z-0 aspect-square w-[clamp(7.25rem,18vw,8.75rem)] max-w-none -rotate-[14deg] rounded-[1.25rem] border border-[hsl(202_61%_37%_/0.42)] bg-[linear-gradient(148deg,hsl(202_61%_37%_/0.2),transparent_68%)] dark:border-[hsl(188_72%_42%_/0.5)] dark:bg-[linear-gradient(148deg,hsl(202_61%_37%_/0.28),transparent_68%)] max-sm:-top-14 sm:-top-12'
                  />
                  <span
                    aria-hidden
                    className='pointer-events-none absolute -right-0.5 z-0 aspect-square w-[clamp(3.35rem,7.5vw,3.85rem)] -rotate-[8deg] rounded-xl border border-[#0F172A]/14 bg-transparent dark:border-white/16 max-sm:-top-6 sm:-top-4'
                  />
                  <span className='absolute bottom-[15%] left-0 top-[15%] w-[2.5px] origin-center scale-y-0  bg-primary transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:scale-y-100' />
                  <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/[.04] to-transparent transition-transform duration-500 group-hover:translate-x-full' />
                  <span
                    aria-hidden
                    className='pointer-events-none absolute right-3 top-0 z-[1] select-none font-heading text-[3.5rem] font-extrabold leading-none text-[#0F172A]/[.08] dark:text-white/[.10]'
                  >
                    {String(idx + 2).padStart(2, '0')}
                  </span>

                  <div className='relative z-[2] mb-2.5 flex flex-wrap items-center gap-2'>
                    <span className='border border-[#0F172A]/[.08] bg-[#F8FAFC] px-2.5 py-1 text-[.6rem] font-bold uppercase tracking-[.1em] text-[#334155] dark:border-border/50 dark:bg-slate-900/80 dark:text-slate-300'>
                      {post.category}
                    </span>
                    <span className='h-[2px] w-[2px]  bg-[#CBD5E1]' />
                    <span className='text-[.63rem] text-body/50'>
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className='text-fluid-base relative z-[2] mb-1.5 font-heading !font-semibold uppercase leading-[1.3] tracking-[0.04em] text-heading transition-colors group-hover:text-primary'>
                    {post.title}
                  </h3>
                  <p className='relative z-[2] line-clamp-2 section-copy text-body/55'>
                    {post.summary}
                  </p>

                  <span className='relative z-[2] mt-3 inline-flex items-center gap-1.5 text-[.68rem] font-bold text-primary transition-all group-hover:gap-2.5'>
                    Read article <span className='text-[.6rem]'>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
