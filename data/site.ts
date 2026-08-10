export const site = {
  name: 'M Ubaid Javaid',
  role: 'Product Engineer',
  location: 'Multan, Pakistan',
  email: 'mubaidjavaid97@gmail.com',
  github: 'https://github.com/MUbaidJavaid',
  linkedin: 'https://www.linkedin.com/in/m-ubaid-javaid-260735407',
  linkedinVanity: 'm-ubaid-javaid-260735407',
  url: 'https://mubaidjavaid.vercel.app/',
  description:
    'M Ubaid Javaid is a Product Engineer building web products with clear architecture, reliable backends, and interfaces that support real business outcomes — from MVP to production platforms.'
}

export const navItems = [
  { label: 'Work', href: '/projects' },
  { label: 'Writing', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
] as const

export const heroContent = {
  line: 'I build products that feel inevitable.',
  paragraph:
    'Product Engineer in Multan — shipping full-stack web platforms with architecture that lasts, interfaces that convert, and systems teams can extend.',
  availability: 'Open to freelance, contract, and full-time collaboration.',
  skills: [
    'MERN Stack',
    'SaaS MVPs',
    'Fintech',
    'PAS',
    'ERP'
  ]
} as const

export const aboutPreview = {
  title: 'Engineering with product judgment',
  bodyOne:
    'I design, build, and ship scalable web applications — from lean MVPs to multi-tenant platforms — with clean architecture and outcomes that matter.'
} as const

export const whyPartnerWithMe = [
  {
    title: 'Architecture first',
    desc: 'Readable boundaries, predictable patterns, and decisions that reduce long-term maintenance cost.'
  },
  {
    title: 'Business-aware delivery',
    desc: 'Features prioritized around user behavior, conversion paths, and operational value — not vanity scope.'
  },
  {
    title: 'End-to-end ownership',
    desc: 'From planning to launch, technical decisions stay coherent so execution does not fragment.'
  },
  {
    title: 'Clear communication',
    desc: 'Honest estimates, transparent trade-offs, and updates that help teams decide quickly.'
  }
] as const

export const workPhilosophy = {
  statement:
    'Clear scope, honest updates, and code that stays maintainable when priorities shift.',
  label: 'Working style'
} as const

export const experience = {
  title: 'Experience',
  roles: [
    {
      id: 'Evolvo-Technologies',
      role: 'MERN-Stack & Next.js Developer',
      company: 'Evolvo-Technologies',
      duration: 'Feb 2026 — Present',
      location: 'On-site',
      type: 'Full-time',
      copy: 'Full-stack delivery with Next.js and MERN — architecture, APIs, performance, and production releases.',
      highlights: [
        'Developing full-stack applications with Next.js and React',
        'Implementing server-side rendering and static site generation',
        'Optimizing application performance and SEO',
        'Collaborating with design and product teams',
        'Writing clean, maintainable code with TypeScript'
      ],
      technologies: [
        'React',
        'Next.js',
        'Node.js',
        'Express',
        'MongoDB',
        'TypeScript',
        'JavaScript',
        'GitHub',
        'Docker',
        'Vercel'
      ],
      current: true
    },
    {
      id: 'fiesta',
      role: 'MERN-Stack Developer',
      company: 'Fiesta Content Solutions',
      duration: 'Jul 2024 — Jan 2026',
      location: 'On-site',
      type: 'Full-time',
      copy: 'Built MERN products end-to-end — responsive UI, APIs, MongoDB schemas, and team delivery.',
      highlights: [
        'Built responsive web applications using React.js and Tailwind CSS',
        'Developed RESTful APIs with Node.js and Express.js',
        'Designed and optimized MongoDB database schemas',
        'Implemented authentication and authorization systems',
        'Collaborated with team members using Git/GitHub'
      ],
      technologies: [
        'React',
        'Next.js',
        'Node.js',
        'Express',
        'MongoDB',
        'JavaScript',
        'TypeScript',
        'GitHub',
        'Docker',
        'Vercel'
      ],
      note: 'Verified experience available on request',
      current: false
    }
  ]
} as const

export const process = [
  {
    step: 'Discovery',
    description: 'Goals, users, constraints, and what ships first.'
  },
  {
    step: 'Planning',
    description: 'Scope, architecture, milestones, and priorities.'
  },
  {
    step: 'Interface & Structure',
    description: 'Flows, layouts, and component boundaries before build.'
  },
  {
    step: 'Development',
    description: 'Frontend, backend, and integrations with clean conventions.'
  },
  {
    step: 'Testing',
    description: 'Cross-device checks and validation before release.'
  },
  {
    step: 'Launch',
    description: 'Deploy, verify performance, and go live with confidence.'
  },
  {
    step: 'Handover',
    description: 'Docs and handover so your team can extend the product.'
  },
  {
    step: 'Support',
    description: 'Fixes, improvements, and iteration after launch.'
  }
] as const

/** High-signal offerings for brand surfaces — not a laundry list */
export const brandServices = [
  {
    title: 'Product engineering',
    description:
      'End-to-end web products from discovery to production — frontend architecture, APIs, data models, auth, and workflows that hold up in real use.'
  },
  {
    title: 'Platforms & multi-tenant systems',
    description:
      'SaaS and operational platforms with tenancy, permissions, billing flows, and admin tools built for teams who live in the product daily.'
  },
  {
    title: 'Performance & technical SEO',
    description:
      'Rendering strategy, Core Web Vitals, caching, and crawlable structure so products feel fast and stay discoverable.'
  },
  {
    title: 'Architecture & delivery partnership',
    description:
      'Technical planning, module boundaries, and implementation sequencing — so teams ship without expensive rework.'
  }
] as const

/** Kept for /services depth pages that still reference full catalog */
export const services = brandServices

export const contactCta = {
  title: 'Let’s build something solid.',
  body: 'New product, platform upgrade, or full-stack collaboration — share your scope and timeline.',
  support: 'Freelance, contract, and full-time. Clear next steps within 24 hours.'
} as const

export const blogPreview = {
  title: 'Writing',
  description:
    'Notes on full-stack delivery, architecture, and shipping production-ready web products.'
} as const

/** Legacy stubs — unused on brand surfaces; kept for orphan section modules */
export const heroTaglines = [
  'Product Engineer · Next.js · Full-stack',
  'Architecture-first product delivery',
  'Fast, accessible, production-ready web'
] as const

export const codeQuality = {
  title: 'Code quality',
  copy: 'Maintainable architecture, reusable components, and clear APIs — built to scale without slowing the team down.'
} as const

export const openSource = {
  title: 'Open source',
  description: 'Public work and repositories you can inspect.',
  links: [
    {
      label: 'GitHub profile',
      href: 'https://github.com/MUbaidJavaid',
      note: 'Source, experiments, and project history'
    }
  ]
} as const

export const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'Convex',
  'Docker',
  'Vercel',
  'Git'
] as const

/** Skills panels for Technologies section — right-rail switches active group */
export const technologyGroups = [
  {
    id: 'interface',
    label: 'Interface',
    items: [
      { name: 'React', logo: '/logos/react.svg' },
      { name: 'Next.js', logo: '/logos/nextjs.svg' },
      { name: 'TypeScript', logo: '/logos/typescript.svg' },
      { name: 'Tailwind', logo: '/logos/tailwind.svg' },
      { name: 'MUI', logo: '/logos/material-ui.svg' },
      { name: 'shadcn', logo: '/logos/shadcn.svg' },
      { name: 'Framer', logo: '/logos/framer-motion.svg' },
      { name: 'JavaScript', logo: '/logos/javascript.svg' }
    ]
  },
  {
    id: 'server',
    label: 'Server',
    items: [
      { name: 'Node.js', logo: '/logos/nodejs.svg' },
      { name: 'Express', logo: '/logos/express-mark.svg' },
      { name: 'Convex', logo: '/logos/convex.svg' },
      { name: 'Firebase', logo: '/logos/firebase.svg' },
      { name: 'Auth', logo: '/logos/jwt.svg' },
      { name: 'Redis', logo: '/logos/redis.svg' },
      { name: 'Nodemailer', logo: '/logos/nodemailer.svg' },
      { name: 'EmailJS', logo: '/logos/emailjs.svg' }
    ]
  },
  {
    id: 'data',
    label: 'Data',
    items: [
      { name: 'MongoDB', logo: '/logos/mongodb.svg' },
      { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
      { name: 'MySQL', logo: '/logos/mysql.svg' },
      { name: 'SQLite', logo: '/logos/sql.svg' },
      { name: 'Stripe', logo: '/logos/stripe.svg' },
      { name: 'Webhooks', logo: '/logos/webhooks.svg' },
      { name: 'TanStack Query', logo: '/logos/tanstack-query.svg' },
      { name: 'Postman', logo: '/logos/postman.svg' }
    ]
  },
  {
    id: 'ship',
    label: 'Ship',
    items: [
      { name: 'Docker', logo: '/logos/docker.svg' },
      { name: 'Vercel', logo: '/logos/vercel.svg' },
      { name: 'Netlify', logo: '/logos/netlify.svg' },
      { name: 'Render', logo: '/logos/render.svg' },
      { name: 'GitHub', logo: '/logos/github.svg' },
      { name: 'Git', logo: '/logos/git.svg' },
      { name: 'VS Code', logo: '/logos/vscode.svg' },
      { name: 'Firebase', logo: '/logos/firebase.svg' }
    ]
  }
] as const

/** Hero → next strip: production tools used across case studies */
export const builtWithTools = [
  { name: 'Next.js', logo: '/logos/nextjs.svg' },
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
  { name: 'Node.js', logo: '/logos/nodejs.svg' },
  { name: 'Express', logo: '/logos/express-mark.svg' },
  { name: 'MongoDB', logo: '/logos/mongodb.svg' },
  { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
  { name: 'Tailwind', logo: '/logos/tailwind.svg' },
  { name: 'MUI', logo: '/logos/material-ui.svg' },
  { name: 'shadcn', logo: '/logos/shadcn.svg' },
  { name: 'Auth', logo: '/logos/jwt.svg' },
  { name: 'Stripe', logo: '/logos/stripe.svg' },
  { name: 'Nodemailer', logo: '/logos/nodemailer.svg' },
  { name: 'EmailJS', logo: '/logos/emailjs.svg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
  { name: 'Vercel', logo: '/logos/vercel.svg' },
  { name: 'Netlify', logo: '/logos/netlify.svg' },
  { name: 'Render', logo: '/logos/render.svg' },
  { name: 'GitHub', logo: '/logos/github.svg' }
] as const

/** Fit-check — what a client actually gets (mapped to shipped portfolio work) */
export const fitSignals = [
  {
    title: 'A production platform — not a demo',
    body: 'Multi-tenant SaaS, PAS/ERP workflows, and operational dashboards with auth, roles, APIs, and admin tools ready for real teams — the same class of systems as HSMS and QuikPOS.'
  },
  {
    title: 'One engineer from scope to launch',
    body: 'Discovery, architecture, UI, backend, and release stay with me. You get one decision path, honest milestones, and a product that does not fragment across vendors.'
  },
  {
    title: 'Domain systems you can trust',
    body: 'Housing society ops, POS, healthcare, fintech, and commerce patterns already shipped — so your product starts from proven structure, not a blank canvas.'
  },
  {
    title: 'Handover your team can extend',
    body: 'Clean boundaries, documented decisions, and a maintainable MERN/Next.js codebase — so after launch your team can ship the next release without reverse-engineering.'
  }
] as const
