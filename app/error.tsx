'use client'

import { RouteErrorFallback } from '@/components/system/RouteErrorFallback'
import { useEffect } from 'react'

export default function Error ({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <RouteErrorFallback
      reset={reset}
      digest={error.digest}
      errorMessage={error.message}
    />
  )
}
