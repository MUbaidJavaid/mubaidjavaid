import { EmptyState } from '@/components/system/EmptyState'
import { posts } from '@/data/posts'
import { blogPreview } from '@/data/site'
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
        <div className='flex flex-wrap items-end justify-between gap-5'>
          <div>
            <p className='section-label'>{blogPreview.title}</p>
            <h2 className='section-heading mt-2 text-[1.75rem] sm:text-[2.2rem]'>
              Insights on{' '}
              <span className='section-heading-accent'>
                full-stack development
              </span>
            </h2>
            <p className='mt-2 max-w-[540px] text-sm leading-[1.75] text-body/70'>
              {blogPreview.description ||
                'Practical articles on React, Next.js, Node.js, and shipping production-ready web applications.'}
            </p>
          </div>
          <Link
            href='/blog'
            className='group inline-flex items-center gap-2 border border-[#0F172A]/10 bg-white px-5 py-2 text-sm font-semibold text-heading shadow-[0_1px_4px_rgba(15,23,42,.05)] transition-all hover:-translate-y-px hover:border-primary/30 hover:text-primary hover:shadow-[0_4px_12px_rgba(15,23,42,.08)] dark:border-border/50 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-primary/40'
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
          <div className='grid gap-4 lg:grid-cols-[1.08fr_0.92fr]'>
            {leadPost ? (
              <Link
                href={`/blog/${leadPost.slug}`}
                className='group relative overflow-hidden  border border-white/[.06] bg-gradient-to-br from-[#0F172A] via-[#1B2A3D] to-[#1F5F86] p-7 shadow-[0_8px_40px_rgba(15,23,42,.2)] transition-all duration-200 '
                aria-label={`Read featured article: ${leadPost.title}`}
              >
                <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[.04] to-transparent transition-transform duration-700 group-hover:translate-x-full' />
                <span
                  aria-hidden
                  className='pointer-events-none absolute right-4 top-0 select-none font-heading text-[5.5rem] font-extrabold leading-none text-white/[.06]'
                >
                  01
                </span>

                <div className='mb-4 flex flex-wrap items-center gap-2'>
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

                <h3 className='mb-3 font-heading text-[1.25rem] font-extrabold leading-[1.2] tracking-[-0.02em] text-white transition-colors group-hover:text-[#DCEAF3] sm:text-[1.4rem]'>
                  {leadPost.title}
                </h3>
                <p className='mb-2 text-[.78rem] leading-[1.75] text-white/55'>
                  {leadPost.summary}
                </p>
                {leadPost.intro && (
                  <p className='text-[.74rem] leading-[1.7] text-white/40'>
                    {leadPost.intro}
                  </p>
                )}

                <span className='mt-6 inline-flex items-center gap-2 text-[.72rem] font-bold tracking-[.02em] text-[#DCEAF3] transition-all group-hover:gap-3'>
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
                  <span className='absolute bottom-[15%] left-0 top-[15%] w-[2.5px] origin-center scale-y-0  bg-primary transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:scale-y-100' />
                  <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/[.04] to-transparent transition-transform duration-500 group-hover:translate-x-full' />
                  <span
                    aria-hidden
                    className='pointer-events-none absolute right-3 top-0 select-none font-heading text-[3.5rem] font-extrabold leading-none text-[#0F172A]/[.04] dark:text-white/[.06]'
                  >
                    {String(idx + 2).padStart(2, '0')}
                  </span>

                  <div className='mb-2.5 flex flex-wrap items-center gap-2'>
                    <span className='border border-[#0F172A]/[.08] bg-[#F8FAFC] px-2.5 py-1 text-[.6rem] font-bold uppercase tracking-[.1em] text-[#334155] dark:border-border/50 dark:bg-slate-900/80 dark:text-slate-300'>
                      {post.category}
                    </span>
                    <span className='h-[2px] w-[2px]  bg-[#CBD5E1]' />
                    <span className='text-[.63rem] text-body/50'>
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className='mb-1.5 font-heading text-[.95rem] font-bold leading-[1.3] tracking-[-0.01em] text-heading transition-colors group-hover:text-primary'>
                    {post.title}
                  </h3>
                  <p className='line-clamp-2 text-[.72rem] leading-[1.65] text-body/55'>
                    {post.summary}
                  </p>

                  <span className='mt-3 inline-flex items-center gap-1.5 text-[.68rem] font-bold text-primary transition-all group-hover:gap-2.5'>
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
