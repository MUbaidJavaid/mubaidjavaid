import { BlogArticlesSection } from '@/components/blog/BlogArticlesSection'
import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
import { EmptyState } from '@/components/system/EmptyState'
import { posts } from '@/data/posts'
import { site } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
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

      <PageHeroHeader
        subtitle='Blog'
        title={
          <>
            Engineering articles on{' '}
            <span style={{ color: '#256e99' }}>full-stack development</span>
          </>
        }
        description='Practical insights on React architecture, Next.js best practices, Node.js API design, MongoDB schema patterns, and real-world MERN stack development from production projects.'
      />

      <section
        className='section-anchor relative overflow-hidden surface-page py-20'
        aria-labelledby='blog-page-heading'
      >
        <div className='container-wide relative z-10 space-y-8'>
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
