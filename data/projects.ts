export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  /** Optional gallery of related images (public folder paths) */
  images?: string[];
  /** Descriptive alt text for main image */
  imageAlt?: string;
  /** Public demo (Vercel, Netlify, etc.) - omit if not shareable */
  liveUrl?: string;
  /** Repository or profile link visitors can verify */
  githubUrl?: string;
  role: string;
  stack: string[];
  featured: boolean;
  overview: string;
  problem: string;
  goal: string;
  myRole: string;
  keyFeatures: string[];
  technicalDecisions: string;
  challenges: string;
  outcome: string;
  learned: string;
  /** 2-4 outcome bullets - honest, observable effects (no fabricated %) */
  impact: string[];
  /** One short paragraph for "architecture at a glance" on the case study */
  architectureSummary: string;
  /** Optional narrative beats — derived from existing copy when omitted */
  research?: string;
  strategy?: string;
  ux?: string;
  development?: string;
  businessImpact?: string;
};

/** Editorial case-study narrative from real project copy (no invented claims). */
export function getProjectNarrative (project: Project) {
  return {
    research: project.research,
    strategy: project.strategy ?? project.goal,
    ux:
      project.ux ??
      `Interface and workflow priorities: ${project.keyFeatures.slice(0, 3).join('; ')}.`,
    development: project.development ?? project.myRole,
    businessImpact: project.businessImpact ?? project.outcome
  }
}

export const projects: Project[] = [
  {
    slug: "hsms-housing-society-management",
    title: "HSMS — Housing Society Management System",
    summary:
      "A comprehensive multi-tenant SaaS platform for housing society operations — plot lifecycle, billing, visitor management, AI agents, and PLRA compliance built for the Pakistani market.",
    description:
      "Dynamic, privacy-first, AI-augmented housing society management platform with 25+ modules covering everything from plot allotment to committee handover.",
    image: "/Projects/HSMS/Pair 89.svg",
    imageAlt: "HSMS housing society management dashboard and modules",
    images: [
      "/Projects/HSMS/Pair 89.svg",
      "/Projects/HSMS/Pair 90.svg",
      "/Projects/HSMS/Pair 91.svg",
      "/Projects/HSMS/Pair 92.svg",
      "/Projects/HSMS/Pair 93.svg",
      "/Projects/HSMS/Pair 94.svg",
      "/Projects/HSMS/Pair 95.svg",
      "/Projects/HSMS/Pair 96.svg",
      "/Projects/HSMS/Pair 97.svg",
      "/Projects/HSMS/Pair 98.svg",
      "/Projects/HSMS/Pair 99.svg",
      "/Projects/HSMS/Pair 100.svg",
    ],
    githubUrl: "https://github.com/MUbaidJavaid",
    role: "Full-Stack Development & Architecture",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "AI/Groq",
      "PWA",
    ],
    featured: true,
    overview:
      "HSMS V2.0 is a market-leading, multi-tenant SaaS platform managing all aspects of housing society operations — from plot lifecycle and financial management to AI-augmented intelligence and PLRA/LDA regulatory compliance. It supports 25+ modules with a metadata-driven architecture where workflows, forms, and business rules are configurable via UI.",
    problem:
      "Housing societies in Pakistan manage operations across spreadsheets, WhatsApp groups, and paper registers. Existing solutions like MyGate and ADDA lack plot lifecycle management, PLRA compliance, and Pakistan-specific features like installment plans and dealer portals.",
    goal: "Build a comprehensive, dynamic platform that replaces manual processes with a centralized digital solution — supporting multi-tenancy, AI agents, privacy dashboards, gamification, and offline-first PWA capabilities.",
    myRole:
      "Architected the full-stack system from database design to frontend components. Built the dynamic configuration engine, AI intelligence layer, RBAC+ABAC permission model, and 25+ functional modules.",
    keyFeatures: [
      "Dynamic Configuration Engine with Visual Workflow Builder",
      "AI-Augmented Intelligence with role-based agents and anomaly detection",
      "Complete plot lifecycle — allotment, possession, transfer, registry",
      "Financial management with installment plans and defaulter tracking",
      "Visitor & security management with guard app",
      "PLRA/LDA regulatory integration for Pakistan compliance",
      "Privacy Dashboard with resident data sovereignty",
      "Gamification Engine with points, rewards, and leaderboards",
      "Custom Form Builder for any entity",
      "Offline-First PWA with background sync",
      "Vendor Marketplace and Dealer Portal",
      "Workforce management with geo-tagged attendance",
    ],
    technicalDecisions:
      "Adopted a metadata-driven architecture so societies can adapt the system without code changes. Used Next.js App Router for SSR and SEO, MongoDB for flexible multi-tenant document storage, and integrated Groq AI for intelligent agents. Built a hybrid RBAC+ABAC permission model for granular access control.",
    challenges:
      "Designing a truly dynamic system where workflows, forms, and business rules are stored in the database rather than hard-coded — while maintaining performance and type safety across 25+ modules.",
    outcome:
      "Delivered a platform with 10+ features no competitor offers (AI agents, plot lifecycle, PLRA integration, gamification, custom forms, workflows) while covering all standard housing society needs.",
    learned:
      "Building metadata-driven systems requires careful balance between flexibility and performance. Pakistan-specific domain knowledge (PLRA, installment culture, committee dynamics) is essential for product-market fit.",
    impact: [
      "10+ unique features no competitor in the market offers",
      "25+ modules covering complete society operations",
      "Multi-tenant architecture supporting unlimited societies",
      "AI-native platform with predictive analytics and anomaly detection",
    ],
    architectureSummary:
      "Next.js App Router frontend with Express.js API layer. MongoDB multi-tenant collections with society-level data isolation. Dynamic configuration engine stores workflows and forms as database documents. AI layer powered by Groq for role-based agents. RBAC+ABAC hybrid permission model with JWT authentication. Offline-first PWA with service worker and IndexedDB sync.",
    research:
      "Mapped Pakistani society operations across spreadsheets, WhatsApp, and paper — plus gaps in MyGate/ADDA around plot lifecycle, PLRA, and installment culture.",
    strategy:
      "Ship a metadata-driven multi-tenant platform so societies configure workflows without code, while keeping AI and compliance as first-class modules.",
    ux:
      "Role-aware surfaces for admins, dealers, guards, and residents — plot lifecycle, billing, visitors, and privacy controls without burying critical actions.",
    development:
      "Architected database tenancy, dynamic config engine, hybrid RBAC+ABAC, and 25+ modules across Next.js and Express.",
    businessImpact:
      "A market-differentiated platform with 10+ capabilities competitors lack, spanning complete society operations in one system.",
  },
  {
    slug: "naaz-wears-ecommerce",
    title: "Naaz Wears — Premium Pakistani Fashion",
    summary:
      "A complete D2C e-commerce platform for women's fashion with product catalog, 3-step checkout, order tracking, admin panel, PWA support, and thermal receipt generation.",
    description:
      "Full-featured e-commerce platform built with Next.js 15 and Convex real-time backend, serving the Pakistani women's fashion market with COD-first payment flow.",
    image: "/Projects/Naaz-Werars/Pair 59.svg",
    imageAlt: "Naaz Wears e-commerce product catalog and checkout screens",
    images: [
      "/Projects/Naaz-Werars/Pair 59.svg",
      "/Projects/Naaz-Werars/Pair 60.svg",
      "/Projects/Naaz-Werars/Pair 61.svg",
      "/Projects/Naaz-Werars/Pair 62.svg",
      "/Projects/Naaz-Werars/Pair 63.svg",
      "/Projects/Naaz-Werars/Pair 64.svg",
      "/Projects/Naaz-Werars/Pair 65.svg",
      "/Projects/Naaz-Werars/Pair 66.svg",
      "/Projects/Naaz-Werars/Pair 67.svg",
      "/Projects/Naaz-Werars/Pair 68.svg",
      "/Projects/Naaz-Werars/Pair 69.svg",
      "/Projects/Naaz-Werars/Pair 70.svg",
    ],
    liveUrl: "https://naazwears.vercel.app/",
    githubUrl: "https://github.com/MUbaidJavaid",
    role: "Full-Stack Development",
    stack: [
      "Next.js 15",
      "React 19",
      "Convex",
      "Tailwind CSS",
      "Cloudinary",
      "PWA",
    ],
    featured: true,
    overview:
      "Naaz Wears is a direct-to-consumer e-commerce platform for Pakistani women's fashion. Built with Next.js 15 App Router and Convex real-time BaaS, it features a full product catalog, 3-step checkout, 5-stage order tracking, admin panel with CRM, and installable PWA with offline support.",
    problem:
      "Pakistani fashion brands need a modern, mobile-first e-commerce presence with COD as primary payment, fast product browsing, and an admin panel that non-technical staff can operate.",
    goal: "Deliver a complete e-commerce solution with customer-facing store, full admin panel, PWA capabilities, and thermal receipt generation — optimized for the Pakistani D2C fashion market.",
    myRole:
      "Built the entire platform end-to-end: Next.js frontend with SSR, Convex backend with real-time queries, Cloudinary image pipeline, admin panel with 11 management sections, and PWA with APK generation.",
    keyFeatures: [
      "Product catalog with filtering by category, fabric, season, occasion, and price",
      "3-step checkout flow: Contact, Shipping, Payment (COD, Easypaisa, Card)",
      "5-stage order tracking: Confirmed → Packed → Shipped → Out for Delivery → Delivered",
      "Full admin panel with dashboard KPIs, product/order/customer management",
      "Customer CRM with tier system (Regular/VIP/Loyal) and lifetime spend tracking",
      "Review moderation system with photo uploads",
      "Installable PWA with offline support and APK generation",
      "80mm thermal receipt PDF generation",
      "Newsletter management and banner system",
      "Staff management with role-based access (Admin/Manager/Customer)",
    ],
    technicalDecisions:
      "Chose Convex for real-time data and zero-config backend, Next.js 15 App Router for SSR and SEO, Cloudinary for image CDN, and pdfkit for thermal receipt generation. Implemented session-based cart with account sync for logged-in users.",
    challenges:
      "Balancing real-time data sync (Convex) with SSR requirements (Next.js), and building a CRM-capable admin panel that remains intuitive for non-technical store operators.",
    outcome:
      "Launched a production e-commerce platform at naazwears.vercel.app with complete storefront, admin operations, and PWA capabilities serving real customers.",
    learned:
      "Convex's real-time capabilities dramatically simplify e-commerce state management. COD-first checkout flows require different UX patterns than card-first Western e-commerce.",
    impact: [
      "Live production platform serving real customers",
      "Complete admin panel with 11 management sections",
      "PWA installable on mobile with offline support",
      "Automated thermal receipt generation for order fulfillment",
    ],
    architectureSummary:
      "Next.js 15 App Router with SSR for SEO-critical pages. Convex real-time BaaS handles data, auth (JWT sessions), and serverless functions. Cloudinary CDN for product images with Convex Storage as fallback. Vercel serverless hosting with auto-scaling. PWA with service worker for offline-first experience.",
    research:
      "Studied Pakistani D2C fashion checkout habits — COD-first payment, mobile browsing, and admin tooling usable by non-technical staff.",
    strategy:
      "Ship a complete storefront plus admin CRM on Next.js 15 and Convex, optimized for COD and PWA installability.",
    ux:
      "3-step checkout, 5-stage order tracking, and an admin panel with eleven operational sections for daily store management.",
    development:
      "Built end-to-end: SSR storefront, Convex real-time backend, Cloudinary pipeline, admin CRM, and PWA packaging.",
    businessImpact:
      "Live production platform at naazwears.vercel.app serving real customers with full fulfillment tooling.",
  },
  {
    slug: "quikpos-saas-point-of-sale",
    title: "QuikPOS — Multi-Tenant Point-of-Sale SaaS",
    summary:
      "A cloud-based, multi-tenant POS system for Pakistani retail — featuring barcode scanning, Udhaar/Khata credit tracking, FBR compliance, offline mode, and bilingual Urdu/English support.",
    description:
      "Enterprise-grade POS SaaS built with React 19, Firebase, and Zustand — serving the Pakistani retail market with offline-first architecture and FBR tax compliance.",
    image: "/Projects/Quik-POS/Pair 41.svg",
    imageAlt: "QuikPOS point of sale checkout and inventory management screens",
    images: [
      "/Projects/Quik-POS/Pair 41.svg",
      "/Projects/Quik-POS/Pair 42.svg",
      "/Projects/Quik-POS/Pair 43.svg",
      "/Projects/Quik-POS/Pair 44.svg",
      "/Projects/Quik-POS/Pair 46.svg",
      "/Projects/Quik-POS/Pair 48.svg",
      "/Projects/Quik-POS/Pair 50.svg",
      "/Projects/Quik-POS/Pair 51.svg",
      "/Projects/Quik-POS/Pair 52.svg",
      "/Projects/Quik-POS/Pair 54.svg",
    ],
    liveUrl: "https://pos-saas-kappa.vercel.app/",
    githubUrl: "https://github.com/MUbaidJavaid",
    role: "Full-Stack Development & Architecture",
    stack: [
      "React 19",
      "Vite",
      "Firebase",
      "Zustand",
      "Tailwind CSS",
      "Cloudinary",
    ],
    featured: true,
    overview:
      "QuikPOS is a cloud-based, multi-tenant Point-of-Sale SaaS designed for the Pakistani retail market. Built with React 19 and Firebase, it features real-time checkout with barcode scanning, Udhaar (credit) tracking with Khata ledgers, FBR-compliant invoicing, offline mode, and full bilingual support (English/Urdu with RTL).",
    problem:
      "Pakistani retailers manage sales on paper registers, track credit (Udhaar) in physical notebooks, and have no easy way to comply with FBR tax requirements. Existing POS solutions are expensive, English-only, and don't support local payment methods like JazzCash and Easypaisa.",
    goal: "Build an affordable, Pakistan-first POS SaaS with multi-tenant architecture, offline capabilities, Udhaar/Khata credit management, FBR compliance, and full Urdu support.",
    myRole:
      "Designed the multi-tenant architecture on Firebase, built 146 React components organized by feature, implemented 12 Zustand stores, offline queue system, and the complete superadmin platform.",
    keyFeatures: [
      "Real-time POS checkout with barcode scanning and keyboard shortcuts",
      "Multi-payment support: Cash, JazzCash, EasyPaisa, Raast, Card, Bank Transfer, Udhaar",
      "Udhaar (credit) management with Khata ledger and ageing analysis (0-30, 31-60, 61-90, 90+ days)",
      "FBR-compliant invoicing with QR codes and NTN tracking",
      "Offline-first architecture with IndexedDB transaction queuing and auto-sync",
      "Full Urdu/English bilingual support with RTL layout (1,700+ translation keys)",
      "Multi-tenant platform with Superadmin, Admin, Manager, Cashier roles",
      "Inventory management with batch tracking, expiry alerts, and stock audit trail",
      "Customer loyalty points with accrual and redemption",
      "Thermal receipt PDF generation and email delivery",
      "Cash register sessions with opening/closing balance and variance tracking",
      "Platform-level analytics and store management for superadmins",
    ],
    technicalDecisions:
      "Used Firebase Firestore for multi-tenant NoSQL storage with security rules for data isolation. React 19 with Vite for fast SPA builds. Zustand for modular state management across 12 domain stores. IndexedDB for offline transaction queuing. Cloudinary for product image CDN.",
    challenges:
      "Implementing reliable offline-to-online sync for POS transactions while maintaining data consistency across multi-tenant Firestore collections, and building a complete bilingual system with RTL support for 1,700+ strings.",
    outcome:
      "Launched a production POS platform at pos-saas-kappa.vercel.app with complete retail operations, offline capabilities, and Pakistan-specific features serving real stores.",
    learned:
      "Pakistan-specific POS requirements (Udhaar credit culture, FBR compliance, Urdu-first UX, JazzCash/Easypaisa) require deep domain knowledge. Offline-first architecture is essential for Pakistani retail where internet connectivity is unreliable.",
    impact: [
      "Live production platform with multi-tenant architecture",
      "146 components and 12 state stores for complete retail coverage",
      "Full Urdu/English bilingual with 1,700+ translation keys",
      "Offline-first POS ensures sales continue without internet",
    ],
    architectureSummary:
      "React 19 SPA with Vite bundler. Firebase Firestore for multi-tenant NoSQL database with security rules for tenant isolation. Firebase Auth for authentication with session persistence. Zustand for modular client state (12 stores). IndexedDB offline queue for POS transactions with auto-sync. Vercel for hosting with edge API functions for SMTP email and receipt generation. Cloudinary CDN for product images.",
    research:
      "Mapped Pakistani retail POS needs — barcode scanning, Udhaar/Khata credit, FBR compliance, offline sales, and Urdu/English bilingual operation.",
    strategy:
      "Build multi-tenant SaaS with offline-first queues and tenant isolation so shops keep selling without reliable connectivity.",
    ux:
      "Fast checkout surfaces, bilingual UI, and credit/inventory flows designed for counter-speed retail use.",
    development:
      "Implemented React 19 + Firebase tenancy, Zustand stores, IndexedDB sync, and edge helpers for receipts and email.",
    businessImpact:
      "Live multi-tenant POS platform with offline resilience and Pakistan-specific compliance features.",
  },
  {
    slug: "apex-platinum-fintech-platform",
    title: "Apex Platinum — Ultra-Premium Fintech Platform",
    summary:
      "An institutional-grade fintech portal with SWIFT/SEPA payments, multicurrency accounts, custody visualization, 3D shader effects, and a simulated institutional dashboard for high-net-worth clients.",
    description:
      "Ultra-premium EMI marketing and institutional portal built with Next.js 16, Three.js, and GSAP — featuring immersive 3D visuals, dark/light theming, and a full simulated institutional dashboard.",
    image: "/Projects/Apex-Platinum/Pair 101.svg",
    imageAlt: "Apex Platinum fintech platform dashboard and landing page",
    images: [
      "/Projects/Apex-Platinum/Pair 101.svg",
      "/Projects/Apex-Platinum/Pair 102.svg",
      "/Projects/Apex-Platinum/Pair 103.svg",
      "/Projects/Apex-Platinum/Pair 104.svg",
      "/Projects/Apex-Platinum/Pair 105.svg",
      "/Projects/Apex-Platinum/Pair 106.svg",
      "/Projects/Apex-Platinum/Pair 107.svg",
      "/Projects/Apex-Platinum/Pair 108.svg",
      "/Projects/Apex-Platinum/Pair 109.svg",
      "/Projects/Apex-Platinum/Pair 110.svg",
      "/Projects/Apex-Platinum/Pair 111.svg",
      "/Projects/Apex-Platinum/Pair 112.svg",
    ],
    liveUrl: "https://apex-platinum.vercel.app/",
    githubUrl: "https://github.com/MUbaidJavaid",
    role: "Full-Stack Development & UI Engineering",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Three.js",
      "GSAP",
      "Framer Motion",
    ],
    featured: false,
    overview:
      "Apex Platinum is an ultra-premium fintech platform for a licensed Electronic Money Institution (EMI) based in Vilnius, Lithuania. It combines a visually immersive public marketing site with a simulated institutional dashboard — covering SWIFT/SEPA payments, correspondent banking, merchant acquiring, crypto exchange IBANs, multicurrency accounts, and a private wealth concierge experience.",
    problem:
      "Institutional fintech platforms need to convey trust, sophistication, and regulatory credibility while delivering complex financial data in an intuitive interface. Off-the-shelf templates fail to communicate the premium positioning required for high-net-worth and institutional clients.",
    goal: "Build a visually stunning, enterprise-grade fintech portal that serves as both a conversion-optimized marketing site and a simulated institutional dashboard — showcasing portfolio management, vault custody, market terminals, and concierge advisory.",
    myRole:
      "Architected and built the entire platform — from 3D shader backgrounds and Hyperspeed effects to the institutional dashboard with portfolio visualization, vault custody ledger, and market terminal. Implemented dark/light theming, smooth scroll, and page transitions.",
    keyFeatures: [
      "Immersive landing with shader backgrounds, Hyperspeed effect, and Lightfall particles",
      "7 solution pages covering payments, banking, accounts, e-shop, financing, and crypto",
      "4-tier pricing (Business, Business Plus, Business Exclusive, Individual)",
      "Simulated institutional dashboard with Portfolio ($142.8M AUM), Markets, and Vault",
      "3-step login flow with MFA simulation and AES-256 decryption animation",
      "3D VaultOrb with custody visualization and sovereign vault access",
      "Concierge advisory interface with dedicated wealth strategist",
      "Dark/light theme with localStorage persistence",
      "GSAP scroll animations, Three.js/OGL shader backgrounds, Framer Motion transitions",
      "Full responsive design with mobile navigation",
    ],
    technicalDecisions:
      "Used Next.js 16 App Router for SSR marketing pages and client-rendered dashboard. Three.js and OGL for 3D shader effects with dynamic imports to avoid SSR issues. GSAP for scroll-triggered animations. Lenis for smooth scrolling. HSL-based design tokens for platinum/gold/neon-cyan color system.",
    challenges:
      "Balancing heavy 3D visuals (Three.js, OGL, postprocessing) with page performance — required careful dynamic imports with ssr: false. Creating a design system that feels genuinely premium and institutional rather than template-like.",
    outcome:
      "Delivered a production-ready fintech platform with 14+ routes, immersive 3D visuals, and a complete institutional dashboard simulation that convincingly demonstrates wealth management capabilities.",
    learned:
      "Premium fintech UI requires obsessive attention to micro-interactions, typography, and color — small details (metallic shine, brushed platinum textures, scan line animations) create the perception of institutional quality. Dynamic imports are essential for Three.js-heavy pages.",
    impact: [
      "14+ fully functional routes across marketing and dashboard",
      "Complete institutional dashboard with portfolio, vault, and market views",
      "3D shader effects and immersive animations throughout",
      "Dark/light theming with consistent premium design system",
    ],
    architectureSummary:
      "Next.js 16 App Router with server-rendered marketing pages and client-rendered dashboard. Three.js/OGL for 3D backgrounds and VaultOrb. GSAP + Framer Motion for animations. Lenis smooth scroll. HSL-based design tokens with dark/light persistence. Component-per-page architecture with centralized content files. Dynamic imports for heavy 3D components.",
  },
  {
    slug: "surgicore-pro-surgical-management",
    title: "SurgiCore Pro — Surgical Management Platform",
    summary:
      "An enterprise-grade surgical operations platform with OR scheduling, case tracking, patient management, billing, inventory, sterilization tracking, and deep surgical analytics.",
    description:
      "Full-stack enterprise surgical management platform built with React 18, TypeScript, shadcn/ui, and Recharts — serving multi-specialty hospitals with 8 dashboard modules and 9 public pages.",
    image: "/Projects/Surgi-Core/Pair 113.svg",
    imageAlt: "SurgiCore Pro surgical dashboard and OR scheduling interface",
    images: [
      "/Projects/Surgi-Core/Pair 113.svg",
      "/Projects/Surgi-Core/Pair 114.svg",
      "/Projects/Surgi-Core/Pair 115.svg",
      "/Projects/Surgi-Core/Pair 116.svg",
      "/Projects/Surgi-Core/Pair 117.svg",
      "/Projects/Surgi-Core/Pair 118.svg",
      "/Projects/Surgi-Core/Pair 119.svg",
      "/Projects/Surgi-Core/Pair 120.svg",
      "/Projects/Surgi-Core/Pair 121.svg",
      "/Projects/Surgi-Core/Pair 122.svg",
    ],
    liveUrl: "https://surgi-core-opal.vercel.app/",
    githubUrl: "https://github.com/MUbaidJavaid",
    role: "Full-Stack Development & Architecture",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "Framer Motion",
      "GSAP",
    ],
    featured: false,
    overview:
      "SurgiCore Pro is an enterprise-grade surgical management platform for multi-specialty hospitals and surgical centers. It provides a comprehensive suite of tools for OR scheduling, surgical case tracking, patient management, billing, inventory with sterilization cycles, staff coordination, and deep surgical analytics — all within a single, unified web application with 17+ routes and 50+ reusable components.",
    problem:
      "Surgical centers face OR underutilization, scheduling conflicts, compliance tracking gaps, and fragmented data across multiple disconnected systems. No single platform addresses the full surgical operations lifecycle from lead generation to daily case management.",
    goal: "Build a complete, production-ready surgical management platform covering both the public-facing marketing funnel and the internal operational dashboard — with enterprise-grade UI, HIPAA compliance messaging, and rich surgical analytics.",
    myRole:
      "Designed and built the full platform end-to-end: 9 public marketing pages with conversion-optimized CTAs, 8 dashboard modules with rich data visualizations, authentication system, comprehensive mock data engine, and a complete HSL-based design system.",
    keyFeatures: [
      "Complete surgery registry with advanced filtering and status management",
      "Multi-OR calendar scheduling with conflict detection and availability heatmaps",
      "Patient directory with surgical history, consent management, and pre-op assessments",
      "Procedure-based billing with insurance claims pipeline and revenue breakdown",
      "Surgical inventory with sterilization cycle tracking and expiry alerts",
      "Surgeon benchmarking with comparative metrics and OR utilization deep-dive",
      "Case duration trend analysis with 12-month Recharts visualizations",
      "Conversion-optimized marketing site with timed lead-capture modals",
      "HIPAA, ISO 27001, SOC 2 compliance trust signals throughout",
      "Authentication guard with protected dashboard routes",
    ],
    technicalDecisions:
      "Used React 18 with Vite for fast SPA development. shadcn/ui + Radix UI for accessible enterprise components. Recharts for surgical KPI visualization. React Context for auth state. TanStack Query pattern for server state readiness. HSL-based semantic design tokens with Deep Teal (#0F766E) primary.",
    challenges:
      "Creating a clinically sophisticated design system that feels trustworthy for healthcare without being sterile. Building comprehensive mock data that realistically represents surgical workflows across 8 dashboard modules.",
    outcome:
      "Delivered a production-ready platform with 17+ routes, 50+ reusable components, 8 dashboard modules, and a complete conversion-optimized marketing funnel — demonstrating full-stack healthcare domain expertise.",
    learned:
      "Healthcare enterprise UI demands a higher standard of trust signals and professional polish. HSL-based design tokens with semantic naming make it possible to maintain consistency across 50+ components. Recharts provides excellent flexibility for domain-specific surgical analytics.",
    impact: [
      "17+ fully functional routes with nested layouts",
      "50+ reusable UI components with enterprise styling",
      "8 dashboard modules covering complete surgical operations",
      "Full SEO implementation with OG images and structured data readiness",
    ],
    architectureSummary:
      "React 18 SPA with Vite bundler. React Router v6 with nested layouts (PublicLayout + DashboardLayout). shadcn/ui + Radix UI component library. Recharts for surgical analytics. React Context for authentication. Comprehensive mock data engine with realistic surgical records. HSL-based semantic design tokens. Framer Motion + GSAP for animations. Full responsive design with collapsible dashboard sidebar.",
  },
  {
    slug: "vitalis-health-healthcare-platform",
    title: "Vitalis Health — Healthcare Web Application",
    summary:
      "A full-stack healthcare platform with public-facing website and admin dashboard — featuring appointment booking, patient management, billing with auto-calculated invoices, and staff management with CRUD operations.",
    description:
      "Full-featured healthcare web application built with React 18, TypeScript, and Tailwind CSS — serving as both a patient-facing website and an admin operations dashboard.",
    image: "/Projects/Vitalis-Health/Pair 149.svg",
    imageAlt: "Vitalis Health dashboard and appointment management interface",
    images: [
      "/Projects/Vitalis-Health/Pair 149.svg",
      "/Projects/Vitalis-Health/Pair 150.svg",
      "/Projects/Vitalis-Health/Pair 151.svg",
      "/Projects/Vitalis-Health/Pair 152.svg",
      "/Projects/Vitalis-Health/Pair 153.svg",
      "/Projects/Vitalis-Health/Pair 154.svg",
      "/Projects/Vitalis-Health/Pair 155.svg",
      "/Projects/Vitalis-Health/Pair 156.svg",
      "/Projects/Vitalis-Health/Pair 157.svg",
      "/Projects/Vitalis-Health/Pair 158.svg",
    ],
    liveUrl: "https://vitalis-health-indol.vercel.app/",
    githubUrl: "https://github.com/MUbaidJavaid",
    role: "Full-Stack Development",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "Framer Motion",
    ],
    featured: false,
    overview:
      "Vitalis Health is a full-stack healthcare web application with two primary interfaces: a public-facing website for patients (services, doctors, blog, appointment booking) and an admin dashboard with full CRUD functionality for managing appointments, patients, billing, staff, and settings — all powered by React Context state management.",
    problem:
      "Healthcare providers need a unified digital presence that serves both patient engagement (booking, information) and internal operations (scheduling, billing, staff management). Most solutions address only one side, forcing clinics to manage multiple disconnected tools.",
    goal: "Build a complete healthcare platform that seamlessly connects the patient-facing website with internal admin operations — enabling online booking, patient management, billing with auto-calculated invoices, and staff coordination from a single application.",
    myRole:
      "Built the entire application end-to-end: responsive public website with 7 pages, admin dashboard with 6 management modules, React Context-based CRUD state management, and real-time KPI dashboard with Recharts visualizations.",
    keyFeatures: [
      "Public website with hero, services, doctors, testimonials, blog, and contact pages",
      "Appointment booking form with success feedback",
      "Admin dashboard with real-time KPIs (patients, revenue, appointments)",
      "Full appointment management — add, update status, delete",
      "Patient registry with search, details, and registration",
      "Billing module with auto-calculated invoice totals",
      "Staff management with role-based access (Admin/Manager/Customer)",
      "Settings with profile editing synced to navbar and notification preferences",
      "Inventory management within settings module",
      "React Context CRUD — changes reflect instantly across all dashboard pages",
    ],
    technicalDecisions:
      "Used React 18 with Vite for fast SPA builds. Tailwind CSS + shadcn/ui for consistent healthcare UI. React Context with array state operations (push/filter/map) for CRUD — keeping the app self-contained without external APIs. Recharts for dashboard KPIs. Framer Motion + GSAP for smooth animations.",
    challenges:
      "Designing a React Context-based state management system that handles CRUD operations across 6 dashboard modules while keeping instant cross-page reactivity. Building a healthcare UI that feels professional and trustworthy for both patients and admin staff.",
    outcome:
      "Delivered a complete healthcare platform with 7 public pages and 6 admin modules — fully functional CRUD operations, real-time dashboard KPIs, and a cohesive Teal-branded design system.",
    learned:
      "React Context with well-structured array operations can effectively power a full CRUD dashboard without external state libraries. Healthcare UX benefits from a calming, trust-building color palette (Teal #0F766E) and clear information hierarchy.",
    impact: [
      "Complete dual-interface platform (public site + admin dashboard)",
      "6 admin modules with full CRUD functionality",
      "Real-time KPI dashboard with Recharts visualizations",
      "Instant cross-page reactivity via React Context state management",
    ],
    architectureSummary:
      "React 18 SPA with Vite bundler. React Router DOM v6 for routing. React Context (AuthContext + DataContext) for authentication and CRUD state management. shadcn/ui component library. Recharts for dashboard analytics. Tailwind CSS with Teal (#0F766E) primary branding. Framer Motion + GSAP for animations. Mock data seeding via data/mockData.ts.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
