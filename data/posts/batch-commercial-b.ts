import type { BlogPost } from './types'

/**
 * Batch B — high-search commercial / hire-intent articles.
 * Realistic founder & buyer queries; proof-linked; no thin “what is React” posts.
 */
export const postsBatchCommercialB: BlogPost[] = [
  {
    slug: 'marketing-site-vs-multitenant-saas-mvp',
    title: 'Marketing Site vs Multi-Tenant SaaS MVP — Which Scope Are You Buying?',
    subtitle: 'The fastest way founders waste budget is mixing these two',
    summary:
      'A clear comparison of brochure sites vs multi-tenant product MVPs on Next.js — timelines, risk, and how to brief a developer honestly.',
    publishedAt: '2026-09-14',
    readTime: '10 min read',
    category: 'SaaS Delivery',
    tags: ['MVP', 'Next.js', 'SaaS', 'Founders', 'Scope'],
    intro:
      '“Build me an MVP” often means two opposite things. Sometimes it is a conversion site with a waitlist. Sometimes it is auth, tenancy, roles, and a workflow that real operators use. Pricing, timeline, and stack choices only make sense after you name which one you mean.',
    sections: [
      {
        id: 'brochure',
        title: 'Marketing / brochure scope',
        paragraphs: [
          'Primary job: explain the offer, capture leads, look trustworthy. Stack can stay lean: App Router pages, forms, analytics, CMS optional.',
          'Success looks like: clear story, fast LCP, working contact path, and deploy you can update without a full engineering team.'
        ]
      },
      {
        id: 'product',
        title: 'Multi-tenant product MVP scope',
        paragraphs: [
          'Primary job: one tenant can complete a core workflow end-to-end. That forces auth, data isolation, roles, and admin surfaces — the QuikPOS class of work.',
          'Success looks like: staging users finishing the path weekly, not a homepage that “looks like a product.”'
        ]
      },
      {
        id: 'brief',
        title: 'How to brief without confusion',
        paragraphs: [
          'Write one sentence: “In eight weeks a {role} can {action} and we will measure {event}.” If you cannot write that sentence, you are still in discovery — not build.',
          'If you need both a site and a product, sequence them. Lead-gen first is fine when fundraising. Product spine first is better when you already have paying operators waiting.'
        ]
      }
    ],
    keyTakeaways: [
      'Brochure and multi-tenant MVP are different products.',
      'One success event beats a feature wishlist.',
      'Sequence site and product instead of pretending they are the same quote.'
    ],
    conclusion:
      'Share which scope you need on Contact — I will push back if the brief mixes brochure timelines with SaaS depth.',
    relatedLinks: [
      {
        label: 'Realistic SaaS MVP timeline',
        href: '/blog/ship-saas-mvp-nextjs-realistic-timeline'
      },
      {
        label: 'QuikPOS case study',
        href: '/projects/quikpos-saas-point-of-sale'
      },
      { label: 'Discuss your project', href: '/contact' }
    ]
  },
  {
    slug: 'nextjs-app-router-seo-launch-checklist',
    title: 'Next.js App Router SEO Checklist I Use Before Launch',
    subtitle: 'Canonical, sitemap, metadata, and CWV — without keyword theater',
    summary:
      'A practical pre-launch SEO checklist for Next.js App Router sites: one origin, titles, sitemap, robots, OG, and Core Web Vitals habits that survive production.',
    publishedAt: '2026-09-13',
    readTime: '11 min read',
    category: 'SEO & Launch',
    tags: ['Next.js', 'SEO', 'App Router', 'Core Web Vitals', 'Launch'],
    intro:
      'Search does not reward stuffing “best Next.js developer” into every H2. It rewards a crawlable site with clear intent per URL, honest titles, and pages that load. This is the checklist I run before a marketing site or portfolio goes public.',
    sections: [
      {
        id: 'origin',
        title: 'One public origin',
        paragraphs: [
          'Pick the canonical host early. Preview URLs (`*-vercel.app` aliases) must not publish as the sitemap origin. `NEXT_PUBLIC_SITE_URL` should be Config pointing at production.',
          'If an old host still answers, noindex it or redirect after cutover — do not let two entities fight in Google.'
        ]
      },
      {
        id: 'metadata',
        title: 'Metadata that matches the page job',
        paragraphs: [
          'Home = brand + role. Services = hire intent. Cases = problem proof. Blog post = one topic. Contact = convert. Duplicate titles across routes waste crawl budget.',
          'Use the App Router `metadata` / `generateMetadata` APIs. Keep layout `title.template` from doubling the brand name in `<title>`.'
        ]
      },
      {
        id: 'crawl',
        title: 'Sitemap, robots, thank-you',
        paragraphs: [
          '`/sitemap.xml` lists indexable URLs on the canonical host. `/robots.txt` allows the site, points at the sitemap, and blocks APIs plus thank-you pages.',
          'Form confirmation routes should be `noindex` — they are not content.'
        ]
      },
      {
        id: 'cwv',
        title: 'LCP and images without drama',
        paragraphs: [
          'Hero LCP should be a real `<img>` / `next/image` with priority — not a CSS background that Lighthouse discovers late.',
          'Compress OG images. Defer analytics until interaction or a short timeout so gtag is not on the LCP critical path.'
        ]
      }
    ],
    keyTakeaways: [
      'Canonical host first — SEO after that is refinement.',
      'One intent per URL; unique titles.',
      'Sitemap/robots must match production, not preview.'
    ],
    conclusion:
      'Need a launch review on a Next.js site? Send the staging URL via Contact and I will run this checklist against what you shipped.',
    relatedLinks: [
      {
        label: 'SEO-friendly Next.js sites',
        href: '/blog/seo-friendly-nextjs-business-websites-without-sacrificing-ux'
      },
      { label: 'Services', href: '/services' },
      { label: 'Discuss your project', href: '/contact' }
    ]
  },
  {
    slug: 'how-to-brief-fullstack-nextjs-contractor',
    title: 'How to Brief a Full-Stack Next.js Contractor (So Quotes Stay Honest)',
    subtitle: 'What I need before I can give a real timeline',
    summary:
      'A founder-friendly briefing template for hiring a Next.js / MERN contractor — users, workflow, constraints, and proof you should ask for.',
    publishedAt: '2026-09-12',
    readTime: '9 min read',
    category: 'Hiring',
    tags: ['Hiring', 'Next.js', 'Freelance', 'Founders', 'Brief'],
    intro:
      'Vague briefs create optimistic quotes. Clear briefs create boring, accurate plans. If you are hiring a full-stack Next.js engineer, this is the information that turns a chat into a shippable scope.',
    sections: [
      {
        id: 'must-have',
        title: 'Must-have inputs',
        paragraphs: [
          'Who is the primary user? What is the one workflow that must work in production? What systems already exist (auth, payments, CMS, WhatsApp ops)?',
          'Constraints: deadline, budget band, must-use vendors, compliance posture (especially fintech/health — without asking for fake certifications).'
        ]
      },
      {
        id: 'proof',
        title: 'Proof to request from any contractor',
        paragraphs: [
          'Live URLs, case notes with role attribution, and a sample architecture paragraph beat “10 years experience” claims.',
          'Ask how they run staging, PRs, and weekly updates. Remote delivery fails on communication more often than on React itself.'
        ]
      },
      {
        id: 'red-flags',
        title: 'Brief red flags',
        paragraphs: [
          '“Clone this Uber for X in two weeks.” “Fixed price for undefined scope.” “SEO guarantee page-one.” Walk away or rewrite the brief.',
          'Healthy: phased delivery, written definition of done, and a first milestone that is a vertical slice on staging.'
        ]
      }
    ],
    keyTakeaways: [
      'One user + one workflow unlocks honest quotes.',
      'Ask for live proof and delivery rhythm.',
      'Undefined scope should never get a fixed fantasy price.'
    ],
    conclusion:
      'Paste your brief into Contact — even a rough one. I will reply with what is clear, what is missing, and a sensible first milestone.',
    relatedLinks: [
      {
        label: 'Hiring Next.js checklist',
        href: '/blog/hiring-nextjs-developer-checklist'
      },
      { label: 'How I work', href: '/services#how-i-work' },
      { label: 'Discuss your project', href: '/contact' }
    ]
  },
  {
    slug: 'freelancer-vs-agency-for-saas-mvp',
    title: 'Freelancer vs Agency for a SaaS MVP — When Each Wins',
    subtitle: 'A practical decision frame for founders',
    summary:
      'When a senior freelance full-stack engineer is enough for a SaaS MVP, when an agency is safer, and how to avoid paying for the wrong model.',
    publishedAt: '2026-09-11',
    readTime: '8 min read',
    category: 'Hiring',
    tags: ['SaaS', 'Freelance', 'Agency', 'MVP', 'Founders'],
    intro:
      'Agencies sell capacity and process. Strong freelancers sell ownership and speed on a narrow surface. Neither is “better” — they fit different risk profiles. Here is how I explain the tradeoff when founders ask.',
    sections: [
      {
        id: 'freelancer-wins',
        title: 'When a freelancer wins',
        paragraphs: [
          'One product spine, one primary stack (Next.js / MERN), a founder who can decide quickly, and a scope that fits a single accountable engineer.',
          'You get fewer handoffs and a codebase one person can still explain. You lose parallel design/brand/dev squads.'
        ]
      },
      {
        id: 'agency-wins',
        title: 'When an agency wins',
        paragraphs: [
          'Multiple workstreams (brand, motion, research, several products), heavy stakeholder process, or a need for bench coverage if someone disappears.',
          'You pay for coordination. That cost is rational when the org needs it — wasteful when you only needed a vertical slice.'
        ]
      },
      {
        id: 'hybrid',
        title: 'A hybrid that often works',
        paragraphs: [
          'Freelance engineer owns product MVP; agency or specialist owns brand film / print when needed. Keep contracts clear so nobody owns “everything vaguely.”',
          'Employment delivery (like Evolvo project work) is another model again — role-attributed, not personal ownership of the client brand.'
        ]
      }
    ],
    keyTakeaways: [
      'Match org complexity to delivery model.',
      'One accountable engineer beats a vague “team” for narrow MVPs.',
      'Hybrid is fine when ownership lines are written down.'
    ],
    conclusion:
      'If your MVP is a single workflow on Next.js, discuss it on Contact. If you need a multi-discipline agency, I will say so rather than pretend otherwise.',
    relatedLinks: [
      { label: 'Services', href: '/services' },
      { label: 'Projects', href: '/projects' },
      { label: 'Discuss your project', href: '/contact' }
    ]
  },
  {
    slug: 'saas-rbac-roles-nextjs-mern',
    title: 'SaaS Roles & RBAC on Next.js / MERN — Decide Early',
    subtitle: 'Permission models that survive the second tenant',
    summary:
      'How I design role-based access for multi-tenant SaaS on Next.js and Node — what to lock in week one, and what breaks if you wait.',
    publishedAt: '2026-09-09',
    readTime: '10 min read',
    category: 'SaaS Architecture',
    tags: ['RBAC', 'SaaS', 'Next.js', 'MERN', 'Security'],
    intro:
      'Multi-tenant products die quietly when every user is effectively an admin. Roles are not a polish pass — they shape routes, APIs, and UI empty states from day one. Lessons here come from operational SaaS work like QuikPOS-style tenancy.',
    sections: [
      {
        id: 'model',
        title: 'A boring model that scales',
        paragraphs: [
          'Start with tenant → membership → role. Permissions are capabilities (`orders.write`), roles are bundles, users get memberships. Avoid hard-coding “isAdmin” flags across fifty files.',
          'Enforce on the server. Client hiding is UX, not security.'
        ]
      },
      {
        id: 'ui',
        title: 'UI follows permissions',
        paragraphs: [
          'Navigation, buttons, and empty states should reflect what the role can do. Operators trust products that do not tease actions they cannot complete.',
          'Admin tools deserve the same care as the customer path — they are where support lives.'
        ]
      },
      {
        id: 'audit',
        title: 'Audit light, not theater',
        paragraphs: [
          'Log sensitive actions with actor, tenant, and timestamp. You do not need a SIEM on day one — you need a trail when something goes wrong.',
          'Document how to add a role without rewriting the app. That is handover quality.'
        ]
      }
    ],
    keyTakeaways: [
      'Tenant + membership + role beats scattered booleans.',
      'Server enforcement is mandatory.',
      'Admin UX is product, not leftover screens.'
    ],
    conclusion:
      'Building a tenanted product? Bring your role list to Contact — we can sanity-check it before you paint the UI.',
    relatedLinks: [
      {
        label: 'QuikPOS case study',
        href: '/projects/quikpos-saas-point-of-sale'
      },
      {
        label: 'JWT / session patterns',
        href: '/blog/jwt-access-refresh-and-session-hybrid-patterns'
      },
      { label: 'Discuss your project', href: '/contact' }
    ]
  },
  {
    slug: 'agency-brief-to-vercel-production',
    title: 'From Agency Brief to Vercel Production',
    subtitle: 'How I take a scoped web delivery from kickoff to a stable deploy',
    summary:
      'A delivery path for agency and product briefs: discovery notes, staging on Vercel, QA habits, and handover without drama.',
    publishedAt: '2026-09-08',
    readTime: '9 min read',
    category: 'Delivery',
    tags: ['Vercel', 'Agency', 'Next.js', 'Production', 'Handover'],
    intro:
      'Agencies and founders both care about the same ending: a URL that works, a repo someone else can extend, and no mystery env vars. Here is the path I use from brief to Vercel production.',
    sections: [
      {
        id: 'kickoff',
        title: 'Kickoff artifacts',
        paragraphs: [
          'Written scope, brand constraints, content owners, and “definition of done.” Screenshots without copy freeze dates create fake progress.',
          'I confirm hosting assumptions early — Vercel for Next.js frontends is common; APIs and DBs may live elsewhere.'
        ]
      },
      {
        id: 'staging',
        title: 'Staging as the meeting room',
        paragraphs: [
          'Preview deployments turn feedback into clicks, not abstract Figma debates. Protect previews if needed; never treat them as the SEO canonical.',
          'Env vars: Production Config for public site URL, secrets only for secrets. Mis-typed preview hosts in sitemap are an avoidable outage for search.'
        ]
      },
      {
        id: 'handover',
        title: 'Handover that sticks',
        paragraphs: [
          'README for run/build, architecture sketch, content update path, and who owns DNS. Employment deliveries get clear role attribution on portfolio pages.',
          'Launch checklist: forms, analytics consent if required, 404s, redirects, and OG previews.'
        ]
      }
    ],
    keyTakeaways: [
      'Staging URLs make feedback real.',
      'Canonical URL config is part of launch.',
      'Handover docs beat tribal knowledge.'
    ],
    conclusion:
      'Got an agency overflow Next.js brief? Send it through Contact with the target go-live week.',
    relatedLinks: [
      {
        label: 'Deploying MERN apps',
        href: '/blog/deploying-mern-apps-vercel-render-railway'
      },
      { label: 'Projects', href: '/projects' },
      { label: 'Discuss your project', href: '/contact' }
    ]
  },
  {
    slug: 'prop-trading-marketing-sites-performance',
    title: 'Prop-Trading Marketing Sites: Performance Without Fake Claims',
    subtitle: 'Fast pages, clear offers, careful compliance posture',
    summary:
      'How I approach prop-firm and markets marketing sites: Core Web Vitals, clear CTAs, and copy posture that avoids fabricated returns or legal overclaim.',
    publishedAt: '2026-09-07',
    readTime: '8 min read',
    category: 'Fintech Web',
    tags: ['Fintech', 'Prop Trading', 'Next.js', 'Performance', 'Trust'],
    intro:
      'Markets and prop-trading marketing sites live or die on trust and speed. Visitors bounce when pages feel heavy or when the copy overpromises. This is product-engineering posture — not legal advice.',
    sections: [
      {
        id: 'performance',
        title: 'Performance as a trust signal',
        paragraphs: [
          'Prioritize LCP: hero media sized correctly, fonts subset, scripts deferred. A slow “premium” site reads as careless.',
          'Keep motion intentional. Decorative animation should never block the primary CTA.'
        ]
      },
      {
        id: 'copy-posture',
        title: 'Copy and claims posture',
        paragraphs: [
          'Do not invent ROI, win rates, or regulatory badges you cannot substantiate. Engineering can enforce layout and component patterns that make reckless claim blocks harder to ship casually.',
          'Separate marketing surfaces from authenticated product areas — different risk, different review.'
        ]
      },
      {
        id: 'stack',
        title: 'Stack notes',
        paragraphs: [
          'Next.js App Router works well for content-heavy marketing with strong metadata control. Pair with a CMS only when editors truly need it.',
          'Evolvo-attributed markets deliveries on my projects page show employment delivery context — not ownership of those brands.'
        ]
      }
    ],
    keyTakeaways: [
      'Speed is part of brand.',
      'No fabricated performance claims.',
      'Marketing and product surfaces deserve different controls.'
    ],
    conclusion:
      'If you need a markets or fintech marketing surface built carefully, start on Contact with your offer page outline.',
    relatedLinks: [
      {
        label: 'Fintech trust signals',
        href: '/blog/fintech-web-trust-signals-without-fake-metrics'
      },
      {
        label: 'Apex Platinum case',
        href: '/projects/apex-platinum-fintech-platform'
      },
      { label: 'Discuss your project', href: '/contact' }
    ]
  },
  {
    slug: 'hire-mern-developer-for-saas',
    title: 'Hiring a MERN Developer for SaaS — What “Good” Looks Like',
    subtitle: 'Beyond “knows React and MongoDB”',
    summary:
      'What founders should evaluate when hiring a MERN / full-stack developer for SaaS: tenancy, ops UX, API discipline, and delivery habits.',
    publishedAt: '2026-09-06',
    readTime: '9 min read',
    category: 'Hiring',
    tags: ['MERN', 'SaaS', 'Hiring', 'MongoDB', 'Node.js'],
    intro:
      'MERN is a stack, not a product skill. SaaS needs tenancy thinking, boring APIs, and dashboards operators will touch daily. Here is the bar I recommend when you hire — and the bar I hold myself to.',
    sections: [
      {
        id: 'signals',
        title: 'Signals that matter',
        paragraphs: [
          'Can they explain a data model for multi-tenant isolation? Have they shipped role-aware admin tools? Do they write errors clients can handle?',
          'Portfolio proof should show production systems, not only component galleries.'
        ]
      },
      {
        id: 'mongo',
        title: 'MongoDB without foot-guns',
        paragraphs: [
          'Unbounded arrays, missing indexes, and “we will shard later” stories are common. Ask how they approach reporting and audit collections.',
          'I write about operational schema patterns separately — use that as a conversation starter in interviews.'
        ]
      },
      {
        id: 'next',
        title: 'Where Next.js fits',
        paragraphs: [
          'Many “MERN SaaS” products are now Next.js on the web tier with Node APIs. The hire should be comfortable across App Router, auth boundaries, and deploy realities on Vercel or similar.',
          'Title the role honestly: full-stack product engineer beats buzzword bingo.'
        ]
      }
    ],
    keyTakeaways: [
      'Evaluate SaaS judgment, not only CRUD demos.',
      'Ask about tenancy, roles, and indexes.',
      'Prefer production case studies with clear attribution.'
    ],
    conclusion:
      'Looking for MERN / Next.js SaaS help? Compare my case studies, then use Contact with your tenant model sketch.',
    relatedLinks: [
      {
        label: 'MongoDB operational schemas',
        href: '/blog/mongodb-schema-patterns-for-operational-apps'
      },
      {
        label: 'MERN dashboards',
        href: '/blog/structuring-mern-dashboards-for-maintainability'
      },
      { label: 'Discuss your project', href: '/contact' }
    ]
  },
  {
    slug: 'cost-drivers-saas-mvp-nextjs',
    title: 'What Actually Drives the Cost of a Next.js SaaS MVP',
    subtitle: 'No fake price list — the levers that move quotes',
    summary:
      'An honest breakdown of SaaS MVP cost drivers on Next.js: scope, integrations, roles, content, and risk — without publishing rates I cannot honor.',
    publishedAt: '2026-09-05',
    readTime: '8 min read',
    category: 'SaaS Delivery',
    tags: ['MVP', 'Pricing', 'Next.js', 'Founders', 'Scope'],
    intro:
      'Founders want a number. Engineers want a scope. The gap is where resentment grows. I do not publish a public rate card here — markets and risk differ — but I will name the levers that move any honest quote.',
    sections: [
      {
        id: 'levers',
        title: 'The big levers',
        paragraphs: [
          'Number of distinct user roles. Number of third-party integrations. Whether offline / sync matters. Whether you need multi-tenant isolation on day one.',
          'Design maturity: existing UI kit vs inventing a design system mid-flight. Content readiness: real copy vs “lorem until launch.”'
        ]
      },
      {
        id: 'cheap-expensive',
        title: 'What looks cheap but is not',
        paragraphs: [
          '“Just add payments” can mean tax, webhooks, idempotency, and failure UX. “Simple admin” can mean the entire operations model.',
          'Brochure timelines applied to product depth create failed projects — not bargains.'
        ]
      },
      {
        id: 'how-i-quote',
        title: 'How I quote',
        paragraphs: [
          'After a short discovery, I propose a first milestone with a clear done-state on staging. Follow-on phases are priced when the spine is real.',
          'If your budget only covers a marketing site, we should label it that way and still ship something excellent.'
        ]
      }
    ],
    keyTakeaways: [
      'Roles + integrations dominate cost.',
      'Mislabelled brochure work is the expensive mistake.',
      'Milestone pricing beats fantasy fixed totals on fuzzy scopes.'
    ],
    conclusion:
      'Share budget band and success event on Contact — I will say whether we are in brochure, MVP, or “not yet” territory.',
    relatedLinks: [
      {
        label: 'Marketing vs multi-tenant scope',
        href: '/blog/marketing-site-vs-multitenant-saas-mvp'
      },
      { label: 'Services', href: '/services' },
      { label: 'Discuss your project', href: '/contact' }
    ]
  },
  {
    slug: 'pakistan-sme-web-app-when-to-custom-build',
    title: 'Pakistan SME Web Apps — When to Custom-Build vs Buy',
    subtitle: 'Retail, society ops, and COD-heavy businesses',
    summary:
      'A practical frame for Pakistani SMEs deciding between SaaS templates and custom Next.js / MERN builds — with COD, Udhaar, and ops realities in mind.',
    publishedAt: '2026-09-04',
    readTime: '9 min read',
    category: 'Pakistan Product',
    tags: ['Pakistan', 'SME', 'COD', 'SaaS', 'Custom Software'],
    intro:
      'Not every shop needs a custom platform. Not every “WhatsApp + spreadsheet” operation can survive on a generic foreign template. Here is how I help SMEs decide — informed by COD ecommerce, POS/Udhaar, and housing-society style ops.',
    sections: [
      {
        id: 'buy',
        title: 'When buying wins',
        paragraphs: [
          'Your workflow matches a mature product, staff will use defaults, and integrations you need are already first-class.',
          'Custom work would mostly reinvent invoices and inventory poorly.'
        ]
      },
      {
        id: 'build',
        title: 'When building wins',
        paragraphs: [
          'Your edge is operational: COD exceptions, credit ledgers, society billing rules, role patterns templates do not allow.',
          'You need ownership of the data model and a path to extend without waiting on a vendor roadmap.'
        ]
      },
      {
        id: 'middle',
        title: 'A middle path',
        paragraphs: [
          'Start with a narrow custom spine for the painful workflow; keep commodity pieces (email, SMS, basic accounting export) integrated.',
          'Case studies like Naaz (COD fashion flows), QuikPOS (tenanted POS patterns), and HSMS (society modules) show different “build” shapes — not one template.'
        ]
      }
    ],
    keyTakeaways: [
      'Buy when your process is standard.',
      'Build when operations are the product.',
      'Narrow spines beat speculative platforms.'
    ],
    conclusion:
      'Describe your current WhatsApp/spreadsheet pain on Contact — I will recommend buy, build, or hybrid without selling complexity for its own sake.',
    relatedLinks: [
      {
        label: 'Pakistan COD checkout',
        href: '/blog/pakistan-cod-checkout-patterns'
      },
      {
        label: 'Multi-tenant POS / Udhaar',
        href: '/blog/multitenant-pos-pakistan-udhaar'
      },
      { label: 'Discuss your project', href: '/contact' }
    ]
  },
  {
    slug: 'evolvo-production-delivery-lessons',
    title: 'Lessons From Production Deliveries at Evolvo-Technologies',
    subtitle: 'Employment delivery notes — not brand ownership claims',
    summary:
      'What I learned shipping fintech and healthcare web surfaces in a production team environment — attribution-honest lessons for founders hiring full-stack help.',
    publishedAt: '2026-09-02',
    readTime: '8 min read',
    category: 'Delivery',
    tags: ['Evolvo', 'Fintech', 'Healthcare', 'Team Delivery', 'Next.js'],
    intro:
      'Some of my public case studies were built as part of my role at Evolvo-Technologies. That means employment delivery, not personal ownership of client brands. The useful part for buyers is the pattern library: how production teams actually ship.',
    sections: [
      {
        id: 'attribution',
        title: 'Attribution first',
        paragraphs: [
          'Portfolio pages label Evolvo work clearly. Founders should demand the same honesty from anyone they hire — inflated ownership is a trust killer.',
          'What transfers: stack judgment, component discipline, performance habits, and how to take feedback in a stakeholder loop.'
        ]
      },
      {
        id: 'fintech-health',
        title: 'Fintech and healthcare surfaces',
        paragraphs: [
          'Marketing and operational UIs both need clarity under scrutiny. Fake metrics and vague compliance theater help nobody.',
          'See Apex, SurgiCore, and Vitalis case notes for public engineering narratives with that posture.'
        ]
      },
      {
        id: 'solo',
        title: 'What changes in freelance mode',
        paragraphs: [
          'As an independent engineer I own more of discovery and handover myself. The bar for written scope goes up, not down.',
          'Team experience still matters: I know where specialists (brand, legal, DevOps) should plug in.'
        ]
      }
    ],
    keyTakeaways: [
      'Role attribution is non-negotiable.',
      'Production team habits transfer to freelance delivery.',
      'Industry surfaces need restraint in claims.'
    ],
    conclusion:
      'Browse the Evolvo-attributed projects, then Contact if you want similar delivery discipline on your product.',
    relatedLinks: [
      { label: 'Projects hub', href: '/projects' },
      {
        label: 'Vitalis Health case',
        href: '/projects/vitalis-health-healthcare-platform'
      },
      { label: 'Discuss your project', href: '/contact' }
    ]
  },
  {
    slug: 'fix-slow-nextjs-lcp-for-business-sites',
    title: 'Fixing Slow Next.js LCP on Business Sites',
    subtitle: 'What usually causes a 4–6s mobile LCP — and what actually helps',
    summary:
      'Practical LCP fixes for Next.js marketing and portfolio sites: hero images, fonts, third-party scripts, and why CSS background heroes fail audits.',
    publishedAt: '2026-09-01',
    readTime: '10 min read',
    category: 'Performance',
    tags: ['Next.js', 'LCP', 'Core Web Vitals', 'Performance', 'SEO'],
    intro:
      'A business site that takes five seconds to show the hero on mobile is leaving trust and SEO on the table. After tuning my own portfolio and client sites, these are the LCP issues that show up repeatedly.',
    sections: [
      {
        id: 'hero',
        title: 'Hero media must be discoverable',
        paragraphs: [
          'If the LCP element is a CSS `background-image`, crawlers and Lighthouse often start the download late. Prefer a real image element with `priority` / fetch priority.',
          'Serve sized assets per breakpoint. Do not force a 2x desktop portrait onto phones.'
        ]
      },
      {
        id: 'js',
        title: 'JavaScript weight after first paint',
        paragraphs: [
          'Defer non-critical analytics. Load chat widgets on interaction. Keep the first viewport free of heavy client islands when HTML would do.',
          'App Router server components help — until you wrap the entire page in client providers “just in case.”'
        ]
      },
      {
        id: 'fonts',
        title: 'Fonts and layout',
        paragraphs: [
          'Use `next/font`, subset weights you actually use, and avoid invisible text delays where possible.',
          'CLS should stay near zero: set dimensions on media, reserve space for async UI.'
        ]
      }
    ],
    keyTakeaways: [
      'Real hero images beat CSS backgrounds for LCP.',
      'Third-party scripts are usual suspects.',
      'Measure on mobile throttling, not only desktop Wi‑Fi.'
    ],
    conclusion:
      'If your Next.js marketing site fails mobile LCP, send PageSpeed + URL via Contact — I can target the top offenders first.',
    relatedLinks: [
      {
        label: 'Next.js SEO launch checklist',
        href: '/blog/nextjs-app-router-seo-launch-checklist'
      },
      { label: 'Services', href: '/services' },
      { label: 'Discuss your project', href: '/contact' }
    ]
  }
]
