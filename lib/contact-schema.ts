import { z } from 'zod'

export const BUDGET_OPTIONS = [
  'Under $1k',
  '$1k - $3k',
  '$3k - $8k',
  '$8k+',
  "Let's discuss"
] as const

export type BudgetOption = (typeof BUDGET_OPTIONS)[number]

/** Shared server + client validation for the contact form */
export const contactPayloadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(120, 'Name is too long'),
  email: z
    .string()
    .trim()
    .email('Enter a valid email')
    .max(254, 'Email is too long'),
  projectType: z
    .string()
    .trim()
    .min(2, 'Describe your project type')
    .max(200, 'Project type is too long'),
  message: z
    .string()
    .trim()
    .min(20, 'Please share a bit more detail (at least 20 characters)')
    .max(8000, 'Message is too long'),
  budget: z.enum(BUDGET_OPTIONS)
})

export type ContactPayload = z.infer<typeof contactPayloadSchema>
