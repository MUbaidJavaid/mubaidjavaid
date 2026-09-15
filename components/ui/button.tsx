import { cn } from '@/lib/utils'
import Link from 'next/link'

type ButtonProps = {
  href?: string
  children: React.ReactNode
  className?: string
}

const baseClass =
  'inline-flex items-center justify-center border border-transparent bg-primary px-5 py-2.5 text-sm font-semibold tracking-[0.01em] text-primary-foreground transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'

export function Button ({ href, children, className }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={cn(baseClass, className)}>
        {children}
      </Link>
    )
  }

  return <button className={cn(baseClass, className)}>{children}</button>
}
