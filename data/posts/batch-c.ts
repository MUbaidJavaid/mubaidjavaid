import type { BlogPost } from './types'

export const postsBatchC: BlogPost[] = [
  {
    slug: 'production-observability-for-nextjs-and-nodejs',
    title: 'Production Observability for Next.js and Node.js',
    subtitle:
      'Logs, metrics, and traces that actually reduce incident time',
    summary:
      'A practical observability baseline for product teams: request IDs, structured logs, latency/error dashboards, and trace links that speed up root-cause analysis.',
    publishedAt: '2025-12-14',
    readTime: '13 min read',
    category: 'Architecture',
    tags: ['Observability', 'Next.js', 'Node.js', 'Reliability'],
    intro:
      'Most teams say they "monitor production," but during incidents they still guess. Reliable products need observability that connects user symptoms to backend causes quickly. I set up a lightweight stack first: structured logs, core metrics, and distributed traces tied together by request IDs.',
    sections: [
      {
        id: 'baseline-signals',
        title: 'Start with the three signals',
        paragraphs: [
          'Collect logs (what happened), metrics (how often/how long), and traces (where time was spent). Missing any one of these creates blind spots during real incidents.',
          'For customer-facing apps, track route-level p95 latency and error rate by endpoint and tenant. These are usually the first indicators of degraded UX.',
        ],
      },
      {
        id: 'request-context',
        title: 'Request context and correlation IDs',
        paragraphs: [
          'Generate a request ID at the edge or gateway, pass it through headers, and include it in every server log line. This lets support jump from a user complaint to exact backend timeline.',
          'Add userId/tenantId context where safe so logs are searchable by account without leaking sensitive payloads.',
        ],
        codeExample: {
          language: 'typescript',
          caption: 'Attach request ID in Express middleware',
          code: `app.use((req, res, next) => {
  const requestId = req.header('x-request-id') ?? crypto.randomUUID()
  res.setHeader('x-request-id', requestId)
  req.requestId = requestId
  next()
})`,
        },
      },
      {
        id: 'alert-design',
        title: 'Alert design that avoids noise',
        paragraphs: [
          'Alert on user impact, not raw CPU spikes alone. A brief CPU jump with normal latency usually does not need a pager.',
          'Use burn-rate style error budget alerts for API reliability so on-call gets fewer but more meaningful notifications.',
        ],
      },
    ],
    keyTakeaways: [
      'Implement logs, metrics, and traces together.',
      'Propagate request IDs across web and API boundaries.',
      'Alert on customer impact (latency/error budget), not infrastructure noise.',
    ],
    conclusion:
      'Observability is not about more dashboards; it is about faster decisions under pressure. Start with correlation IDs and route-level SLO signals, then expand instrumentation where incidents repeatedly occur.',
    relatedLinks: [
      {
        label: 'Structured logging for Node.js APIs',
        href: '/blog/structured-logging-for-nodejs-apis',
      },
      {
        label: 'Performance-friendly Next.js UX',
        href: '/blog/seo-friendly-nextjs-business-websites-without-sacrificing-ux',
      },
    ],
  },
  {
    slug: 'idempotency-and-webhook-reliability-for-payments',
    title: 'Idempotency and Webhook Reliability for Payment Flows',
    subtitle:
      'Prevent duplicate charges, handle retries safely, and keep order state consistent',
    summary:
      'How to design payment APIs that survive retries and out-of-order webhooks: idempotency keys, event deduplication, and state transitions with auditability.',
    publishedAt: '2025-11-23',
    readTime: '12 min read',
    category: 'Backend',
    tags: ['Payments', 'Webhooks', 'Node.js', 'API Design'],
    intro:
      'Payment incidents damage trust quickly: duplicate charges, missed confirmations, or pending states that never resolve. The core fix is deterministic backend design. Every critical write must be safe to repeat, and webhook processing must tolerate delay, retries, and reordering.',
    sections: [
      {
        id: 'idempotency-keys',
        title: 'Use idempotency keys on charge creation',
        paragraphs: [
          'Require an idempotency key from client or gateway for create-charge endpoints. Store response by key with a TTL and return the original result on retry.',
          'Hash request payload with the key; if same key arrives with different payload, reject it as misuse to avoid silent data corruption.',
        ],
      },
      {
        id: 'webhook-dedup',
        title: 'Webhook deduplication and ordering',
        paragraphs: [
          'Persist provider event IDs in a processed-events table. If an event is seen again, acknowledge and skip side effects.',
          'Design state transitions to be monotonic where possible (e.g., `pending -> paid -> refunded`) so older events cannot roll back newer truth.',
        ],
        codeExample: {
          language: 'typescript',
          caption: 'Deduplicate webhook events before processing',
          code: `const alreadyProcessed = await ProcessedEvent.findOne({ eventId })
if (alreadyProcessed) return res.status(200).send('ok')

await ProcessedEvent.create({ eventId, receivedAt: new Date() })
await applyPaymentEvent(event)
return res.status(200).send('ok')`,
        },
      },
      {
        id: 'ops-and-reconciliation',
        title: 'Reconciliation and operational safeguards',
        paragraphs: [
          'Run a scheduled reconciliation job comparing provider records with internal orders to catch missed webhooks.',
          'Log every payment state change with actor/source metadata so support can resolve disputes with an audit trail.',
        ],
      },
    ],
    keyTakeaways: [
      'Idempotency keys are mandatory for create-payment endpoints.',
      'Deduplicate webhooks and guard state transitions against out-of-order events.',
      'Add reconciliation jobs and audit logs to reduce financial support risk.',
    ],
    conclusion:
      'Reliable payment systems assume retries and race conditions from day one. Idempotency plus reconciliation turns unpredictable network behavior into predictable business outcomes.',
    relatedLinks: [
      {
        label: 'Pragmatic REST API design',
        href: '/blog/pragmatic-rest-api-design-for-nodejs',
      },
      {
        label: 'Rate limiting for public APIs',
        href: '/blog/rate-limiting-for-public-nodejs-apis',
      },
    ],
  },
  {
    slug: 'integration-testing-nodejs-apis-with-supertest',
    title: 'Integration Testing Node.js APIs with Supertest',
    subtitle: 'Spin up the app once, hit real routes, assert on JSON',
    summary:
      'How I structure Jest + Supertest suites for Express apps: test database, seeding, auth headers, and what not to mock if you want confidence.',
    publishedAt: '2025-11-02',
    readTime: '11 min read',
    category: 'Testing',
    tags: ['Testing', 'Jest', 'Supertest', 'Express'],
    intro:
      'Unit tests for pure functions are cheap. API integration tests cost more setup but catch the bugs unit tests miss: wrong middleware order, bad status codes, and schema drift between validation and persistence. I invest in a thin harness that boots the app against a disposable database.',
    sections: [
      {
        id: 'test-app-factory',
        title: 'Test app factory',
        paragraphs: [
          'Export `createApp()` that wires the same middleware as production but swaps config: in-memory Mongo, test secrets, disabled external webhooks.',
          'Avoid starting a new server per test when Supertest can call `app` directly unless you need full HTTP socket behavior.',
        ],
        codeExample: {
          language: 'typescript',
          caption: 'Supertest request sketch',
          code: `const res = await request(app)
  .post('/api/orders')
  .set('Authorization', \`Bearer \${token}\`)
  .send({ sku: 'ABC', qty: 2 })
expect(res.status).toBe(201)
expect(res.body).toMatchObject({ status: 'pending' })`,
        },
      },
      {
        id: 'data-seeding',
        title: 'Data seeding and isolation',
        paragraphs: [
          'Truncate or drop collections between tests or use transactions if your test runner supports rollback per suite. Parallel tests need separate DB names per worker (`jest --runInBand` is simpler early).',
          'Factory functions build valid users/orders instead of copy-pasting JSON blobs.',
        ],
      },
      {
        id: 'what-to-mock',
    title: 'What to mock and what not to',
        paragraphs: [
          'Mock third-party HTTP (payment, email) at the client boundary; assert you sent the right payload.',
          'Do not mock your own database if the goal is integration confidence - use a real test instance.',
        ],
      },
    ],
    keyTakeaways: [
      'Boot the real middleware stack in tests.',
      'Use a dedicated test database and deterministic seeds.',
      'Mock external SaaS; keep Mongo/Postgres real for integration suites.',
    ],
    conclusion:
      'Supertest pays off when tests resemble production requests. Invest once in app factory + DB hygiene, then add cases as you fix incidents.',
    relatedLinks: [{ label: 'Express middleware', href: '/blog/express-middleware-patterns-that-scale' }],
  },
  {
    slug: 'github-actions-ci-pipeline-for-nextjs',
    title: 'A Practical GitHub Actions CI Pipeline for Next.js',
    subtitle: 'Install, lint, typecheck, test, build - without twenty minutes of pain',
    summary:
      'Minimal workflows: cache dependencies, run eslint and tsc, run unit tests, build Next. When to add Playwright and how to keep secrets out of forks.',
    publishedAt: '2025-10-22',
    readTime: '9 min read',
    category: 'DevOps',
    tags: ['GitHub Actions', 'CI', 'Next.js', 'Automation'],
    intro:
      'CI exists to catch “works on my machine” before merge. For Next apps, the critical path is usually: lint + `tsc --noEmit` + `next build` (which also validates many config mistakes). Tests come next once the team agrees they will not flake.',
    sections: [
      {
        id: 'workflow-skeleton',
        title: 'Workflow skeleton',
        paragraphs: [
          'Trigger on `pull_request` to main. Use `actions/setup-node` with `cache: npm` (or pnpm/yarn). Matrix Node version only if you support multiple runtimes.',
          'Fail fast: run lint and typecheck before build to save minutes.',
        ],
        codeExample: {
          language: 'yaml',
          caption: 'Condensed jobs outline',
          code: `jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm test --if-present
      - run: npm run build`,
        },
      },
      {
        id: 'secrets-and-forks',
        title: 'Secrets and fork PRs',
        paragraphs: [
          'GitHub does not expose secrets to workflows from forks by default - good. Document that external contributors need maintainers to run CI.',
          'Use environment-scoped secrets for deploy jobs, not global repo secrets when possible.',
        ],
      },
      {
        id: 'e2e-later',
        title: 'Add E2E when the product stabilizes',
        paragraphs: [
          'Playwright against preview deployments catches regressions UI tests miss, but flakiness costs trust. Start CI with build correctness; add E2E for critical flows (checkout, signup) incrementally.',
        ],
      },
    ],
    keyTakeaways: [
      'Cache deps; order checks from fastest signal to slowest.',
      'Require `tsc` and `next build` for type + config safety.',
      'Treat fork PR secret rules as a feature, not annoyance.',
    ],
    conclusion:
      'Good CI is short and reliable. Start with lint, types, and build - then grow tests as the codebase earns them.',
    relatedLinks: [{ label: 'TypeScript strictness', href: '/blog/typescript-strict-mode-in-existing-node-codebases' }],
  },
  {
    slug: 'react-accessibility-for-dashboards-and-forms',
    title: 'React Accessibility for Dashboards and Forms',
    subtitle: 'Tables, focus, and errors that screen readers understand',
    summary:
      'Concrete patterns: associate labels, announce async errors, and make data tables navigable without breaking layout.',
    publishedAt: '2025-10-10',
    readTime: '10 min read',
    category: 'Accessibility',
    tags: ['A11y', 'React', 'UX', 'WCAG'],
    intro:
      'Internal dashboards often skip accessibility because “only staff use them.” That staff includes people using keyboards and assistive tech - and legal exposure still exists for employee tools in many jurisdictions. Small fixes (labels, roles, focus) compound.',
    sections: [
      {
        id: 'forms',
        title: 'Forms: labels, descriptions, errors',
        paragraphs: [
          'Every input has a visible `<label htmlFor>` or `aria-label` when design insists on edge cases. Error text links with `aria-describedby`.',
          'Do not rely on color alone for validation - icons plus text.',
        ],
      },
      {
        id: 'data-tables',
        title: 'Data tables',
        paragraphs: [
          'Use `<table>` with `<th scope="col">` for real tabular data. Div-grid tables lose semantics unless you rebuild them with ARIA - usually not worth it.',
          'Sticky headers help everyone; preserve keyboard scroll containers.',
        ],
      },
      {
        id: 'focus-management',
        title: 'Focus management in modals',
        paragraphs: [
          'Trap focus, return focus on close, and set `role="dialog"` with `aria-modal="true"`. Libraries like Radix handle much of this - verify you did not override defaults badly.',
        ],
      },
    ],
    keyTakeaways: [
      'Label every control; wire errors with `aria-describedby`.',
      'Prefer semantic tables for dense data.',
      'Manage focus in dialogs - trap and restore.',
    ],
    conclusion:
      'Accessibility in React is mostly DOM semantics and focus. Ship that in the design system once, and every dashboard inherits the win.',
    relatedLinks: [{ label: 'Dashboard structure', href: '/blog/structuring-mern-dashboards-for-maintainability' }],
  },
  {
    slug: 'mongoose-aggregation-for-reporting-views',
    title: 'Mongoose Aggregation Pipelines for Reporting Views',
    subtitle: '$match, $lookup, $group - and when to move heavy jobs out of Mongo',
    summary:
      'Building admin metrics from MongoDB without dragging full collections into Node: index-friendly matches, controlled lookups, and export limits.',
    publishedAt: '2025-09-28',
    readTime: '12 min read',
    category: 'Database',
    tags: ['MongoDB', 'Mongoose', 'Analytics', 'Reporting'],
    intro:
      'OLAP warehouses exist for a reason - but many MERN teams still need “good enough” reporting in-app. Aggregation pipelines can summarize tickets per day or revenue per category if you respect indexes and document sizes. I start with `$match` early to shrink working set.',
    sections: [
      {
        id: 'match-and-project-early',
        title: '$match and $project early',
        paragraphs: [
          'Push selective filters into `$match` using indexed fields (tenant, date range). Project only fields needed downstream to reduce memory.',
          'Explain plans in staging with representative data volumes - dashboards that work on 1k rows may die at 1M.',
        ],
        codeExample: {
          language: 'typescript',
          caption: 'Pipeline sketch',
          code: `const rows = await Order.aggregate([
  { $match: { tenantId, createdAt: { $gte: start, $lte: end } } },
  { $group: { _id: '$status', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
])`,
        },
      },
      {
        id: 'lookup-cost',
        title: '$lookup cost and alternatives',
        paragraphs: [
          '`$lookup` is a join; abuse it and you recreate RDBMS pain without constraints. Denormalize small display fields at write time when reads are hot.',
          'For cross-collection reports that hammer CPU, schedule nightly rollups into summary collections.',
        ],
      },
      {
        id: 'export-limits',
        title: 'Exports and hard limits',
        paragraphs: [
          'CSV export endpoints need caps and streaming. Never `find()` unbounded into memory.',
        ],
      },
    ],
    keyTakeaways: [
      'Filter early on indexed fields; project late fields away.',
      'Treat `$lookup` as expensive; denormalize or precompute when needed.',
      'Stream large exports; enforce limits.',
    ],
    conclusion:
      'Mongo aggregations are powerful and easy to misuse. Profile with real data size, precompute when interactive latency suffers, and know when to graduate metrics to a warehouse.',
    relatedLinks: [{ label: 'MongoDB schema patterns', href: '/blog/mongodb-schema-patterns-for-operational-apps' }],
  },
  {
    slug: 'deploying-mern-apps-vercel-render-railway',
    title: 'Deploying MERN Apps: Vercel, Render, and Railway',
    subtitle: 'Splitting Next.js from long-lived Node APIs and databases',
    summary:
      'Where I host the React/Next front, where the Express API fits, and how to avoid calling a sleeping free-tier DB from a serverless function.',
    publishedAt: '2025-09-12',
    readTime: '11 min read',
    category: 'DevOps',
    tags: ['Deployment', 'Vercel', 'Render', 'MERN'],
    intro:
      'Vercel excels at Next.js and serverless/edge patterns; long-running WebSockets and heavy background workers often want a VM or container platform. MERN rarely means “one deploy button” - it means clear boundaries between static/edge, API service, and database hosting.',
    sections: [
      {
        id: 'split-frontend-api',
        title: 'Split frontend and API when needed',
        paragraphs: [
          'Next on Vercel with Route Handlers can cover many CRUD apps. When you have persistent sockets, cron workers, or CPU-heavy jobs, deploy Express on Render/Railway/Fly as a separate service.',
          'Point `NEXT_PUBLIC_API_URL` at the API domain; enable CORS deliberately.',
        ],
      },
      {
        id: 'database-region',
        title: 'Database region and cold starts',
        paragraphs: [
          'Co-locate API and database region. Serverless functions hitting a distant Mongo cluster add latency every invocation.',
          'Managed Mongo Atlas: whitelist API IPs or use VPC peering for production.',
        ],
      },
      {
        id: 'env-and-migrations',
        title: 'Env parity and migrations',
        paragraphs: [
          'Staging should mirror prod topology - even if scaled down - to catch CORS and cookie domain mistakes.',
          'Run migrations as an explicit deploy step, not “on first request.”',
        ],
      },
    ],
    keyTakeaways: [
      'Match hosting to workload: Next edge vs long-lived Node.',
      'Co-locate API and DB; watch serverless-to-DB latency.',
      'Treat staging topology as a first-class test surface.',
    ],
    conclusion:
      'Deployment is architecture. Draw boxes for web, API, and data; choose platforms per box - not one logo for the whole MERN stack.',
    relatedLinks: [
      { label: 'Docker for Node', href: '/blog/docker-multi-stage-images-for-nodejs' },
      { label: 'Env variables', href: '/blog/nextjs-environment-variables-and-secrets' },
    ],
  },
]
