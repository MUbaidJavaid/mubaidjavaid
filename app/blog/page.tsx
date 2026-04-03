import { BlogArticlesSection } from '@/components/blog/BlogArticlesSection'
import { EmptyState } from '@/components/system/EmptyState'
import { posts } from '@/data/posts'
import { site } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
import { BookOpen } from 'lucide-react'
import type { Metadata } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = pageMetadata({
  title: 'Blog - Full-Stack Development Articles | React, Next.js & Node.js',
  description:
    'Engineering articles by M Ubaid Javaid covering React architecture, Next.js best practices, Node.js API design, MongoDB schema patterns, and practical full-stack MERN development from real production projects.',
  path: '/blog'
})

function formatDate (iso: string, style: 'long' | 'short' = 'short') {
  return new Date(iso).toLocaleDateString('en-US', {
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

function averageReadMinutes (list: typeof posts) {
  if (!list.length) return '-'
  const total = list.reduce(
    (acc, p) => acc + (parseInt(p.readTime, 10) || 0),
    0
  )
  return `${Math.max(1, Math.round(total / list.length))} min`
}

export default function BlogPage () {
  const [featuredPost, ...otherPosts] = posts
  const avgRead = averageReadMinutes(posts)
  const lastUpdated = posts[0]?.publishedAt
    ? formatDate(posts[0].publishedAt, 'short')
    : '-'
  const isEmpty = posts.length === 0

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: `${site.name} - Engineering Blog`,
            description:
              'Practical full-stack development articles on React, Next.js, Node.js and MongoDB.',
            url: `${site.url}blog`,
            author: {
              '@type': 'Person',
              name: site.name,
              url: site.url,
              jobTitle: 'Full-Stack Developer'
            },
            blogPost: posts.map(p => ({
              '@type': 'BlogPosting',
              headline: p.title,
              description: p.summary,
              datePublished: p.publishedAt,
              url: `${site.url}blog/${p.slug}`,
              author: { '@type': 'Person', name: site.name },
              keywords: p.category
            }))
          })
        }}
      />

      <section
        className='section-anchor relative overflow-hidden surface-page py-20'
        aria-labelledby='blog-page-heading'
      >
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_0%,rgba(40,114,161,.05),transparent_65%),radial-gradient(ellipse_40%_50%_at_0%_100%,rgba(15,23,42,.025),transparent_65%)]' />
          <div
            className='absolute inset-0'
            style={{
              backgroundImage:
                'linear-gradient(rgba(15,23,42,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,.02) 1px,transparent 1px)',
              backgroundSize: '44px 44px',
              maskImage:
                'radial-gradient(ellipse 90% 80% at 50% 50%,black,transparent 80%)'
            }}
          />
        </div>

        <div className='container-wide relative z-10 space-y-8'>
          <div className='flex flex-wrap items-end justify-between gap-6'>
            <div>
              <p className='section-label'>Writing</p>
              <h1
                id='blog-page-heading'
                className='section-heading mt-2 text-[1.9rem] sm:text-[2.5rem]'
              >
                Engineering notes with real{' '}
                <span className='section-heading-accent'>
                  implementation depth
                </span>
              </h1>
              <p className='mt-2 max-w-[540px] text-sm leading-[1.75] text-body/65'>
                Practical articles on React, Next.js, Node.js and full-stack
                architecture drawn from real production project work.
              </p>
            </div>

            <div className='flex items-center gap-2.5'>
              {[
                { n: String(posts.length), l: 'Articles' },
                { n: avgRead, l: 'Avg read' },
                { n: lastUpdated, l: 'Latest' }
              ].map(s => (
                <div
                  key={s.l}
                  className='flex flex-col items-center border border-[#0F172A]/[.05] bg-[#FAFBFC] px-4 py-2 transition-all hover:border-primary/20 hover:shadow-[0_4px_12px_rgba(15,23,42,.06)] dark:border-border/50 dark:bg-slate-900/60 dark:hover:border-primary/35'
                >
                  <span className='font-heading text-[1.05rem] font-extrabold leading-none tracking-tight text-heading'>
                    {s.n}
                  </span>
                  <span className='mt-0.5 text-[.58rem] font-bold uppercase tracking-[.15em] text-body/40'>
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className='grid gap-4  md:grid-cols-3 '>
            <div className='md:border-r md:border-border/55'>
              <p className='text-xs  font-semibold uppercase tracking-[0.14em] text-primary/75'>
                What these posts cover
              </p>
              <p className='mt-2 text-sm leading-relaxed text-body/75'>
                Implementation decisions, architecture trade-offs, and
                production constraints across frontend and backend workflows.
              </p>
            </div>
            <div className='md:border-r md:border-border/55'>
              <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary/75'>
                Who this is for
              </p>
              <p className='mt-2 text-sm leading-relaxed text-body/75'>
                Founders, teams, and engineers who want practical technical
                clarity instead of surface-level trend summaries.
              </p>
            </div>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary/75'>
                How to use it
              </p>
              <p className='mt-2 text-sm leading-relaxed text-body/75'>
                Start with featured deep-dives, then scan the article library by
                category and apply relevant patterns to your product context.
              </p>
            </div>
          </div>

          {isEmpty ? (
            <div className='flex justify-center pt-4'>
              <EmptyState
                icon={BookOpen}
                title='No articles yet'
                description='New engineering notes will land here first. Check back soon, or start a conversation if you are looking for depth on a specific stack or architecture topic.'
                primaryAction={{ label: 'View projects', href: '/projects' }}
                secondaryAction={{ label: 'Contact', href: '/contact' }}
                className='max-w-lg'
              />
            </div>
          ) : (
            <BlogArticlesSection
              featuredPost={featuredPost}
              otherPosts={otherPosts}
              formatDate={formatDate}
            />
          )}
        </div>
      </section>
    </>
  )
}
