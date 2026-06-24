# Software Requirements Specification (SRS)

## Housing Society Management System (HSMS)

**Version:** 2.0
**Date:** June 18, 2026
**Prepared by:** HSMS Development Team
**Focus:** Dynamic, Privacy-First, AI-Augmented, Regulation-Native, Innovative SaaS Platform

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [System Architecture](#3-system-architecture)
4. [Functional Requirements](#4-functional-requirements)
   - 4.1 [Authentication & Authorization](#41-authentication--authorization-module-fr-auth)
   - 4.2 [User & Permission Management](#42-user--permission-management-module-fr-user--fr-perm)
   - 4.3 [Dynamic Configuration Engine](#43-dynamic-configuration-engine-fr-config---new-core-module)
   - 4.4 [Society Management](#44-society-management-module-fr-soc)
   - 4.5 [Project Management](#45-project-management-module-fr-proj)
   - 4.6 [Plot Management](#46-plot-management-module-fr-plot)
   - 4.7 [Member Management](#47-member-management-module-fr-mem)
   - 4.8 [Financial Management](#48-financial-management-module-fr-fin---enhanced)
   - 4.9 [Property Lifecycle](#49-property-lifecycle-module-fr-prop---regulation-native)
   - 4.10 [Facility Management](#410-facility-management-module-fr-fac)
   - 4.11 [Communication & Complaints](#411-communication--complaint-module-fr-comm---enhanced)
   - 4.12 [Visitor & Security Management](#412-visitor--security-management-module-fr-vis---enhanced)
   - 4.13 [Application Processing](#413-application-processing-module-fr-app)
   - 4.14 [File & Document Management](#414-file--document-management-module-fr-file)
   - 4.15 [Analytics, Reporting & AI Insights](#415-analytics-reporting--ai-insights-module-fr-analytics---new)
   - 4.16 [Audit, Compliance & Handover](#416-audit-compliance--handover-module-fr-audit---enhanced)
   - 4.17 [Nominee Management](#417-nominee-management-module-fr-nom)
   - 4.18 [Development Tracking](#418-development-tracking-module-fr-dev)
   - 4.19 [Lookup & Configuration](#419-lookup--configuration-module-fr-lookup)
   - 4.20 [Subscription Management](#420-subscription-management-module-fr-sub)
   - 4.21 [Workforce & Vendor Management](#421-workforce--vendor-management-module-fr-work---new-major-module)
   - 4.22 [Privacy-First Features](#422-privacy-first-features-module-fr-priv---new-differentiator)
   - 4.23 [PLRA/LDA Regulatory Integration](#423-plralda-regulatory-integration-module-fr-reg---new)
   - 4.24 [Gamification Engine](#424-gamification-engine-module-fr-game---new)
   - 4.25 [Offline-First PWA](#425-offline-first-pwa-module-fr-pwa---enhanced)
5. [Non-Functional Requirements](#5-non-functional-requirements)
6. [Database Design](#6-database-design)
7. [API Specification](#7-api-specification)
8. [User Interface Requirements](#8-user-interface-requirements)
9. [External Interface Requirements](#9-external-interface-requirements)
10. [Security Requirements](#10-security-requirements)
11. [Implementation Priority & Roadmap](#11-implementation-priority--roadmap)
12. [Appendices](#12-appendices)

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) document provides a complete and detailed description of the requirements for the Housing Society Management System (HSMS) Version 2.0. It transforms HSMS into a market-leading, lifelong adaptable, privacy-first SaaS platform for housing societies. This document serves as the primary reference for development, testing, and maintenance teams.

This revised SRS addresses critical gaps in existing solutions (MyGate, ADDA, NoBrokerHood, ApnaComplex, SocietyRun) including poor transparency, privacy concerns, manual processes, rigid configurations, weak compliance (especially PLRA/LDA in Pakistan), and low adoption.

### 1.2 Core Design Philosophy

| Principle                     | Description                                                                 |
| ----------------------------- | --------------------------------------------------------------------------- |
| **Everything Dynamic**        | No hard-coded enums, workflows, or forms. All configurable via UI.          |
| **Privacy-First Design**      | Build trust through control and transparency. Resident data sovereignty.    |
| **AI-Augmented Intelligence** | Reduce manual work and provide proactive insights via role-based AI agents. |
| **Regulation-Native**         | Seamless PLRA/LDA integration, not bolt-on compliance.                      |
| **Low-Code Extensibility**    | Societies adapt without developer dependency.                               |

### 1.3 Scope (Enhanced)

HSMS V2.0 is a comprehensive, multi-tenant, web-based SaaS platform designed to manage all aspects of housing society operations. The system covers:

**Existing Capabilities (V1.0 — Retained & Enhanced):**

- Society and project administration
- Plot and property lifecycle management (allocation, possession, transfer, registry)
- Member management and communication
- Financial operations (billing, installments, payments, defaulter tracking)
- Facility booking and management
- Complaint and application processing
- Visitor management
- Real-time notifications and announcements
- Analytics and reporting
- Role-based access control (RBAC) with granular permissions
- File and document management
- Audit trail and activity logging

**New Capabilities (V2.0 — Innovations):**

- Dynamic Configuration Engine with Visual Workflow Builder
- Custom Form Builder for any entity
- AI-Augmented Intelligence (role-based AI agents, predictive analytics, anomaly detection)
- Resident Privacy Dashboard with data sovereignty controls
- Pakistan-specific PLRA/LDA compliance (property certificates, digital registries)
- Workforce Management (geo-tagged/biometric attendance, shift scheduling)
- Vendor Marketplace (vendor registration, bidding, AMC management, invoicing)
- Gamification Engine (points, rewards, leaderboards)
- Advanced Offline-First PWA with background sync
- Voice Input support (Urdu/English)
- Hybrid RBAC + ABAC permission model
- Committee Handover Wizard
- Compliance Cockpit

### 1.4 Definitions, Acronyms, and Abbreviations

| Term           | Definition                                              |
| -------------- | ------------------------------------------------------- |
| HSMS           | Housing Society Management System                       |
| SRS            | Software Requirements Specification                     |
| RBAC           | Role-Based Access Control                               |
| ABAC           | Attribute-Based Access Control                          |
| JWT            | JSON Web Token                                          |
| OTP            | One-Time Password                                       |
| OAuth          | Open Authorization                                      |
| CRUD           | Create, Read, Update, Delete                            |
| API            | Application Programming Interface                       |
| PWA            | Progressive Web Application                             |
| SSR            | Server-Side Rendering                                   |
| VAPID          | Voluntary Application Server Identification             |
| PLRA           | Punjab Land Records Authority (Pakistan)                |
| LDA            | Lahore Development Authority (Pakistan)                 |
| AMC            | Annual Maintenance Contract                             |
| NOC            | No Objection Certificate                                |
| CNIC           | Computerized National Identity Card (Pakistan)          |
| NLP            | Natural Language Processing                             |
| SLA            | Service Level Agreement                                 |
| Multi-tenant   | Architecture supporting multiple isolated organizations |
| Zero-Knowledge | Data processing where system cannot read the data       |
| Gamification   | Applying game mechanics to non-game contexts            |
| Marla          | Unit of area (272.25 sq ft) commonly used in Pakistan   |
| Kanal          | Unit of area (20 marlas / 5,445 sq ft)                  |

### 1.5 References

- IEEE 830-1998: IEEE Recommended Practice for Software Requirements Specifications
- OWASP Top 10 Security Guidelines
- PLRA Act 2017 (Punjab, Pakistan)
- LDA Building & Zoning Regulations
- MongoDB Documentation
- Next.js App Router Documentation
- Express.js Documentation
- Web Push API Specification
- GDPR Privacy-by-Design Principles (adapted for Pakistan context)

### 1.6 Competitive Differentiators

| Feature                  | MyGate  | ADDA    | NoBrokerHood | **HSMS V2.0** |
| ------------------------ | ------- | ------- | ------------ | ------------- |
| Dynamic Workflows        | No      | No      | No           | **Yes**       |
| Custom Form Builder      | No      | Limited | No           | **Yes**       |
| AI Agents                | No      | No      | No           | **Yes**       |
| Privacy Dashboard        | No      | No      | No           | **Yes**       |
| PLRA/LDA Integration     | No      | No      | No           | **Yes**       |
| Vendor Marketplace       | Limited | No      | No           | **Yes**       |
| Offline PWA              | Basic   | No      | Basic        | **Advanced**  |
| Gamification             | No      | No      | No           | **Yes**       |
| Voice Input (Urdu)       | No      | No      | No           | **Yes**       |
| Custom Roles (Unlimited) | No      | Limited | Limited      | **Yes**       |

---

## 2. Overall Description

### 2.1 Product Perspective

HSMS V2.0 is a standalone web application that operates as a SaaS (Software as a Service) platform. It replaces manual, paper-based housing society management with a centralized digital solution. The system supports multiple housing societies (multi-tenancy), each with its own data isolation, user roles, configuration, and customizations.

Unlike V1.0, V2.0 introduces a **metadata-driven architecture** where configurations, workflows, forms, and business rules are stored in the database and driven by a configuration engine — not hard-coded. This allows societies to adapt the system to their unique requirements without code changes.

### 2.2 Product Functions (High-Level)

| #   | Category | Function                                  | Innovation Level      |
| --- | -------- | ----------------------------------------- | --------------------- |
| F1  | Core     | Authentication & Authorization            | Enhanced              |
| F2  | Core     | Society Management                        | Enhanced              |
| F3  | Core     | Project Management                        | Existing              |
| F4  | Core     | Plot Management                           | Existing              |
| F5  | Core     | Member Management                         | Enhanced              |
| F6  | Core     | Financial Management (Smart Engine)       | **Major Enhancement** |
| F7  | Core     | Property Lifecycle (Regulation-Native)    | **Major Enhancement** |
| F8  | Core     | Facility Management                       | Existing              |
| F9  | Core     | Communication & Complaints                | Enhanced              |
| F10 | Core     | Visitor & Security Management             | Enhanced              |
| F11 | Core     | Application Processing                    | Enhanced              |
| F12 | Core     | File & Document Management                | Enhanced              |
| F13 | Core     | Analytics & Reporting                     | Enhanced              |
| F14 | Core     | Audit & Logging                           | Enhanced              |
| F15 | Core     | User & Role Management (Hybrid RBAC+ABAC) | **Major Enhancement** |
| F16 | Core     | Subscription Management                   | Enhanced              |
| F17 | Core     | Lookup & Configuration                    | Enhanced              |
| F18 | Core     | Nominee Management                        | Existing              |
| F19 | Core     | Development Tracking                      | Existing              |
| F20 | **New**  | Dynamic Configuration Engine              | **New Core**          |
| F21 | **New**  | Visual Workflow Builder                   | **New Core**          |
| F22 | **New**  | Custom Form Builder                       | **New Core**          |
| F23 | **New**  | AI Intelligence Layer                     | **New Major**         |
| F24 | **New**  | Privacy Dashboard & Data Sovereignty      | **New Major**         |
| F25 | **New**  | PLRA/LDA Regulatory Engine                | **New Major**         |
| F26 | **New**  | Workforce Management                      | **New Major**         |
| F27 | **New**  | Vendor Marketplace                        | **New Major**         |
| F28 | **New**  | Gamification Engine                       | **New**               |
| F29 | **New**  | Advanced Offline PWA                      | **New**               |
| F30 | **New**  | Compliance Cockpit                        | **New**               |
| F31 | **New**  | Committee Handover Wizard                 | **New**               |
| F32 | **New**  | Voice Input (Urdu/English)                | **New**               |

### 2.3 User Classes and Characteristics

#### 2.3.1 Fixed System Roles

| Role            | Description                                                                                          | Access Level |
| --------------- | ---------------------------------------------------------------------------------------------------- | ------------ |
| **Super Admin** | Platform administrator. Global oversight, AI analytics, tenant management, impersonation capability. | Full system  |
| **Admin**       | Society-level administrator. Custom roles, workflows, modules, AI insights.                          | Society-wide |

#### 2.3.2 Dynamic Roles (Creatable per Society)

| Default Role         | Description                                                                  | Access Level         |
| -------------------- | ---------------------------------------------------------------------------- | -------------------- |
| **Committee Chair**  | Society committee head. Approvals, policy decisions, handover management.    | High                 |
| **Treasurer**        | Financial oversight. Budget, payment approvals, audit.                       | Financial            |
| **Secretary**        | Communication, meeting minutes, member relations.                            | Administrative       |
| **Accountant**       | Day-to-day financial operations: billing, installments, receipts.            | Financial modules    |
| **Moderator**        | Day-to-day operations: members, complaints, visitors.                        | Moderate             |
| **Guard**            | Security operations: visitor check-in/out, gate management.                  | Visitor + security   |
| **Vendor/Dealer**    | External service provider. Invoice submission, bid participation, work logs. | Vendor portal        |
| **Resident (Owner)** | Plot owner. View own data, submit complaints, book facilities, AI assistant. | Self-service         |
| **Tenant**           | Renter. Limited access, facility booking, complaints.                        | Limited self-service |
| **Member**           | General society member. Basic access.                                        | Minimal              |

> **Note:** Societies can create unlimited custom roles via the Dynamic Configuration Engine. These default roles serve as templates.

#### 2.3.3 Hybrid RBAC + ABAC Model

Permissions are enforced through two complementary systems:

| System   | Scope                            | Example                              |
| -------- | -------------------------------- | ------------------------------------ |
| **RBAC** | Role-to-module permission matrix | "Accountant can read/create bills"   |
| **ABAC** | Attribute-based conditions       | "Member can only view own-plot data" |

Attribute conditions include:

- `own-data-only` — User can only access records linked to their ID
- `own-block-only` — User can only access records in their plot block
- `society-scope` — User can access all records in their society
- `time-based` — Permission active only during specific hours
- `approval-required` — Action allowed but requires higher-level approval

### 2.4 Operating Environment

| Component              | Technology                                    | Version       |
| ---------------------- | --------------------------------------------- | ------------- |
| **Backend Runtime**    | Node.js                                       | 20+           |
| **Backend Framework**  | Express.js                                    | 4.21.2        |
| **Frontend Framework** | Next.js (App Router)                          | 16.1.1        |
| **Frontend Library**   | React                                         | 19.2.0        |
| **Language**           | TypeScript                                    | 5.x           |
| **Database**           | MongoDB Atlas (Mongoose ODM)                  | 8.9.0         |
| **Cache**              | Redis (ioredis)                               | 5.3.2         |
| **Real-time**          | Socket.io                                     | 4.8.1         |
| **Job Scheduling**     | Agenda.js                                     | Latest        |
| **File Storage**       | Cloudinary                                    | Latest        |
| **Email**              | Nodemailer                                    | 7.0.11        |
| **Push Notifications** | Web Push (VAPID)                              | Latest        |
| **AI Integration**     | Groq API / OpenAI-compatible                  | Latest        |
| **Styling**            | TailwindCSS                                   | 4.x           |
| **UI Components**      | Radix UI                                      | Latest        |
| **State Management**   | Redux Toolkit                                 | 2.11.0        |
| **Data Fetching**      | TanStack Query                                | 5.90.11       |
| **Forms**              | React Hook Form                               | 7.68.0        |
| **Validation**         | Zod                                           | 4.1.13        |
| **Charts**             | Recharts                                      | 2.15.4        |
| **Maps**               | Leaflet + React Leaflet                       | 1.9.4 / 5.0.0 |
| **Animations**         | Framer Motion                                 | 12.29.2       |
| **Drag & Drop**        | dnd-kit                                       | 6.3.1         |
| **CSV Parsing**        | Papaparse                                     | Latest        |
| **Date Handling**      | date-fns                                      | 4.1.0         |
| **HTTP Client**        | Axios                                         | Latest        |
| **Supported Browsers** | Chrome 90+, Firefox 90+, Safari 15+, Edge 90+ | -             |
| **Supported Devices**  | Desktop, Tablet, Mobile (Responsive + PWA)    | -             |

### 2.5 Design and Implementation Constraints

1. Must support multi-tenancy with strict tenant data isolation (`tenantId` / `societyId`)
2. All API endpoints must be authenticated (except public routes)
3. Must comply with OWASP security guidelines
4. Database must use soft deletes (`isDeleted` flag) for data retention
5. All timestamps must include `createdAt` and `updatedAt`
6. All records must track `createdBy` and `updatedBy` for audit
7. All entities must support `metadata` JSONB field for dynamic custom fields
8. Frontend must be responsive across all device sizes
9. Must support Progressive Web App (PWA) with offline capabilities
10. API responses must follow consistent structure with status codes
11. Environment configuration must be validated using Zod schemas
12. No hard-coded enums — all status values, categories, types must be dynamic lookups
13. All workflows must be configurable via the Visual Workflow Builder
14. Privacy controls must be enforced at data access layer, not just UI
15. PLRA/LDA regulatory data must be encrypted at rest

### 2.6 Assumptions and Dependencies

**Assumptions:**

- Users have internet access and modern web browsers (offline PWA for intermittent connectivity)
- MongoDB Atlas provides reliable cloud database hosting
- Redis server is available for caching and rate limiting
- Cloudinary service is available for file storage
- SMTP service is available for email delivery
- Users have valid email addresses for registration
- PLRA/LDA APIs are available (with fallback manual entry mode)
- AI provider (Groq) API is available for AI features
- Guards have basic smartphone access for PWA

**Dependencies:**

- MongoDB Atlas (database)
- Redis (caching, rate limiting, permission cache)
- Cloudinary (file storage)
- Google OAuth (social login)
- SMTP Provider (email service)
- Web Push (browser push notifications)
- Groq AI API (AI agents and insights)
- PLRA/LDA APIs (regulatory integration)
- Agenda.js (job scheduling)
- LocationIQ (geocoding for maps)

---

## 3. System Architecture

### 3.1 Architecture Overview (V2.0)

```
+-------------------+     +----------------------------+     +-------------------+
|                   |     |     Express.js Backend      |     |                   |
|   Next.js 16      |<--->|     API + WebSocket         |<--->|   MongoDB Atlas   |
|   Frontend        |     |                            |     |   Database        |
|   (React 19)      |     |  +----------------------+  |     |                   |
|   + PWA           |     |  | Dynamic Config Engine|  |     +-------------------+
|   + AI Chat       |     |  | Workflow Engine       |  |
|   + Voice Input   |     |  | AI Service Layer     |  |     +-------------------+
|                   |     |  | Regulatory Layer     |  |<--->|   Redis           |
+-------------------+     |  | Privacy Layer        |  |     |   (Cache + Jobs)  |
                          |  +----------------------+  |     +-------------------+
                          +--------+---+---+-----------+
                                   |   |   |
                    +--------------+   |   +---------------+
                    |                  |                    |
               +----+----+     +------+------+     +-------+-------+
               |Cloudinary|    | Groq AI API |     | PLRA/LDA APIs |
               | (Files)  |    | (AI Agents) |     | (Regulatory)  |
               +----------+    +-------------+     +---------------+
```

### 3.2 Backend Architecture (Enhanced Layered)

```
API Gateway (Routes + Rate Limiting + CORS)
    |
Authentication Layer (JWT + Optional Auth)
    |
Permission Layer (RBAC + ABAC Middleware)
    |
Privacy Layer (Data Filtering + Consent Checks)
    |
Controllers (Request/Response Handling)
    |
Services (Business Logic)
    |
+------ Dynamic Config Service (Metadata-driven lookups, workflows, forms)
|------ AI Service Layer (Agent orchestration, Groq API integration)
|------ Workflow Engine (Step execution, triggers, conditions, escalations)
|------ Regulatory Service (PLRA/LDA certificate generation, API sync)
|------ Notification Service (Email, Push, SMS, In-app, Socket.io)
|------ Job Scheduler (Agenda.js — cron, delayed, recurring jobs)
    |
Models (Mongoose Schemas / Database Layer)
    |
MongoDB (Data Storage) + Redis (Cache + Permission Cache + Job Queue)
```

### 3.3 Module Structure (Backend)

Each module follows this enhanced structure:

```
module/
  ├── module.routes.ts           # Route definitions
  ├── module.controller.ts       # Request handlers
  ├── module.service.ts          # Business logic
  ├── module.model.ts            # Mongoose schema
  ├── module.validation.ts       # Input validation (Zod)
  ├── module.types.ts            # TypeScript interfaces
  └── module.permissions.ts      # Permission constants & ABAC rules (new)
```

### 3.4 Frontend Architecture (Enhanced)

```
app/                              # Next.js App Router
  ├── (public)/                   # Public routes (login, signup, etc.)
  ├── (protected)/                # Authenticated routes
  ├── (guard)/                    # Guard-specific PWA routes (new)
  ├── (vendor)/                   # Vendor portal routes (new)
  └── layout.tsx                  # Root layout

lib/
  ├── API/                        # API client functions (Axios)
  ├── components/
  │   ├── ui/                     # Base UI components (Radix UI)
  │   ├── shared/                 # Shared/reusable components
  │   ├── forms/                  # Dynamic form renderer (new)
  │   ├── workflow/               # Workflow builder canvas (new)
  │   ├── ai/                     # AI chat sidebar, agent UI (new)
  │   ├── privacy/                # Privacy dashboard components (new)
  │   ├── vendor/                 # Vendor portal components (new)
  │   ├── gamification/           # Gamification widgets (new)
  │   └── [module]/               # Module-specific components
  ├── hooks/                      # Custom React hooks
  ├── store/                      # Redux Toolkit store & slices
  ├── types/                      # TypeScript type definitions
  ├── schemas/                    # Zod validation schemas
  ├── validations/                # Form validation logic
  ├── utils/                      # Helper functions
  ├── constants/                  # Application constants
  ├── providers/                  # Context providers
  ├── ai/                         # AI agent client utilities (new)
  └── offline/                    # Offline sync utilities (new)
```

### 3.5 Communication Patterns

| Pattern               | Usage                                                      |
| --------------------- | ---------------------------------------------------------- |
| REST API              | Primary client-server communication (Axios)                |
| WebSocket (Socket.io) | Real-time notifications, AI streaming, live updates        |
| Web Push              | Browser push notifications (VAPID)                         |
| Email (SMTP)          | Transactional emails (verification, OTP, notices, reports) |
| Agenda.js Jobs        | Scheduled + delayed background tasks                       |
| AI Streaming          | Server-Sent Events for AI agent responses                  |
| Background Sync       | Service Worker sync for offline operations                 |
| Voice API             | Web Speech API for voice input (Urdu/English)              |

### 3.6 New Architectural Layers

#### 3.6.1 Dynamic Config Service

- Reads all lookups, statuses, form definitions, and workflow configurations from MongoDB
- Caches in Redis with invalidation on config changes
- Provides API for admin CRUD on all configurations
- Frontend components render dynamically based on config metadata

#### 3.6.2 AI Service Layer

- Abstracts Groq API (or any OpenAI-compatible provider) behind a service interface
- Role-based agent definitions stored in database
- Conversation history management
- Safety guardrails and content filtering
- Rate limiting per user for AI queries

#### 3.6.3 Workflow Engine

- Workflows defined as JSON (trigger, steps, conditions, actions)
- Visual canvas builder on frontend (dnd-kit based)
- Execution runtime processes steps sequentially/in-parallel
- Supports: approvals, notifications, field updates, escalations, delays
- Triggered by: entity creation, status change, time-based, manual

#### 3.6.4 Privacy Layer

- Intercepts all data queries to apply privacy filters
- Checks resident consent settings before including fields in responses
- Enforces zero-knowledge mode for sensitive documents
- Logs all data access for privacy audit

#### 3.6.5 Regulatory Integration Layer

- PLRA/LDA API client with retry and fallback
- Certificate template engine (QR-coded PDFs)
- Validation rules engine for regulatory compliance
- Manual override mode when APIs are unavailable

---

## 4. Functional Requirements

---

### 4.1 Authentication & Authorization Module (FR-AUTH)

#### FR-AUTH-001: User Registration

- **Description:** Users can register with email and password
- **Input:** firstName, lastName, email, password, phone (optional)
- **Process:**
  1. Validate input using Zod schema
  2. Check for duplicate email
  3. Hash password using bcrypt (12+ salt rounds)
  4. Create user with status "pending"
  5. Send verification OTP to email
  6. **V2.0:** Present privacy consent options during registration
  7. Store user in database
- **Output:** Success message with user ID
- **Validation Rules:**
  - Email must be unique and valid format
  - Password must meet complexity (min 8 chars, uppercase, lowercase, number, special char)
  - First name and last name are required

#### FR-AUTH-002: Email Verification

- **Description:** Users must verify email before accessing the system
- **Input:** Email, OTP code
- **Process:**
  1. Validate OTP against stored value
  2. Check OTP expiration (10-minute window)
  3. Update emailVerified flag to true
  4. Update user status to "active"
- **Output:** Verification success/failure message

#### FR-AUTH-003: User Login

- **Description:** Authenticated access via email and password
- **Input:** Email, password
- **Process:**
  1. Validate credentials
  2. Check email verification status
  3. Check account status (active, suspended, banned)
  4. Check account lock status
  5. Generate JWT access token and refresh token
  6. Record lastLogin, lastLoginIp, user agent
  7. **V2.0:** Load user's privacy settings into session
- **Output:** JWT access token, refresh token, user profile data
- **Rate Limiting:** Max 5 login attempts per 15 minutes per IP

#### FR-AUTH-004: Google OAuth Login

- **Description:** Users can authenticate using Google accounts
- **Input:** Google OAuth token
- **Process:**
  1. Verify Google token with Google Auth Library
  2. Extract user profile (email, name, avatar)
  3. Create or link user account
  4. Set authMethod to "google"
  5. Generate JWT tokens
- **Output:** JWT access token, refresh token, user profile data

#### FR-AUTH-005: Token Refresh

- **Description:** Renew expired access tokens using refresh tokens
- **Input:** Refresh token
- **Process:**
  1. Validate refresh token
  2. Generate new access and refresh token pair
  3. Invalidate old refresh token (rotation)
- **Output:** New JWT access token and refresh token

#### FR-AUTH-006: Password Reset

- **Description:** Users can reset forgotten passwords
- **Input:** Email address
- **Process:**
  1. Validate email exists in system
  2. Generate and send OTP to email
  3. User submits OTP and new password
  4. Validate OTP and update password hash
- **Output:** Password reset confirmation
- **Rate Limiting:** Max 3 reset requests per 60 minutes per email

#### FR-AUTH-007: Logout

- **Description:** Invalidate user session
- **Input:** Access token
- **Process:**
  1. Invalidate access token
  2. Invalidate refresh token
  3. Clear push subscriptions if applicable
- **Output:** Logout confirmation

#### FR-AUTH-008: Two-Factor Authentication (2FA)

- **Description:** Optional additional security layer
- **Options:** Email OTP, SMS OTP (future: TOTP authenticator app)
- **Process:**
  1. Verify primary credentials
  2. Send OTP to registered email/phone
  3. Validate OTP
  4. Complete authentication
- **Output:** JWT tokens upon successful 2FA

#### FR-AUTH-009: Account Locking

- **Description:** Automatic account lock after repeated failed login attempts
- **Trigger:** Exceeding rate limit for login attempts (5 per 15min)
- **Process:**
  1. Track failed login attempts per IP and email
  2. Lock account temporarily (15 minutes)
  3. Send notification to user about suspicious activity
- **Output:** Account locked notification with unlock time

#### FR-AUTH-010: Biometric Login Readiness (V2.0)

- **Description:** WebAuthn/FIDO2 integration for fingerprint/face authentication
- **Status:** Architecture prepared, implementation in Phase 3
- **Process:**
  1. User registers biometric credential via WebAuthn API
  2. Store public key credential on server
  3. Authentication via challenge-response with biometric
- **Dependency:** WebAuthn browser support

#### FR-AUTH-011: Super Admin Impersonation (V2.0)

- **Description:** Super admin can impersonate any user for support/debugging
- **Process:**
  1. Super admin requests impersonation via secure endpoint
  2. System generates temporary token with impersonated user's context
  3. All actions logged as "impersonated by [super admin]"
  4. Session auto-expires after 30 minutes
  5. Cannot impersonate other super admins
- **Audit:** Full audit trail with impersonator identity

---

### 4.2 User & Permission Management Module (FR-USER + FR-PERM)

#### FR-USER-001: User Profile Management

- **Description:** Users can view and update their profile
- **Fields:** firstName, lastName, email, phone, phoneCountry, address, bio, avatar
- **Operations:** View, Update
- **Constraints:** Email cannot be changed after verification

#### FR-USER-002: User Preferences

- **Description:** Users can configure personal preferences
- **Settings:**
  - Theme: light/dark/system
  - Language: en, ur (Urdu), extensible
  - Notifications: email, push, SMS toggles (per notification type)
  - Privacy: profileVisibility, showEmail, showPhone, dataSharing
  - AI: enableAIAssistant, aiLanguagePreference
  - Accessibility: fontSize, highContrast, reducedMotion
- **Storage:** Embedded in user document

#### FR-USER-003: Dynamic Role Management (V2.0 Enhanced)

- **Description:** Society admins can create, edit, and manage unlimited custom roles
- **System Roles (Fixed):** Super Admin (cannot be created/deleted)
- **Default Template Roles:** Admin, Committee Chair, Treasurer, Secretary, Accountant, Moderator, Guard, Vendor, Resident, Tenant, Member
- **Custom Role Fields:**
  - name, description, slug
  - parentRole (inheritance)
  - isSystemRole (immutable flag)
  - societyId (tenant scope)
  - permissions array
  - attributes (ABAC conditions)
  - isActive
- **Operations:** CRUD, duplicate from template, inherit from parent, activate/deactivate
- **Constraints:** System roles cannot be deleted; custom roles scoped to society

#### FR-USER-004: User Staff Management

- **Description:** Manage staff accounts within a society
- **Fields:** userId, societyId, role, department, designation, joiningDate, status
- **Operations:** CRUD, status toggle, role assignment
- **Constraints:** Staff must be linked to a society

#### FR-USER-005: User Status Management

- **Description:** Manage user account status
- **Statuses:** Active, Inactive, Suspended, Pending, Banned (dynamic lookup)
- **Transitions:**
  - Pending -> Active (after email verification)
  - Active -> Suspended (by admin action)
  - Active -> Inactive (by admin action or inactivity)
  - Active -> Banned (by super admin)
  - Suspended -> Active (by admin action)
  - Inactive -> Active (by admin action)
- **V2.0:** Status transitions configurable via workflow engine

#### FR-PERM-001: Permission Matrix (V2.0 Enhanced)

- **Description:** Visual matrix for managing all permissions across modules and roles
- **Permission Types (per module per role):**
  - canRead, canCreate, canUpdate, canDelete
  - canExport, canImport
  - canApprove, canVerify
  - **V2.0 New:** canBulkAction, canViewSensitive, canManageWorkflow
- **Fields:**
  - srModuleId: Reference to system module
  - roleId: Reference to user role
  - moduleName: Module name string
  - permissions: Object with all boolean flags
  - attributes: ABAC conditions array (new)
  - isActive: Boolean
- **Features:**
  - Grid view: Roles as rows, Modules as columns
  - Toggle individual permissions
  - Bulk enable/disable per role or module
  - Copy permissions from one role to another
  - Initialize default permissions for new roles
  - **V2.0:** ABAC condition editor per permission cell
  - **V2.0:** Permission impact preview (what changes affect)

#### FR-PERM-002: ABAC Condition Engine (V2.0 New)

- **Description:** Attribute-based conditions layered on top of RBAC
- **Condition Types:**

| Condition           | Description                                                    | Example                    |
| ------------------- | -------------------------------------------------------------- | -------------------------- |
| `own-data-only`     | User can only access records linked to their userId/memberId   | Resident viewing own bills |
| `own-block-only`    | User can only access records in their plot block               | Block representative       |
| `own-society-only`  | Access limited to user's society (default for non-super-admin) | All society users          |
| `time-window`       | Permission active only during specified hours                  | Guard access 6AM-10PM      |
| `approval-required` | Action allowed but queued for approval                         | Member transfer request    |
| `amount-limit`      | Financial actions limited to specified amount                  | Accountant < 1M PKR        |
| `ip-restricted`     | Access from specified IP ranges only                           | Admin from office IP       |

- **Enforcement:** Middleware evaluates ABAC conditions after RBAC check passes
- **Storage:** Conditions stored as JSON in permission document

#### FR-PERM-003: Permission Checking

- **Description:** Middleware-based permission verification on every API request
- **Process:**
  1. Extract user role from JWT token
  2. Check Redis cache for permission (role + module + action)
  3. If cache miss, query database and cache result
  4. Evaluate RBAC permission (boolean)
  5. If RBAC passes, evaluate ABAC conditions (V2.0)
  6. Apply privacy filters based on user consent (V2.0)
  7. Allow or deny request
- **Caching:** Redis with tag-based invalidation on permission change

#### FR-PERM-004: Permission Statistics

- **Description:** Dashboard showing permission analytics
- **Metrics:**
  - Total permissions per role
  - Active vs inactive permissions
  - Module coverage per role
  - ABAC condition usage statistics
  - Permission change history

#### FR-PERM-005: Module Management

- **Description:** Define system modules available for permission assignment
- **Fields:** name, description, slug, category, isActive, order, icon
- **Operations:** CRUD, reorder, categorize
- **V2.0:** Modules can be toggled per society via subscription plan

---

### 4.3 Dynamic Configuration Engine (FR-CONFIG — New Core Module)

#### FR-CONFIG-001: Dynamic Lookup Management

- **Description:** All dropdown values, statuses, types, and categories managed via UI instead of hard-coded enums
- **Fields:**
  - category: String (e.g., "plot-status", "bill-type", "payment-mode", "complaint-priority")
  - key: String (unique per category per tenant)
  - value: String (display label)
  - description: String
  - color: String (hex color for UI badges)
  - icon: String (icon name)
  - order: Number (display order)
  - isDefault: Boolean (default selection)
  - isSystem: Boolean (cannot be deleted by tenant)
  - parentKey: String (for hierarchical lookups)
  - metadata: Object (extra data per lookup — e.g., lateFeePercentage for a status)
  - societyId: ObjectId (null = global, set = tenant override)
  - isActive: Boolean
- **Operations:** CRUD, reorder, bulk import/export, search by category
- **Scoping:**
  - Global lookups defined by super admin (isSystem: true)
  - Society-level overrides: tenant can add custom values, reorder, or hide globals
  - Merged result: global + tenant-specific, deduplicated

**Lookup Categories (examples — dynamically extensible):**

| Category             | Examples                                                 |
| -------------------- | -------------------------------------------------------- |
| `user-status`        | Active, Inactive, Suspended, Pending, Banned             |
| `plot-status`        | Available, Booked, Sold, Reserved, Cancelled             |
| `plot-facing`        | North, South, East, West, Corner                         |
| `bill-type`          | Maintenance, Development, Utility, Water, Security       |
| `payment-mode`       | Cash, Bank Transfer, Cheque, Online, JazzCash, Easypaisa |
| `complaint-priority` | Low, Medium, High, Critical                              |
| `complaint-status`   | Open, In-Progress, Resolved, Closed, Rejected            |
| `transfer-type`      | Sale, Gift, Inheritance, Court Order                     |
| `application-type`   | Plot Allotment, Transfer NOC, Building Approval          |
| `facility-type`      | Community Hall, Gym, Pool, Park, Sports Court            |
| `visitor-purpose`    | Personal, Delivery, Maintenance, Official                |
| `blood-group`        | A+, A-, B+, B-, AB+, AB-, O+, O-                         |
| `relationship`       | Father, Mother, Spouse, Son, Daughter, Brother, Sister   |
| `document-type`      | CNIC, Passport, Registry, NOC, Possession Letter         |

#### FR-CONFIG-002: Visual Workflow Builder (V2.0 New)

- **Description:** Drag-and-drop interface for creating configurable workflows
- **Workflow Definition Fields:**
  - name, description, societyId
  - triggerType: "entity-create" | "status-change" | "field-update" | "time-based" | "manual"
  - triggerEntity: String (e.g., "transfer", "complaint", "application")
  - triggerConditions: JSON (e.g., `{ "status": "submitted" }`)
  - steps: Array of Step objects
  - isActive: Boolean
  - version: Number

- **Step Types:**

| Step Type       | Description                                | Configuration                                            |
| --------------- | ------------------------------------------ | -------------------------------------------------------- |
| `approval`      | Require approval from specified role/user  | approverRole, approverUser, timeoutHours, escalateToRole |
| `notification`  | Send notification via specified channel    | channel (email/push/sms/in-app), template, recipients    |
| `field-update`  | Automatically update entity fields         | targetEntity, targetField, newValue                      |
| `status-change` | Transition entity to new status            | targetStatus, conditions                                 |
| `delay`         | Wait for specified duration                | duration (hours/days), then proceed to next step         |
| `condition`     | Branch based on field values               | if/then/else with field comparisons                      |
| `escalation`    | Escalate to higher authority after timeout | escalateAfter, escalateToRole, notifyOriginal            |
| `webhook`       | Call external API                          | url, method, headers, body template                      |
| `ai-action`     | Trigger AI analysis                        | agentType, prompt template, outputField                  |

- **UI Builder:**
  - Drag-and-drop canvas (dnd-kit)
  - Step palette with all step types
  - Connection lines between steps
  - Condition branching visualization
  - Step configuration panels
  - Test/simulate workflow
  - Version history

- **Example Workflows:**

**Transfer Approval Workflow:**

```
Trigger: Transfer created (status = "submitted")
  → Step 1: Notification (email to admin: "New transfer request")
  → Step 2: Approval (role: Treasurer, timeout: 48h)
      → If approved: Step 3
      → If rejected: Step 6
      → If timeout: Step 7
  → Step 3: Approval (role: Committee Chair, timeout: 72h)
      → If approved: Step 4
      → If rejected: Step 6
  → Step 4: Field Update (transfer.status = "approved", plot.memberId = newMemberId)
  → Step 5: Notification (email to both members: "Transfer completed")
  → Step 6: Field Update (transfer.status = "rejected")
  → Step 7: Escalation (to Admin, notification: "Transfer approval timed out")
```

**Complaint Auto-Escalation Workflow:**

```
Trigger: Complaint status changes to "open"
  → Step 1: Delay (48 hours)
  → Step 2: Condition (if status still "open")
      → True: Step 3
      → False: End
  → Step 3: Escalation (priority += 1, assign to Moderator)
  → Step 4: Notification (push to moderator: "Complaint escalated")
  → Step 5: Delay (24 hours)
  → Step 6: Condition (if status still "open")
      → True: Step 7
      → False: End
  → Step 7: Escalation (assign to Admin, notification: "Unresolved complaint")
```

#### FR-CONFIG-003: Dynamic Form Builder (V2.0 New)

- **Description:** Society admins can add custom fields to any entity without code changes
- **Custom Field Definition:**
  - entityType: String (e.g., "member", "plot", "complaint", "application")
  - fieldName: String (slug)
  - fieldLabel: String (display label)
  - fieldType: "text" | "number" | "date" | "select" | "multiselect" | "file" | "boolean" | "textarea" | "email" | "phone" | "url"
  - options: Array (for select/multiselect)
  - isRequired: Boolean
  - defaultValue: Any
  - validationRules: Object (min, max, pattern, etc.)
  - order: Number (display order in form)
  - section: String (form section grouping)
  - visibility: Object (show/hide conditions based on other fields)
  - societyId: ObjectId
  - isActive: Boolean

- **Operations:** CRUD custom field definitions per entity per society
- **Storage:** Custom field values stored in entity's `metadata` JSONB field
- **Rendering:** Frontend dynamically renders form fields based on definitions
- **Migration:** No database migration needed — metadata field is schemaless

#### FR-CONFIG-004: Module Toggling

- **Description:** Enable or disable system modules per society
- **Mechanism:** Society settings contain `enabledModules` array
- **Enforcement:**
  - Backend: Middleware checks module enabled before processing request
  - Frontend: Sidebar and routes hidden for disabled modules
- **Linked to:** Subscription plan limits

---

### 4.4 Society Management Module (FR-SOC)

#### FR-SOC-001: Society Registration

- **Description:** Create a new housing society in the system
- **Fields:**
  - name, description, address
  - city, state, country, zipCode
  - phone, email, website
  - registrationNumber, registrationDate
  - logo, banner
  - settings (currency, timezone, dateFormat, language)
  - status (active, inactive, suspended — dynamic lookup)
  - subscriptionPlanId, subscriptionStatus
  - enabledModules: Array of module slugs
  - **V2.0 New:**
  - privacyScore: Number (calculated from privacy settings)
  - plraRegistrationNumber: String
  - ldaApprovalNumber: String
  - committeeTerm: Object (startDate, endDate, members)
  - billingCycleConfig: Object (dueDay, gracePeriod, lateFeeType, lateFeeValue)
  - customDomain: String (for white-label)
- **Operations:** CRUD
- **Constraints:** Registration number must be unique

#### FR-SOC-002: Society Settings (Enhanced)

- **Description:** Configure society-specific settings
- **Settings Categories:**

| Category          | Settings                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| **General**       | Name, address, logo, timezone, language, currency, date format                                           |
| **Billing**       | Billing cycle day, grace period, late fee type (flat/percentage), late fee value, partial payment policy |
| **Notifications** | Default channels (email/push/sms), quiet hours, digest frequency                                         |
| **Privacy**       | Default data sharing level, member directory visibility, anonymize complaints toggle                     |
| **Modules**       | Enable/disable each module                                                                               |
| **Workflow**      | Default approval chains, escalation timeouts                                                             |
| **PLRA**          | PLRA registration number, LDA approval, auto-sync toggle                                                 |
| **Gamification**  | Enable/disable, point values, reward catalog                                                             |

#### FR-SOC-003: Society Subscription (Enhanced)

- **Description:** Manage society subscription plans
- **Plans:** Free Trial, Basic, Standard, Premium, Enterprise
- **Plan Limits:**

| Limit            | Trial | Basic | Standard | Premium   | Enterprise |
| ---------------- | ----- | ----- | -------- | --------- | ---------- |
| Members          | 50    | 200   | 1000     | 5000      | Unlimited  |
| Plots            | 100   | 500   | 2000     | 10000     | Unlimited  |
| Storage (GB)     | 1     | 5     | 25       | 100       | 500        |
| Users/Staff      | 3     | 10    | 50       | 200       | Unlimited  |
| AI Queries/month | 50    | 200   | 1000     | 5000      | Unlimited  |
| Custom Roles     | 2     | 5     | 15       | Unlimited | Unlimited  |
| Custom Workflows | 1     | 3     | 10       | Unlimited | Unlimited  |
| Custom Fields    | 5     | 20    | 50       | Unlimited | Unlimited  |
| PLRA Integration | No    | No    | Yes      | Yes       | Yes        |
| Vendor Portal    | No    | No    | No       | Yes       | Yes        |
| White Label      | No    | No    | No       | No        | Yes        |

- **Statuses:** Trial, Active, Expired, Suspended, Cancelled
- **Operations:** Subscribe, upgrade, downgrade, renew, cancel
- **Enforcement:** Middleware checks limits before operations

#### FR-SOC-004: Privacy Score Tracking (V2.0)

- **Description:** Automatically calculate and display society privacy health score
- **Factors:**
  - Percentage of residents with configured privacy settings
  - Data encryption coverage
  - Audit log completeness
  - Consent collection rate
  - Third-party data sharing level
- **Score Range:** 0-100 (displayed on society dashboard)
- **Notifications:** Alert when score drops below threshold

---

### 4.5 Project Management Module (FR-PROJ)

#### FR-PROJ-001: Project CRUD

- **Description:** Manage housing projects within a society
- **Fields:**
  - name, description, societyId
  - location (address, latitude, longitude for map)
  - totalArea, totalPlots, areaUnit
  - startDate, expectedCompletionDate, actualCompletionDate
  - status (dynamic lookup: planning, in-progress, completed, on-hold)
  - developmentPhase
  - amenities, features (arrays)
  - images, documents (file references)
  - metadata (custom fields)
- **Operations:** CRUD, status update, map view

#### FR-PROJ-002: Project Map View

- **Description:** Display project locations on interactive map
- **Technology:** Leaflet + React Leaflet
- **Features:**
  - Pin project locations on map
  - Zoom and pan controls
  - Click markers to view project details
  - Cluster nearby projects
  - **V2.0:** Plot boundaries overlay (GeoJSON)
  - **V2.0:** Development progress heat map

---

### 4.6 Plot Management Module (FR-PLOT)

#### FR-PLOT-001: Plot CRUD

- **Description:** Manage individual plots within a project
- **Fields:**
  - plotNumber, plotName
  - projectId, societyId
  - blockId, categoryId, sizeId, typeId (all dynamic lookups)
  - area, dimensions (length, width), areaUnit
  - price, premiumCharges
  - facing (dynamic lookup)
  - status (dynamic lookup: available, booked, sold, reserved, cancelled)
  - memberId (owner reference)
  - location (latitude, longitude)
  - metadata (custom fields)
- **Operations:** CRUD, status update, bulk import, search, filter, map view

#### FR-PLOT-002: Plot Block Management

- **Description:** Organize plots into blocks/sectors
- **Fields:** blockName, blockCode, projectId, description, totalPlots, status, metadata
- **Operations:** CRUD

#### FR-PLOT-003: Plot Category Management

- **Description:** Categorize plots (residential, commercial, industrial, mixed-use, etc.)
- **Fields:** categoryName, description, isActive, metadata
- **Operations:** CRUD (V2.0: also manageable via Dynamic Lookups)

#### FR-PLOT-004: Plot Size Management

- **Description:** Define standard plot sizes
- **Fields:** sizeName, area, unit (marla, kanal, sqft, sqm), description, isActive, metadata
- **Operations:** CRUD

#### FR-PLOT-005: Plot Type Management

- **Description:** Define plot types (corner, park-facing, main road, etc.)
- **Fields:** typeName, description, premiumPercentage, isActive, metadata
- **Operations:** CRUD

#### FR-PLOT-006: Plot Search & Filter

- **Description:** Advanced search and filtering for plots
- **Filters:**
  - By block, category, size, type (dynamic lookups)
  - By status (dynamic lookup)
  - By price range (min-max slider)
  - By area range (min-max)
  - By facing direction
  - By member/owner
  - By custom metadata fields (V2.0)
- **Sort:** By plot number, price, area, date created
- **Export:** CSV/Excel with canExport permission

---

### 4.7 Member Management Module (FR-MEM)

#### FR-MEM-001: Member Registration

- **Description:** Register new society members
- **Fields:**
  - membershipNumber (auto-generated, configurable format)
  - firstName, lastName, fatherName, husbandName
  - CNIC/NIC number, passportNumber
  - dateOfBirth, gender (dynamic lookup)
  - email, phone, alternatePhone
  - address (current and permanent)
  - city, state, country
  - occupation, companyName
  - bloodGroup (dynamic lookup)
  - photo, documents (file references)
  - status (dynamic lookup: active, inactive, suspended, pending, transferred, deceased)
  - societyId, userId
  - joiningDate
  - emergencyContact (name, phone, relationship)
  - **V2.0 New:**
  - privacySettings: Object (per-member privacy overrides)
  - gamificationPoints: Number
  - preferredLanguage: String
  - metadata (custom fields)
- **Operations:** CRUD, search, filter, bulk import/export

#### FR-MEM-002: Member Status Tracking

- **Description:** Track and update member status
- **Statuses:** Dynamic lookup (default: Active, Inactive, Suspended, Pending, Transferred, Deceased)
- **Transitions:** Configurable via workflow engine (V2.0)
- **Audit:** All status changes logged with reason and actor

#### FR-MEM-003: Member Search

- **Description:** Advanced member search capabilities
- **Search By:** Name, CNIC, membership number, phone, email, plot number
- **Filters:** Status, block, joining date range, city, custom metadata fields
- **V2.0:** AI-powered fuzzy search (partial name, phonetic matching for Urdu names)

---

### 4.8 Financial Management Module (FR-FIN — Enhanced)

#### FR-FIN-001: Bill Type Management (Dynamic)

- **Description:** Define types of bills — now managed via Dynamic Lookups
- **Fields:** typeName, description, frequency (dynamic lookup), defaultAmount, lateFeeApplicable, isActive
- **Operations:** CRUD via Dynamic Lookup system

#### FR-FIN-002: Bill Information Management (Enhanced)

- **Description:** Generate and manage bills for members
- **Fields:**
  - billNumber (auto-generated, configurable format per society)
  - memberId, plotId, societyId
  - billTypeId (dynamic lookup)
  - amount, discount, discountReason, tax, taxPercentage, totalAmount
  - dueDate, issueDate
  - status (dynamic lookup: pending, paid, partial, overdue, cancelled, waived)
  - lateFee, lateFeeApplied, lateFeeCalculation (V2.0)
  - paymentDate, paymentModeId (dynamic lookup)
  - paidAmount, balanceAmount (V2.0)
  - receiptNumber
  - remarks
  - metadata (custom fields)
- **Operations:** CRUD, generate batch bills, mark paid/partial, apply late fee, waive
- **V2.0 Enhancements:**
  - Partial payment tracking with running balance
  - Automatic late fee calculation (flat or percentage, configurable per society)
  - Bill generation via scheduled job (Agenda.js)
  - Bill reminders via notification workflow

#### FR-FIN-003: Payment Mode Management (Dynamic)

- **Description:** Define accepted payment methods — now via Dynamic Lookups
- **Default Values:** Cash, Bank Transfer, Cheque, Online, JazzCash, Easypaisa
- **Operations:** CRUD via Dynamic Lookup system

#### FR-FIN-004: Smart Installment Engine (V2.0 Enhanced)

- **Description:** Intelligent installment plan management with automated processing
- **Plan Fields:**
  - planName, description
  - totalAmount, downPayment, downPaymentDueDate
  - numberOfInstallments, frequency (dynamic lookup: monthly, quarterly, biannual, annual)
  - interestRate (0 for interest-free plans)
  - lateFeeType (flat/percentage), lateFeeValue
  - gracePeriodDays
  - categoryId
  - startDate, endDate
  - status (dynamic lookup: active, completed, defaulted, cancelled, restructured)
  - memberId, plotId, societyId
  - metadata (custom fields)
- **Schedule Fields (per installment):**
  - installmentNumber, dueDate
  - principalAmount, interestAmount, totalAmount
  - paidAmount, balanceAmount
  - status (dynamic lookup: pending, paid, partial, overdue, defaulted, waived)
  - paymentDate, paymentModeId
  - lateFee, lateFeeApplied
  - receiptNumber
  - remarks
- **Smart Features (V2.0):**
  - **Auto-Generation:** Installment schedules generated automatically from plan parameters
  - **Partial Payments:** Accept any amount, track running balance per installment
  - **Rollover:** Unpaid balance rolls to next installment
  - **Restructuring:** Admin can restructure plan (extend duration, reduce amounts)
  - **Batch Processing:** Agenda.js daily job processes all installments:
    1. Check due dates
    2. Apply late fees after grace period
    3. Update statuses (pending -> overdue -> defaulted)
    4. Send reminders (3 days before, on due date, 1 day after)
    5. Flag defaulters
  - **Projections:** Calculate future payment schedule with current balance

#### FR-FIN-005: Installment Category Management

- **Description:** Categorize installment plans (development, maintenance, premium, etc.)
- **Fields:** categoryName, description, isActive
- **Operations:** CRUD

#### FR-FIN-006: AI Defaulter Prediction Agent (V2.0 New)

- **Description:** AI-powered defaulter risk prediction and management
- **Features:**
  - **Risk Scoring:** Analyze payment history, frequency of late payments, partial payments, communication patterns to assign risk score (0-100)
  - **Prediction:** Identify members likely to default in next 30/60/90 days
  - **Suggestions:** AI recommends:
    - Payment plan restructuring options
    - Optimal reminder timing
    - Escalation priority
  - **Notice Drafting:** AI generates customized payment reminder/notice text
  - **Dashboard:** Visual risk heatmap of all members
- **Input:** Payment history, member profile, plot value, installment plan status
- **Output:** Risk score, predictions, suggested actions, draft notices
- **AI Provider:** Groq API (or compatible)

#### FR-FIN-007: Defaulter Management (Enhanced)

- **Description:** Track and manage payment defaulters with AI assistance
- **Fields:**
  - memberId, plotId, societyId
  - totalDueAmount, overdueInstallments, overdueMonths
  - lastPaymentDate, lastPaymentAmount
  - defaultSince
  - riskScore (AI-calculated, V2.0)
  - status (dynamic lookup: warning, notice-sent, final-notice, legal-action, blacklisted)
  - noticeHistory: Array of { date, type, content, deliveryStatus }
  - remarks, actionsTaken
  - metadata (custom fields)
- **Operations:** View, update status, send notices (manual + AI-drafted), generate reports
- **Automated:** Daily cron job to identify and flag new defaulters, update risk scores

#### FR-FIN-008: Installment Processing Cron (Enhanced)

- **Description:** Automated background processing via Agenda.js
- **Jobs:**

| Job                    | Schedule       | Description                                             |
| ---------------------- | -------------- | ------------------------------------------------------- |
| `process-installments` | Daily 1:00 AM  | Check due dates, apply late fees, update statuses       |
| `send-reminders`       | Daily 9:00 AM  | Send payment reminders (3-day, same-day, 1-day overdue) |
| `flag-defaulters`      | Daily 2:00 AM  | Identify new defaulters, calculate risk scores          |
| `generate-bills`       | Configurable   | Auto-generate recurring bills per society billing cycle |
| `generate-reports`     | Weekly/Monthly | Generate financial summary reports                      |
| `update-ai-scores`     | Weekly         | Batch update AI risk scores for all members             |

#### FR-FIN-009: Resident Financial Ledger (V2.0 New)

- **Description:** Transparent, member-facing view of all financial transactions
- **Features:**
  - Complete payment history with receipts
  - Outstanding dues breakdown
  - Upcoming payment schedule
  - Payment trend chart
  - Download statement (PDF)
  - Dispute button with complaint auto-creation
- **Access:** Members can view own ledger; admins can view any member's

#### FR-FIN-010: Bank Reconciliation Tools (V2.0 New)

- **Description:** Tools for matching bank statements with payment records
- **Features:**
  - Import bank statement (CSV)
  - Auto-match transactions by amount + date + reference
  - Flag unmatched transactions
  - Bulk approve matched records
  - Generate reconciliation report

---

### 4.9 Property Lifecycle Module (FR-PROP — Regulation-Native)

#### FR-PROP-001: Sales Status Tracking

- **Description:** Track sales pipeline and plot booking status
- **Fields:**
  - plotId, memberId, societyId
  - bookingDate, bookingAmount, bookingReference
  - salesPerson, referralSource
  - status (dynamic lookup: inquiry, booked, documentation, payment-in-progress, completed, cancelled)
  - remarks
  - metadata (custom fields)
- **Operations:** CRUD, status transitions (workflow-driven), filter by status
- **V2.0:** Sales funnel visualization on dashboard

#### FR-PROP-002: Possession Management (Enhanced)

- **Description:** Manage plot possession and handover
- **Fields:**
  - plotId, memberId, societyId
  - possessionDate, handoverDate
  - handoverBy (admin reference)
  - duesCleared: Boolean (V2.0: auto-calculated from ledger)
  - documents (possession letter, NOC, etc. — file references)
  - status (dynamic lookup: pending, under-review, approved, handed-over, delayed)
  - remarks, conditions
  - **V2.0 New:**
  - plraCertificateId: Reference (if generated)
  - inspectionNotes: String
  - witnessNames: Array
  - metadata (custom fields)
- **Operations:** CRUD, approve possession, generate possession letter (PDF template)
- **Prerequisites:** All dues must be cleared (system-enforced)
- **V2.0:** Possession workflow configurable via Visual Workflow Builder

#### FR-PROP-003: Transfer Management (Enhanced)

- **Description:** Handle property ownership transfers with workflow automation
- **Fields:**
  - plotId, fromMemberId, toMemberId, societyId
  - transferDate, transferFee, transferFeeCalculation
  - transferTypeId (dynamic lookup)
  - reason
  - documents (transfer deed, NOC, affidavit, court order — file references)
  - approvedBy
  - status (dynamic lookup: submitted, under-review, pending-payment, approved, completed, rejected, cancelled)
  - rejectionReason
  - remarks
  - **V2.0 New:**
  - workflowInstanceId: Reference to active workflow instance
  - plraTransferRef: String (PLRA reference number)
  - metadata (custom fields)
- **Operations:** CRUD, approve/reject, complete transfer (V2.0: all via workflow)
- **V2.0 Automated Process:**
  1. Member submits transfer request with documents
  2. Workflow triggers automatic verification steps
  3. System checks dues clearance
  4. Sequential approvals (Treasurer -> Committee Chair)
  5. Transfer fee payment verification
  6. PLRA sync (if enabled)
  7. Auto-update plot ownership (memberId change)
  8. Generate transfer certificate (PDF)
  9. Notify both parties
  10. Update member records and audit log

#### FR-PROP-004: Transfer Type Management

- **Description:** Define types of transfers — now via Dynamic Lookups
- **Default Types:** Sale, Gift, Inheritance, Court Order, Name Correction
- **Fields:** typeName, description, feePercentage, requiredDocuments, isActive

#### FR-PROP-005: Registry Management (Enhanced)

- **Description:** Manage property registration records
- **Fields:**
  - plotId, memberId, societyId
  - registryNumber, registryDate
  - registryAuthority
  - registryValue, stampDuty, registrationFee
  - documents (registry deed, title deed — file references)
  - status (dynamic lookup: pending, registered, disputed)
  - remarks
  - **V2.0 New:**
  - plraRegistryRef: String
  - qrCode: String (for verification)
  - digitalSignature: String
  - metadata (custom fields)
- **Operations:** CRUD, search by registry number, verify via QR code (V2.0)

---

### 4.10 Facility Management Module (FR-FAC)

#### FR-FAC-001: Facility Definition

- **Description:** Define society facilities available for booking
- **Fields:**
  - facilityName, description
  - societyId
  - type (dynamic lookup: community hall, gym, pool, park, sports court, etc.)
  - capacity, area
  - operatingHours (openTime, closeTime, daysAvailable)
  - rates (hourlyRate, halfDayRate, fullDayRate)
  - amenities: Array
  - images: Array (file references)
  - rules: String (guidelines text)
  - cancellationPolicy: Object (hoursBeforeFullRefund, hoursBeforePartialRefund, partialRefundPercent)
  - maintenanceSchedule: Array of { dayOfWeek, startTime, endTime }
  - status (dynamic lookup: active, inactive, under-maintenance)
  - metadata (custom fields)
- **Operations:** CRUD, toggle status

#### FR-FAC-002: Facility Booking (Enhanced)

- **Description:** Members can book society facilities
- **Fields:**
  - facilityId, memberId, societyId
  - bookingDate, startTime, endTime
  - duration, rateApplied, totalAmount
  - purpose, numberOfGuests
  - specialRequirements
  - status (dynamic lookup: pending, approved, rejected, cancelled, completed, no-show)
  - approvedBy, approvalDate
  - paymentStatus (dynamic lookup)
  - cancellationReason, cancellationDate
  - metadata (custom fields)
- **Operations:** Create, view, approve/reject, cancel, complete
- **Constraints:**
  - No double booking for same facility/timeslot
  - Must be within operating hours
  - Not during maintenance windows
  - Advance booking limit (configurable)
  - Cancellation policy enforcement (auto refund calculation)
- **V2.0:** Booking workflow via Visual Workflow Builder
- **V2.0:** Gamification points for timely bookings

---

### 4.11 Communication & Complaint Module (FR-COMM — Enhanced)

#### FR-COMM-001: Announcement Management

- **Description:** Create and broadcast announcements to society members
- **Fields:**
  - title, content (rich text / HTML)
  - categoryId (dynamic lookup)
  - societyId
  - priority (dynamic lookup: low, medium, high, urgent)
  - targetAudience: Object (all, roles: [], blocks: [], members: [])
  - publishDate, expiryDate
  - attachments (file references)
  - status (dynamic lookup: draft, published, archived)
  - createdBy
  - metadata (custom fields)
- **Operations:** CRUD, publish, archive, filter by category/priority, schedule
- **V2.0:** Residents can opt-out of non-critical announcements (privacy control)

#### FR-COMM-002: Announcement Category Management

- **Description:** Categorize announcements — via Dynamic Lookups
- **Default Categories:** General, Maintenance, Financial, Emergency, Event, Regulation

#### FR-COMM-003: Notification System (Enhanced)

- **Description:** Multi-channel notification delivery with preferences
- **Channels:**
  - In-app notifications (real-time via Socket.io)
  - Email notifications (via Nodemailer)
  - Push notifications (via Web Push / VAPID)
  - **V2.0:** SMS notifications (integration-ready)
- **Fields:**
  - userId, title, message
  - type (dynamic lookup: info, warning, success, error, reminder, alert)
  - channel: String (in-app, email, push, sms)
  - isRead, readAt
  - actionUrl (deep link)
  - metadata: Object
  - relatedEntity: Object (type, id)
- **Operations:** Create, mark read, mark all read, delete, filter, preferences
- **V2.0 Enhancements:**
  - Notification preferences per type (member controls which notifications they receive per channel)
  - Quiet hours enforcement (no notifications during specified hours)
  - Digest mode (batch notifications into daily/weekly digest email)
  - Notification templates (admin-editable)

#### FR-COMM-004: Push Subscription Management

- **Description:** Manage browser push notification subscriptions
- **Fields:**
  - userId, endpoint, keys (p256dh, auth)
  - userAgent, deviceType (desktop, mobile, tablet)
  - isActive, createdAt
- **Operations:** Subscribe, unsubscribe, send push, manage devices

#### FR-COMM-005: Complaint Management (Enhanced)

- **Description:** Members can submit and track complaints with AI analysis
- **Fields:**
  - complaintNumber (auto-generated)
  - memberId, societyId
  - categoryId (dynamic lookup)
  - subject, description
  - priority (dynamic lookup: low, medium, high, critical)
  - attachments (photos, documents — file references)
  - assignedTo: ObjectId (staff/moderator)
  - status (dynamic lookup: open, assigned, in-progress, resolved, closed, rejected, reopened)
  - resolution, resolutionDate, resolvedBy
  - feedback, rating (1-5 stars)
  - **V2.0 New:**
  - aiSentiment: String (positive, negative, neutral — auto-analyzed)
  - aiCategory: String (AI-suggested category)
  - aiPrioritySuggestion: String (AI-suggested priority)
  - escalationLevel: Number
  - slaDeadline: Date (auto-calculated from category SLA)
  - isAnonymous: Boolean (privacy feature)
  - metadata (custom fields)
- **Operations:** CRUD, assign, resolve, close, reopen, escalate, rate
- **V2.0 Enhancements:**
  - AI auto-categorization and priority suggestion on submission
  - AI sentiment analysis for trend detection
  - Configurable escalation workflow (via Workflow Builder)
  - SLA tracking with auto-escalation
  - Anonymous complaint option (privacy feature)
  - Gamification: points for providing feedback after resolution

#### FR-COMM-006: Complaint Category Management

- **Description:** Define complaint categories — via Dynamic Lookups
- **Extended Fields:** defaultPriority, slaHours (resolution time SLA), isActive

#### FR-COMM-007: AI Complaint Sentiment Agent (V2.0 New)

- **Description:** AI agent that analyzes complaint patterns and provides insights
- **Features:**
  - **Trend Analysis:** Identify rising complaint categories (e.g., "water supply complaints up 300% this month")
  - **Sentiment Dashboard:** Overall society sentiment score with trend
  - **Recommendations:** AI suggests proactive measures based on patterns
  - **Monthly Report:** Auto-generated complaint analysis report for committee
  - **Priority Validation:** Flags potentially mis-prioritized complaints
- **Trigger:** Runs on each complaint submission + weekly batch analysis
- **Output:** Dashboard widgets, notification to admin, monthly report

---

### 4.12 Visitor & Security Management Module (FR-VIS — Enhanced)

#### FR-VIS-001: Visitor Registration (Enhanced)

- **Description:** Register and track society visitors with security features
- **Fields:**
  - visitorName, CNIC/ID number
  - phone, email (optional)
  - photo (captured at gate or pre-uploaded)
  - purpose (dynamic lookup: personal, delivery, maintenance, official, vendor, etc.)
  - visitingMemberId (whom to visit)
  - plotId / blockId / address
  - vehicleNumber, vehicleType (dynamic lookup)
  - entryDate, entryTime
  - exitDate, exitTime
  - numberOfPersons
  - checkedInBy, checkedOutBy (guard reference)
  - status (dynamic lookup: expected, pre-approved, checked-in, checked-out, denied, overstay)
  - remarks
  - societyId
  - **V2.0 New:**
  - preApprovalId: Reference (if pre-approved by resident)
  - qrPass: String (unique QR code for quick check-in)
  - otpCode: String (OTP for verification)
  - isRecurring: Boolean (regular visitor like maid, driver)
  - recurringSchedule: Object (days, startTime, endTime, validUntil)
  - metadata (custom fields)
- **Operations:** CRUD, check-in, check-out, search, daily reports, pre-approve

#### FR-VIS-002: Zero-Knowledge Pre-Approval (V2.0 New)

- **Description:** Residents pre-approve visitors without revealing personal details to guards
- **Process:**
  1. Resident creates pre-approval via app (visitor name, expected date/time, purpose)
  2. System generates unique QR code and/or OTP
  3. Resident shares QR/OTP with visitor
  4. Guard scans QR or enters OTP at gate
  5. System shows: "Approved visitor for [Block X, Plot Y]" — no resident name/phone shown to guard
  6. Visitor checked in automatically
- **Privacy:** Guard sees only block/plot, not resident contact details

#### FR-VIS-003: Recurring Visitor Management (V2.0 New)

- **Description:** Manage regular visitors (maids, drivers, gardeners)
- **Features:**
  - Create recurring schedule (e.g., daily 8AM-12PM, Mon/Wed/Fri)
  - Auto-generate daily pass
  - Alert if recurring visitor doesn't show up (optional)
  - Block/revoke access instantly
  - Monthly visitor report per member

#### FR-VIS-004: Guard PWA Interface (V2.0 New)

- **Description:** Simplified, offline-capable interface for security guards
- **Features:**
  - Quick check-in via QR scan, OTP, or manual entry
  - Quick check-out with one tap
  - Offline operation with background sync
  - Camera capture for visitor photo
  - Vehicle number entry with suggestions (recurring visitors)
  - Emergency alert button
  - Shift log and handover notes
- **Offline:** Stores up to 500 visitor records locally, syncs when online

#### FR-VIS-005: Visitor Log & Analytics

- **Description:** Comprehensive visitor history and analytics
- **Features:**
  - Searchable visitor history
  - Filter by date range, member, purpose, status
  - Export visitor logs (CSV/PDF)
  - Daily/weekly/monthly visitor reports
  - Peak hours analysis
  - Frequent visitor identification
  - Overstay alerts

---

### 4.13 Application Processing Module (FR-APP)

#### FR-APP-001: Application Type Management

- **Description:** Define types of applications — via Dynamic Lookups
- **Fields:** typeName, description, requiredDocuments, processingFee, slaHours, workflowId (V2.0), isActive
- **Examples:** Plot allotment, transfer NOC, building approval, connection request, membership change

#### FR-APP-002: Application Submission & Processing (Enhanced)

- **Description:** Members submit applications; workflow engine processes them
- **Fields:**
  - applicationNumber (auto-generated)
  - memberId, societyId
  - applicationTypeId
  - subject, description
  - documents (uploaded files)
  - processingFee, feeStatus (dynamic lookup: pending, paid, waived)
  - status (dynamic lookup: submitted, under-review, approved, rejected, returned, completed)
  - reviewedBy, reviewDate
  - approvedBy, approvalDate
  - remarks
  - **V2.0 New:**
  - workflowInstanceId: Reference to active workflow instance
  - customFormData: Object (data from dynamic form fields)
  - metadata (custom fields)
- **Operations:** Submit, review, approve/reject, return for revision, complete
- **V2.0:** Application processing driven by configured workflow

---

### 4.14 File & Document Management Module (FR-FILE)

#### FR-FILE-001: File Upload

- **Description:** Upload and store files/documents securely
- **Supported Types:** Images (JPG, PNG, GIF, WebP), Documents (PDF, DOC, DOCX, XLS, XLSX), Archives (ZIP)
- **Max Size:** Configurable per file type and per subscription plan
- **Storage:** Cloudinary cloud storage (CDN-backed)
- **Fields:**
  - fileName, originalName, fileType, mimeType
  - fileSize, fileUrl, publicId (Cloudinary)
  - thumbnailUrl (auto-generated for images)
  - uploadedBy, societyId
  - relatedTo: Object (entityType, entityId)
  - description, tags: Array
  - isPublic: Boolean
  - **V2.0 New:**
  - isEncrypted: Boolean (for privacy-sensitive documents)
  - accessLog: Array of { userId, accessDate, action }
  - retentionDate: Date (auto-delete after date)
  - metadata (custom fields)
- **Operations:** Upload (single/bulk), download, delete, preview

#### FR-FILE-002: File Management

- **Description:** Organize and manage uploaded files
- **Features:**
  - File listing with filters (type, date, uploader, entity)
  - File preview (images, PDFs)
  - File sharing with permissions
  - Bulk operations (delete, download as ZIP)
  - Storage usage tracking per society
  - **V2.0:** Encrypted document vault for sensitive files (CNIC, registry deeds)
  - **V2.0:** Access logging for sensitive documents

---

### 4.15 Analytics, Reporting & AI Insights Module (FR-ANALYTICS — New)

#### FR-ANALYTICS-001: Dashboard (Enhanced)

- **Description:** Central dashboard with KPIs, visualizations, and AI insights
- **Widgets:**
  - Total members, active members, new members trend (line chart)
  - Total plots: available, booked, sold (pie chart)
  - Revenue overview (line chart: collected vs target)
  - Outstanding dues total and trend
  - Defaulter count and risk distribution
  - Active complaints and resolution rate
  - Upcoming facility bookings
  - Recent announcements
  - Development progress per project
  - **V2.0 New:**
  - AI Insight cards (predictions, anomalies, recommendations)
  - Society privacy score gauge
  - Visitor trend (daily/weekly)
  - Gamification leaderboard widget
  - PLRA compliance status
  - Cash flow projection (30/60/90 day)
- **Technology:** Recharts for data visualization
- **Customization:** Admin can show/hide widgets, reorder (drag-and-drop)

#### FR-ANALYTICS-002: Financial Reports

- **Reports:**
  - Revenue collection summary (daily/monthly/quarterly/yearly)
  - Outstanding dues report (grouped by member, block, status)
  - Defaulter list with amounts and risk scores (V2.0)
  - Payment mode distribution (pie chart)
  - Installment collection status (on-time vs late vs defaulted)
  - Bill generation and payment tracking
  - Cash flow statement
  - Bank reconciliation report (V2.0)
  - AI financial health summary (V2.0)

#### FR-ANALYTICS-003: Member Reports

- **Reports:**
  - Member growth trend
  - Member status distribution
  - Block-wise member count
  - Active vs inactive members
  - New registrations by month
  - Member directory (with privacy filtering, V2.0)

#### FR-ANALYTICS-004: Data Export

- **Formats:** CSV (via Papaparse), Excel, PDF
- **Exportable Data:** Members, plots, payments, defaulters, complaints, visitors, installments, audit logs
- **Permissions:** canExport permission required per module
- **V2.0:** Scheduled report delivery via email

#### FR-ANALYTICS-005: Data Import

- **Formats:** CSV, Excel
- **Importable Data:** Members, plots, payments (bulk registration/migration)
- **Features:**
  - Template download per entity
  - Validation before import (type checks, duplicate detection)
  - Error reporting with row-by-row details
  - Import summary with success/failure counts
- **Permissions:** canImport permission required

#### FR-ANALYTICS-006: Role-Based AI Agents (V2.0 New)

- **Description:** AI assistants tailored to each user role
- **Agent Types:**

| Agent                     | User Role            | Capabilities                                                                                                                                                                                        |
| ------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Resident AI Assistant** | Resident/Tenant      | "What are my pending dues?", "Book the community hall for Saturday", "File a complaint about water supply", "When is my next installment?" — natural language queries, bill reminders, booking help |
| **Committee AI Advisor**  | Committee/Admin      | Report generation ("Generate monthly financial summary"), budget suggestions, anomaly detection ("Maintenance costs 40% above average"), complaint trend analysis, decision support                 |
| **Financial AI Analyst**  | Accountant/Treasurer | Defaulter predictions, cash flow forecasts, collection optimization, reconciliation assistance, late fee impact analysis                                                                            |
| **Compliance AI Monitor** | Admin                | PLRA deadline tracking, filing reminders, fund utilization compliance alerts, regulatory change notifications                                                                                       |

- **Common Features:**
  - Natural language input (text and voice)
  - Conversation history (stored per user)
  - Context-aware (knows user's society, role, data access)
  - Safety guardrails (cannot reveal other members' private data)
  - Rate-limited per subscription plan
  - Streaming responses via Server-Sent Events
- **AI Provider:** Groq API (primary), fallback configurable
- **UI:** Chat sidebar panel, accessible from any page

#### FR-ANALYTICS-007: Predictive Analytics Dashboard (V2.0 New)

- **Description:** AI-powered predictions and forecasts
- **Predictions:**
  - 30/60/90-day collection forecast
  - Defaulter risk heat map
  - Maintenance cost projection
  - Member growth/churn prediction
  - Complaint volume prediction
- **Anomaly Detection:**
  - Unusual payment patterns
  - Expense spikes
  - Complaint surges
  - Attendance anomalies
- **Display:** Dedicated analytics page with interactive charts

---

### 4.16 Audit, Compliance & Handover Module (FR-AUDIT — Enhanced)

#### FR-AUDIT-001: Audit Log

- **Description:** Comprehensive, immutable activity tracking for compliance
- **Fields:**
  - userId, userName, userRole
  - action (create, update, delete, login, export, import, approve, reject, impersonate, etc.)
  - module, entity, entityId
  - changes: Object (before/after values for each changed field)
  - ipAddress, userAgent
  - timestamp
  - societyId
  - **V2.0 New:**
  - isImpersonated: Boolean
  - impersonatedBy: ObjectId
  - sessionId: String
  - geoLocation: Object (approximate, from IP)
- **Operations:** View, search, filter by user/module/action/date range
- **Retention:** Configurable per society (default: 2 years)
- **Immutability:** Audit logs cannot be edited or deleted (append-only)

#### FR-AUDIT-002: System Logging

- **Description:** Technical logging for debugging and monitoring
- **Levels:** Error, Warn, Info, Debug
- **Storage:** File-based with daily rotation (Winston)
- **Includes:** HTTP requests (Morgan), database queries, errors, performance metrics, AI queries

#### FR-AUDIT-003: Compliance Cockpit (V2.0 New)

- **Description:** Dashboard for tracking regulatory compliance status
- **Features:**
  - PLRA filing status and deadlines
  - Fund utilization compliance (if applicable)
  - Audit readiness score
  - Pending compliance actions list
  - Document expiry tracking
  - Auto-reminders for upcoming deadlines
  - Export compliance report for authorities
- **Access:** Admin, Committee Chair, Treasurer roles

#### FR-AUDIT-004: Committee Handover Wizard (V2.0 New)

- **Description:** Streamlined process for transitioning between committee terms
- **Process:**
  1. Outgoing committee initiates handover
  2. System generates comprehensive summary:
     - Financial summary (balances, dues, investments)
     - Active complaints and resolutions
     - Ongoing projects and development status
     - Pending applications and approvals
     - Vendor contracts status
     - PLRA compliance status
     - Member statistics
  3. All documents and records packaged as downloadable archive
  4. New committee members receive access
  5. Old committee access downgraded (configurable retention period)
  6. Full audit log of handover process
  7. Notification sent to all members about committee change
- **Output:** Handover report (PDF), data archive (ZIP), access transition

---

### 4.17 Nominee Management Module (FR-NOM)

#### FR-NOM-001: Nominee Management

- **Description:** Manage nominees for member plots/properties
- **Fields:**
  - memberId, plotId, societyId
  - nomineeName, relationship (dynamic lookup)
  - CNIC, dateOfBirth
  - phone, email, address
  - sharePercentage
  - documents (file references)
  - status (dynamic lookup: active, inactive)
  - metadata (custom fields)
- **Operations:** CRUD
- **Validation:** Total sharePercentage across all nominees for a plot must equal 100%

---

### 4.18 Development Tracking Module (FR-DEV)

#### FR-DEV-001: Development Phase Management

- **Description:** Track housing society development phases
- **Fields:**
  - phaseName, description
  - projectId, societyId
  - startDate, expectedEndDate, actualEndDate
  - progress: Number (0-100 percentage)
  - status (dynamic lookup: planned, in-progress, completed, delayed, on-hold)
  - contractor, budget, expenditure
  - milestones: Array of { name, targetDate, completedDate, status }
  - images, documents (file references)
  - metadata (custom fields)
- **Operations:** CRUD, update progress, status transitions
- **V2.0:** Progress updates can trigger notifications to members

#### FR-DEV-002: Development Status Configuration

- **Description:** Define possible development statuses — via Dynamic Lookups
- **Fields:** statusName, description, color, order, isActive

---

### 4.19 Lookup & Configuration Module (FR-LOOKUP)

> **Note:** This module is now part of the Dynamic Configuration Engine (FR-CONFIG-001). The legacy lookup, city/state, and status endpoints are retained for backward compatibility but internally route through the Dynamic Config Service.

#### FR-LOOKUP-001: Legacy Lookup Value Management

- **Description:** Manage system-wide dropdown/lookup values (backward-compatible API)
- **Operations:** CRUD, filter by category
- **Migration:** All lookups migrated to Dynamic Lookup system

#### FR-LOOKUP-002: City & State Management

- **Description:** Manage geographic location data
- **City Fields:** cityName, stateId, isActive
- **State Fields:** stateName, countryCode, isActive
- **Operations:** CRUD, cascading dropdown support

#### FR-LOOKUP-003: Status Configuration

- **Description:** Define status values for various modules — via Dynamic Lookups
- **Fields:** statusName, module, description, color, icon, order, isActive

---

### 4.20 Subscription Management Module (FR-SUB)

#### FR-SUB-001: Subscription Plan Management

- **Description:** Define and manage subscription plans for societies
- **Fields:**
  - planName, description
  - price, currency, billingCycle (monthly, quarterly, annually)
  - features: Array of String (included feature names)
  - limits: Object (maxMembers, maxPlots, maxStorage, maxUsers, maxAIQueries, maxCustomRoles, maxWorkflows, maxCustomFields)
  - modules: Array of String (included module slugs)
  - trialDays: Number
  - isActive, isPopular
  - metadata
- **Operations:** CRUD

#### FR-SUB-002: Society Subscription Management

- **Description:** Manage individual society subscriptions
- **Fields:**
  - societyId, planId
  - startDate, endDate, renewalDate
  - status (dynamic lookup: trial, active, expired, suspended, cancelled)
  - paymentHistory: Array
  - autoRenew: Boolean
  - usageStats: Object (currentMembers, currentPlots, currentStorage, etc.)
- **Operations:** Subscribe, renew, upgrade, downgrade, cancel
- **Enforcement:** Middleware checks usage against plan limits
- **Automated Jobs:**
  - 7-day expiry warning notification
  - 1-day expiry reminder
  - Auto-expire on end date
  - Auto-renew if enabled and payment valid

---

### 4.21 Workforce & Vendor Management Module (FR-WORK — New Major Module)

#### FR-WORK-001: Geo-Tagged Attendance (V2.0 New)

- **Description:** Location-verified attendance system for society staff
- **Fields:**
  - userId/staffId, societyId
  - date, checkInTime, checkOutTime
  - checkInLocation: Object (latitude, longitude, accuracy)
  - checkOutLocation: Object (latitude, longitude, accuracy)
  - isWithinGeofence: Boolean (auto-calculated)
  - geofenceId: Reference (society gate/office location)
  - shiftId: Reference
  - status (dynamic lookup: present, absent, late, half-day, leave, holiday)
  - overtimeHours: Number
  - remarks
  - metadata
- **Process:**
  1. Staff opens PWA at work location
  2. System captures GPS coordinates
  3. Validates against society geofence (configurable radius)
  4. Records check-in with location proof
  5. Same process for check-out
- **Anti-Fraud:**
  - Geofence validation (must be within X meters of society)
  - Photo capture at check-in (optional)
  - Biometric hash validation (optional, future)
  - Anomaly detection (login from unusual location/time)

#### FR-WORK-002: Biometric Attendance (V2.0 New — Phase 3)

- **Description:** Fingerprint/face recognition for attendance
- **Status:** Architecture prepared, biometric device integration in Phase 3
- **Mechanism:**
  - Biometric hash stored (not raw biometric data — privacy compliance)
  - Device SDK integration for fingerprint readers
  - WebAuthn for face recognition via phone camera
- **Fallback:** GPS + photo if biometric unavailable

#### FR-WORK-003: Shift Management (V2.0 New)

- **Description:** Define and manage staff shifts
- **Fields:**
  - shiftName, societyId
  - startTime, endTime
  - breakDuration
  - applicableDays: Array (Mon-Sun)
  - graceMinutes: Number (late tolerance)
  - assignedStaff: Array of userId
  - isActive
- **Operations:** CRUD, assign staff, roster view (calendar)
- **Features:**
  - Weekly roster generation
  - Shift swap requests
  - Holiday calendar integration
  - Monthly attendance summary

#### FR-WORK-004: Vendor/Dealer Registration (V2.0 New)

- **Description:** External vendors register on the platform
- **Fields:**
  - vendorName, companyName
  - email, phone, address
  - vendorType (dynamic lookup: plumber, electrician, security, landscaping, cleaning, construction, etc.)
  - registrationNumber, taxId
  - serviceAreas: Array of societyId (where they can bid)
  - documents: Array (trade license, insurance, etc.)
  - bankDetails: Object (for payment)
  - status (dynamic lookup: pending-verification, active, suspended, blacklisted)
  - verifiedBy, verificationDate
  - rating: Number (average from reviews)
  - totalContracts, completedContracts
  - metadata
- **Operations:** Register, verify, suspend, blacklist, search, rate

#### FR-WORK-005: Vendor Marketplace / Bidding (V2.0 New)

- **Description:** Societies post work orders; vendors bid competitively
- **Work Order Fields:**
  - title, description, societyId
  - category (dynamic lookup)
  - estimatedBudget, deadline
  - scope: String (detailed work scope)
  - documents: Array (blueprints, photos)
  - status (dynamic lookup: open, bidding, awarded, in-progress, completed, cancelled)
  - awardedVendorId
  - bids: Array of { vendorId, amount, proposal, submittedAt, status }
- **Process:**
  1. Admin creates work order with requirements
  2. Eligible vendors receive notification
  3. Vendors submit bids (amount + proposal)
  4. Admin reviews bids, can request revisions
  5. Admin awards to selected vendor
  6. Work tracked with milestones
  7. Completion verified and payment processed
  8. Both parties rate each other

#### FR-WORK-006: AMC (Annual Maintenance Contract) Management (V2.0 New)

- **Description:** Manage ongoing vendor contracts
- **Fields:**
  - vendorId, societyId
  - contractName, description
  - scope: String
  - startDate, endDate, renewalDate
  - amount, paymentFrequency (dynamic lookup)
  - status (dynamic lookup: draft, active, expired, terminated, renewed)
  - documents: Array (contract, invoices)
  - performanceReviews: Array of { date, rating, comments, reviewedBy }
  - autoRenew: Boolean
- **Operations:** CRUD, renew, terminate, review performance
- **Automated:** Expiry reminders, renewal notifications

#### FR-WORK-007: Vendor Invoice & Payment (V2.0 New)

- **Description:** Vendors submit invoices; admins approve and track payment
- **Fields:**
  - vendorId, societyId, contractId/workOrderId
  - invoiceNumber, invoiceDate, dueDate
  - amount, taxAmount, totalAmount
  - description, lineItems: Array
  - documents: Array (invoice PDF)
  - status (dynamic lookup: submitted, under-review, approved, paid, rejected, disputed)
  - approvedBy, paymentDate, paymentReference
- **Operations:** Submit, review, approve, reject, mark paid
- **V2.0:** Approval workflow via Workflow Builder

---

### 4.22 Privacy-First Features Module (FR-PRIV — New Differentiator)

#### FR-PRIV-001: Resident Privacy Dashboard (V2.0 New)

- **Description:** Centralized interface for residents to control their data
- **Features:**

| Control                      | Description                                                           |
| ---------------------------- | --------------------------------------------------------------------- |
| **Profile Visibility**       | Choose who sees profile details (all members, committee only, no one) |
| **Contact Sharing**          | Toggle phone number and email visibility to other members             |
| **Directory Opt-out**        | Exclude from member directory entirely                                |
| **Complaint Privacy**        | Submit anonymous complaints                                           |
| **Data Export**              | Download all personal data as JSON/PDF (GDPR-style)                   |
| **Data Deletion Request**    | Request account and data deletion (processed by admin)                |
| **Notification Preferences** | Granular control over notification types and channels                 |
| **Third-Party Sharing**      | Control whether data is shared with vendors                           |
| **Activity Log**             | View who accessed your data and when                                  |
| **Consent History**          | View and manage all consent records                                   |

#### FR-PRIV-002: Privacy Enforcement Layer (V2.0 New)

- **Description:** Server-side privacy enforcement on all data access
- **Mechanism:**
  1. Every API query passes through Privacy Middleware
  2. Middleware checks target member's privacy settings
  3. Non-consented fields are stripped from response (replaced with "[Hidden]")
  4. Access logged in member's privacy audit trail
- **Examples:**
  - Member A has phone visibility = "committee only"
  - Member B (role: Resident) queries member directory
  - Response shows Member A's name but "[Hidden]" for phone
  - Same query from Admin shows full phone number

#### FR-PRIV-003: Encrypted Document Vault (V2.0 New)

- **Description:** Secure storage for sensitive personal documents
- **Documents:** CNIC copies, registry deeds, legal documents, financial statements
- **Encryption:** AES-256 encryption at rest (separate from Cloudinary public storage)
- **Access:** Only document owner + explicitly authorized admins
- **Audit:** All access logged with timestamp and accessor identity
- **Deletion:** Owner can permanently delete vault documents

#### FR-PRIV-004: Privacy Score (V2.0 New)

- **Description:** Society-wide privacy health score
- **Calculation Factors:**
  - % of members with configured privacy settings (higher = better)
  - Data encryption coverage
  - Audit log completeness
  - Consent collection rate
  - Third-party data sharing level (lower = better)
  - Security incident history
- **Score:** 0-100, displayed on admin dashboard
- **Alerts:** Notification when score drops below 70

---

### 4.23 PLRA/LDA Regulatory Integration Module (FR-REG — New)

#### FR-REG-001: PLRA Property Certificate Generation (V2.0 New)

- **Description:** Generate PLRA-compliant property certificates
- **Fields:**
  - plotId, memberId, societyId
  - certificateNumber (auto-generated, PLRA format)
  - certificateType (dynamic lookup: ownership, allotment, transfer, possession)
  - issuedDate, validUntil
  - propertyDetails: Object (area, boundaries, address)
  - ownerDetails: Object (name, CNIC, address)
  - qrCode: String (unique verification QR)
  - digitalSignature: String (authority signature)
  - plraReferenceNumber: String (from PLRA API)
  - syncStatus (dynamic lookup: pending, synced, failed, manual)
  - pdfUrl: String (generated certificate PDF)
  - metadata
- **Operations:** Generate, verify (QR scan), download, re-issue, sync with PLRA

#### FR-REG-002: PLRA API Integration (V2.0 New)

- **Description:** Bi-directional sync with PLRA systems
- **Operations:**
  - Submit new property registration
  - Update ownership records
  - Verify property status
  - Download official certificates
  - Sync transfer records
- **Fallback:** Manual entry mode when API is unavailable
- **Validation:** All PLRA submissions validated against regulatory rules before submission
- **Audit:** All PLRA interactions logged

#### FR-REG-003: LDA Compliance Tracking (V2.0 New)

- **Description:** Track and manage LDA (Lahore Development Authority) compliance
- **Features:**
  - Building approval status tracking
  - NOC status management
  - Map approval records
  - Inspection schedule tracking
  - Compliance document storage
  - Auto-reminders for renewals and deadlines

#### FR-REG-004: Regulatory Document Templates (V2.0 New)

- **Description:** Pre-built, customizable document templates for regulatory needs
- **Templates:**
  - Property Certificate (PLRA format)
  - Transfer Deed
  - Possession Letter
  - No Objection Certificate (NOC)
  - Allotment Letter
  - Building Approval Application
  - Compliance Declaration
- **Features:**
  - HTML templates with variable substitution
  - QR code embedding
  - Digital signature support
  - PDF generation
  - Society-level template customization
  - Bulk generation for batch operations

---

### 4.24 Gamification Engine Module (FR-GAME — New)

#### FR-GAME-001: Points System (V2.0 New)

- **Description:** Award points to members for positive behaviors
- **Point Events (configurable per society):**

| Event                                | Default Points | Description                             |
| ------------------------------------ | -------------- | --------------------------------------- |
| Timely installment payment           | 50             | Paid before due date                    |
| Timely bill payment                  | 20             | Paid before due date                    |
| Complaint feedback submitted         | 10             | Rated resolved complaint                |
| Facility booking (no-show = penalty) | 5 / -10        | Booked and used / booked but no-show    |
| Attending society meeting            | 15             | Checked in at event                     |
| Referral                             | 100            | Referred new member who joined          |
| Profile completion                   | 25             | All profile fields filled               |
| Privacy settings configured          | 20             | Set up privacy dashboard                |
| Visitor pre-approval used            | 5              | Used digital pre-approval               |
| Community contribution               | Variable       | Admin-awarded for special contributions |

- **Fields:**
  - memberId, societyId
  - totalPoints, currentPoints (totalPoints minus redeemed)
  - pointsHistory: Array of { event, points, date, description }
  - level: String (calculated from totalPoints)
  - metadata
- **Operations:** View points, view history, view leaderboard

#### FR-GAME-002: Levels & Badges (V2.0 New)

- **Description:** Tiered recognition system
- **Levels (configurable):**

| Level    | Points Required | Badge            |
| -------- | --------------- | ---------------- |
| Bronze   | 0-199           | New Member       |
| Silver   | 200-499         | Active Resident  |
| Gold     | 500-999         | Star Resident    |
| Platinum | 1000-2499       | Model Citizen    |
| Diamond  | 2500+           | Society Champion |

- **Badges:** Special recognition badges for achievements (e.g., "Perfect Payer" — 12 consecutive on-time payments)

#### FR-GAME-003: Rewards & Redemption (V2.0 New)

- **Description:** Members can redeem points for rewards
- **Reward Types (society-configurable):**
  - Discount on next maintenance bill
  - Free facility booking
  - Priority parking for event
  - Society merchandise
  - Featured on "Wall of Fame" on notice board
  - Donation to society welfare fund (in member's name)
- **Fields:** rewardName, description, pointsCost, quantity, validUntil, isActive
- **Operations:** Browse rewards, redeem, view redemption history

#### FR-GAME-004: Leaderboard (V2.0 New)

- **Description:** Competitive ranking of members by points
- **Views:** Monthly, quarterly, yearly, all-time
- **Scope:** Block-level, society-level
- **Privacy:** Members can opt-out of leaderboard (privacy setting)

---

### 4.25 Offline-First PWA Module (FR-PWA — Enhanced)

#### FR-PWA-001: Service Worker & Caching (Enhanced)

- **Description:** Enhanced PWA with offline-first architecture
- **Caching Strategy:**
  - App shell: Cache-first (HTML, CSS, JS, images)
  - API data: Network-first with offline fallback
  - Static assets: Cache-only
  - User data: IndexedDB local storage
- **Features:**
  - Install prompt on mobile browsers
  - App icon on home screen
  - Splash screen
  - Background sync for offline operations
  - Push notification handling

#### FR-PWA-002: Offline Operations (V2.0 New)

- **Description:** Critical operations work offline with background sync
- **Supported Offline Operations:**

| Operation                        | Storage                       | Sync Strategy               |
| -------------------------------- | ----------------------------- | --------------------------- |
| Visitor check-in/out (Guard PWA) | IndexedDB, up to 500 records  | Background sync when online |
| Complaint submission             | IndexedDB                     | Background sync             |
| Facility booking request         | IndexedDB                     | Background sync             |
| Attendance check-in              | IndexedDB + GPS               | Background sync             |
| View own bills/dues              | Cached from last fetch        | Stale while revalidate      |
| View announcements               | Cached                        | Stale while revalidate      |
| View member directory            | Cached (with privacy filters) | Stale while revalidate      |

- **Conflict Resolution:** Server timestamp wins; user notified of conflicts
- **Sync Indicator:** UI shows sync status (synced, pending, error)

#### FR-PWA-003: Voice Input (V2.0 New)

- **Description:** Voice-to-text input in Urdu and English
- **Technology:** Web Speech API (browser-native)
- **Supported Actions:**
  - Dictate complaint description (Urdu or English)
  - Dictate announcement text
  - Voice search for members or plots
  - Voice command for AI assistant
- **Fallback:** Text input always available
- **Privacy:** Audio processed locally in browser (not sent to server)

---

## 5. Non-Functional Requirements

### 5.1 Performance Requirements

| ID           | Requirement                         | Target                       |
| ------------ | ----------------------------------- | ---------------------------- |
| NFR-PERF-001 | API response time (95th percentile) | < 500ms                      |
| NFR-PERF-002 | First Contentful Paint (FCP)        | < 2.5 seconds                |
| NFR-PERF-003 | Time to Interactive (TTI)           | < 3.5 seconds                |
| NFR-PERF-004 | Concurrent users per society        | 500+                         |
| NFR-PERF-005 | Database query execution            | < 100ms (indexed)            |
| NFR-PERF-006 | Real-time notification delivery     | < 2 seconds                  |
| NFR-PERF-007 | File upload (< 10MB)                | < 30 seconds                 |
| NFR-PERF-008 | AI agent response (first token)     | < 3 seconds                  |
| NFR-PERF-009 | Offline operation latency           | < 200ms (local)              |
| NFR-PERF-010 | Background sync completion          | < 30 seconds after reconnect |
| NFR-PERF-011 | Permission cache hit rate           | > 95%                        |
| NFR-PERF-012 | Dynamic config cache hit rate       | > 90%                        |
| NFR-PERF-013 | PDF certificate generation          | < 5 seconds                  |
| NFR-PERF-014 | Batch bill generation (1000 bills)  | < 60 seconds                 |

### 5.2 Security Requirements

| ID          | Requirement                | Implementation                         |
| ----------- | -------------------------- | -------------------------------------- |
| NFR-SEC-001 | JWT authentication         | All protected endpoints                |
| NFR-SEC-002 | Password hashing           | bcrypt, 12+ salt rounds                |
| NFR-SEC-003 | HTTPS enforcement          | All communications                     |
| NFR-SEC-004 | CORS restriction           | Whitelist allowed origins              |
| NFR-SEC-005 | Rate limiting              | Redis-backed, per IP/endpoint          |
| NFR-SEC-006 | XSS protection             | xss-clean + Helmet headers             |
| NFR-SEC-007 | NoSQL injection prevention | express-mongo-sanitize                 |
| NFR-SEC-008 | HPP protection             | hpp middleware                         |
| NFR-SEC-009 | Input validation           | Zod on all endpoints                   |
| NFR-SEC-010 | Soft deletes               | isDeleted flag, no permanent deletion  |
| NFR-SEC-011 | Session tracking           | IP + user agent logging                |
| NFR-SEC-012 | Account lockout            | 5 failed attempts = 15min lock         |
| NFR-SEC-013 | Token rotation             | Refresh token rotated on use           |
| NFR-SEC-014 | Multi-tenant isolation     | tenantId filtering on all queries      |
| NFR-SEC-015 | File validation            | Type, size, content checking           |
| NFR-SEC-016 | Environment secrets        | Zod-validated, never exposed to client |
| NFR-SEC-017 | Audit immutability         | Append-only audit logs                 |
| NFR-SEC-018 | Sensitive doc encryption   | AES-256 at rest (vault)                |
| NFR-SEC-019 | AI safety guardrails       | Content filtering, data access limits  |
| NFR-SEC-020 | Privacy enforcement        | Server-side data filtering             |
| NFR-SEC-021 | PLRA data protection       | Encrypted storage, access logging      |
| NFR-SEC-022 | Biometric data             | Hash-only storage (no raw biometric)   |

### 5.3 Reliability & Availability

| ID          | Requirement                 | Target                                    |
| ----------- | --------------------------- | ----------------------------------------- |
| NFR-REL-001 | System uptime               | 99.5%                                     |
| NFR-REL-002 | Graceful shutdown           | Complete in-flight requests               |
| NFR-REL-003 | Health check endpoints      | /api/health with dependency status        |
| NFR-REL-004 | Auto-reconnection           | Database + Redis auto-reconnect           |
| NFR-REL-005 | Error boundaries            | Frontend: per-page error boundaries       |
| NFR-REL-006 | Retry logic                 | External services: 3 retries with backoff |
| NFR-REL-007 | Database backups            | MongoDB Atlas automated (daily)           |
| NFR-REL-008 | Log rotation                | Daily rotation, 30-day retention          |
| NFR-REL-009 | Offline resilience          | Critical operations work without network  |
| NFR-REL-010 | Background sync reliability | Queue with retry for failed syncs         |

### 5.4 Scalability

| ID            | Requirement        | Implementation                   |
| ------------- | ------------------ | -------------------------------- |
| NFR-SCALE-001 | Horizontal scaling | Stateless API servers            |
| NFR-SCALE-002 | Database scaling   | MongoDB Atlas auto-scaling       |
| NFR-SCALE-003 | Cache scaling      | Redis cluster support            |
| NFR-SCALE-004 | Static assets      | CDN via Next.js / Cloudinary     |
| NFR-SCALE-005 | File storage       | Cloudinary distributed storage   |
| NFR-SCALE-006 | WebSocket scaling  | Socket.io with Redis adapter     |
| NFR-SCALE-007 | Job processing     | Agenda.js with multiple workers  |
| NFR-SCALE-008 | AI rate management | Per-tenant rate limiting + queue |

### 5.5 Usability

| ID          | Requirement           | Implementation                                |
| ----------- | --------------------- | --------------------------------------------- |
| NFR-USE-001 | Responsive design     | Desktop, tablet, mobile (320px min)           |
| NFR-USE-002 | Consistent UI         | Radix UI component library                    |
| NFR-USE-003 | Form validation       | Inline errors, real-time validation           |
| NFR-USE-004 | Toast notifications   | Sonner for user feedback                      |
| NFR-USE-005 | Loading states        | Skeleton screens, progress indicators         |
| NFR-USE-006 | Keyboard navigation   | Full keyboard accessibility                   |
| NFR-USE-007 | Theme support         | Light/Dark/System themes                      |
| NFR-USE-008 | Breadcrumb navigation | All nested pages                              |
| NFR-USE-009 | Data tables           | Sorting, filtering, pagination, column toggle |
| NFR-USE-010 | Drag & drop           | Workflow builder, reordering (dnd-kit)        |
| NFR-USE-011 | PWA experience        | Install prompt, offline banner, sync status   |
| NFR-USE-012 | Animations            | Smooth transitions (Framer Motion)            |
| NFR-USE-013 | Voice input           | Urdu/English speech-to-text                   |
| NFR-USE-014 | AI assistant          | Natural language interaction                  |
| NFR-USE-015 | Multilingual          | English + Urdu (extensible)                   |
| NFR-USE-016 | Accessibility         | ARIA labels, focus management, reduced motion |

### 5.6 Maintainability

| ID           | Requirement          | Implementation                                 |
| ------------ | -------------------- | ---------------------------------------------- |
| NFR-MAIN-001 | TypeScript           | Full-stack type safety                         |
| NFR-MAIN-002 | Modular architecture | Independent feature modules                    |
| NFR-MAIN-003 | Coding standards     | ESLint + Prettier enforcement                  |
| NFR-MAIN-004 | API documentation    | Swagger/OpenAPI auto-generated                 |
| NFR-MAIN-005 | Environment config   | Zod-validated, per-environment                 |
| NFR-MAIN-006 | Database seeding     | Development and testing seeds                  |
| NFR-MAIN-007 | Structured logging   | Winston with daily rotation                    |
| NFR-MAIN-008 | Validation schemas   | Zod for compile-time + runtime safety          |
| NFR-MAIN-009 | Dynamic config       | Reduces code changes for business rule changes |
| NFR-MAIN-010 | Workflow engine      | New approval flows without code deployment     |

### 5.7 Compatibility

| ID           | Requirement      | Specification                                 |
| ------------ | ---------------- | --------------------------------------------- |
| NFR-COMP-001 | Desktop browsers | Chrome 90+, Firefox 90+, Safari 15+, Edge 90+ |
| NFR-COMP-002 | Mobile browsers  | iOS Safari 15+, Android Chrome 90+            |
| NFR-COMP-003 | Minimum viewport | 320px width                                   |
| NFR-COMP-004 | Backend runtime  | Node.js v20+                                  |
| NFR-COMP-005 | Database         | MongoDB 6.0+                                  |
| NFR-COMP-006 | PWA              | Service Worker API support required           |
| NFR-COMP-007 | Voice input      | Web Speech API (Chrome, Edge, Safari)         |

### 5.8 Innovation Metrics (V2.0 New)

| ID            | Metric                                                | Target                |
| ------------- | ----------------------------------------------------- | --------------------- |
| NFR-INNOV-001 | AI suggestion acceptance rate                         | > 60%                 |
| NFR-INNOV-002 | Defaulter prediction accuracy (30-day)                | > 75%                 |
| NFR-INNOV-003 | Workflow builder adoption (% of societies using)      | > 40% within 6 months |
| NFR-INNOV-004 | Privacy score average across societies                | > 85                  |
| NFR-INNOV-005 | Offline operation success rate                        | > 99%                 |
| NFR-INNOV-006 | Gamification engagement (% of members earning points) | > 50%                 |
| NFR-INNOV-007 | Vendor marketplace response rate                      | > 70% within 48h      |
| NFR-INNOV-008 | Voice input usage (% of complaint submissions)        | > 15%                 |

---

## 6. Database Design

### 6.1 Database Technology

- **Engine:** MongoDB (NoSQL Document Database)
- **Hosting:** MongoDB Atlas (Cloud)
- **ODM:** Mongoose v8.9
- **Design Patterns:** Soft deletes, audit fields, multi-tenant (societyId/tenantId), metadata JSONB for custom fields

### 6.2 Common Fields (All Collections)

| Field                | Type     | Description                        |
| -------------------- | -------- | ---------------------------------- |
| \_id                 | ObjectId | Primary key (auto-generated)       |
| tenantId / societyId | ObjectId | Tenant isolation key               |
| createdAt            | Date     | Record creation timestamp          |
| updatedAt            | Date     | Last update timestamp              |
| createdBy            | ObjectId | User who created the record        |
| updatedBy            | ObjectId | User who last updated              |
| isDeleted            | Boolean  | Soft delete flag (default: false)  |
| deletedAt            | Date     | Soft delete timestamp              |
| metadata             | Object   | Dynamic custom fields (schemaless) |

### 6.3 Collection List (65+ Collections)

#### Existing Collections (V1.0 — Retained)

| #   | Collection             | Description                     |
| --- | ---------------------- | ------------------------------- |
| 1   | users                  | User accounts and profiles      |
| 2   | members                | Society members                 |
| 3   | societies              | Housing societies               |
| 4   | projects               | Housing projects                |
| 5   | plots                  | Individual plots                |
| 6   | plotBlocks             | Plot blocks/sectors             |
| 7   | plotCategories         | Plot categories                 |
| 8   | plotSizes              | Plot size definitions           |
| 9   | plotTypes              | Plot type definitions           |
| 10  | billInfos              | Bills/invoices                  |
| 11  | billTypes              | Bill type definitions           |
| 12  | paymentModes           | Payment method definitions      |
| 13  | installmentPlans       | Payment installment plans       |
| 14  | installmentSchedules   | Individual installment records  |
| 15  | installmentCategories  | Installment categories          |
| 16  | possessions            | Plot possessions                |
| 17  | transfers              | Property transfers              |
| 18  | transferTypes          | Transfer type definitions       |
| 19  | registries             | Property registrations          |
| 20  | salesStatuses          | Sales pipeline tracking         |
| 21  | defaulters             | Payment defaulters              |
| 22  | announcements          | Society announcements           |
| 23  | announcementCategories | Announcement categories         |
| 24  | notifications          | User notifications              |
| 25  | complaints             | Member complaints               |
| 26  | complaintCategories    | Complaint categories            |
| 27  | visitors               | Visitor records                 |
| 28  | facilities             | Society facilities              |
| 29  | facilityBookings       | Facility reservations           |
| 30  | applications           | Member applications             |
| 31  | applicationTypes       | Application type definitions    |
| 32  | files                  | Uploaded files/documents        |
| 33  | nominees               | Member nominees                 |
| 34  | developments           | Development phases              |
| 35  | srDevStatuses          | Development status definitions  |
| 36  | userPermissions        | Permission assignments          |
| 37  | userRoles              | Role definitions                |
| 38  | userStaffs             | Staff records                   |
| 39  | srModules              | System module definitions       |
| 40  | lookups                | Legacy lookup values            |
| 41  | auditLogs              | Activity audit trail            |
| 42  | statuses               | Status configurations           |
| 43  | cities                 | City master data                |
| 44  | states                 | State/province master data      |
| 45  | subscriptions          | Subscription plans              |
| 46  | pushSubscriptions      | Push notification subscriptions |

#### New Collections (V2.0)

| #   | Collection              | Description                                                                |
| --- | ----------------------- | -------------------------------------------------------------------------- |
| 47  | dynamicLookups          | Unified dynamic lookup values (replaces scattered type/status collections) |
| 48  | workflows               | Workflow definitions (trigger, steps, conditions)                          |
| 49  | workflowInstances       | Active workflow execution state                                            |
| 50  | workflowStepLogs        | Workflow step execution history                                            |
| 51  | customFormDefinitions   | Dynamic form field definitions per entity                                  |
| 52  | aiConversations         | AI agent conversation history                                              |
| 53  | aiInsights              | AI-generated insights and predictions                                      |
| 54  | attendanceRecords       | Geo-tagged/biometric attendance records                                    |
| 55  | shifts                  | Shift definitions and schedules                                            |
| 56  | geofences               | Society geofence definitions (lat, lng, radius)                            |
| 57  | vendorProfiles          | Vendor/dealer registration profiles                                        |
| 58  | vendorRatings           | Vendor performance ratings and reviews                                     |
| 59  | workOrders              | Vendor work orders / tenders                                               |
| 60  | vendorBids              | Bids submitted by vendors on work orders                                   |
| 61  | vendorContracts         | AMC and one-time vendor contracts                                          |
| 62  | vendorInvoices          | Vendor submitted invoices                                                  |
| 63  | plraCertificates        | PLRA property certificate records                                          |
| 64  | plraSyncLogs            | PLRA API sync logs                                                         |
| 65  | privacySettings         | Per-member privacy configurations                                          |
| 66  | privacyAccessLogs       | Data access audit for privacy compliance                                   |
| 67  | consentRecords          | User consent history                                                       |
| 68  | gamificationPoints      | Member point balances and history                                          |
| 69  | gamificationRewards     | Available rewards catalog                                                  |
| 70  | gamificationRedemptions | Reward redemption records                                                  |
| 71  | gamificationBadges      | Badge definitions                                                          |
| 72  | memberBadges            | Badges earned by members                                                   |
| 73  | offlineSyncQueue        | Pending offline operations queue                                           |
| 74  | societySubscriptions    | Society-plan assignment records                                            |
| 75  | visitorPreApprovals     | Pre-approved visitor passes                                                |
| 76  | recurringVisitors       | Recurring visitor schedules                                                |
| 77  | documentTemplates       | Regulatory document templates                                              |
| 78  | handoverRecords         | Committee handover history                                                 |

### 6.4 Entity Relationship Diagram (Key Relationships)

```
Society (1) ----< (M) Project
Society (1) ----< (M) Member
Society (1) ----< (M) DynamicLookup (tenant overrides)
Society (1) ----< (M) Workflow
Society (1) ----< (M) CustomFormDefinition
Society (1) ----< (M) Facility
Society (1) ----< (M) Announcement
Society (1) ----< (M) Development
Society (1) ----< (M) AuditLog
Society (1) ----< (M) VendorContract
Society (1) ----< (M) WorkOrder
Society (1) ----< (M) Geofence
Society (1) ----< (M) GamificationReward
Society (1) >---- (1) Subscription (via SocietySubscription)

Project (1) ----< (M) Plot
Project (1) ----< (M) PlotBlock
Project (1) ----< (M) Development

Plot (M) >---- (1) PlotBlock
Plot (M) >---- (1) PlotCategory
Plot (M) >---- (1) PlotSize
Plot (M) >---- (1) PlotType
Plot (M) >---- (1) Member (owner)
Plot (1) ----< (M) BillInfo
Plot (1) ----< (M) InstallmentPlan
Plot (1) ----< (M) Possession
Plot (1) ----< (M) Transfer
Plot (1) ----< (M) Registry
Plot (1) ----< (M) SalesStatus
Plot (1) ----< (M) PLRACertificate

Member (1) ----< (M) BillInfo
Member (1) ----< (M) InstallmentPlan
Member (1) ----< (M) Complaint
Member (1) ----< (M) Application
Member (1) ----< (M) FacilityBooking
Member (1) ----< (M) Nominee
Member (1) ----< (M) Visitor (visiting)
Member (1) ----< (M) VisitorPreApproval
Member (1) >---- (1) PrivacySettings
Member (1) >---- (1) GamificationPoints
Member (1) ----< (M) MemberBadge

User (1) ----< (M) Notification
User (1) ----< (M) PushSubscription
User (1) ----< (M) AIConversation
User (1) ----< (M) AttendanceRecord
User (M) >---- (1) UserRole

UserRole (1) ----< (M) UserPermission
SrModule (1) ----< (M) UserPermission

Workflow (1) ----< (M) WorkflowInstance
WorkflowInstance (1) ----< (M) WorkflowStepLog

VendorProfile (1) ----< (M) VendorBid
VendorProfile (1) ----< (M) VendorContract
VendorProfile (1) ----< (M) VendorInvoice
VendorProfile (1) ----< (M) VendorRating

WorkOrder (1) ----< (M) VendorBid
WorkOrder (M) >---- (1) VendorProfile (awarded)
```

### 6.5 Indexing Strategy

| Collection           | Indexed Fields                                                     | Type              |
| -------------------- | ------------------------------------------------------------------ | ----------------- |
| users                | email (unique), status, role                                       | Single, Compound  |
| members              | societyId + CNIC (unique), membershipNumber (unique), email, phone | Compound, Single  |
| plots                | projectId + plotNumber (unique), societyId + status, blockId       | Compound          |
| billInfos            | memberId + status, societyId + dueDate, billNumber                 | Compound          |
| installmentPlans     | memberId, plotId, status                                           | Single            |
| installmentSchedules | installmentPlanId + installmentNumber, dueDate + status            | Compound          |
| complaints           | societyId + status, memberId, createdAt                            | Compound          |
| notifications        | userId + isRead, createdAt (TTL index for cleanup)                 | Compound          |
| auditLogs            | societyId + createdAt, userId, module + action                     | Compound          |
| visitors             | societyId + entryDate, qrPass, CNIC                                | Compound, Single  |
| userPermissions      | roleId + srModuleId (unique)                                       | Compound (unique) |
| dynamicLookups       | category + societyId + key (unique), category + isActive           | Compound          |
| workflows            | societyId + triggerEntity + isActive                               | Compound          |
| workflowInstances    | workflowId + status, entityId                                      | Compound          |
| attendanceRecords    | staffId + date (unique), societyId + date                          | Compound          |
| vendorProfiles       | email (unique), vendorType + status                                | Single, Compound  |
| workOrders           | societyId + status, deadline                                       | Compound          |
| plraCertificates     | certificateNumber (unique), plotId                                 | Single            |
| gamificationPoints   | memberId + societyId (unique)                                      | Compound (unique) |
| privacySettings      | memberId (unique)                                                  | Single (unique)   |
| privacyAccessLogs    | memberId + accessDate, accessorId                                  | Compound          |
| offlineSyncQueue     | userId + status, createdAt                                         | Compound          |

---

## 7. API Specification

### 7.1 API Design Principles

- RESTful design following HTTP method conventions
- Base URL: `/api/` (versioning via headers or path prefix)
- JSON request and response bodies
- Consistent response format
- Pagination support on list endpoints (`page`, `limit`, `sort`, `order`)
- Filtering via query parameters
- Swagger/OpenAPI documentation auto-generated

### 7.2 Standard Response Format

**Success Response:**

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... },
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

**Error Response:**

```json
{
  "success": false,
  "message": "Error description",
  "error": {
    "code": "VALIDATION_ERROR",
    "details": [ ... ]
  }
}
```

### 7.3 Authentication Endpoints

| Method | Endpoint                        | Description                    | Auth | Rate Limit |
| ------ | ------------------------------- | ------------------------------ | ---- | ---------- |
| POST   | `/api/auth/register`            | Register new user              | No   | 3/15min    |
| POST   | `/api/auth/login`               | Login with credentials         | No   | 5/15min    |
| POST   | `/api/auth/google`              | Google OAuth login             | No   | 5/15min    |
| POST   | `/api/auth/verify-otp`          | Verify email OTP               | No   | 5/15min    |
| POST   | `/api/auth/resend-otp`          | Resend verification OTP        | No   | 3/60min    |
| POST   | `/api/auth/forgot-password`     | Request password reset         | No   | 3/60min    |
| POST   | `/api/auth/reset-password`      | Reset password with OTP        | No   | 3/60min    |
| POST   | `/api/auth/refresh-token`       | Refresh JWT tokens             | Yes  | 10/15min   |
| POST   | `/api/auth/logout`              | Logout / invalidate token      | Yes  | -          |
| GET    | `/api/auth/me`                  | Get current user profile       | Yes  | -          |
| PUT    | `/api/auth/update-profile`      | Update user profile            | Yes  | -          |
| PUT    | `/api/auth/change-password`     | Change password                | Yes  | 3/60min    |
| POST   | `/api/auth/push-subscribe`      | Register push subscription     | Yes  | -          |
| DELETE | `/api/auth/push-unsubscribe`    | Remove push subscription       | Yes  | -          |
| POST   | `/api/auth/impersonate/:userId` | Impersonate user (Super Admin) | Yes  | 5/60min    |
| DELETE | `/api/auth/impersonate`         | End impersonation              | Yes  | -          |

### 7.4 Standard CRUD Pattern

Each module follows:

| Method | Pattern             | Description                        | Permission |
| ------ | ------------------- | ---------------------------------- | ---------- |
| GET    | `/api/{module}`     | List with pagination, filter, sort | canRead    |
| GET    | `/api/{module}/:id` | Get single by ID                   | canRead    |
| POST   | `/api/{module}`     | Create new                         | canCreate  |
| PUT    | `/api/{module}/:id` | Update by ID                       | canUpdate  |
| DELETE | `/api/{module}/:id` | Soft delete by ID                  | canDelete  |

### 7.5 New V2.0 Endpoints

#### Dynamic Configuration

| Method | Endpoint                         | Description                       |
| ------ | -------------------------------- | --------------------------------- |
| GET    | `/api/config/lookups`            | List lookups (filter by category) |
| GET    | `/api/config/lookups/:category`  | Get all values for a category     |
| POST   | `/api/config/lookups`            | Create lookup value               |
| PUT    | `/api/config/lookups/:id`        | Update lookup value               |
| DELETE | `/api/config/lookups/:id`        | Delete lookup value               |
| POST   | `/api/config/lookups/bulk`       | Bulk create/update lookups        |
| GET    | `/api/config/lookups/categories` | List all lookup categories        |

#### Workflow Builder

| Method | Endpoint                              | Description              |
| ------ | ------------------------------------- | ------------------------ |
| GET    | `/api/workflows`                      | List workflows           |
| GET    | `/api/workflows/:id`                  | Get workflow with steps  |
| POST   | `/api/workflows`                      | Create workflow          |
| PUT    | `/api/workflows/:id`                  | Update workflow          |
| DELETE | `/api/workflows/:id`                  | Delete workflow          |
| POST   | `/api/workflows/:id/test`             | Test/simulate workflow   |
| GET    | `/api/workflows/:id/instances`        | List execution instances |
| GET    | `/api/workflow-instances/:id`         | Get instance status      |
| POST   | `/api/workflow-instances/:id/approve` | Approve pending step     |
| POST   | `/api/workflow-instances/:id/reject`  | Reject pending step      |

#### Custom Forms

| Method | Endpoint                        | Description                  |
| ------ | ------------------------------- | ---------------------------- |
| GET    | `/api/config/forms/:entityType` | Get custom fields for entity |
| POST   | `/api/config/forms`             | Create custom field          |
| PUT    | `/api/config/forms/:id`         | Update custom field          |
| DELETE | `/api/config/forms/:id`         | Delete custom field          |
| PUT    | `/api/config/forms/reorder`     | Reorder fields               |

#### AI Agents

| Method | Endpoint                     | Description                          |
| ------ | ---------------------------- | ------------------------------------ |
| POST   | `/api/ai/chat`               | Send message to AI agent (streaming) |
| GET    | `/api/ai/conversations`      | List user's conversations            |
| GET    | `/api/ai/conversations/:id`  | Get conversation history             |
| DELETE | `/api/ai/conversations/:id`  | Delete conversation                  |
| GET    | `/api/ai/insights`           | Get AI insights for dashboard        |
| POST   | `/api/ai/defaulter-analysis` | Run defaulter prediction             |
| POST   | `/api/ai/complaint-analysis` | Run complaint sentiment analysis     |
| GET    | `/api/ai/predictions`        | Get predictive analytics             |

#### PLRA/LDA Regulatory

| Method | Endpoint                            | Description                   |
| ------ | ----------------------------------- | ----------------------------- |
| GET    | `/api/plra/certificates`            | List certificates             |
| GET    | `/api/plra/certificates/:id`        | Get certificate details       |
| POST   | `/api/plra/certificates/generate`   | Generate new certificate      |
| POST   | `/api/plra/certificates/:id/sync`   | Sync with PLRA API            |
| GET    | `/api/plra/certificates/:id/verify` | Verify certificate (QR)       |
| GET    | `/api/plra/compliance`              | Get compliance dashboard data |
| GET    | `/api/plra/sync-logs`               | View sync history             |

#### Attendance & Workforce

| Method | Endpoint                    | Description                |
| ------ | --------------------------- | -------------------------- |
| POST   | `/api/attendance/check-in`  | Check in with location     |
| POST   | `/api/attendance/check-out` | Check out with location    |
| GET    | `/api/attendance`           | List attendance records    |
| GET    | `/api/attendance/summary`   | Monthly attendance summary |
| GET    | `/api/shifts`               | List shifts                |
| POST   | `/api/shifts`               | Create shift               |
| PUT    | `/api/shifts/:id`           | Update shift               |
| DELETE | `/api/shifts/:id`           | Delete shift               |
| GET    | `/api/geofences`            | List geofences             |
| POST   | `/api/geofences`            | Create geofence            |

#### Vendor Marketplace

| Method | Endpoint                           | Description           |
| ------ | ---------------------------------- | --------------------- |
| GET    | `/api/vendors`                     | List vendors          |
| POST   | `/api/vendors/register`            | Register as vendor    |
| PUT    | `/api/vendors/:id`                 | Update vendor profile |
| GET    | `/api/vendors/:id`                 | Get vendor details    |
| POST   | `/api/vendors/:id/verify`          | Verify vendor         |
| GET    | `/api/work-orders`                 | List work orders      |
| POST   | `/api/work-orders`                 | Create work order     |
| PUT    | `/api/work-orders/:id`             | Update work order     |
| POST   | `/api/work-orders/:id/bid`         | Submit bid            |
| POST   | `/api/work-orders/:id/award`       | Award to vendor       |
| GET    | `/api/vendor-contracts`            | List contracts        |
| POST   | `/api/vendor-contracts`            | Create contract       |
| GET    | `/api/vendor-invoices`             | List invoices         |
| POST   | `/api/vendor-invoices`             | Submit invoice        |
| POST   | `/api/vendor-invoices/:id/approve` | Approve invoice       |
| POST   | `/api/vendors/:id/rate`            | Rate vendor           |

#### Privacy

| Method | Endpoint                      | Description                       |
| ------ | ----------------------------- | --------------------------------- |
| GET    | `/api/privacy/settings`       | Get own privacy settings          |
| PUT    | `/api/privacy/settings`       | Update privacy settings           |
| GET    | `/api/privacy/access-log`     | View who accessed your data       |
| POST   | `/api/privacy/export`         | Request data export               |
| POST   | `/api/privacy/delete-request` | Request data deletion             |
| GET    | `/api/privacy/consents`       | View consent history              |
| PUT    | `/api/privacy/consents/:id`   | Update consent                    |
| GET    | `/api/privacy/score`          | Get society privacy score (admin) |

#### Gamification

| Method | Endpoint                        | Description                    |
| ------ | ------------------------------- | ------------------------------ |
| GET    | `/api/gamification/points`      | Get own points balance         |
| GET    | `/api/gamification/history`     | Get points history             |
| GET    | `/api/gamification/leaderboard` | Get leaderboard                |
| GET    | `/api/gamification/rewards`     | List available rewards         |
| POST   | `/api/gamification/redeem`      | Redeem reward                  |
| GET    | `/api/gamification/badges`      | Get own badges                 |
| POST   | `/api/gamification/award`       | Award points (admin)           |
| PUT    | `/api/gamification/config`      | Configure point values (admin) |

#### Visitor Pre-Approval

| Method | Endpoint                          | Description              |
| ------ | --------------------------------- | ------------------------ |
| POST   | `/api/visitors/pre-approve`       | Create pre-approval      |
| GET    | `/api/visitors/pre-approvals`     | List pre-approvals       |
| DELETE | `/api/visitors/pre-approvals/:id` | Cancel pre-approval      |
| POST   | `/api/visitors/verify-qr`         | Verify QR pass (guard)   |
| POST   | `/api/visitors/verify-otp`        | Verify OTP (guard)       |
| GET    | `/api/visitors/recurring`         | List recurring visitors  |
| POST   | `/api/visitors/recurring`         | Create recurring visitor |
| PUT    | `/api/visitors/recurring/:id`     | Update recurring visitor |
| DELETE | `/api/visitors/recurring/:id`     | Revoke recurring access  |

#### Offline Sync

| Method | Endpoint           | Description                       |
| ------ | ------------------ | --------------------------------- |
| POST   | `/api/sync/push`   | Push offline operations to server |
| GET    | `/api/sync/pull`   | Pull updates since last sync      |
| GET    | `/api/sync/status` | Get sync status                   |

#### Committee Handover

| Method | Endpoint                 | Description               |
| ------ | ------------------------ | ------------------------- |
| POST   | `/api/handover/initiate` | Initiate handover process |
| GET    | `/api/handover/summary`  | Generate handover summary |
| POST   | `/api/handover/complete` | Complete handover         |
| GET    | `/api/handover/history`  | View past handovers       |

#### Health

| Method | Endpoint      | Description                          |
| ------ | ------------- | ------------------------------------ |
| GET    | `/api/health` | System health with dependency status |

---

## 8. User Interface Requirements

### 8.1 Layout Structure

```
+------------------------------------------------------------------+
|  Header (Logo, Search, AI Chat Toggle, Notifications, Profile)   |
+----------+-----------------------------------------------+-------+
|          |                                               |       |
| Sidebar  |           Main Content Area                   |  AI   |
| (Nav)    |                                               | Chat  |
|          |  +---------------------------------------+    | Side  |
| Dynamic  |  |  Breadcrumbs                          |    | bar   |
| based on |  +---------------------------------------+    | (V2)  |
| role +   |  |  Page Title + Actions                 |    |       |
| modules  |  +---------------------------------------+    |       |
|          |  |                                       |    |       |
|          |  |  Content (Dynamic rendering)          |    |       |
|          |  |                                       |    |       |
|          |  +---------------------------------------+    |       |
|          |  |  Pagination / Actions                 |    |       |
+----------+-----------------------------------------------+-------+
```

### 8.2 Page Types

| Type                 | Description                           | Components                                                     |
| -------------------- | ------------------------------------- | -------------------------------------------------------------- |
| **List Page**        | Data table with CRUD actions          | DataTable, Filters, Search, Actions, Pagination, Export        |
| **Create/Edit Page** | Form with dynamic fields              | Form, Dynamic Fields (V2.0), File Upload, Validation           |
| **View/Detail Page** | Read-only display with related data   | Sections, Status Badge, Timeline, Related Entities, Actions    |
| **Dashboard**        | KPI widgets and charts                | Cards, Charts (Recharts), AI Insights (V2.0), Quick Actions    |
| **Matrix Page**      | Grid for permission/config management | Permission Matrix, Toggles, Bulk Actions                       |
| **Canvas Page**      | Visual builder (V2.0)                 | Drag-and-Drop Canvas (dnd-kit), Step Palette, Properties Panel |
| **Chat Page**        | AI agent conversation (V2.0)          | Chat Messages, Input with Voice, Streaming Response            |
| **Portal Page**      | External user interface (V2.0)        | Guard PWA, Vendor Portal — simplified layouts                  |

### 8.3 Public Pages

| Page                | Route                    | Description                              |
| ------------------- | ------------------------ | ---------------------------------------- |
| Login               | `/login`                 | Email/password + Google OAuth login      |
| Signup              | `/signup`                | Registration with privacy consent (V2.0) |
| Forgot Password     | `/forgot-password`       | Password reset request                   |
| Reset Password      | `/reset-password`        | OTP + new password form                  |
| Verify Email        | `/verify-email`          | OTP verification page                    |
| OAuth Callback      | `/auth`                  | Google OAuth callback handler            |
| Vendor Registration | `/vendor/register`       | Vendor self-registration (V2.0)          |
| Certificate Verify  | `/verify/:certificateId` | QR code certificate verification (V2.0)  |

### 8.4 Protected Pages (70+ pages)

**Existing Pages (V1.0 — All retained):**
Dashboard, Analytics, Profile, Super Admin, Societies, Projects, Plots, Plot Blocks, Plot Categories, Plot Sizes, Plot Types, Members, Bill Info, Bill Types, Payment Modes, Installments, Installment Plans, Installment Categories, Possessions, Transfers, Transfer Types, Registry, Sales Status, Defaulters, Announcements, Announcement Categories, Complaints, Complaint Categories, Visitors, Facilities, Facility Bookings, Applications, Application Types, Files, Nominees, Permissions, Roles, User Staff, Lookups, Cities, States, Status Config, Dev Status, Subscriptions, Lifecycle

**New Pages (V2.0):**

| Module         | Pages                                                               | Routes            |
| -------------- | ------------------------------------------------------------------- | ----------------- |
| Dynamic Config | Lookup Manager, Workflow Builder Canvas, Form Builder               | `/config/*`       |
| AI             | AI Chat (sidebar), AI Insights Dashboard, AI Agent Config           | `/ai/*`           |
| PLRA/LDA       | Certificate Manager, Compliance Cockpit, Sync Logs                  | `/plra/*`         |
| Workforce      | Attendance Dashboard, Shift Manager, Geofence Config                | `/workforce/*`    |
| Vendor         | Vendor List, Vendor Profile, Work Orders, Contracts, Invoices, Bids | `/vendors/*`      |
| Privacy        | Privacy Dashboard (resident), Privacy Admin, Consent Manager        | `/privacy/*`      |
| Gamification   | Points, Leaderboard, Rewards, Badges, Config                        | `/gamification/*` |
| Handover       | Handover Wizard, Handover History                                   | `/handover/*`     |

**Guard PWA Pages:**

| Page              | Route              | Description                                 |
| ----------------- | ------------------ | ------------------------------------------- |
| Guard Dashboard   | `/guard`           | Quick actions: check-in, check-out, scan QR |
| Visitor Check-in  | `/guard/check-in`  | QR scan, OTP, manual entry                  |
| Visitor Check-out | `/guard/check-out` | Quick check-out with search                 |
| Visitor Log       | `/guard/log`       | Today's visitors list                       |
| Emergency         | `/guard/emergency` | Emergency alert button                      |

**Vendor Portal Pages:**

| Page             | Route                 | Description                                     |
| ---------------- | --------------------- | ----------------------------------------------- |
| Vendor Dashboard | `/vendor/dashboard`   | Active contracts, open orders, pending invoices |
| Work Orders      | `/vendor/work-orders` | Browse and bid on work orders                   |
| My Contracts     | `/vendor/contracts`   | Active and past contracts                       |
| Invoices         | `/vendor/invoices`    | Submit and track invoices                       |
| Profile          | `/vendor/profile`     | Vendor profile management                       |

### 8.5 UI Component Library

Built on **Radix UI** primitives with TailwindCSS v4 styling:

**Base Components (V1.0):** Accordion, Alert Dialog, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Checkbox, Collapsible, Command, Data Table, Date Picker, Dialog, Dropdown Menu, Form, Input, Label, Menubar, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Sheet, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toast (Sonner), Tooltip

**New Components (V2.0):**

| Component             | Usage                                                   |
| --------------------- | ------------------------------------------------------- |
| Workflow Canvas       | Visual workflow builder with drag-and-drop steps        |
| Step Node             | Individual workflow step (approval, notification, etc.) |
| Connection Line       | SVG arrows connecting workflow steps                    |
| Dynamic Form Renderer | Renders forms from custom field definitions             |
| AI Chat Panel         | Sliding sidebar for AI agent conversations              |
| AI Message Bubble     | Chat message with streaming text support                |
| Voice Input Button    | Microphone button with recording animation              |
| Privacy Toggle Card   | Privacy setting with description and toggle             |
| Points Badge          | Gamification points display with level indicator        |
| Leaderboard Table     | Ranked member list with points and badges               |
| Certificate Card      | PLRA certificate display with QR code                   |
| Geofence Map          | Map with configurable geofence circle overlay           |
| Attendance Calendar   | Monthly calendar with attendance status colors          |
| Sync Status Indicator | Online/offline/syncing status badge                     |
| Risk Gauge            | Semicircular gauge for risk scores (defaulter)          |
| Privacy Score Gauge   | Circular gauge for privacy health score                 |
| Vendor Bid Card       | Work order bid display with comparison view             |

---

## 9. External Interface Requirements

### 9.1 Software Interfaces

| External System    | Interface                | Purpose                           |
| ------------------ | ------------------------ | --------------------------------- |
| MongoDB Atlas      | Mongoose ODM (TCP 27017) | Primary database                  |
| Redis              | ioredis (TCP 6379)       | Caching, rate limiting, job queue |
| Cloudinary         | REST API (HTTPS)         | File storage and CDN              |
| Google OAuth       | OAuth 2.0 (HTTPS)        | Social authentication             |
| SMTP Server        | Nodemailer (SMTP/TLS)    | Email delivery                    |
| Web Push Service   | VAPID/Web Push Protocol  | Browser push notifications        |
| **Groq AI API**    | REST API (HTTPS)         | AI agent inference (V2.0)         |
| **PLRA API**       | REST API (HTTPS)         | Property registration (V2.0)      |
| **LDA API**        | REST API (HTTPS)         | Building compliance (V2.0)        |
| **LocationIQ**     | REST API (HTTPS)         | Geocoding for maps                |
| **Web Speech API** | Browser API              | Voice input (V2.0)                |
| **WebAuthn**       | Browser API              | Biometric authentication (V2.0)   |

### 9.2 Communication Interfaces

| Protocol | Port    | Usage                               |
| -------- | ------- | ----------------------------------- |
| HTTPS    | 443     | Client-server API, AI streaming     |
| WSS      | 443     | WebSocket (Socket.io) for real-time |
| SMTP/TLS | 587/465 | Email delivery                      |
| MongoDB  | 27017   | Database connection                 |
| Redis    | 6379    | Cache + job queue                   |

---

## 10. Security Requirements

### 10.1 Authentication Security

| #      | Requirement         | Implementation                         |
| ------ | ------------------- | -------------------------------------- |
| SEC-01 | Password hashing    | bcrypt, 12+ salt rounds                |
| SEC-02 | JWT security        | Access (15min), Refresh (7d), rotation |
| SEC-03 | Account lockout     | 5 failed attempts = 15min lock         |
| SEC-04 | OTP security        | 6-digit, 10-minute expiry              |
| SEC-05 | OAuth verification  | Server-side Google token validation    |
| SEC-06 | Session tracking    | IP + user agent + geolocation          |
| SEC-07 | Impersonation audit | Full trail with impersonator ID        |

### 10.2 API Security

| #      | Requirement      | Implementation             |
| ------ | ---------------- | -------------------------- |
| SEC-08 | Input validation | Zod schemas, all endpoints |
| SEC-09 | XSS prevention   | xss-clean + Helmet         |
| SEC-10 | NoSQL injection  | express-mongo-sanitize     |
| SEC-11 | CORS policy      | Whitelist origins          |
| SEC-12 | Rate limiting    | Redis-backed, per endpoint |
| SEC-13 | HTTP headers     | Helmet security headers    |
| SEC-14 | HPP              | hpp middleware             |
| SEC-15 | Body size limits | Configurable per route     |
| SEC-16 | Compression      | gzip/deflate               |

### 10.3 Data Security

| #      | Requirement         | Implementation                               |
| ------ | ------------------- | -------------------------------------------- |
| SEC-17 | Tenant isolation    | tenantId on all queries, middleware enforced |
| SEC-18 | Soft deletes        | isDeleted flag, append-only audit            |
| SEC-19 | File security       | Type validation, size limits, CDN storage    |
| SEC-20 | Environment secrets | Zod-validated, never client-exposed          |
| SEC-21 | Database encryption | Atlas encryption at rest + in transit        |
| SEC-22 | Document vault      | AES-256 encryption for sensitive docs        |
| SEC-23 | Biometric data      | Hash-only storage, no raw biometric          |
| SEC-24 | PLRA data           | Encrypted storage, access-logged             |

### 10.4 RBAC + ABAC Security

| #      | Requirement            | Implementation                          |
| ------ | ---------------------- | --------------------------------------- |
| SEC-25 | Permission enforcement | Middleware on every endpoint            |
| SEC-26 | Permission caching     | Redis with invalidation                 |
| SEC-27 | ABAC conditions        | Attribute evaluation after RBAC         |
| SEC-28 | Granular permissions   | 11 permission types per module per role |
| SEC-29 | Permission audit       | Track all changes with before/after     |
| SEC-30 | Privacy enforcement    | Server-side data filtering per consent  |

### 10.5 AI Security (V2.0)

| #      | Requirement          | Implementation                                            |
| ------ | -------------------- | --------------------------------------------------------- |
| SEC-31 | Data access limits   | AI can only access user's permitted data                  |
| SEC-32 | Content filtering    | Guardrails on AI input/output                             |
| SEC-33 | Rate limiting        | Per-user, per-tenant AI query limits                      |
| SEC-34 | Conversation logging | All AI interactions logged for audit                      |
| SEC-35 | No cross-tenant data | AI isolated to user's society context                     |
| SEC-36 | PII handling         | AI instructed never to reveal other members' private data |

---

## 11. Implementation Priority & Roadmap

### Phase 1: Foundation (Months 1-3)

**Priority: Dynamic Config + Enhanced RBAC + Privacy Dashboard**

| #   | Task                                              | Dependencies |
| --- | ------------------------------------------------- | ------------ |
| 1.1 | Dynamic Lookup system (replace hard-coded enums)  | None         |
| 1.2 | Hybrid RBAC + ABAC permission engine              | 1.1          |
| 1.3 | Privacy settings model and enforcement middleware | 1.2          |
| 1.4 | Resident Privacy Dashboard UI                     | 1.3          |
| 1.5 | Dynamic Form Builder (backend + renderer)         | 1.1          |
| 1.6 | Module toggling per society                       | 1.1          |
| 1.7 | Enhanced subscription plan enforcement            | 1.6          |

### Phase 2: Smart Financials + AI (Months 3-6)

**Priority: Smart Installment Engine + AI Agents + Defaulter Prediction**

| #   | Task                                     | Dependencies |
| --- | ---------------------------------------- | ------------ |
| 2.1 | Smart Installment Engine with Agenda.js  | Phase 1      |
| 2.2 | Automated bill generation and reminders  | 2.1          |
| 2.3 | AI service layer (Groq integration)      | None         |
| 2.4 | Resident AI Assistant (chat sidebar)     | 2.3          |
| 2.5 | AI Defaulter Prediction Agent            | 2.1, 2.3     |
| 2.6 | AI Complaint Sentiment Agent             | 2.3          |
| 2.7 | Financial ledger and bank reconciliation | 2.1          |
| 2.8 | Predictive analytics dashboard           | 2.3          |

### Phase 3: Regulatory + Workforce (Months 6-9)

**Priority: PLRA Integration + Attendance + Vendor Marketplace**

| #   | Task                                 | Dependencies |
| --- | ------------------------------------ | ------------ |
| 3.1 | PLRA certificate generation engine   | Phase 1      |
| 3.2 | PLRA API integration (with fallback) | 3.1          |
| 3.3 | Compliance Cockpit                   | 3.1          |
| 3.4 | Geo-tagged attendance system         | Phase 1      |
| 3.5 | Shift management                     | 3.4          |
| 3.6 | Vendor registration and marketplace  | Phase 1      |
| 3.7 | Work order bidding system            | 3.6          |
| 3.8 | AMC management and vendor invoicing  | 3.6          |
| 3.9 | Committee Handover Wizard            | Phase 1      |

### Phase 4: Innovation Layer (Months 9-12)

**Priority: Workflow Builder + Offline PWA + Gamification**

| #    | Task                                          | Dependencies |
| ---- | --------------------------------------------- | ------------ |
| 4.1  | Visual Workflow Builder (canvas UI)           | Phase 1      |
| 4.2  | Workflow execution engine                     | 4.1          |
| 4.3  | Migrate existing approval flows to workflows  | 4.2          |
| 4.4  | Advanced offline PWA with background sync     | None         |
| 4.5  | Guard PWA interface                           | 4.4          |
| 4.6  | Gamification engine (points, badges, rewards) | Phase 1      |
| 4.7  | Leaderboard and reward redemption             | 4.6          |
| 4.8  | Voice input (Urdu/English)                    | None         |
| 4.9  | Visitor zero-knowledge pre-approval           | Phase 1      |
| 4.10 | Biometric attendance readiness                | 3.4          |

---

## 12. Appendices

### Appendix A: Technology Stack Summary

| Layer              | Technology              | Version       |
| ------------------ | ----------------------- | ------------- |
| Frontend Framework | Next.js (App Router)    | 16.1.1        |
| Frontend Library   | React                   | 19.2.0        |
| Backend Framework  | Express.js              | 4.21.2        |
| Language           | TypeScript              | 5.x           |
| Database           | MongoDB (Mongoose)      | 8.9.0         |
| Cache              | Redis (ioredis)         | 5.3.2         |
| Real-time          | Socket.io               | 4.8.1         |
| Job Scheduler      | Agenda.js               | Latest        |
| AI Provider        | Groq API                | Latest        |
| UI Components      | Radix UI                | Latest        |
| Styling            | TailwindCSS             | 4.x           |
| State Management   | Redux Toolkit           | 2.11.0        |
| Data Fetching      | TanStack Query          | 5.90.11       |
| Forms              | React Hook Form         | 7.68.0        |
| Validation         | Zod                     | 4.1.13        |
| Charts             | Recharts                | 2.15.4        |
| Maps               | Leaflet + React Leaflet | 1.9.4 / 5.0.0 |
| Animations         | Framer Motion           | 12.29.2       |
| File Upload        | Multer + Cloudinary     | Latest        |
| Email              | Nodemailer              | 7.0.11        |
| Push               | web-push                | Latest        |
| Logging            | Winston                 | Latest        |
| API Docs           | Swagger/OpenAPI         | Latest        |
| Drag & Drop        | dnd-kit                 | 6.3.1         |
| CSV                | Papaparse               | Latest        |
| Dates              | date-fns                | 4.1.0         |
| HTTP Client        | Axios                   | Latest        |

### Appendix B: Module Count Summary

| Category                   | V1.0 Count | V2.0 Count              |
| -------------------------- | ---------- | ----------------------- |
| Backend Modules            | 43         | 65+                     |
| Backend Models/Collections | 46         | 78                      |
| Backend Route Files        | 47         | 70+                     |
| Frontend Pages             | 48+        | 70+                     |
| Frontend Components        | 100+       | 150+                    |
| API Endpoints              | ~150       | ~250+                   |
| User Roles (default)       | 6          | 10 (+ unlimited custom) |
| AI Agent Types             | 0          | 4                       |
| New Major Modules          | -          | 8                       |

### Appendix C: Environment Variables

| Variable                    | Description             | Required | New      |
| --------------------------- | ----------------------- | -------- | -------- |
| NODE_ENV                    | Environment             | Yes      | No       |
| PORT                        | Server port             | Yes      | No       |
| MONGODB_URI                 | MongoDB connection      | Yes      | No       |
| JWT_SECRET                  | JWT signing secret      | Yes      | No       |
| JWT_REFRESH_SECRET          | Refresh token secret    | Yes      | No       |
| JWT_EXPIRES_IN              | Access token expiry     | Yes      | No       |
| JWT_REFRESH_EXPIRES_IN      | Refresh token expiry    | Yes      | No       |
| REDIS_URL                   | Redis connection        | Yes      | No       |
| CLOUDINARY_CLOUD_NAME       | Cloudinary cloud        | Yes      | No       |
| CLOUDINARY_API_KEY          | Cloudinary key          | Yes      | No       |
| CLOUDINARY_API_SECRET       | Cloudinary secret       | Yes      | No       |
| SMTP_HOST                   | SMTP host               | Yes      | No       |
| SMTP_PORT                   | SMTP port               | Yes      | No       |
| SMTP_USER                   | SMTP username           | Yes      | No       |
| SMTP_PASS                   | SMTP password           | Yes      | No       |
| SMTP_FROM                   | Default sender          | Yes      | No       |
| GOOGLE_CLIENT_ID            | Google OAuth ID         | Yes      | No       |
| GOOGLE_CLIENT_SECRET        | Google OAuth secret     | Yes      | No       |
| VAPID_PUBLIC_KEY            | Web Push public key     | Yes      | No       |
| VAPID_PRIVATE_KEY           | Web Push private key    | Yes      | No       |
| CORS_ORIGIN                 | Allowed origins         | Yes      | No       |
| **GROQ_API_KEY**            | Groq AI API key         | Yes      | **V2.0** |
| **GROQ_MODEL**              | Groq model ID           | No       | **V2.0** |
| **PLRA_API_URL**            | PLRA API base URL       | No       | **V2.0** |
| **PLRA_API_KEY**            | PLRA API key            | No       | **V2.0** |
| **LDA_API_URL**             | LDA API base URL        | No       | **V2.0** |
| **LDA_API_KEY**             | LDA API key             | No       | **V2.0** |
| **ENCRYPTION_KEY**          | AES-256 key for vault   | Yes      | **V2.0** |
| **GEOFENCE_DEFAULT_RADIUS** | Default geofence meters | No       | **V2.0** |
| RATE_LIMIT_WINDOW_MS        | Rate limit window       | No       | No       |
| RATE_LIMIT_MAX              | Max requests/window     | No       | No       |
| LOG_LEVEL                   | Logging level           | No       | No       |

### Appendix D: Glossary

| Term            | Definition                                                          |
| --------------- | ------------------------------------------------------------------- |
| Plot            | A defined piece of land in a housing society                        |
| Block           | A group/sector of plots within a project                            |
| Marla           | Unit of area (272.25 sq ft) commonly used in Pakistan               |
| Kanal           | Unit of area (20 marlas / 5,445 sq ft)                              |
| CNIC            | Computerized National Identity Card (Pakistan)                      |
| Possession      | Legal handover of a plot to the owner                               |
| Registry        | Official government registration of property ownership              |
| Transfer        | Change of plot ownership from one member to another                 |
| Defaulter       | Member with overdue payment obligations                             |
| Installment     | Periodic payment towards total plot cost                            |
| NOC             | No Objection Certificate                                            |
| Society         | A housing society / residential development authority               |
| PLRA            | Punjab Land Records Authority — manages property records in Punjab  |
| LDA             | Lahore Development Authority — city planning and building approval  |
| AMC             | Annual Maintenance Contract — ongoing vendor service agreement      |
| Geofence        | Virtual geographic boundary for location verification               |
| Gamification    | Game mechanics (points, badges, rewards) applied to real activities |
| Zero-Knowledge  | System processes data without seeing the actual content             |
| Workflow Engine | System that executes configurable multi-step business processes     |
| Dynamic Lookup  | Database-driven dropdown/enum value (not hard-coded)                |
| ABAC            | Access control based on attributes/conditions, not just roles       |
| Tenant          | A society instance in multi-tenant architecture                     |

---

**End of Software Requirements Specification**

_Document Version: 2.0_
_Last Updated: June 18, 2026_
_V1.0 features: Implemented_
_V2.0 features: Specification complete, implementation per roadmap_
| 3.4 | Geo-tagged attendance system | Phase 1 |
| 3.5 | Shift management | 3.4 |
| 3.6 | Vendor registration and marketplace | Phase 1 |
| 3.7 | Work order bidding system | 3.6 |
| 3.8 | AMC management and vendor invoicing | 3.6 |
| 3.9 | Committee Handover Wizard | Phase 1 |

### Phase 4: Innovation Layer (Months 9-12)

**Priority: Workflow Builder + Offline PWA + Gamification**

| #    | Task                                          | Dependencies |
| ---- | --------------------------------------------- | ------------ |
| 4.1  | Visual Workflow Builder (canvas UI)           | Phase 1      |
| 4.2  | Workflow execution engine                     | 4.1          |
| 4.3  | Migrate existing approval flows to workflows  | 4.2          |
| 4.4  | Advanced offline PWA with background sync     | None         |
| 4.5  | Guard PWA interface                           | 4.4          |
| 4.6  | Gamification engine (points, badges, rewards) | Phase 1      |
| 4.7  | Leaderboard and reward redemption             | 4.6          |
| 4.8  | Voice input (Urdu/English)                    | None         |
| 4.9  | Visitor zero-knowledge pre-approval           | Phase 1      |
| 4.10 | Biometric attendance readiness                | 3.4          |

---

## 12. Appendices

### Appendix A: Technology Stack Summary

| Layer              | Technology              | Version       |
| ------------------ | ----------------------- | ------------- |
| Frontend Framework | Next.js (App Router)    | 16.1.1        |
| Frontend Library   | React                   | 19.2.0        |
| Backend Framework  | Express.js              | 4.21.2        |
| Language           | TypeScript              | 5.x           |
| Database           | MongoDB (Mongoose)      | 8.9.0         |
| Cache              | Redis (ioredis)         | 5.3.2         |
| Real-time          | Socket.io               | 4.8.1         |
| Job Scheduler      | Agenda.js               | Latest        |
| AI Provider        | Groq API                | Latest        |
| UI Components      | Radix UI                | Latest        |
| Styling            | TailwindCSS             | 4.x           |
| State Management   | Redux Toolkit           | 2.11.0        |
| Data Fetching      | TanStack Query          | 5.90.11       |
| Forms              | React Hook Form         | 7.68.0        |
| Validation         | Zod                     | 4.1.13        |
| Charts             | Recharts                | 2.15.4        |
| Maps               | Leaflet + React Leaflet | 1.9.4 / 5.0.0 |
| Animations         | Framer Motion           | 12.29.2       |
| File Upload        | Multer + Cloudinary     | Latest        |
| Email              | Nodemailer              | 7.0.11        |
| Push               | web-push                | Latest        |
| Logging            | Winston                 | Latest        |
| API Docs           | Swagger/OpenAPI         | Latest        |
| Drag & Drop        | dnd-kit                 | 6.3.1         |
| CSV                | Papaparse               | Latest        |
| Dates              | date-fns                | 4.1.0         |
| HTTP Client        | Axios                   | Latest        |

### Appendix B: Module Count Summary

| Category                   | V1.0 Count | V2.0 Count              |
| -------------------------- | ---------- | ----------------------- |
| Backend Modules            | 43         | 65+                     |
| Backend Models/Collections | 46         | 78                      |
| Backend Route Files        | 47         | 70+                     |
| Frontend Pages             | 48+        | 70+                     |
| Frontend Components        | 100+       | 150+                    |
| API Endpoints              | ~150       | ~250+                   |
| User Roles (default)       | 6          | 10 (+ unlimited custom) |
| AI Agent Types             | 0          | 4                       |
| New Major Modules          | -          | 8                       |

### Appendix C: Environment Variables

| Variable                    | Description             | Required | New      |
| --------------------------- | ----------------------- | -------- | -------- |
| NODE_ENV                    | Environment             | Yes      | No       |
| PORT                        | Server port             | Yes      | No       |
| MONGODB_URI                 | MongoDB connection      | Yes      | No       |
| JWT_SECRET                  | JWT signing secret      | Yes      | No       |
| JWT_REFRESH_SECRET          | Refresh token secret    | Yes      | No       |
| JWT_EXPIRES_IN              | Access token expiry     | Yes      | No       |
| JWT_REFRESH_EXPIRES_IN      | Refresh token expiry    | Yes      | No       |
| REDIS_URL                   | Redis connection        | Yes      | No       |
| CLOUDINARY_CLOUD_NAME       | Cloudinary cloud        | Yes      | No       |
| CLOUDINARY_API_KEY          | Cloudinary key          | Yes      | No       |
| CLOUDINARY_API_SECRET       | Cloudinary secret       | Yes      | No       |
| SMTP_HOST                   | SMTP host               | Yes      | No       |
| SMTP_PORT                   | SMTP port               | Yes      | No       |
| SMTP_USER                   | SMTP username           | Yes      | No       |
| SMTP_PASS                   | SMTP password           | Yes      | No       |
| SMTP_FROM                   | Default sender          | Yes      | No       |
| GOOGLE_CLIENT_ID            | Google OAuth ID         | Yes      | No       |
| GOOGLE_CLIENT_SECRET        | Google OAuth secret     | Yes      | No       |
| VAPID_PUBLIC_KEY            | Web Push public key     | Yes      | No       |
| VAPID_PRIVATE_KEY           | Web Push private key    | Yes      | No       |
| CORS_ORIGIN                 | Allowed origins         | Yes      | No       |
| **GROQ_API_KEY**            | Groq AI API key         | Yes      | **V2.0** |
| **GROQ_MODEL**              | Groq model ID           | No       | **V2.0** |
| **PLRA_API_URL**            | PLRA API base URL       | No       | **V2.0** |
| **PLRA_API_KEY**            | PLRA API key            | No       | **V2.0** |
| **LDA_API_URL**             | LDA API base URL        | No       | **V2.0** |
| **LDA_API_KEY**             | LDA API key             | No       | **V2.0** |
| **ENCRYPTION_KEY**          | AES-256 key for vault   | Yes      | **V2.0** |
| **GEOFENCE_DEFAULT_RADIUS** | Default geofence meters | No       | **V2.0** |
| RATE_LIMIT_WINDOW_MS        | Rate limit window       | No       | No       |
| RATE_LIMIT_MAX              | Max requests/window     | No       | No       |
| LOG_LEVEL                   | Logging level           | No       | No       |

### Appendix D: Glossary

| Term            | Definition                                                          |
| --------------- | ------------------------------------------------------------------- |
| Plot            | A defined piece of land in a housing society                        |
| Block           | A group/sector of plots within a project                            |
| Marla           | Unit of area (272.25 sq ft) commonly used in Pakistan               |
| Kanal           | Unit of area (20 marlas / 5,445 sq ft)                              |
| CNIC            | Computerized National Identity Card (Pakistan)                      |
| Possession      | Legal handover of a plot to the owner                               |
| Registry        | Official government registration of property ownership              |
| Transfer        | Change of plot ownership from one member to another                 |
| Defaulter       | Member with overdue payment obligations                             |
| Installment     | Periodic payment towards total plot cost                            |
| NOC             | No Objection Certificate                                            |
| Society         | A housing society / residential development authority               |
| PLRA            | Punjab Land Records Authority — manages property records in Punjab  |
| LDA             | Lahore Development Authority — city planning and building approval  |
| AMC             | Annual Maintenance Contract — ongoing vendor service agreement      |
| Geofence        | Virtual geographic boundary for location verification               |
| Gamification    | Game mechanics (points, badges, rewards) applied to real activities |
| Zero-Knowledge  | System processes data without seeing the actual content             |
| Workflow Engine | System that executes configurable multi-step business processes     |
| Dynamic Lookup  | Database-driven dropdown/enum value (not hard-coded)                |
| ABAC            | Access control based on attributes/conditions, not just roles       |
| Tenant          | A society instance in multi-tenant architecture                     |

---

**End of Software Requirements Specification**

_Document Version: 2.0_
_Last Updated: June 18, 2026_
_V1.0 features: Implemented_
_V2.0 features: Specification complete, implementation per roadmap_
