import { originalPosts } from './batch-original'
import { postsBatchA } from './batch-a'
import { postsBatchB } from './batch-b'
import { postsBatchC } from './batch-c'

export type { BlogPost, BlogSection, BlogCodeExample } from './types'

const allPosts = [
  ...originalPosts,
  ...postsBatchA,
  ...postsBatchB,
  ...postsBatchC,
]

/** Newest first - featured slot on /blog uses `posts[0]` */
export const posts = [...allPosts].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
)

export function getPostBySlug (slug: string) {
  return posts.find(post => post.slug === slug)
}
