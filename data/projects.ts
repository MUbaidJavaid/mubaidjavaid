export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
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
  /** One short paragraph for “architecture at a glance” on the case study */
  architectureSummary: string;
};

export const projects: Project[] = [
  {
    slug: "inventory-management-support-ticket-system",
    title: "Inventory Management & Support Ticket System",
    summary:
      "A custom full-stack workflow system for inventory operations, item and category management, support tickets, installation tracking, and transaction handling.",
    description:
      "Role-aware internal tool combining inventory management with support ticket workflows, designed to replace scattered spreadsheets and ad-hoc processes.",
    image: "/images/project-inventory.svg",
    githubUrl: "https://github.com/MUbaidJavaid",
    role: "Full-Stack Development",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Material UI"],
    featured: true,
    overview:
      "An internal web application that centralizes inventory data, ticketing workflows, and related operational tracking for a small team.",
    problem:
      "The team was managing inventory, tickets, and installation work across multiple spreadsheets and messages, making it easy to lose context and hard to see the current state of operations.",
    goal:
      "Provide a single application to manage items, categories, tickets, and transactions with clear visibility, basic audit history, and predictable workflows.",
    myRole:
      "Designed and implemented the React frontend, Express.js API, MongoDB data models, and role-aware routes, focusing on practical, maintainable workflows.",
    keyFeatures: [
      "Role-based views for administrators and operational staff",
      "Item and category management with structured data",
      "Support and installation ticket workflows with status tracking",
      "Transaction handling for basic inventory changes",
      "Admin-focused interface for day-to-day operational work",
    ],
    technicalDecisions:
      "Chose a MERN-style stack for familiarity and speed. Used Express.js routes grouped by feature, simple JWT-based authentication, and MongoDB collections for items, tickets, and transactions. On the frontend, composed reusable table and form components to keep screens consistent.",
    challenges:
      "Keeping inventory changes and ticket updates in sync so operators had a clear picture of current stock and open work, while still keeping the codebase straightforward.",
    outcome:
      "Replaced informal tracking with a single web application, making it easier for the team to see current inventory, open tickets, and recent changes without jumping across tools.",
    learned:
      "The importance of aligning data modeling with real workflows, and of designing admin interfaces to be calm and straightforward instead of feature-heavy.",
    impact: [
      "Single source of truth for stock, tickets, and related actions",
      "Fewer handoffs between spreadsheets and chat threads",
      "Role-based access reduced accidental edits across departments",
      "Easier onboarding for new operators with consistent screens",
    ],
    architectureSummary:
      "Browser clients talk to a REST API on Express. Auth issues short-lived JWTs; MongoDB holds normalized collections for items, tickets, and transactions with indexes aligned to list screens. The React app is organized by feature routes with shared table/form primitives.",
  },
  {
    slug: "yalla-dubai-travel-platform",
    title: "Yalla Dubai Travel Platform",
    summary:
      "A structured web application for travel-oriented workflows with authentication, modular backend routing, and user-facing interaction flows.",
    description:
      "Server-rendered Node.js/Express application with EJS views, authentication, and modular routing to support travel-related user journeys.",
    image: "/images/project-travel.svg",
    githubUrl: "https://github.com/MUbaidJavaid",
    role: "Full-Stack Development",
    stack: ["Node.js", "Express.js", "EJS", "JavaScript", "Authentication"],
    featured: true,
    overview:
      "A travel-focused application that organizes backend logic into clear modules and supports authenticated user flows for browsing and interacting with travel content.",
    problem:
      "The platform needed a more structured backend and authentication layer so travel-related features could be implemented consistently instead of as isolated scripts.",
    goal:
      "Create a maintainable backend with organized controllers, routes, and models, along with server-rendered views and protected routes for logged-in users.",
    myRole:
      "Implemented backend structure, authentication workflows, route organization, and EJS-based views for core flows.",
    keyFeatures: [
      "Modular backend structure with controllers, routes, and models",
      "Session-based authentication with protected routes",
      "Server-rendered pages using EJS templates",
      "Organized route handling for travel-related flows",
      "Middleware for common concerns like access checks and validation",
    ],
    technicalDecisions:
      "Organized the backend into feature folders (for example, auth and travel flows) with separate controllers and models. Used Express middleware for authentication checks and EJS for rendering pages where SEO and simplicity were important.",
    challenges:
      "Keeping routing and authentication logic simple enough to maintain while supporting multiple different travel flows and page types.",
    outcome:
      "Delivered a more maintainable backend and view layer that could be extended with additional travel features without rewriting core plumbing.",
    learned:
      "How a clear separation between routing, controllers, models, and views improves long-term maintainability in Node.js applications.",
    impact: [
      "Feature work could follow existing module boundaries",
      "Auth and session handling centralized in middleware",
      "Server-rendered pages kept SEO-friendly travel content simple to ship",
      "Reduced duplicate route logic across similar flows",
    ],
    architectureSummary:
      "Classic MVC on Express: routers delegate to controllers, models encapsulate persistence, EJS renders HTML on the server. Session store backs authenticated journeys; middleware handles cross-cutting validation and access checks before handlers run.",
  },
  {
    slug: "movie-discovery-frontend",
    title: "Movie Discovery Frontend",
    summary:
      "A responsive frontend application that integrates with an external movie database API to fetch and display content through a clean browsing experience.",
    description:
      "React-based movie discovery interface that uses an external API to power routed views, search, and detail pages with a focus on layout and clarity.",
    image: "/images/project-movie.svg",
    githubUrl: "https://github.com/MUbaidJavaid",
    role: "Frontend Development",
    stack: ["React", "JavaScript", "Tailwind CSS", "React Router", "API Integration"],
    featured: true,
    overview:
      "A single-page React application for browsing movies from an external API, with views for listings, search results, and detail pages.",
    problem:
      "The UI needed a clear information hierarchy for search, listings, and detail views while handling an unreliable third-party API - slow responses and occasional errors - without confusing end users.",
    goal:
      "Build a polished frontend that demonstrates API integration, routed navigation, and a calm layout for media content, with explicit loading and error states.",
    myRole:
      "Implemented the React components, routing, styling, and API integration, focusing on predictable layouts and loading states.",
    keyFeatures: [
      "API-driven movie listings and detail views",
      "Routed browsing experience with React Router",
      "Responsive layout for desktop and mobile",
      "Reusable card and layout components",
      "Basic loading and error handling states",
    ],
    technicalDecisions:
      "Used React Router for navigation, Tailwind CSS for styling, and a simple data fetching layer around the external API. Kept components focused on presentation with data fetching handled in a small number of containers.",
    challenges:
      "Designing loading and error states that kept the experience smooth when the external API was slow or temporarily unavailable.",
    outcome:
      "A focused frontend that showcases API consumption, routed UI, and a clean component structure for a media-heavy interface.",
    learned:
      "Reinforced practical patterns for API-based UIs: clear loading states, limited global state, and components that stay readable as features grow.",
    impact: [
      "Predictable navigation between list, search, and detail routes",
      "Reusable cards reduced layout drift across screens",
      "Error and loading UI prevented blank states during API delays",
      "Mobile-friendly grid and typography for long browsing sessions",
    ],
    architectureSummary:
      "Client-only SPA: route-level containers fetch from the movie API; presentational components receive props and stay free of side effects. Global state stays minimal; URL drives primary navigation state.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
