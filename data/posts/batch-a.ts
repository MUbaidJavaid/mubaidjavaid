import type { BlogPost } from './types'

export const postsBatchA: BlogPost[] = [
  {
    slug: 'pragmatic-rest-api-design-for-nodejs',
    title: 'Pragmatic REST API Design for Node.js Services',
    subtitle: 'Resources, errors, and versioning without enterprise theater',
    summary:
      'Rules I follow when designing Express (or similar) APIs so clients stay predictable, errors debuggable, and future changes do not break mobile or web silently.',
    publishedAt: '2026-03-12',
    readTime: '13 min read',
    category: 'API Design',
    tags: ['REST', 'Express', 'Node.js', 'APIs'],
    intro:
      'REST is unfashionable in some circles, but most product teams still consume JSON over HTTP. The goal is not purity - it is contracts that a mid-level developer can call without reading your codebase. That means consistent paths, honest status codes, and error bodies that say what went wrong.',
    sections: [
      {
        id: 'nouns-and-verbs',
        title: 'Nouns in URLs, verbs in HTTP methods',
        paragraphs: [
          'I use plural resource names: `/orders`, `/orders/:id`. Actions that are not CRUD become sub-resources when it keeps idempotency clear: `POST /orders/:id/cancel` with a reason body, instead of overloading `PATCH` with magic fields.',
          'Query parameters filter, sort, and paginate: `?status=open&limit=25&cursor=abc`. I document defaults (limit cap, sort order) in OpenAPI or a short internal doc - whichever the team will actually maintain.',
        ],
      },
      {
        id: 'status-codes-and-error-shape',
        title: 'Status codes and a single error shape',
        paragraphs: [
          '2xx for success, 4xx for client mistakes or auth, 5xx for things you need to fix. Mixing 200 with `{ error: true }` trains clients to ignore HTTP semantics.',
          'Every error returns the same JSON envelope: `code` (machine), `message` (human), optional `details` for validation fields. Logs include a `requestId` header you return to the client so support can trace.',
        ],
        codeExample: {
          language: 'typescript',
          caption: 'Consistent error helper',
          code: `export function badRequest(message: string, details?: unknown) {
  return {
    status: 400,
    body: { code: 'BAD_REQUEST', message, details },
  }
}`,
        },
      },
      {
        id: 'versioning-when-you-need-it',
        title: 'Versioning when you actually need it',
        paragraphs: [
      'If only your web app calls the API, you can ship breaking changes with the deploy. When mobile or third parties exist, prefix with `/v1` or use headers - but pick one and never mix.',
          'Deprecation: communicate sunset dates, log old path usage, and keep old behavior until traffic drops. Rushing removals burns trust.',
        ],
      },
      {
        id: 'pagination-and-performance',
        title: 'Pagination that scales past demo data',
        paragraphs: [
          'Offset pagination is simple but degrades on large tables. Cursor-based lists work better for feeds and audit logs. Expose `nextCursor` in the response, not just page numbers.',
          'Avoid N+1 in serializers: join or batch-load related ids before mapping to JSON.',
        ],
      },
    ],
    keyTakeaways: [
      'Use predictable resource paths; reserve sub-resources for non-CRUD actions.',
      'Align status codes with reality; standardize error JSON + request IDs.',
      'Add `/v1` when external clients cannot deploy lockstep with the API.',
      'Choose cursor pagination for large, append-only datasets.',
    ],
    conclusion:
      'Good Node APIs are boring: the client knows what to send, what it will get back, and how to report a failure. Spend design time on those contracts - not on acronyms.',
    relatedLinks: [{ label: 'Services', href: '/services' }, { label: 'Contact', href: '/contact' }],
  },
  {
    slug: 'mongodb-schema-patterns-for-operational-apps',
    title: 'MongoDB Schema Patterns for Operational Web Apps',
    subtitle: 'When to embed, when to reference, and how to avoid unbounded arrays',
    summary:
      'Practical modeling notes from MERN dashboards: tickets, inventory lines, audit trails, and reporting - without documents that grow forever.',
    publishedAt: '2026-03-05',
    readTime: '12 min read',
    category: 'Database',
    tags: ['MongoDB', 'Mongoose', 'Schema Design', 'MERN'],
    intro:
      'MongoDB flexibility is a trap: you can embed everything until a single `orders` document hits 16MB. I start from access patterns - how the app reads and writes in one request - and let that drive embed vs reference.',
    sections: [
      {
        id: 'embed-hot-read-together',
        title: 'Embed what you always read together',
        paragraphs: [
          'If the UI always shows line items with the order header, embedding `lines` can save round trips. Cap growth: if lines can number in the thousands, normalize to `order_lines` with `orderId`.',
          'Denormalize a few display fields (product name snapshot) when the catalog can change but historical views should stay stable.',
        ],
      },
      {
        id: 'reference-for-shared-entities',
        title: 'Reference shared entities',
        paragraphs: [
          'Users, customers, and products usually deserve their own collection. Multiple documents should store `userId`, not duplicate full user blobs that drift.',
          'Use indexes that match filters: compound indexes for `{ status: 1, createdAt: -1 }` when the dashboard default sort is exactly that.',
        ],
        codeExample: {
          language: 'typescript',
          caption: 'Mongoose index example',
          code: `TicketSchema.index({ tenantId: 1, status: 1, updatedAt: -1 })`,
        },
      },
      {
        id: 'audit-and-soft-delete',
        title: 'Audit fields and soft deletes',
        paragraphs: [
          'Operational apps need `createdAt`, `updatedAt`, and often `createdBy`. Soft deletes (`deletedAt`) simplify “undo” but complicate unique constraints - plan partial unique indexes if your driver supports them.',
          'Heavy audit trails belong in append-only collections or external log stores if query volume is high.',
        ],
      },
    ],
    keyTakeaways: [
      'Model for query patterns, not for diagram aesthetics.',
      'Embed small, bounded children; reference large or shared data.',
      'Index exactly what you filter and sort in list screens.',
      'Plan audit and soft-delete early - they affect constraints and size.',
    ],
    conclusion:
      'Mongo works best when documents match real screen loads. Fight the urge to nest everything; reference when data is shared or unbounded.',
    relatedLinks: [
      { label: 'Inventory case study', href: '/projects/inventory-management-support-ticket-system' },
      { label: 'Blog: REST APIs', href: '/blog/pragmatic-rest-api-design-for-nodejs' },
    ],
  },
  {
    slug: 'express-middleware-patterns-that-scale',
    title: 'Express Middleware Patterns That Scale',
    subtitle: 'Auth, validation, and error handling in the right order',
    summary:
      'How I order middleware, share request context, and centralize errors so new routes do not reinvent security checks.',
    publishedAt: '2026-02-28',
    readTime: '10 min read',
    category: 'Node.js',
    tags: ['Express', 'Middleware', 'Security', 'APIs'],
    intro:
      'Express is minimal on purpose. Without conventions, every developer adds another `try/catch` variant. I treat middleware as a pipeline: parse → authenticate → authorize → validate → handler → error formatter.',
    sections: [
      {
        id: 'order-of-operations',
        title: 'Order of operations',
        paragraphs: [
          '`express.json()` and urlencoded parsers first. Then request id, logger, cors (if needed), rate limit on public routes, then auth.',
          'Route-specific middleware comes last before the handler. Global auth on `/api` is fine; do not run heavy DB lookups on health checks.',
        ],
      },
      {
        id: 'validation-layer',
        title: 'Validation as middleware',
        paragraphs: [
          'Zod or Joi schemas validate `body`, `query`, and `params` before handlers run. Handlers assume types are sane - less branching, fewer 500s from `undefined` access.',
          'Return 422 with field errors for validation; reserve 400 for malformed JSON.',
        ],
        codeExample: {
          language: 'typescript',
          caption: 'Zod validation wrapper sketch',
          code: `const validate = (schema: ZodSchema) => (req, res, next) => {
  const parsed = schema.safeParse({
    body: req.body,
    query: req.query,
    params: req.params,
  })
  if (!parsed.success) {
    return res.status(422).json({ code: 'VALIDATION_ERROR', details: parsed.error.flatten() })
  }
  req.validated = parsed.data
  next()
}`,
        },
      },
      {
        id: 'central-error-handler',
        title: 'Central error handler',
        paragraphs: [
          'Throw or `next(err)` with typed errors (`OperationalError` vs unknown). The last middleware maps known errors to status codes and logs unknowns with stack traces.',
          'Never leak stack traces to clients in production.',
        ],
      },
    ],
    keyTakeaways: [
      'Fix middleware order once; document it for the team.',
      'Validate inputs at the edge; keep handlers thin.',
      'Use one error formatter; distinguish operational vs programmer bugs.',
    ],
    conclusion:
      'Express scales with discipline: predictable pipelines beat clever one-off routes. Middleware is how you encode that discipline.',
    relatedLinks: [{ label: 'REST API article', href: '/blog/pragmatic-rest-api-design-for-nodejs' }],
  },
  {
    slug: 'jwt-access-refresh-and-session-hybrid-patterns',
    title: 'JWT Access Tokens, Refresh Rotation, and Session Hybrids',
    subtitle: 'What I use in MERN apps - and what I avoid',
    summary:
      'A grounded comparison: stateless JWT access tokens, refresh rotation, opaque server sessions, and when to combine patterns for SPAs and mobile.',
    publishedAt: '2026-02-14',
    readTime: '14 min read',
    category: 'Security',
    tags: ['JWT', 'Auth', 'Security', 'MERN'],
    intro:
      'JWT is not authentication - it is a format. The real questions are: how do you revoke access, how do you detect theft, and how much state you are willing to keep on the server. I pick patterns based on threat model and client type, not trends.',
    sections: [
      {
        id: 'short-lived-access',
        title: 'Short-lived access tokens',
        paragraphs: [
          'Access JWTs should live minutes, not days. Long-lived JWTs in `localStorage` are XSS-sensitive; `httpOnly` cookies reduce script access but need CSRF strategy for cookie-based APIs.',
          'For SPAs on the same site, BFF (backend-for-frontend) or same-site cookie sessions sometimes simplify more than “pure JWT.”',
        ],
      },
      {
        id: 'refresh-rotation',
        title: 'Refresh token rotation',
        paragraphs: [
          'Store refresh tokens hashed in the database with device metadata. Rotate on each use; if an old refresh appears, revoke the family - possible reuse attack.',
          'Rate-limit refresh endpoints; they are high value.',
        ],
      },
      {
        id: 'when-server-sessions-win',
        title: 'When opaque server sessions win',
        paragraphs: [
          'First-party web apps with one API often do fine with a session id in a cookie and Redis/DB backing. Revocation is immediate; debugging is easier.',
          'Microservices pushing JWT between services is a different problem - often mTLS or internal identity layers matter more than JWT size.',
        ],
      },
    ],
    keyTakeaways: [
      'Treat JWT as a transport format; decide storage and revocation explicitly.',
      'Keep access tokens short; rotate refresh tokens and detect reuse.',
      'Do not ignore CSRF when using cookies for APIs.',
    ],
    conclusion:
      'There is no universal “best auth.” There is the smallest design that meets revocation, XSS/CSRF reality, and how many clients you support.',
    relatedLinks: [{ label: 'Role-based workflows', href: '/blog/lessons-from-role-based-inventory-support-workflow-app' }],
  },
  {
    slug: 'tanstack-query-with-nextjs-app-router',
    title: 'TanStack Query with the Next.js App Router',
    subtitle: 'Client boundaries, keys, and when to fetch on the server instead',
    summary:
      'How I use React Query in App Router apps without fighting RSC - server components for initial data, client islands for live updates.',
    publishedAt: '2026-02-02',
    readTime: '11 min read',
    category: 'React',
    tags: ['TanStack Query', 'Next.js', 'React', 'Data Fetching'],
    intro:
      'Server Components can fetch on the server cheaply. Client components need caching, deduping, and background refetch - that is where TanStack Query shines. Mixing them blindly creates double fetches and stale UI unless you draw a line.',
    sections: [
      {
        id: 'where-query-runs',
        title: 'Decide where the first fetch runs',
        paragraphs: [
          'For SEO-critical or static-friendly data, fetch in a Server Component and pass props to a client child. Hydrate QueryClient with `dehydrate`/`HydrationBoundary` if the client subtree must reuse the same cache.',
          'For highly interactive dashboards behind auth, client-first fetching is often simpler than threading every update through server actions.',
        ],
        codeExample: {
          language: 'tsx',
          caption: 'Stable query key pattern',
          code: `export const orderKeys = {
  all: ['orders'] as const,
  list: (filters: OrderFilters) => [...orderKeys.all, 'list', filters] as const,
  detail: (id: string) => [...orderKeys.all, 'detail', id] as const,
}`,
        },
      },
      {
        id: 'mutations-and-cache',
        title: 'Mutations and cache updates',
        paragraphs: [
          'After `useMutation`, invalidate list keys or update cache optimistically with rollback on error. Pick one style per resource so the team stays consistent.',
          '`staleTime` defaults matter: dashboards may tolerate 30s; checkout flows may need `staleTime: 0` and explicit invalidation.',
        ],
      },
      {
        id: 'errors-and-loading-ux',
        title: 'Errors and loading UX',
        paragraphs: [
          'Surface `isError` with retry; pair with toast only for mutations, not for every background refetch failure.',
          'Skeletons that mirror layout beat spinners that shift content.',
        ],
      },
    ],
    keyTakeaways: [
      'Use RSC for first paint; use Query for client interactivity and cache.',
      'Centralize query keys; invalidate deliberately after mutations.',
      'Tune `staleTime` per domain - dashboard vs transactional flows differ.',
    ],
    conclusion:
      'TanStack Query and App Router complement each other when you choose the first source of truth per screen. Document that choice per route and avoid accidental double fetching.',
    relatedLinks: [{ label: 'Dashboard architecture', href: '/blog/structuring-mern-dashboards-for-maintainability' }],
  },
  {
    slug: 'nextjs-server-actions-vs-route-handlers',
    title: 'Next.js Server Actions vs Route Handlers',
    subtitle: 'Choosing the right server boundary for mutations and webhooks',
    summary:
      'When I reach for Server Actions, when I keep a Route Handler, and how I avoid coupling security-sensitive flows to the wrong abstraction.',
    publishedAt: '2026-01-30',
    readTime: '10 min read',
    category: 'Next.js',
    tags: ['Next.js', 'Server Actions', 'App Router', 'APIs'],
    intro:
      'Server Actions excel at form posts from your own UI. Route Handlers excel at anything that must behave like a normal HTTP endpoint - webhooks, third-party OAuth callbacks, or mobile clients. Confusing the two creates awkward `fetch` wrappers or exposed internals.',
    sections: [
      {
        id: 'server-actions-for-forms',
        title: 'Server Actions for same-origin forms',
        paragraphs: [
          'Progressive enhancement and minimal client JS are real wins. I validate on the server, revalidate tags/paths after writes, and return structured errors for field mapping.',
          'Do not treat Server Actions as a hidden public API - assume motivated users can invoke them. Re-check auth inside the action.',
        ],
      },
      {
        id: 'route-handlers-for-http-contracts',
        title: 'Route Handlers for real HTTP contracts',
        paragraphs: [
          'Webhooks from Stripe or GitHub need stable URLs, signature verification, and idempotency - Route Handlers are the fit.',
          'If a non-Next client must call it, it is probably a Route Handler or a separate service.',
        ],
      },
      {
        id: 'security-basics-both',
        title: 'Security basics for both',
        paragraphs: [
          'CSRF: understand how your cookies and methods interact. Rate limit sensitive mutations.',
          'Log action names and user ids for audit; never trust client-sent IDs without ownership checks.',
        ],
      },
    ],
    keyTakeaways: [
      'Server Actions: same-site mutations with server-first validation.',
      'Route Handlers: webhooks, integrations, and non-React callers.',
      'Always authorize on the server - never rely on hiding the endpoint.',
    ],
    conclusion:
      'Pick the tool by caller and contract. Actions for your forms; Route Handlers for the rest of the HTTP world.',
    relatedLinks: [{ label: 'Next.js performance', href: '/blog/seo-friendly-nextjs-business-websites-without-sacrificing-ux' }],
  },
]
