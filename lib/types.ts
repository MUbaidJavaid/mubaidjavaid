/**
 * Type Definitions for MERN Portfolio
 * Mirrors MongoDB schema structure for type safety
 */

/**
 * Project Type - Core content model
 * Maps directly to MongoDB Project schema
 */
export interface Project {
  id: string // Unique slug for routing/fetching
  title: string // Project name (used in SEO metadata)
  description: string // Detailed summary (supports Markdown)
  shortDescription?: string // Brief one-liner for cards
  stack: string[] // Array of technologies
  imageUrls: string[] // Hosted image links (Cloudinary/S3)
  link?: string // Live demo URL
  github?: string // Repository URL
  isFeatured: boolean // Flag for hero section display
  createdAt: Date // Project creation date
  updatedAt: Date // Last update date
  category?: "web" | "mobile" | "fullstack" | "tool" // Project category
  metrics?: {
    // Optional metrics for showcase
    performance?: string
    users?: string
    downloads?: string
  }
}

/**
 * Skill Type - Technology expertise
 */
export interface Skill {
  name: string
  level: "beginner" | "intermediate" | "advanced" | "expert"
  category: "frontend" | "backend" | "tools" | "design"
  yearsOfExperience?: number
}

/**
 * Contact Message Type
 * Submitted via contact form
 */
export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: Date
  status: "new" | "read" | "responded"
}

/**
 * API Response Wrapper Type
 * Standardized API response format
 */
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
  timestamp: Date
}

/**
 * Motion Configuration Type
 * Defines animation preferences
 */
export interface MotionConfig {
  enabled: boolean
  duration: number
  easing: string
}

/**
 * Theme Type
 * Supports light and dark modes
 */
export type Theme = "light" | "dark" | "system"

/**
 * Component Props Base
 * Provides common typing for all components
 */
export interface ComponentProps {
  className?: string
  style?: React.CSSProperties
  ariaLabel?: string
}

/**
 * Gradient Orb Animation Config
 * Configuration for the 3D gradient background
 */
export interface GradientOrbConfig {
  count: number
  colors: string[]
  blendMode: "multiply" | "screen" | "overlay" | "hard-light"
  mouseTracking: boolean
  autoAnimate: boolean
}
