import type { BlogPost } from './types'

/** First three articles - expanded with code, takeaways, and conclusions */
export const originalPosts: BlogPost[] = [
  {
    slug: 'seo-friendly-nextjs-business-websites-without-sacrificing-ux',
    title: 'Improving Frontend Performance in Next.js Without Sacrificing UX',
    subtitle: 'When Lighthouse scores and real user experience stay aligned',
    summary:
      'How I keep SEO, perceived speed, and layout stability on the same track for business sites - without turning pages into keyword soup.',
    publishedAt: '2026-02-18',
    readTime: '11 min read',
    category: 'Next.js Performance',
    tags: ['Next.js', 'SEO', 'UX', 'Core Web Vitals'],
    intro:
      'Business sites get squeezed from two sides: marketing wants rankings and rich content; users want fast, calm pages. Next.js gives you the tools to satisfy both if you decide structure early - routing, metadata, images, and what actually ships to the client.',
    sections: [
      {
        id: 'start-with-clear-page-intent',
        title: 'Start with clear page intent',
        paragraphs: [
          'Every route should answer one primary question. The homepage explains who you are and where to go next; a service page proves fit for one offer; contact lowers friction to a conversation. When intent is muddled, you get duplicate headings, repeated keywords, and layouts that fight the reader.',
          'Once intent is fixed, your `<title>`, `description`, H1, and first screen of content naturally reinforce each other. Search engines pick up a coherent topic; humans scan faster.',
        ],
      },
      {
        id: 'metadata-that-matches-the-page',
        title: 'Metadata that matches the page',
        paragraphs: [
          'In the App Router I keep metadata close to the route. Static pages use `export const metadata`; dynamic segments use `generateMetadata` so each URL gets unique titles and descriptions derived from real data - not a single global template.',
          'Avoid repeating the same description across many URLs. It signals low-quality templates and wastes the snippet users see in results.',
        ],
        codeExample: {
          language: 'typescript',
          caption: 'Pattern: dynamic metadata for a slug-based page',
          code: `import type { Metadata } from 'next'

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug)
  if (!page) return { title: 'Not found' }
  return {
    title: page.title,
    description: page.summary,
    alternates: { canonical: \`/services/\${slug}\` },
  }
}`,
        },
      },
      {
        id: 'optimize-what-users-feel',
        title: 'Optimize what users actually feel',
        paragraphs: [
          'LCP is not abstract: it is usually a hero image, a large font block, or a client-only paint. I default to `next/image` with explicit `sizes`, priority only above the fold, and formats the browser can decode cheaply.',
          'CLS comes from ads, lazy fonts, or reserving space for images and embeds. A fixed aspect ratio or min-height for media slots removes most “jumps” users blame on “slow sites” even when TTFB is fine.',
        ],
      },
      {
        id: 'seo-structure-without-robotic-copy',
        title: 'SEO structure without robotic copy',
        paragraphs: [
          'Use a single H1, logical H2/H3 order, and internal links that help navigation - not keyword stuffing. If a sentence only exists for a keyword, delete it.',
          'Structured data (JSON-LD) is a supplement, not a replacement for readable text. I add `WebSite`, `Person`, or `Article` where it reflects what is already visible on the page.',
        ],
      },
      {
        id: 'shipping-less-javascript-to-the-browser',
        title: 'Ship less JavaScript to the browser',
        paragraphs: [
          'Marketing pages rarely need heavy client trees. Server Components and static segments keep interactive islands small: a form, a carousel, analytics. That directly improves hydration cost and Time to Interactive on mid-tier phones.',
          'When you do need client state, colocate it. A giant client layout wrapping the whole marketing site is a common reason “Next feels slow.”',
        ],
      },
    ],
    keyTakeaways: [
      'Define one primary job per route before writing metadata or headings.',
      'Use `generateMetadata` for dynamic URLs so snippets stay unique and honest.',
      'Treat LCP/CLS as layout and media problems, not only “compress harder.”',
      'Keep H1/H2 structure human-first; add JSON-LD that mirrors visible content.',
      'Prefer server rendering for marketing shells; isolate client components.',
    ],
    conclusion:
      'Performance and SEO for Next.js business sites are mostly product decisions expressed in code: what loads first, what is promised in the snippet, and what the user sees in the first second. Nail those, and scores tend to follow.',
    relatedLinks: [
      { label: 'Services', href: '/services' },
      { label: 'Projects', href: '/projects' },
    ],
  },
  {
    slug: 'lessons-from-role-based-inventory-support-workflow-app',
    title: 'Lessons from Building Full-Stack Apps with Role-Based Workflows',
    subtitle: 'Permissions, state machines, and code you can change later',
    summary:
      'What I learned shipping an internal MERN tool where admins and operators saw different screens - and the same record could be edited from two angles.',
    publishedAt: '2026-01-22',
    readTime: '12 min read',
    category: 'Full-Stack Systems',
    tags: ['MERN Stack', 'Architecture', 'RBAC', 'MongoDB'],
    intro:
      'Role-based UIs look like “hide a menu item” until you debug a ticket where an operator could see a status the API never allowed, or an admin action skipped audit. The fix is almost always explicit rules in one place - not scattered `if (role === ...)` checks.',
    sections: [
      {
        id: 'make-permissions-explicit',
        title: 'Make permissions explicit in API and UI',
        paragraphs: [
          'The UI should reflect what the API enforces, not the other way around. I keep a small matrix (role × action × resource) or capability strings the server checks on every mutating route.',
          'Duplicating role logic in React and Express guarantees drift. Either share a module (monorepo), code-generate constants, or treat the server as the source of truth and derive UI flags from a `/me` payload.',
        ],
        codeExample: {
          language: 'typescript',
          caption: 'Express route guard sketch (capabilities from JWT/session)',
          code: `function requireCapability(cap: string) {
  return (req: AuthedRequest, res: Response, next: NextFunction) => {
    if (!req.user?.capabilities?.includes(cap)) {
      return res.status(403).json({ error: 'Forbidden' })
    }
    next()
  }
}

router.post(
  '/tickets/:id/close',
  requireCapability('ticket:close'),
  closeTicketHandler
)`,
        },
      },
      {
        id: 'workflow-clarity-over-decoration',
        title: 'Workflow clarity beats extra UI chrome',
        paragraphs: [
          'Operational tools fail when people cannot answer: what state is this in, what can I do next, and who else is affected? Extra badges rarely fix that; a tight state model does.',
          'I document allowed transitions (e.g. open → in_progress → resolved) and reject invalid jumps at the API. The UI simply offers valid actions.',
        ],
      },
      {
        id: 'inventory-and-tickets-consistency',
        title: 'Keep inventory and ticket updates consistent',
        paragraphs: [
          'When a ticket implies a stock movement, either wrap both updates in a transaction (where the datastore allows) or design compensating events you can replay. Half-updated rows are worse than a slow page.',
          'For MongoDB, embedding vs referencing depends on update frequency. High-churn lines often belong in their own collection with references, so you do not rewrite huge documents on every status change.',
        ],
      },
      {
        id: 'maintainability-as-delivery-speed',
        title: 'Maintainability is delivery speed six months later',
        paragraphs: [
          'Feature teams measure “done” at merge. Operators measure “done” when Tuesday’s edge case still works. Folder-by-feature routes, typed DTOs, and repeatable list/detail patterns pay off when the client asks for one more role.',
          'I avoid “smart” generic components that encode business rules in props. Those become prop-drilling nightmares. Prefer boring pages composed of dumb UI + thin hooks.',
        ],
      },
    ],
    keyTakeaways: [
      'Enforce permissions on the server; mirror results in the client.',
      'Model workflows as explicit states and transitions, not ad-hoc flags.',
      'Treat cross-entity updates (inventory + ticket) as consistency problems.',
      'Structure code by feature so role additions do not scatter changes.',
    ],
    conclusion:
      'Role-based MERN apps punish implicit rules. If you name capabilities, model states, and keep mutations honest at the API, the React layer stays understandable - and you ship the next workflow change without fear.',
    relatedLinks: [
      { label: 'Inventory case study', href: '/projects/inventory-management-support-ticket-system' },
      { label: 'Services', href: '/services' },
    ],
  },
  {
    slug: 'structuring-mern-dashboards-for-maintainability',
    title: 'Structuring React Dashboards for Maintainable MERN Codebases',
    subtitle: 'Folders, data boundaries, and tables that do not rot',
    summary:
      'How I split dashboard code so filters, tables, and mutations can evolve without turning every screen into a 600-line component.',
    publishedAt: '2025-12-08',
    readTime: '10 min read',
    category: 'React Architecture',
    tags: ['React', 'Node.js', 'TypeScript', 'Dashboards'],
    intro:
      'Dashboards are never “finished.” New columns, new filters, and new exports arrive weekly. If data fetching, table config, and layout share one file, every change risks regressions. I separate **what** the screen loads from **how** it renders.',
    sections: [
      {
        id: 'split-data-from-presentation',
        title: 'Split data loading from presentation',
        paragraphs: [
          'A page component should orchestrate: read params, trigger queries, handle errors, pass props. Presentational components receive rows, loading flags, and callbacks - not raw axios instances.',
          'With TanStack Query (or similar), I colocate query keys and fetchers per feature folder. Screens import hooks like `useOrdersList` instead of inlining `useEffect` + `fetch`.',
        ],
        codeExample: {
          language: 'tsx',
          caption: 'Thin page + presentational table',
          code: `// features/orders/OrdersPage.tsx
export function OrdersPage() {
  const { data, isPending, error } = useOrdersList()
  if (error) return <QueryErrorBanner error={error} />
  return <OrdersTable rows={data ?? []} loading={isPending} />
}`,
        },
      },
      {
        id: 'table-and-form-patterns',
        title: 'Repeatable table and form patterns',
        paragraphs: [
          'I standardize column definitions (header, accessor, sort key) in one shape so exporting CSV and rendering `<th>` stay in sync. One-off `<td>` spaghetti breaks sorting and exports first.',
          'Forms share field components with consistent validation messages. Zod schemas on the client can mirror server validation to reduce round-trips.',
        ],
      },
      {
        id: 'routing-and-url-state',
        title: 'Routing and URL state for shareable views',
        paragraphs: [
          'Filters belong in the URL when users need to share a view: `?status=open&assignee=me`. It also makes back/forward predictable.',
          'Deep-link modals sparingly; they complicate SSR and testing. Prefer dedicated routes for complex edit flows when possible.',
        ],
      },
      {
        id: 'performance-is-clarity',
        title: 'Performance includes comprehension speed',
        paragraphs: [
          'Virtualized lists help huge tables, but before that I question whether the API should paginate or project fewer fields. Sending 5MB of JSON to paint 50 rows is a backend contract issue.',
          'Memoization is a last step. Structure and fewer renders beat `useMemo` everywhere.',
        ],
      },
    ],
    keyTakeaways: [
      'Keep fetch logic in hooks/services; keep UI components thin.',
      'Unify table definitions so UI, sort, and export do not diverge.',
      'Put shareable filters in the query string.',
      'Right-size API payloads before micro-optimizing React.',
    ],
    conclusion:
      'Maintainable dashboards are boring on purpose: predictable folders, explicit data boundaries, and URLs that reflect state. That boredom is what lets you ship the next feature without rewriting the last one.',
    relatedLinks: [
      { label: 'Movie discovery UI', href: '/projects/movie-discovery-frontend' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]
