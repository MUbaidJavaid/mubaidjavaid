Software Requirements Specification (SRS) — Naaz Wears

1. Project Overview

┌────────────────┬─────────────────────────────────────────┐
│ Field │ Detail │
├────────────────┼─────────────────────────────────────────┤
│ Name │ Naaz Wears (formerly "Nighty Night") │
├────────────────┼─────────────────────────────────────────┤
│ Version │ 2.0.0 │
├────────────────┼─────────────────────────────────────────┤
│ Domain │ E-commerce / Women's Fashion (Pakistan) │
├────────────────┼─────────────────────────────────────────┤
│ Tagline │ "Premium Pakistani Fashion" │
├────────────────┼─────────────────────────────────────────┤
│ HQ │ 14-B Gulberg III, Lahore, Pakistan │
├────────────────┼─────────────────────────────────────────┤
│ Contact │ <care@naazwears.pk> │
├────────────────┼─────────────────────────────────────────┤
│ Business Model │ D2C with COD as primary payment │
└────────────────┴─────────────────────────────────────────┘

---

1. Technology Stack

┌──────────┬───────────────────────────────────────────────────────────┐
│ Layer │ Technology │
├──────────┼───────────────────────────────────────────────────────────┤
│ Frontend │ Next.js 15.5.18 (App Router), React 19, Tailwind CSS 4 │
├──────────┼───────────────────────────────────────────────────────────┤
│ Backend │ Convex 1.39.1 (real-time BaaS) │
├──────────┼───────────────────────────────────────────────────────────┤
│ Auth │ @convex-dev/auth (password-based, JWT sessions) │
├──────────┼───────────────────────────────────────────────────────────┤
│ Images │ Cloudinary (primary) + Convex File Storage (fallback) │
├──────────┼───────────────────────────────────────────────────────────┤
│ Email │ Nodemailer via Gmail SMTP │
├──────────┼───────────────────────────────────────────────────────────┤
│ PDF │ pdfkit (80mm thermal receipt format) │
├──────────┼───────────────────────────────────────────────────────────┤
│ Hosting │ Vercel (serverless) │
├──────────┼───────────────────────────────────────────────────────────┤
│ PWA │ Service worker, manifest, offline support, APK generation │
└──────────┴───────────────────────────────────────────────────────────┘

---

1. Major Features

A. Customer-Facing

- Product Catalog — browsing, filtering (category, fabric, season, occasion, price),
  search, size calculator
- Shopping Cart — session-based, synced for logged-in users
- Wishlist — localStorage + account-synced
- 3-Step Checkout — Contact → Shipping → Payment (COD, Easypaisa, Card)
- Order Tracking — 5-stage timeline (Confirmed → Packed → Shipped → Out for Delivery →
  Delivered)
- User Accounts — profile, addresses, order history, avatar upload
- Product Reviews — star ratings, text, photo uploads (moderated)
- Newsletter — subscribe/unsubscribe
- PWA — installable, offline-capable, app shortcuts

B. Admin Panel

- Dashboard — KPIs, revenue chart, top categories, low stock alerts
- Product Management — CRUD, multi-image upload, SEO fields, stock tracking
- Category Management — hierarchical, visibility, sort order
- Order Management — status updates, timeline, email notifications, receipt PDF
- Customer CRM — tiers (Regular/VIP/Loyal), lifetime spend tracking
- Review Moderation — approve/reject queue
- Banners & Homepage Sections — drag-to-reorder, visibility toggles
- Catalog Options — manage fabric, season, occasion, size, color dropdowns
- Newsletter Management — subscriber list, bulk operations
- Staff Management — invite staff, assign roles (Admin-only)
- Store Settings — 6-tab config (store, payments, shipping, notifications, SEO, legal)

---

1. Key Routes

Customer

/ · /shop · /product/[slug] · /cart · /checkout · /orders · /orders/[orderId] ·
/account · /login · /signup · /forgot-password · /wishlist · /download-app

Admin (Protected)

/admin · /admin/products · /admin/categories · /admin/orders · /admin/customers ·
/admin/reviews · /admin/banners · /admin/homepage · /admin/catalog-options ·
/admin/newsletter · /admin/staff · /admin/settings

API

/api/pwa-icon/[size] · /api/pwa-splash · /api/receipt/[orderId]

---

1. Data Models (Convex)

┌───────────────────────┬──────────────────────────────────────────────────────────┐
│ Table │ Key Fields │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ users │ email, password (hashed) │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ userProfiles │ userId, name, role, phone, city, dob, avatar │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ │ slug, sku, title, price, sale, fabric, season, category, │
│ products │ stock, sizes, colors, occasion, rating, featured, │
│ │ active, images │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ categories │ catId, name, blurb, parentCatId, visible, sortOrder │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ catalogOptions │ type (fabric/season/occasion/size/color), value, label, │
│ │ sortOrder │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ orders │ orderId, customer, lineItems, total, payment, status, │
│ │ stage │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ cartItems │ sessionId, userId, slug, qty, size │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ wishlistItems │ sessionId, userId, slug │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ reviews │ name, product, rating, text, photos, decision │
│ │ (approve/reject/null) │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ customers │ name, email, phone, city, orders, spent, tier, status │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ staff │ name, email, role, status │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ banners │ title, link, active, order, image │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ homepageSections │ sectionKey, label, type, content, sortOrder, visible │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ newsletterSubscribers │ email, active │
├───────────────────────┼──────────────────────────────────────────────────────────┤
│ settings │ key, value (JSON) │
└───────────────────────┴──────────────────────────────────────────────────────────┘

---

1. Authentication & Authorization

- Auth Method: Password-based (email/password) with JWT sessions via Convex Auth
- Password Rules: Min 8 chars, at least 1 letter + 1 number
- Password Reset: Email-based with reset link
- Roles: Customer (default) → Manager → Admin
- Role Resolution: Staff table (priority) → userProfiles → default "customer"
- Admin routes protected server-side via assertAdmin() + client-side middleware
  redirect

┌────────────────┬──────────┬─────────┬───────┐
│ Permission │ Customer │ Manager │ Admin │
├────────────────┼──────────┼─────────┼───────┤
│ Browse & Order │ Yes │ Yes │ Yes │
├────────────────┼──────────┼─────────┼───────┤
│ Admin Panel │ No │ Yes │ Yes │
├────────────────┼──────────┼─────────┼───────┤
│ Manage Staff │ No │ No │ Yes │
└────────────────┴──────────┴─────────┴───────┘

---

1. Integrations

┌────────────────┬────────────────────────────────────────────────┐
│ Service │ Purpose │
├────────────────┼────────────────────────────────────────────────┤
│ Gmail SMTP │ Order receipts, password reset, welcome emails │
├────────────────┼────────────────────────────────────────────────┤
│ Cloudinary │ Product image CDN │
├────────────────┼────────────────────────────────────────────────┤
│ Convex Storage │ Avatars, fallback images, PDFs │
├────────────────┼────────────────────────────────────────────────┤
│ pdfkit │ 80mm thermal receipt generation │
├────────────────┼────────────────────────────────────────────────┤
│ Google Fonts │ Playfair Display + DM Sans │
└────────────────┴────────────────────────────────────────────────┘

---

1. PWA Capabilities

- Standalone mode (no browser chrome)
- Offline support via service worker (network-first + cache fallback)
- App icons (192x192, 512x512 maskable)
- App shortcuts (Shop, Cart, Wishlist)
- iOS & Android install prompts
- APK generation via npm run pwa:apk
- Theme: deep purple (#2e1a2e), background cream (#faf6f0)

---

1. Quality Attributes

- Performance: SSR, image optimization, indexed DB queries, service worker caching
- Security: bcrypt hashing, JWT auth, RBAC, HTTPS enforced, env-stored secrets
- Reliability: ACID transactions (Convex), automatic retries, offline fallback
- Scalability: Serverless (Vercel auto-scale), managed DB (Convex), CDN images
- Type Safety: TypeScript throughout (strict mode)

---

1. Known Limitations

1. Only COD fully functional — Card/Easypaisa UI present but backend not integrated
1. Review photo upload UI ready but not fully wired
1. Dual image storage (Cloudinary + Convex) needs migration strategy
1. No bulk order operations in admin
1. English-only (Urdu planned)
1. No automated tests yet (framework ready)

---

1. Future Roadmap

- Full payment gateway (Stripe/Easypaisa) with webhooks & refunds
- Advanced analytics & inventory forecasting
- Discount codes & loyalty program
- SMS notifications for COD
- Push notifications
- Multi-language support
- Blog/CMS
- Native mobile apps

---

This covers the full scope of the Naaz Wears platform — architecture, features, data
models, auth, integrations, and quality attributes. Let me know if you'd like this
exported as a PDF or need any section expanded.

livelink:https://naazwears.vercel.app//>
