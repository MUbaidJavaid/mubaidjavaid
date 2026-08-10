/**
 * Homepage visual map — each section owns one purpose.
 *
 * Hero          → presence / cover composition
 * Proof         → verifiable metrics (no product shots)
 * Selected Work → featured case studies (primary frames)
 * Impact        → outcomes with product images (alternate frames)
 * Process       → delivery sequence
 * Philosophy    → engineering panel / code
 * Technologies  → stack map
 * Open Source   → public repos / inspectability
 * Timeline      → career spine
 * Writing       → article desk
 * Contact       → next-step path
 */

import { projects, type Project } from '@/data/projects'

function pickImage (p: Project, index: number) {
  const gallery = p.images?.length ? p.images : [p.image]
  return gallery[Math.min(index, gallery.length - 1)] ?? p.image
}

/** Selected Work — featured case studies. */
export function selectedWorkProjects () {
  return projects.filter(p => p.featured).slice(0, 3)
}

/** Impact — outcomes + images (frame index 1 so it differs from Selected Work). */
export function impactOutcomes () {
  return projects.slice(0, 6).map(p => ({
    slug: p.slug,
    title: p.title.split('—')[0].trim(),
    line: p.impact[0],
    stack: p.stack.slice(0, 3),
    image: pickImage(p, 1),
    imageAlt: p.imageAlt ?? p.title
  }))
}
