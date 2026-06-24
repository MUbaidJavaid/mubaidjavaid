# Vitalis Health — Project Documentation

## Overview
Vitalis Health is a full-stack healthcare web application built with React, TypeScript, and Tailwind CSS. It features a public-facing website and an admin dashboard with full CRUD functionality.

## Tech Stack
- **Frontend**: React 18 + TypeScript 5
- **Styling**: Tailwind CSS v3 + shadcn/ui components
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion + GSAP
- **Charts**: Recharts
- **Build Tool**: Vite 5

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/
│   ├── home/        # Homepage sections (Hero, Services, Doctors, etc.)
│   ├── layout/      # Header, Footer, DashboardLayout
│   └── ui/          # Reusable shadcn/ui components
├── context/
│   ├── AuthContext   # Authentication state management
│   └── DataContext   # Global CRUD state (appointments, patients, staff, etc.)
├── data/
│   └── mockData.ts  # Initial seed data for all entities
├── hooks/           # Custom React hooks
├── pages/
│   ├── public/      # Public pages (Home, About, Services, Doctors, Blog, Contact, Book)
│   └── dashboard/   # Admin pages (Overview, Appointments, Patients, Billing, Staff, Settings)
└── lib/             # Utility functions
```

## Features

### Public Website
- Responsive homepage with hero section, services, doctors, testimonials
- Service listing and detail pages
- Doctor profiles
- Blog with posts
- Contact form with success feedback
- Appointment booking form
- Staff login page

### Admin Dashboard
- **Overview**: Real-time KPIs (patients, revenue, appointments)
- **Appointments**: Add, update status, delete appointments
- **Patients**: Register, search, view details, delete patients
- **Billing**: Generate invoices with auto-calculated totals
- **Staff**: Add/remove staff members with role management
- **Settings**: Profile editing (syncs to navbar), notification preferences, inventory management

### CRUD Operations
All data is managed via React Context (`DataContext`) using array state with push/filter/map operations. Changes reflect instantly across all dashboard pages.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Branding
- **Primary Color**: Teal `#0F766E`
- **Font**: Inter (system)
- **Favicon**: `/public/favicon.png`
- **OG Image**: `/public/og-image.jpg`

## Login Credentials (Mock)
- **Email**: Any email
- **Password**: Any password
- Dashboard auto-authenticates for demo purposes

## License
Proprietary — Vitalis Health © 2026
