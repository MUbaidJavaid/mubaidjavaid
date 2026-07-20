import { BlogArticlesSection } from '@/components/blog/BlogArticlesSection'
import { PageHeroHeader } from '@/components/sections/PageHeroHeader'
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

export default function BlogPage () {
  const [featuredPost, ...otherPosts] = posts
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
        tagPattern='scope'
        title={
          <>
            Engineering articles on{' '}
            <span style={{ color: '#256e99' }}>full-stack development</span>
          </>
        }
        description='Practical insights on React architecture, Next.js best practices, Node.js API design, MongoDB schema patterns, and real-world MERN stack development from production projects.'
      />

      <section
        className='section-anchor relative overflow-hidden surface-page py-12 md:py-16'
        aria-labelledby='blog-page-heading'
      >
        <div
          className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_0%,hsl(202_61%_42%/0.08),transparent_68%)]'
          aria-hidden
        />
        <div
          className='pointer-events-none absolute -right-24 top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl'
          aria-hidden
        />

        <div className='container-wide relative z-10 space-y-10 md:space-y-12'>
          {/* Editorial context strip */}
          <div className='grid gap-8 border-y border-border/55 py-6 dark:border-border/40 md:grid-cols-3 md:gap-0'>
            {[
              {
                label: 'What these posts cover',
                body: 'Implementation decisions, architecture trade-offs, and production constraints across frontend and backend workflows.'
              },
              {
                label: 'Who this is for',
                body: 'Founders, teams, and engineers who want practical technical clarity instead of surface-level trend summaries.'
              },
              {
                label: 'How to use it',
                body: 'Start with the featured deep-dive, then scan the library by category and apply patterns to your product context.'
              }
            ].map((item, i) => (
              <div
                key={item.label}
                className={`md:px-6 ${i > 0 ? 'md:border-l md:border-border/55 dark:md:border-border/40' : ''} ${i === 0 ? 'md:pl-0' : ''} ${i === 2 ? 'md:pr-0' : ''}`}
              >
                <p className='font-mono text-[10px] font-bold tracking-[0.16em] text-primary/80'>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className='mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-heading/70'>
                  {item.label}
                </p>
                <p className='mt-2 text-sm leading-relaxed text-body/70'>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {isEmpty ? (
            <div className='flex justify-center pt-2'>
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
            />
          )}
        </div>
      </section>
    </>
  )
}
