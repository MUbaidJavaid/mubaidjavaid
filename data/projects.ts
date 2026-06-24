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
};

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
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
