import type { BlogPost } from './types'

export const postsBatchB: BlogPost[] = [
  {
    slug: 'nextjs-environment-variables-and-secrets',
    title: 'Next.js Environment Variables and Secrets in Production',
    subtitle: 'PUBLIC_ vs server-only, build time vs runtime, and common leaks',
    summary:
      'A checklist for App Router apps: what belongs in `NEXT_PUBLIC_`, what must never ship to the client, and how runtime config differs from build-time `process.env` inlining.',
    publishedAt: '2026-01-18',
    readTime: '9 min read',
    category: 'Next.js',
    tags: ['Next.js', 'Security', 'DevOps', 'Vercel'],
    intro:
      'Leaking an API key is usually not “someone read the repo” - it is `NEXT_PUBLIC_` on a secret, or a server key referenced from a Client Component. Next bundles `process.env.NEXT_PUBLIC_*` into the browser. Everything else is only safe on the server if you never pass it across the RSC wire to the client.',
    sections: [
      {
        id: 'public-vs-server',
        title: 'Public vs server-only variables',
        paragraphs: [
          'Prefix truly public config (analytics id, public map key with domain restrictions) with `NEXT_PUBLIC_`. Treat it as visible to every visitor.',
          'Database URLs, signing secrets, admin tokens stay unprefixed and are only read in Server Components, Route Handlers, or server actions - never returned in props to client trees.',
        ],
      },
      {
        id: 'build-time-inlining',
        title: 'Build-time inlining vs runtime',
        paragraphs: [
          'On Vercel, env available at build can be baked into the bundle. If you need runtime-only secrets (rotating keys), use their runtime config patterns or load from a secret manager in server code paths.',
          'Docker images: pass env at container start for server-only values; do not bake secrets into layers.',
        ],
        codeExample: {
          language: 'bash',
          caption: '.env.local (example structure - never commit real secrets)',
          code: `# Server-only
DATABASE_URL=mongodb://...
SESSION_SECRET=...

# Safe for browser bundle
NEXT_PUBLIC_SITE_URL=https://example.com`,
        },
      },
      {
        id: 'rotation-and-audit',
        title: 'Rotation and audit',
        paragraphs: [
          'Document who can see production env, and rotate after departures. Short-lived tokens beat one immortal API key.',
          'Log which service account calls third-party APIs; it simplifies incident response.',
        ],
      },
    ],
    keyTakeaways: [
      'Assume `NEXT_PUBLIC_*` is world-readable.',
      'Do not pass secrets into Client Components - even as props.',
      'Understand build-time inlining vs runtime injection for your host.',
    ],
    conclusion:
      'Env hygiene is boring security. Prefix correctly, keep secrets on the server, and treat client bundles as hostile readers.',
    relatedLinks: [{ label: 'Server Actions article', href: '/blog/nextjs-server-actions-vs-route-handlers' }],
  },
  {
    slug: 'docker-multi-stage-images-for-nodejs',
    title: 'Docker Multi-Stage Images for Node.js APIs and Workers',
    subtitle: 'Smaller images, faster deploys, fewer CVEs in production',
    summary:
      'How I structure multi-stage builds for Express services: install, build, prune devDependencies, and run as a non-root user.',
    publishedAt: '2026-01-08',
    readTime: '10 min read',
    category: 'DevOps',
    tags: ['Docker', 'Node.js', 'DevOps', 'Production'],
    intro:
      'Single-stage `FROM node` images with the full repo and devDependencies are easy - and fat. Multi-stage builds copy only what you need to run: built JS, production node_modules, and a slim runtime. That reduces attack surface and cold-start pull time.',
    sections: [
      {
        id: 'builder-and-runner',
        title: 'Builder stage vs runner stage',
        paragraphs: [
          'Stage 1: install all deps, run `npm run build` or `tsc`. Stage 2: fresh base, copy `package*.json`, `npm ci --omit=dev`, copy `dist/` from builder.',
          'Use `node:20-bookworm-slim` or distroless for runtime; avoid shipping gcc and test runners.',
        ],
        codeExample: {
          language: 'dockerfile',
          caption: 'Minimal two-stage pattern',
          code: `FROM node:20-bookworm-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
USER node
CMD ["node", "dist/server.js"]`,
        },
      },
      {
        id: 'healthchecks-and-graceful-shutdown',
        title: 'Health checks and graceful shutdown',
        paragraphs: [
          'Expose `/healthz` that checks process up, not full DB depth (unless orchestrator requires it). Kubernetes uses probes; Docker Compose uses `HEALTHCHECK`.',
          'Handle SIGTERM: stop accepting new connections, drain in-flight requests, then exit - prevents dropped uploads and partial writes.',
        ],
      },
    ],
    keyTakeaways: [
      'Separate build tools from runtime artifacts with multi-stage builds.',
      'Use `npm ci --omit=dev` in the final image.',
      'Run as non-root; add health checks and graceful shutdown.',
    ],
    conclusion:
      'Docker for Node is mostly about what you leave out of the final image. Multi-stage builds are the default pattern, not an optimization.',
    relatedLinks: [{ label: 'Logging article', href: '/blog/structured-logging-for-nodejs-apis' }],
  },
  {
    slug: 'structured-logging-for-nodejs-apis',
    title: 'Structured Logging for Node.js APIs',
    subtitle: 'JSON logs, request IDs, and redaction',
    summary:
      'Why printf-style logs break observability, and how Pino-style JSON logs make search and alerts possible without vendor lock-in first.',
    publishedAt: '2025-12-20',
    readTime: '9 min read',
    category: 'Observability',
    tags: ['Node.js', 'Logging', 'Pino', 'Production'],
    intro:
      'When production misbehaves, you grep - or you query. Structured logs turn “find this user’s failed checkout” from archaeology into a filter. I standardize fields: `level`, `time`, `msg`, `requestId`, `userId`, `route`, `durationMs`.',
    sections: [
      {
        id: 'one-line-json',
        title: 'One JSON object per line',
        paragraphs: [
          'Log aggregators expect newline-delimited JSON. Human readability in prod matters less than parse reliability.',
          'Include correlation ids from edge (load balancer) or generate at entry middleware and propagate to downstream calls.',
        ],
        codeExample: {
          language: 'typescript',
          caption: 'Log shape sketch',
          code: `logger.info({
  msg: 'order_created',
  requestId: req.id,
  userId: req.user?.id,
  orderId: order.id,
  durationMs: Date.now() - started,
})`,
        },
      },
      {
        id: 'redaction',
        title: 'Redact secrets and PII by policy',
        paragraphs: [
          'Never log full card numbers, passwords, or raw JWTs. Redact keys matching `password`, `authorization`, `cookie` at the serializer level.',
          'Sampling debug logs in hot paths prevents cost explosions.',
        ],
      },
    ],
    keyTakeaways: [
      'Use structured logs with stable field names.',
      'Propagate requestId across services.',
      'Redact sensitive keys centrally - not ad hoc in each route.',
    ],
    conclusion:
      'Logging is your cheapest observability. Structure it once, and incidents get shorter every time.',
    relatedLinks: [{ label: 'Rate limiting', href: '/blog/rate-limiting-for-public-nodejs-apis' }],
  },
  {
    slug: 'rate-limiting-for-public-nodejs-apis',
    title: 'Rate Limiting for Public Node.js APIs',
    subtitle: 'Token buckets, keys, and Redis when one box is not enough',
    summary:
      'Practical rate limiting for Express: per-IP defaults, per-user overrides, and moving counters to Redis when you scale past one instance.',
    publishedAt: '2025-12-12',
    readTime: '8 min read',
    category: 'Security',
    tags: ['Express', 'Security', 'Redis', 'APIs'],
    intro:
      'Without limits, login, search, and webhook endpoints become involuntary DDoS sinks. Rate limiting is not perfect - IPs rotate - but it cuts noise and slows credential stuffing. I combine IP limits with stricter user-based limits for authenticated routes.',
    sections: [
      {
        id: 'choose-limit-key',
        title: 'Choose the limit key carefully',
        paragraphs: [
          'Anonymous: IP + route + window. Authenticated: user id wins over IP for fairness behind NAT.',
          'Return `429` with `Retry-After` when possible; log threshold breaches.',
        ],
      },
      {
        id: 'redis-for-horizontal-scale',
        title: 'Redis when you run multiple instances',
        paragraphs: [
          'In-memory `Map` counters reset per instance and skew under load. Redis (or a managed equivalent) centralizes counts with TTL.',
          'Sliding window vs fixed window: fixed is simpler; sliding reduces burst edge effects slightly - pick based on abuse you see.',
        ],
      },
    ],
    keyTakeaways: [
      'Rate limit expensive endpoints: auth, search, file upload.',
      'Use user id when authenticated; IP alone is coarse.',
      'Share counters with Redis beyond one Node process.',
    ],
    conclusion:
      'Rate limiting is baseline hygiene. Start simple, tune keys from real traffic, and centralize when you scale out.',
    relatedLinks: [{ label: 'REST design', href: '/blog/pragmatic-rest-api-design-for-nodejs' }],
  },
  {
    slug: 'http-caching-and-redis-application-cache',
    title: 'HTTP Caching vs Redis Application Cache',
    subtitle: 'Where each layer helps - and where it lies to you',
    summary:
      'Splitting browser/CDN cache headers from server-side Redis cache for hot reads. When `Cache-Control` is enough and when you need explicit invalidation.',
    publishedAt: '2025-12-01',
    readTime: '11 min read',
    category: 'Performance',
    tags: ['Caching', 'Redis', 'HTTP', 'Performance'],
    intro:
      'Caching fixes the wrong problem if the underlying query is O(n²). But once queries are sane, caching is the cheapest win. I treat HTTP caches (browser + CDN) and application caches (Redis) as different tools with different invalidation stories.',
    sections: [
      {
        id: 'http-layer',
        title: 'HTTP layer: public vs private',
        paragraphs: [
          'Immutable assets get long `max-age` and fingerprinted filenames. Personalized JSON usually needs `private, no-store` unless you segment by cookie carefully.',
          '`stale-while-revalidate` helps marketing pages; APIs rarely want surprises.',
        ],
      },
      {
        id: 'redis-layer',
        title: 'Redis layer: explicit TTL and busting',
        paragraphs: [
          'Cache denormalized read models with TTL as safety net. For stronger consistency, delete keys on write (write-through / cache aside).',
          'Name keys with version prefixes when schema changes: `v2:product:123`.',
        ],
      },
      {
        id: 'stampede',
        title: 'Cache stampede mitigation',
        paragraphs: [
          'When a hot key expires, many workers may refetch at once. Single-flight (one recomputes, others wait) or probabilistic early expiration reduces spikes.',
        ],
      },
    ],
    keyTakeaways: [
      'Use HTTP caches for static and semi-static assets.',
      'Use Redis when you need cross-request sharing and invalidation logic.',
      'Always plan stampede behavior for hot keys.',
    ],
    conclusion:
      'Caching is policy: who can see stale data, for how long, and how writes propagate. Document that per resource.',
    relatedLinks: [{ label: 'MongoDB patterns', href: '/blog/mongodb-schema-patterns-for-operational-apps' }],
  },
  {
    slug: 'typescript-strict-mode-in-existing-node-codebases',
    title: 'Turning On TypeScript Strictness in Existing Node Codebases',
    subtitle: 'Incremental `strict`, `noImplicitAny`, and boundary typing',
    summary:
      'A migration path that does not freeze the repo for a month: enable compiler flags gradually, type boundaries first, and defer legacy internals.',
    publishedAt: '2025-11-18',
    readTime: '10 min read',
    category: 'TypeScript',
    tags: ['TypeScript', 'Node.js', 'Refactoring', 'Quality'],
    intro:
      'Flipping `strict` overnight on a MERN repo breaks hundreds of files. I tighten from the outside in: new code strict, old code behind boundaries, and compiler flags staged with `// @ts-expect-error` tickets attached to real fixes.',
    sections: [
      {
        id: 'boundary-first',
        title: 'Type boundaries first',
        paragraphs: [
          'HTTP handlers: validate with Zod and infer types. Database models: generate types from schema or define interfaces for documents you return to the client.',
          'Untyped `any` at legacy core is tolerable short-term if the API surface is honest.',
        ],
      },
      {
        id: 'enable-flags-incrementally',
        title: 'Enable flags incrementally',
        paragraphs: [
          'Order that usually works: `strictNullChecks`, `noImplicitAny`, `strict`, then `noUncheckedIndexedAccess` if the team wants pain for gain.',
          'CI must run `tsc --noEmit`; eslint alone misses types.',
        ],
        codeExample: {
          language: 'json',
          caption: 'tsconfig path for gradual strictness',
          code: `{
  "compilerOptions": {
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}`,
        },
      },
      {
        id: 'tests-and-types',
        title: 'Let tests catch behavior; types catch shape',
        paragraphs: [
          'Types do not replace integration tests for auth and payments. They reduce dumb null crashes and wrong field names - which still matter.',
        ],
      },
    ],
    keyTakeaways: [
      'Type the HTTP and DB boundaries before inner legacy utilities.',
      'Enable strict flags in stages; fix or ticket each `expect-error`.',
      'Run `tsc` in CI alongside tests.',
    ],
    conclusion:
      'Strict TypeScript is a migration, not a switch. Progress beats perfection - tighten where new code and public surfaces live.',
    relatedLinks: [{ label: 'Testing APIs', href: '/blog/integration-testing-nodejs-apis-with-supertest' }],
  },
]
