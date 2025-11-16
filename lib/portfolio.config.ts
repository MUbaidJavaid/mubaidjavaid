/**
 * Portfolio Configuration
 * Centralized, type-safe content management
 * This single source of truth prevents scattered content updates
 */

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Mubaid Javaid",
    title: "Full-Stack Developer & Creative Technologist",
    subtitle: "Building digital experiences with cutting-edge technology and thoughtful design",
    email: "contact@mubaidjavaid.com",
    location: "Your Location",
    avatar: "/mubaidjavaid.png",
    bio: "Passionate about creating elegant solutions to complex problems using modern web technologies."
  },

  // Social Links
  social: [
    {
      name: "GitHub",
      url: "https://github.com/MUbaidJavaid",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "twitter"
    },
    {
      name: "Email",
      url: "mailto:contact@mubaidjavaid.com",
      icon: "mail"
    }
  ],

  // Skills (categorized by expertise level)
  skills: {
    frontend: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Framer Motion", level: "advanced" }
    ],
    backend: [
      { name: "Node.js", level: "expert" },
      { name: "Express.js", level: "expert" },
      { name: "MongoDB", level: "advanced" },
      { name: "REST APIs", level: "expert" }
    ],
    tools: [
      { name: "Git & GitHub", level: "expert" },
      { name: "Docker", level: "intermediate" },
      { name: "Vercel", level: "advanced" },
      { name: "PostgreSQL", level: "intermediate" }
    ]
  },

  // Navigation menu items
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ],

  // SEO & Metadata
  seo: {
    title: "MUbaid Javaid – Full-Stack MERN Developer",
    description: "Discover innovative full-stack solutions and creative digital experiences. Specializing in React, Next.js, and modern web technologies.",
    keywords: ["full-stack developer", "next.js", "react", "portfolio", "mern"] as unknown as string[],
    author: "MUbaid Javaid",
    ogImage: "/mubaidjavaid.png"
  },

  // Motion preferences
  motion: {
    enableReducedMotion: true, // Respect prefers-reduced-motion
    animationDuration: {
      fast: 0.2,
      normal: 0.5,
      slow: 0.8
    }
  }
} as const

export type PortfolioConfig = typeof portfolioConfig
