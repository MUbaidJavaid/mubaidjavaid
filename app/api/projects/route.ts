/**
 * Projects API Route
 * Gateway to MERN backend for project data
 * Acts as proxy between frontend and Express server
 */

import { NextRequest, NextResponse } from "next/server"
import type { Project, ApiResponse } from "@/lib/types"

// Mock data - Replace with actual backend call
const mockProjects: Project[] = [
  {
    id: "ai-portfolio-builder",
    title: "AI Portfolio Builder",
    description: "An intelligent platform that uses AI to generate personalized developer portfolios with custom designs and interactive components.",
    shortDescription: "AI-powered portfolio generation platform",
    stack: ["React", "Next.js", "TypeScript", "MongoDB", "OpenAI API"],
    imageUrls: ["/projects/ai-portfolio-1.jpg"],
    link: "https://example.com",
    github: "https://github.com/MUbaidJavaid",
    isFeatured: true,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-11-10"),
    category: "fullstack",
    metrics: {
      users: "1000+",
      performance: "98/100"
    }
  },
  {
    id: "real-time-analytics",
    title: "Real-Time Analytics Dashboard",
    description: "A comprehensive analytics dashboard with real-time data visualization, WebSocket integration, and advanced filtering capabilities.",
    shortDescription: "Real-time data visualization platform",
    stack: ["React", "Node.js", "WebSocket", "PostgreSQL", "Chart.js"],
    imageUrls: ["/projects/analytics-1.jpg"],
    link: "https://example.com",
    github: "https://github.com/MUbaidJavaid",
    isFeatured: true,
    createdAt: new Date("2023-11-20"),
    updatedAt: new Date("2024-10-15"),
    category: "fullstack",
    metrics: {
      performance: "95/100"
    }
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with payment integration, inventory management, and admin dashboard.",
    shortDescription: "Complete e-commerce solution",
    stack: ["Next.js", "Express.js", "MongoDB", "Stripe", "Redux"],
    imageUrls: ["/projects/ecommerce-1.jpg"],
    link: "https://example.com",
    github: "https://github.com/MUbaidJavaid",
    isFeatured: true,
    createdAt: new Date("2023-08-10"),
    updatedAt: new Date("2024-09-05"),
    category: "fullstack"
  }
]

/**
 * GET /api/projects - Retrieve all projects
 * Query params:
 *  - featured: boolean (filter featured projects)
 *  - category: string (filter by category)
 *  - limit: number (limit results)
 */
export async function GET(
  request: NextRequest
): Promise<NextResponse<ApiResponse<Project[]>>> {
  try {
    const searchParams = request.nextUrl.searchParams
    const featured = searchParams.get("featured") === "true"
    const category = searchParams.get("category")
    const limit = parseInt(searchParams.get("limit") || "100")

    // TODO: Replace with actual backend API call
    // const response = await fetch(`${process.env.BACKEND_URL}/api/projects`, {
    //   params: { featured, category, limit }
    // })
    // const projects = await response.json()

    let projects = [...mockProjects]

    // Apply filters
    if (featured) {
      projects = projects.filter(p => p.isFeatured)
    }

    if (category) {
      projects = projects.filter(p => p.category === category)
    }

    projects = projects.slice(0, limit)

    return NextResponse.json(
      {
        success: true,
        data: projects,
        timestamp: new Date()
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Projects fetch error:", error)

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "FETCH_ERROR",
          message: "Failed to fetch projects"
        },
        timestamp: new Date()
      },
      { status: 500 }
    )
  }
}

/**
 * GET /api/projects/:id - Retrieve single project
 */
export async function HEAD(
  request: NextRequest
): Promise<NextResponse> {
  // Support preflight requests
  return new NextResponse(null, { status: 200 })
}
