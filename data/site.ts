export const site = {
  name: "M Ubaid Javaid",
  role: "Full Stack Developer | MERN-stack | Next.js",
  location: "Multan, Pakistan",
  email: "mubaidjavaid97@gmail.com",
  github: "https://github.com/MUbaidJavaid",
  linkedin: "https://www.linkedin.com/in/m-ubaid-javaid-260735407",
  /** Vanity slug for LinkedIn public profile badge embed */
  linkedinVanity: "m-ubaid-javaid-260735407",
  url: "https://mubaidjavaid.vercel.app/",
  description:
    "M Ubaid Javaid is a full-stack developer in Multan, Pakistan, helping businesses build conversion-focused websites and product-grade web applications with React, Next.js, Node.js, Express, and MongoDB. The focus is practical delivery: clear architecture, stable backend workflows, measurable performance, and user experiences that support business goals.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const trustStrip = [
  "Business-Focused Product Delivery",
  "Full-Stack Architecture (React + Node.js)",
  "SEO, Performance, and Core Web Vitals",
  "API Integrations and Workflow Automation",
  "Responsive, Accessible User Interfaces",
  "Production-Ready Code and Long-Term Maintainability",
] as const;

export const services = [
  {
    title: "Full-Stack Web Application Development",
    description:
      "End-to-end web application development from discovery to launch. This includes frontend architecture, backend APIs, database design, authentication, and real-world business workflows so your product is reliable in production, not just functional in demos.",
  },
  {
    title: "Next.js Business Websites",
    description:
      "High-trust business websites built with Next.js for speed, discoverability, and clear user journeys. The goal is to help visitors quickly understand your offer, trust your brand, and take action through strong structure, content flow, and performance.",
  },
  {
    title: "React Frontend Development",
    description:
      "Scalable React frontends designed for real teams and evolving products. I focus on reusable components, state structure, and UX consistency so future features can be added cleanly without turning the codebase into technical debt.",
  },
  {
    title: "Admin Dashboards & Internal Tools",
    description:
      "Role-based dashboards and internal tools that give teams real operational visibility. From reporting panels to workflow screens, each interface is designed to reduce manual work, improve decision speed, and support daily operations.",
  },
  {
    title: "API Integration",
    description:
      "Integration of third-party services and custom APIs including auth providers, payment systems, email tools, and workflow services. I handle data contracts, edge cases, and error states so integrations remain stable and predictable.",
  },
  {
    title: "Maintenance & Feature Development",
    description:
      "Ongoing product support for teams that need dependable iteration after launch. Includes bug resolution, codebase cleanup, refactors, performance improvements, and feature expansion with release-safe development practices.",
  },
  {
    title: "Product Architecture & Technical Planning",
    description:
      "Architecture planning for new or evolving products, including module boundaries, folder strategy, API contracts, scaling risks, and implementation sequencing. The outcome is a practical roadmap your team can execute without costly rework.",
  },
  {
    title: "MERN Stack Product Engineering",
    description:
      "Complete MERN implementation with production-focused patterns for authentication, state consistency, validation, and deployment safety. Built for real business workflows where reliability and maintainability matter as much as features.",
  },
  {
    title: "REST API Design & Development",
    description:
      "Clean, version-aware REST APIs with clear resource modeling, predictable error handling, pagination, filtering, and security controls. This improves integration speed for frontend teams and reduces long-term API maintenance cost.",
  },
  {
    title: "Authentication & Role-Based Access Control",
    description:
      "Secure auth systems using JWT/session strategies, refresh token flows, route guards, and permission layers for multi-role products. Designed to protect sensitive operations while keeping user journeys smooth and understandable.",
  },
  {
    title: "Database Design & Query Optimization",
    description:
      "Schema design and query tuning for MongoDB and relational systems, focused on performance under real usage. Includes indexing strategy, aggregation/query optimization, and data modeling choices aligned with product behavior.",
  },
  {
    title: "Performance Optimization & Core Web Vitals",
    description:
      "Frontend and backend performance improvements targeting measurable outcomes: faster LCP, better interaction responsiveness, and reduced server overhead. Work includes rendering strategy, caching, query tuning, and payload optimization.",
  },
  {
    title: "SEO-Ready Engineering for Business Sites",
    description:
      "Technical SEO implementation for modern web apps and marketing sites: metadata architecture, semantic structure, crawlability, structured data, and performance-first rendering. Built to improve discoverability without hurting UX.",
  },
  {
    title: "UI System Development with Reusable Components",
    description:
      "Design-system style component libraries for consistent product UI across pages and teams. Includes token alignment, accessibility-friendly patterns, and scalable component APIs that reduce duplication and accelerate delivery.",
  },
  {
    title: "Form Workflows & Validation Systems",
    description:
      "Robust form architecture for onboarding, lead capture, and operational workflows using schema validation, error recovery, and secure data handling. Built to reduce form drop-off while preserving data accuracy.",
  },
  {
    title: "Payment Gateway & Third-Party Integrations",
    description:
      "Payment, email, CRM, analytics, and external service integrations with idempotent handling, retry safety, and observability. Focused on business continuity so external failures do not break core product flows.",
  },
  {
    title: "CMS Integration & Content-Driven Pages",
    description:
      "Headless CMS and content workflow integration for teams that need editable pages without engineering bottlenecks. Includes schema planning, preview support, and stable rendering so content updates remain safe and fast.",
  },
  {
    title: "Testing Strategy & Quality Assurance Setup",
    description:
      "Pragmatic test strategy covering unit, integration, and release checks based on product risk. Includes test harness setup, key-path assertions, and CI alignment to reduce regressions before they reach production.",
  },
  {
    title: "CI/CD Pipeline Setup",
    description:
      "Deployment automation with GitHub Actions and environment-aware workflows for linting, type checks, tests, and builds. Improves team velocity by catching quality issues early and standardizing release confidence.",
  },
  {
    title: "Deployment, Environments & Release Management",
    description:
      "Production deployment setup across platforms like Vercel/Render with robust environment configuration, rollout safety, and release checklists. Ensures updates are predictable, observable, and easy to rollback if needed.",
  },
  {
    title: "Legacy Refactor & Codebase Stabilization",
    description:
      "Refactoring support for unstable or hard-to-maintain projects, with emphasis on reducing risk while improving code quality. Includes gradual modernization, dead-code cleanup, and safer architecture boundaries.",
  },
  {
    title: "Technical Audits & Improvement Roadmaps",
    description:
      "Comprehensive codebase and architecture audits to identify bottlenecks, reliability risks, and maintainability issues. Delivered with prioritized action plans so teams can improve quality without pausing product progress.",
  },
  {
    title: "Post-Launch Monitoring & Iterative Support",
    description:
      "Structured support after launch including incident triage, performance monitoring, feature iteration, and quality improvements based on real usage signals. Keeps momentum high while controlling technical debt.",
  },
  {
    title: "Accessibility & Inclusive UX Implementation",
    description:
      "Accessibility-focused implementation for forms, navigation, interactive components, and dashboard interfaces. Aligns product UX with practical WCAG principles to improve usability for broader audiences.",
  },
  {
    title: "Technical Documentation & Handover",
    description:
      "Clear project documentation for architecture, setup, deployment, and operational workflows so internal teams can confidently maintain and extend the product after delivery.",
  },
  {
    title: "Dedicated Collaboration for Product Teams",
    description:
      "Embedded engineering collaboration for startups and product teams needing steady ownership across planning, implementation, and release cycles. Communication is structured, transparent, and outcome-driven.",
  },
  {
    title: "Security Hardening & Production Safeguards",
    description:
      "Practical security hardening for web applications including auth flow review, input validation, permission checks, secure headers, abuse protection, and production-safe defaults. The goal is to reduce exploit risk while preserving performance and development speed.",
  },
] as const;

/** Lines used for the hero typing tagline (kinetic typography) */
export const heroTaglines = [
  "Full Stack Developer · MERN · Next.js",
  "Architecture-first product delivery",
  "Fast, accessible, production-ready web",
] as const;

export const heroContent = {
  paragraph:
    "I help businesses and teams ship web products that are clear to users, reliable in production, and maintainable for future growth. My work combines strong frontend experience design with practical backend engineering so products perform well and continue to scale as requirements evolve.",
  support:
    "My core stack is React, Next.js, Node.js, Express, and MongoDB, with a delivery approach centered on architecture clarity, measurable performance, API reliability, and user journeys that drive real outcomes instead of vanity metrics.",
  availability:
    "Open to freelance, contract, remote, and full-time opportunities.",
} as const;

export const aboutPreview = {
  title: "Building practical web products with clean engineering and clear UX",
  bodyOne:
    "I am a full-stack developer focused on practical digital products that solve real business and user problems. Beyond writing code, I think through scope, information structure, user flow, data handling, and long-term maintainability so teams can keep shipping without repeatedly rebuilding core foundations.",
  bodyTwo:
    "My goal is not to deliver visually polished screens only. I build complete product experiences that load fast, communicate clearly, and behave reliably across devices, while keeping the codebase readable for future contributors and feature growth.",
} as const;

export const whyPartnerWithMe = [
  {
    title: "Engineering Discipline",
    desc: "Readable architecture, predictable patterns, and code quality decisions that reduce long-term maintenance cost."
  },
  {
    title: "Business-Aware Product Thinking",
    desc: "Features are prioritized around user behavior, conversion paths, and operational value instead of random implementation."
  },
  {
    title: "End-to-End Accountability",
    desc: "From planning to launch, I handle technical decisions with delivery ownership so execution does not fragment."
  },
  {
    title: "Collaborative Communication",
    desc: "Clear updates, realistic estimates, and transparent trade-offs so teams can make confident decisions quickly."
  },
] as const;

/** How I work (not a client testimonial - keeps the code card honest) */
export const workPhilosophy = {
  statement:
    "Clear scope, transparent communication, and systems that stay maintainable when priorities change. The objective is sustainable delivery quality, not short-term speed that creates future instability.",
  label: "Working style",
} as const;

export const experience = {
  title: "Professional Experience",
  roles: [
    {
      id: "Evolvo-Technologies",
      role: "MERN-STACK & NEXT.JS Developer",
      company: "Evolvo-Technologies",
      duration: "Feb 2026 - Present",
      location: "On-site",
      type: "Full-time",
      copy: "Leading full-stack implementation across modern web products using Next.js and MERN technologies. My role includes frontend architecture, API integration, performance optimization, and collaboration with design and product stakeholders to deliver features that are production-ready and measurable.",
      highlights: [
        "Developing full-stack applications with Next.js and React",
        "Implementing server-side rendering and static site generation",
        "Optimizing application performance and SEO",
        "Collaborating with design and product teams",
        "Writing clean, maintainable code with TypeScript"
      ],
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "JavaScript", "GitHub", "Docker", "Vercel"],
      current: true
    },
    {
      id: "fiesta",
      role: "MERN-STACK Developer",
      company: "Fiesta Content Solutions",
      duration: "Jul 2024 - Jan 2026",
      location: "On-site",
      type: "Full-time",
      copy: "Contributed to MERN-based product development across multiple practical projects, building responsive interfaces, backend logic, and integration workflows. This role strengthened my foundations in delivery discipline, collaboration, and writing maintainable code for active production use.",
      highlights: [
        "Built responsive web applications using React.js and Tailwind CSS",
        "Developed RESTful APIs with Node.js and Express.js",
        "Designed and optimized MongoDB database schemas",
        "Implemented authentication and authorization systems",
        "Collaborated with team members using Git/GitHub"
      ],
      technologies: ["React", "Next.js","Node.js", "Express", "MongoDB", "JavaScript", "TypeScript","GitHub","Docker","Vercel"],
      note: "Verified experience available on request",
      current: false
    }
  ]
} as const;

export const process = [
  {
    step: "Discovery",
    description:
      "We begin by understanding business goals, user expectations, current constraints, and success metrics. This creates a shared definition of what must be built first and what can be phased later.",
  },
  {
    step: "Planning",
    description:
      "The product scope is translated into implementation structure: key features, technical approach, data flow, priorities, and milestones. This keeps execution focused and avoids expensive mid-project confusion.",
  },
  {
    step: "Interface & Structure",
    description:
      "User journeys, screen structure, and component boundaries are defined before full implementation. This ensures the interface remains clear for users and scalable for future product expansion.",
  },
  {
    step: "Development",
    description:
      "Frontend, backend, and integrations are developed with maintainable conventions, predictable state handling, and reliable API contracts so the product remains stable under real-world usage.",
  },
  {
    step: "Testing",
    description:
      "Cross-device checks, functional validation, UX review, and integration testing are performed to catch regressions before release and improve confidence in production behavior.",
  },
  {
    step: "Launch",
    description:
      "Deployment includes environment verification, performance checks, and release readiness validation so the product launches smoothly and is observable from day one.",
  },
  {
    step: "Handover & Documentation",
    description:
      "A structured handover includes technical documentation, key workflows, and maintainability notes so your team can confidently operate, extend, and support the product after release.",
  },
  {
    step: "Support",
    description:
      "Post-launch support focuses on iterative improvements, issue resolution, feature expansion, and technical refinement based on usage data and stakeholder feedback.",
  },
] as const;

export const codeQuality = {
  title: "Code Quality & Development Approach",
  copy: "Code quality is treated as a delivery strategy, not a slogan. I prioritize maintainable architecture, reusable component systems, clean API boundaries, and practical documentation so teams can move faster with fewer regressions as the product grows.",
} as const;

export const contactCta = {
  title: "Let’s build something solid",
  body: "If you are building a new product, improving an existing platform, or hiring for full-stack ownership, I can help you move from unclear requirements to production-ready execution.",
  support:
    "You can reach out for freelance and contract projects, long-term collaboration, or full-time roles. Share your scope, timeline, and goals, and I will propose a practical implementation path with clear next steps.",
} as const;

export const blogPreview = {
  title: "Blog",
  description:
    "I publish practical engineering notes on full-stack architecture, frontend quality, API design, performance, and delivery trade-offs from real project work so teams can learn from implementation-level decisions, not surface-level summaries.",
} as const;
