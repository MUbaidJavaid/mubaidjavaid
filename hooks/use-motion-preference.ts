/**
 * useMotionPreference Hook
 * Respects user's prefers-reduced-motion setting for accessibility
 * Critical for inclusive motion design
 */

import { useEffect, useState } from "react"

export interface MotionPreferences {
  prefersReducedMotion: boolean
  supportsAnimation: boolean
}

export function useMotionPreference(): MotionPreferences {
  const [preferences, setPreferences] = useState<MotionPreferences>({
    prefersReducedMotion: false,
    supportsAnimation: true
  })

  useEffect(() => {
    // Check for prefers-reduced-motion media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const handleChange = (e: MediaQueryListEvent) => {
      setPreferences(prev => ({
        ...prev,
        prefersReducedMotion: e.matches
      }))
    }

    // Set initial value
    setPreferences(prev => ({
      ...prev,
      prefersReducedMotion: mediaQuery.matches
    }))

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return preferences
}

/**
 * Helper function to get animation duration based on motion preferences
 */
export function getMotionDuration(
  fullMotionDuration: number,
  prefersReducedMotion: boolean
): number {
  // If user prefers reduced motion, use instant or very quick animation
  return prefersReducedMotion ? 0.1 : fullMotionDuration
}

/**
 * Helper function to get animation transition based on motion preferences
 */
export function getMotionTransition(
  prefersReducedMotion: boolean,
  customTransition?: any
) {
  if (prefersReducedMotion) {
    return { duration: 0.1, delay: 0 }
  }
  return customTransition || { duration: 0.5, delay: 0 }
}
