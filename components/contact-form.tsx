/**
 * Contact Form Component
 * Accessible, validated form with error handling
 * Integrates with Next.js API routes
 */

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useMotionPreference } from "@/hooks/use-motion-preference"
import { isValidEmail } from "@/lib/utils"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const { prefersReducedMotion } = useMotionPreference()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    setServerError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error?.message || "Failed to send message")
      }

      // Success
      setSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000)
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Success Message */}
      {success && (
        <motion.div
          className="p-4 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          ✓ Message sent successfully! I'll get back to you soon.
        </motion.div>
      )}

      {/* Server Error */}
      {serverError && (
        <motion.div
          className="p-4 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          Error: {serverError}
        </motion.div>
      )}

      {/* Name Field */}
      <motion.div variants={inputVariants}>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
          className={`w-full px-4 py-2 rounded-lg border transition-colors
            ${
              errors.name
                ? "border-red-500 bg-red-50 dark:bg-red-950"
                : "border-border bg-background hover:border-primary"
            }
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus:ring-2 focus:ring-primary`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-red-600 dark:text-red-400 mt-1">
            {errors.name}
          </p>
        )}
      </motion.div>

      {/* Email Field */}
      <motion.div variants={inputVariants}>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          className={`w-full px-4 py-2 rounded-lg border transition-colors
            ${
              errors.email
                ? "border-red-500 bg-red-50 dark:bg-red-950"
                : "border-border bg-background hover:border-primary"
            }
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus:ring-2 focus:ring-primary`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-red-600 dark:text-red-400 mt-1">
            {errors.email}
          </p>
        )}
      </motion.div>

      {/* Subject Field */}
      <motion.div variants={inputVariants}>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={loading}
          className={`w-full px-4 py-2 rounded-lg border transition-colors
            ${
              errors.subject
                ? "border-red-500 bg-red-50 dark:bg-red-950"
                : "border-border bg-background hover:border-primary"
            }
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus:ring-2 focus:ring-primary`}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="text-sm text-red-600 dark:text-red-400 mt-1">
            {errors.subject}
          </p>
        )}
      </motion.div>

      {/* Message Field */}
      <motion.div variants={inputVariants}>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={loading}
          rows={5}
          className={`w-full px-4 py-2 rounded-lg border transition-colors resize-none
            ${
              errors.message
                ? "border-red-500 bg-red-50 dark:bg-red-950"
                : "border-border bg-background hover:border-primary"
            }
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus:ring-2 focus:ring-primary`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-600 dark:text-red-400 mt-1">
            {errors.message}
          </p>
        )}
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={loading}
        variants={inputVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full px-6 py-3 rounded-lg font-medium transition-all
          ${
            loading
              ? "bg-primary/50 cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }
          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          dark:focus:ring-offset-background`}
      >
        {loading ? "Sending..." : "Send Message"}
      </motion.button>
    </motion.form>
  )
}

export default ContactForm
