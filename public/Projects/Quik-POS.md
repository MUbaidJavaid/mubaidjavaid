Software Requirements Specification (SRS)─────────────────────────────────────────────

QuickPOS SaaS — Multi-Tenant Point-of-Sale System

┌─────────────────┬───────────────────────────────────────────────────────────────┐
│ Field │ Detail │
├─────────────────┼───────────────────────────────────────────────────────────────┤
│ Document │ 1.0 │
│ Version │ │
├─────────────────┼───────────────────────────────────────────────────────────────┤
│ Date │ 2026-06-24 │
├─────────────────┼───────────────────────────────────────────────────────────────┤
│ Project Name │ QuickPOS SaaS │
├─────────────────┼───────────────────────────────────────────────────────────────┤
│ Platform │ Web Application (SPA) │
├─────────────────┼───────────────────────────────────────────────────────────────┤
│ Tech Stack │ React 19, Vite 5.4, Firebase (Firestore/Auth), Zustand, │
│ │ Tailwind CSS │
└─────────────────┴───────────────────────────────────────────────────────────────┘

---

1. Introduction

1.1 Purpose

This document defines the software requirements for QuickPOS SaaS, a cloud-based,
multi-tenant Point-of-Sale system designed primarily for the Pakistani retail market.
It covers functional, non-functional, and system requirements.

1.2 Scope

QuickPOS SaaS enables retail businesses to manage sales, inventory, customers, credit
(Udhaar), and compliance (FBR) through a web-based interface. The system supports
multiple stores under a single platform, with role-based access control and offline
capabilities.

1.3 Intended Audience

- Project stakeholders and investors
- Development and QA teams
- System administrators
- Business analysts

  1.4 Definitions & Acronyms

┌────────┬───────────────────────────────────────────────────┐
│ Term │ Definition │
├────────┼───────────────────────────────────────────────────┤
│ POS │ Point of Sale │
├────────┼───────────────────────────────────────────────────┤
│ SaaS │ Software as a Service │
├────────┼───────────────────────────────────────────────────┤
│ Udhaar │ Pakistani term for store credit/debt │
├────────┼───────────────────────────────────────────────────┤
│ Khata │ Customer ledger/account book │
├────────┼───────────────────────────────────────────────────┤
│ FBR │ Federal Board of Revenue (Pakistan tax authority) │
├────────┼───────────────────────────────────────────────────┤
│ NTN │ National Tax Number │
├────────┼───────────────────────────────────────────────────┤
│ GST │ General Sales Tax │
├────────┼───────────────────────────────────────────────────┤
│ PKR │ Pakistani Rupee │
└────────┴───────────────────────────────────────────────────┘

---

1. Overall Description

2.1 Product Perspective

QuickPOS is a standalone SaaS application accessible via web browsers. It uses
Firebase as its backend-as-a-service for authentication, database, and serverless
functions, with Vercel for frontend hosting and edge API functions.

2.2 System Architecture

┌─────────────────────────────────────────────────────┐
│ Client (Browser) │
│ React 19 + Vite + Zustand + Tailwind CSS │
│ Offline Queue (IndexedDB) + Barcode Scanner │
└──────────────┬──────────────────────┬───────────────┘
│ │
┌───────▼───────┐ ┌───────▼───────┐
│ Firebase │ │ Vercel API │
│ - Firestore │ │ - SMTP Email │
│ - Auth │ │ - OTP Send │
│ - Functions │ │ - Receipts │
└───────┬───────┘ └───────────────┘
│
┌───────▼───────┐
│ Cloudinary │
│ (Image CDN) │
└───────────────┘

2.3 User Classes and Roles

┌────────────┬────────────────┬───────────────────────────────────────────────────┐
│ Role │ Description │ Access Level │
├────────────┼────────────────┼───────────────────────────────────────────────────┤
│ Superadmin │ Platform │ All stores, platform analytics, user/store │
│ │ operator │ management, leads, activity logs │
├────────────┼────────────────┼───────────────────────────────────────────────────┤
│ │ │ Full access to their own store: products, │
│ Admin │ Store owner │ inventory, customers, reports, settings, user │
│ │ │ management │
├────────────┼────────────────┼───────────────────────────────────────────────────┤
│ Manager │ Store manager │ Configurable per-store permissions (POS, │
│ │ │ products, inventory, transactions, customers) │
├────────────┼────────────────┼───────────────────────────────────────────────────┤
│ Cashier │ Front-line │ Restricted access, typically POS-only │
│ │ operator │ │
└────────────┴────────────────┴───────────────────────────────────────────────────┘

2.4 Operating Environment

- Browsers: Modern browsers (Chrome, Firefox, Edge, Safari)
- Devices: Desktop, tablet (responsive design)
- Connectivity: Online (primary), Offline mode supported
- Language: English, Urdu (RTL support)

  2.5 Constraints

- Firebase Firestore is the sole database (NoSQL document-based)
- Multi-tenant isolation enforced via Firestore security rules
- Pakistan-focused features (FBR, JazzCash, EasyPaisa, Raast, PKR rounding)
- No native mobile app (web-only)

---

1. Functional Requirements

3.1 Authentication & Authorization (FR-AUTH)

┌────────────┬──────────────────────────────────────────────────────────┬──────────┐
│ ID │ Requirement │ Priority │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-AUTH-01 │ System shall support email/password registration with │ High │
│ │ multi-step flow (auth → store creation) │ │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-AUTH-02 │ System shall verify email via 6-digit OTP with 10-minute │ High │
│ │ TTL │ │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-AUTH-03 │ System shall support forgot password via OTP + password │ High │
│ │ reset │ │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-AUTH-04 │ System shall persist sessions via Firebase Auth + │ High │
│ │ localStorage │ │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-AUTH-05 │ System shall enforce account lockout after 5 failed │ High │
│ │ login attempts (30-min lockout) │ │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-AUTH-06 │ System shall track session activity (lastLoginAt, │ Medium │
│ │ lastActiveAt, loginCount) │ │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-AUTH-07 │ System shall enforce role-based route protection via │ High │
│ │ ProtectedRoute HOC │ │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ │ System shall support granular module-level permissions │ │
│ FR-AUTH-08 │ (pos, products, inventory, transactions, reports, │ High │
│ │ customers, settings, etc.) │ │
└────────────┴──────────────────────────────────────────────────────────┴──────────┘

3.2 Point of Sale (FR-POS)

┌───────────┬───────────────────────────────────────────────────────────┬──────────┐
│ ID │ Requirement │ Priority │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-POS-01 │ System shall provide a real-time checkout interface with │ High │
│ │ product search and barcode scanning │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ │ System shall support keyboard shortcuts: Ctrl+N (new │ │
│ FR-POS-02 │ transaction), Ctrl+S (hold cart), Ctrl+P (print receipt), │ Medium │
│ │ Ctrl+F (search), Ctrl+K (barcode input), F1 (help) │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-POS-03 │ System shall support hold/suspend and resume of multiple │ High │
│ │ carts │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ │ System shall support multiple payment methods: Cash, │ │
│ FR-POS-04 │ JazzCash, EasyPaisa, Raast, Card, Bank Transfer, Credit │ High │
│ │ (Udhaar) │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-POS-05 │ System shall support split payment across multiple │ Medium │
│ │ methods │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-POS-06 │ System shall generate sequential invoice numbers with │ High │
│ │ date prefix │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-POS-07 │ System shall support per-item and transaction-level │ High │
│ │ discounts with configurable approval thresholds │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-POS-08 │ System shall apply configurable GST rates (5%, 12%, 17%, │ High │
│ │ or custom) │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-POS-09 │ System shall generate PDF receipts with email delivery │ High │
│ │ option │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-POS-10 │ System shall support thermal printer output │ Medium │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-POS-11 │ System shall queue transactions offline and auto-sync │ High │
│ │ when connectivity is restored │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-POS-12 │ System shall support loyalty point accrual and redemption │ Medium │
│ │ during checkout │ │
└───────────┴───────────────────────────────────────────────────────────┴──────────┘

3.3 Product & Inventory Management (FR-INV)

┌───────────┬───────────────────────────────────────────────────────────┬──────────┐
│ ID │ Requirement │ Priority │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ │ System shall support CRUD operations on products with │ │
│ FR-INV-01 │ SKU, barcode, category, images, and pricing (selling │ High │
│ │ price, cost price, compare-at price) │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-INV-02 │ System shall track stock levels: current stock, available │ High │
│ │ stock, reserved stock, total stock │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-INV-03 │ System shall maintain a full audit trail of stock │ High │
│ │ movements (in, out, adjustment, return) │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-INV-04 │ System shall support batch/lot tracking with batch │ Medium │
│ │ numbers │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-INV-05 │ System shall track product expiry dates with configurable │ Medium │
│ │ advance alerts (default: 30 days) │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-INV-06 │ System shall generate low-stock alerts based on │ High │
│ │ configurable thresholds │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-INV-07 │ System shall support manual stock adjustments with reason │ Medium │
│ │ tracking │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-INV-08 │ System shall support product image upload via Cloudinary │ Medium │
│ │ CDN │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-INV-09 │ System shall support browser notifications for expiring │ Low │
│ │ products with 24-hour cooldown │ │
└───────────┴───────────────────────────────────────────────────────────┴──────────┘

3.4 Customer Management (FR-CUST)

┌────────────┬──────────────────────────────────────────────────────────┬──────────┐
│ ID │ Requirement │ Priority │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-CUST-01 │ System shall maintain a customer database with name, │ High │
│ │ phone, email, address, and city │ │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-CUST-02 │ System shall track customer credit (Udhaar) with current │ High │
│ │ balance, total spent, and last purchase │ │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-CUST-03 │ System shall provide credit ageing analysis with │ High │
│ │ buckets: 0-30, 31-60, 61-90, and 90+ days │ │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-CUST-04 │ System shall provide a Khata (ledger) view of customer │ Medium │
│ │ transaction history │ │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-CUST-05 │ System shall record credit payments with method and │ High │
│ │ reference number │ │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-CUST-06 │ System shall track loyalty points per customer with │ Medium │
│ │ accrual and redemption │ │
├────────────┼──────────────────────────────────────────────────────────┼──────────┤
│ FR-CUST-07 │ System shall support customer blocking/deactivation │ Low │
└────────────┴──────────────────────────────────────────────────────────┴──────────┘

3.5 Sales & Transaction Management (FR-TXN)

┌───────────┬───────────────────────────────────────────────────────────┬──────────┐
│ ID │ Requirement │ Priority │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-TXN-01 │ System shall record all sales with timestamp, items, │ High │
│ │ payment method, totals, and cashier info │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-TXN-02 │ System shall support sale returns with item reversal and │ High │
│ │ stock restoration │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-TXN-03 │ System shall link transactions to customers and register │ High │
│ │ sessions │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-TXN-04 │ System shall support cash register sessions with │ Medium │
│ │ opening/closing balance and variance tracking │ │
└───────────┴───────────────────────────────────────────────────────────┴──────────┘

3.6 Reporting & Analytics (FR-RPT)

┌───────────┬───────────────────────────────────────────────────────────┬──────────┐
│ ID │ Requirement │ Priority │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-RPT-01 │ System shall provide sales charts with │ High │
│ │ daily/weekly/monthly/yearly trend views │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-RPT-02 │ System shall display top products by quantity sold and │ High │
│ │ revenue │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-RPT-03 │ System shall provide category-wise sales breakdown with │ Medium │
│ │ pie charts │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-RPT-04 │ System shall provide an outstanding receivables (Udhaar) │ High │
│ │ dashboard │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-RPT-05 │ System shall support CSV export of products, customers, │ Medium │
│ │ and transactions │ │
└───────────┴───────────────────────────────────────────────────────────┴──────────┘

3.7 Store & Platform Administration (FR-ADM)

┌───────────┬───────────────────────────────────────────────────────────┬──────────┐
│ ID │ Requirement │ Priority │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-ADM-01 │ System shall support multi-store architecture with data │ High │
│ │ isolation per tenant │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-ADM-02 │ Store admins shall be able to create sub-users (manager, │ High │
│ │ cashier) with granular permissions │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ │ Store admins shall configure store settings: name, │ │
│ FR-ADM-03 │ address, tax rates, currency, timezone, POS preferences, │ High │
│ │ inventory preferences │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ │ Superadmin shall have a platform dashboard with │ │
│ FR-ADM-04 │ cross-store analytics, store metrics, and revenue │ High │
│ │ tracking │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-ADM-05 │ Superadmin shall manage all stores and users, including │ High │
│ │ activation/deactivation │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-ADM-06 │ System shall maintain platform-level activity logs │ Medium │
│ │ visible to superadmin │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-ADM-07 │ System shall support menu configuration per store │ Medium │
│ │ (enable/disable modules) │ │
└───────────┴───────────────────────────────────────────────────────────┴──────────┘

3.8 FBR Compliance (FR-FBR)

┌───────────┬───────────────────────────────────────────────────────────┬──────────┐
│ ID │ Requirement │ Priority │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-FBR-01 │ System shall generate FBR-compliant invoice QR codes with │ Medium │
│ │ NTN, invoice number, amounts, and buyer info │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-FBR-02 │ System shall track FBR sync status per transaction: │ Medium │
│ │ pending, synced, queued_offline, failed, exempt │ │
└───────────┴───────────────────────────────────────────────────────────┴──────────┘

3.9 Marketing & Lead Management (FR-MKT)

┌───────────┬───────────────────────────────────────────────────────────┬──────────┐
│ ID │ Requirement │ Priority │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-MKT-01 │ System shall provide public marketing pages: Landing, │ Medium │
│ │ Features, Pricing, About, Contact │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-MKT-02 │ System shall capture leads from contact/signup forms and │ Medium │
│ │ store in Firestore │ │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-MKT-03 │ System shall send email notifications on new lead capture │ Low │
├───────────┼───────────────────────────────────────────────────────────┼──────────┤
│ FR-MKT-04 │ Superadmin shall view and manage leads from the admin │ Medium │
│ │ panel │ │
└───────────┴───────────────────────────────────────────────────────────┴──────────┘

3.10 Email & Notifications (FR-EMAIL)

┌─────────────┬─────────────────────────────────────────────────────────┬──────────┐
│ ID │ Requirement │ Priority │
├─────────────┼─────────────────────────────────────────────────────────┼──────────┤
│ FR-EMAIL-01 │ System shall send OTP verification emails via SMTP │ High │
│ │ (Nodemailer) │ │
├─────────────┼─────────────────────────────────────────────────────────┼──────────┤
│ FR-EMAIL-02 │ System shall send receipt PDFs via email │ Medium │
├─────────────┼─────────────────────────────────────────────────────────┼──────────┤
│ FR-EMAIL-03 │ System shall send welcome emails on store registration │ Low │
├─────────────┼─────────────────────────────────────────────────────────┼──────────┤
│ FR-EMAIL-04 │ System shall support contact form submissions via │ Low │
│ │ EmailJS │ │
└─────────────┴─────────────────────────────────────────────────────────┴──────────┘

---

1. Non-Functional Requirements

4.1 Performance (NFR-PERF)

┌─────────────┬────────────────────────────────────────────────────────────────────┐
│ ID │ Requirement │
├─────────────┼────────────────────────────────────────────────────────────────────┤
│ NFR-PERF-01 │ POS checkout page shall load within 2 seconds on a stable │
│ │ connection │
├─────────────┼────────────────────────────────────────────────────────────────────┤
│ NFR-PERF-02 │ Product search shall return results within 500ms │
├─────────────┼────────────────────────────────────────────────────────────────────┤
│ NFR-PERF-03 │ Offline-queued transactions shall auto-sync within 10 seconds of │
│ │ connectivity restoration │
├─────────────┼────────────────────────────────────────────────────────────────────┤
│ NFR-PERF-04 │ Reports shall render charts within 3 seconds for up to 10,000 │
│ │ transactions │
└─────────────┴────────────────────────────────────────────────────────────────────┘

4.2 Security (NFR-SEC)

┌────────────┬─────────────────────────────────────────────────────────────────────┐
│ ID │ Requirement │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-SEC-01 │ All data access shall be governed by Firestore security rules with │
│ │ multi-tenant isolation │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-SEC-02 │ Authentication shall use Firebase Auth with session persistence │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-SEC-03 │ OTP codes shall expire after 10 minutes with max 5 attempts │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-SEC-04 │ Cross-tenant data access shall be prevented at the database rule │
│ │ level │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-SEC-05 │ Sensitive configuration (API keys, SMTP credentials) shall be │
│ │ stored in environment variables, not in source code │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-SEC-06 │ Account lockout shall activate after 5 failed login attempts for 30 │
│ │ minutes │
└────────────┴─────────────────────────────────────────────────────────────────────┘

4.3 Reliability & Availability (NFR-REL)

┌────────────┬─────────────────────────────────────────────────────────────────────┐
│ ID │ Requirement │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-REL-01 │ System shall support offline POS operations with local transaction │
│ │ queuing │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-REL-02 │ System shall use Firestore offline persistence (IndexedDB) for data │
│ │ resilience │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-REL-03 │ System shall display an offline indicator banner when connectivity │
│ │ is lost │
└────────────┴─────────────────────────────────────────────────────────────────────┘

4.4 Usability (NFR-USE)

┌────────────┬─────────────────────────────────────────────────────────────────────┐
│ ID │ Requirement │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-USE-01 │ System shall support English and Urdu languages with runtime │
│ │ switching │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-USE-02 │ System shall support RTL layout for Urdu locale │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-USE-03 │ System shall provide keyboard shortcuts for common POS operations │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-USE-04 │ System shall support 120+ currencies with locale-aware formatting │
├────────────┼─────────────────────────────────────────────────────────────────────┤
│ NFR-USE-05 │ System shall apply Pakistan-specific rounding (nearest Rupee or │
│ │ nearest 5 Rupees) │
└────────────┴─────────────────────────────────────────────────────────────────────┘

4.5 Scalability (NFR-SCALE)

┌──────────────┬───────────────────────────────────────────────────────────────────┐
│ ID │ Requirement │
├──────────────┼───────────────────────────────────────────────────────────────────┤
│ NFR-SCALE-01 │ Architecture shall support unlimited stores under a single │
│ │ platform instance │
├──────────────┼───────────────────────────────────────────────────────────────────┤
│ NFR-SCALE-02 │ Firestore document-based model shall scale horizontally with │
│ │ tenant count │
├──────────────┼───────────────────────────────────────────────────────────────────┤
│ NFR-SCALE-03 │ Serverless functions (Firebase + Vercel) shall auto-scale with │
│ │ request volume │
└──────────────┴───────────────────────────────────────────────────────────────────┘

4.6 Maintainability (NFR-MAINT)

┌──────────────┬───────────────────────────────────────────────────────────────────┐
│ ID │ Requirement │
├──────────────┼───────────────────────────────────────────────────────────────────┤
│ NFR-MAINT-01 │ Frontend shall use component-based architecture (146 components │
│ │ organized by feature) │
├──────────────┼───────────────────────────────────────────────────────────────────┤
│ NFR-MAINT-02 │ State management shall use modular Zustand stores (12 stores by │
│ │ domain) │
├──────────────┼───────────────────────────────────────────────────────────────────┤
│ NFR-MAINT-03 │ Localization strings shall be centralized in dedicated locale │
│ │ files │
└──────────────┴───────────────────────────────────────────────────────────────────┘

---

1. Data Requirements

5.1 Database Model

- Database: Cloud Firestore (NoSQL document store)
- Architecture: Multi-tenant with storeId as tenant key

  5.2 Primary Collections

┌──────────────────────┬───────────────────┬──────────────────────────────────────┐
│ Collection │ Description │ Key Fields │
├──────────────────────┼───────────────────┼──────────────────────────────────────┤
│ users │ All platform │ uid, email, role, storeId, │
│ │ users │ permissions, isActive │
├──────────────────────┼───────────────────┼──────────────────────────────────────┤
│ stores │ Tenant stores │ name, address, taxRates[], currency, │
│ │ │ menuConfig, posConfig │
├──────────────────────┼───────────────────┼──────────────────────────────────────┤
│ products │ Product catalog │ name, sku, barcode, price, │
│ │ (per store) │ costPrice, currentStock, expiryDate │
├──────────────────────┼───────────────────┼──────────────────────────────────────┤
│ transactions │ Sales records │ invoiceNo, items[], paymentMethod, │
│ │ │ grandTotal, customerId, fbrStatus │
├──────────────────────┼───────────────────┼──────────────────────────────────────┤
│ customers │ Customer database │ name, phone, currentCredit, │
│ │ │ loyaltyPoints, firstUnpaidDate │
├──────────────────────┼───────────────────┼──────────────────────────────────────┤
│ productBatches │ Batch tracking │ batchNumber, expiryDate, │
│ │ │ quantityAvailable, supplierId │
├──────────────────────┼───────────────────┼──────────────────────────────────────┤
│ cashRegisterSessions │ Cash register │ openingBalance, closingBalance, │
│ │ sessions │ variance │
├──────────────────────┼───────────────────┼──────────────────────────────────────┤
│ stockMovements │ Inventory audit │ type, productId, quantity, reason, │
│ │ trail │ movedBy │
├──────────────────────┼───────────────────┼──────────────────────────────────────┤
│ alerts │ System alerts │ type, productId, status, message │
├──────────────────────┼───────────────────┼──────────────────────────────────────┤
│ leads │ Marketing leads │ name, email, phone, message, source │
├──────────────────────┼───────────────────┼──────────────────────────────────────┤
│ activityLog │ Platform audit │ action, userId, timestamp, metadata │
│ │ trail │ │
└──────────────────────┴───────────────────┴──────────────────────────────────────┘

---

1. External Interfaces

6.1 Third-Party Services

┌──────────────────────┬────────────────────────┬────────────────────┐
│ Service │ Purpose │ Integration Method │
├──────────────────────┼────────────────────────┼────────────────────┤
│ Firebase Auth │ User authentication │ SDK │
├──────────────────────┼────────────────────────┼────────────────────┤
│ Cloud Firestore │ Database │ SDK │
├──────────────────────┼────────────────────────┼────────────────────┤
│ Firebase Functions │ Serverless backend │ HTTP triggers │
├──────────────────────┼────────────────────────┼────────────────────┤
│ Cloudinary │ Image CDN & upload │ REST API │
├──────────────────────┼────────────────────────┼────────────────────┤
│ Nodemailer │ SMTP email delivery │ Node.js library │
├──────────────────────┼────────────────────────┼────────────────────┤
│ EmailJS │ Contact form emails │ Client SDK │
├──────────────────────┼────────────────────────┼────────────────────┤
│ ZXing / html5-qrcode │ Barcode & QR scanning │ Browser API │
├──────────────────────┼────────────────────────┼────────────────────┤
│ Recharts │ Data visualization │ React components │
├──────────────────────┼────────────────────────┼────────────────────┤
│ PDFKit │ Receipt PDF generation │ Node.js library │
└──────────────────────┴────────────────────────┴────────────────────┘

6.2 Payment Methods (Tracking Only)

The system records payment method selections but does not integrate with payment
gateways directly. Supported methods for tracking:

- Cash, JazzCash, EasyPaisa, Raast, Card, Bank Transfer, Udhaar (Credit), Loyalty
  Points

---

1. System Routes

7.1 Public Routes

┌───────────────────────────────────────┬────────────────────────┐
│ Route │ Page │
├───────────────────────────────────────┼────────────────────────┤
│ / │ Marketing landing page │
├───────────────────────────────────────┼────────────────────────┤
│ /login │ User login │
├───────────────────────────────────────┼────────────────────────┤
│ /register │ User registration │
├───────────────────────────────────────┼────────────────────────┤
│ /features, /pricing, /about, /contact │ Marketing pages │
├───────────────────────────────────────┼────────────────────────┤
│ /terms, /privacy, /refund │ Legal pages │
└───────────────────────────────────────┴────────────────────────┘

7.2 Protected Routes

┌────────────────┬─────────────────────────┬─────────────────────┐
│ Route │ Page │ Required Permission │
├────────────────┼─────────────────────────┼─────────────────────┤
│ /pos │ Point of Sale │ pos │
├────────────────┼─────────────────────────┼─────────────────────┤
│ /products │ Product management │ products │
├────────────────┼─────────────────────────┼─────────────────────┤
│ /inventory │ Inventory management │ inventory │
├────────────────┼─────────────────────────┼─────────────────────┤
│ /customers │ Customer management │ customers │
├────────────────┼─────────────────────────┼─────────────────────┤
│ /transactions │ Transaction history │ transactions │
├────────────────┼─────────────────────────┼─────────────────────┤
│ /reports │ Analytics dashboard │ reports │
├────────────────┼─────────────────────────┼─────────────────────┤
│ /alerts │ Inventory alerts │ inventory │
├────────────────┼─────────────────────────┼─────────────────────┤
│ /settings │ Store settings │ settings / Admin │
├────────────────┼─────────────────────────┼─────────────────────┤
│ /super-admin/\* │ Platform administration │ Superadmin role │
└────────────────┴─────────────────────────┴─────────────────────┘

---

1. Appendix

8.1 Technology Stack Summary

┌────────────────────┬───────────────────────────────────────┐
│ Layer │ Technology │
├────────────────────┼───────────────────────────────────────┤
│ Frontend Framework │ React 19 │
├────────────────────┼───────────────────────────────────────┤
│ Build Tool │ Vite 5.4 │
├────────────────────┼───────────────────────────────────────┤
│ Routing │ React Router 6 │
├────────────────────┼───────────────────────────────────────┤
│ State Management │ Zustand (12 stores) │
├────────────────────┼───────────────────────────────────────┤
│ Styling │ Tailwind CSS 3 │
├────────────────────┼───────────────────────────────────────┤
│ Animation │ Framer Motion │
├────────────────────┼───────────────────────────────────────┤
│ Backend │ Firebase (Firestore, Auth, Functions) │
├────────────────────┼───────────────────────────────────────┤
│ API Layer │ Vercel Edge Functions │
├────────────────────┼───────────────────────────────────────┤
│ Email │ Nodemailer + EmailJS │
├────────────────────┼───────────────────────────────────────┤
│ Images │ Cloudinary CDN │
├────────────────────┼───────────────────────────────────────┤
│ Charts │ Recharts │
├────────────────────┼───────────────────────────────────────┤
│ Barcode │ ZXing + html5-qrcode │
├────────────────────┼───────────────────────────────────────┤
│ PDF │ PDFKit │
├────────────────────┼───────────────────────────────────────┤
│ i18n │ Custom (English + Urdu) │
├────────────────────┼───────────────────────────────────────┤
│ Hosting │ Vercel │
└────────────────────┴───────────────────────────────────────┘

8.2 Supported Currencies (Primary)

PKR (default), INR, AED, SAR, BDT, USD, EUR, GBP + 120 more

8.3 Localization Coverage

- English: ~1,716 translation keys (full coverage)
- Urdu: ~1,657 translation keys (full coverage + RTL)

---

End of SRS Document — QuickPOS SaaS v1.0

livelink:https://pos-saas-kappa.vercel.app//>
