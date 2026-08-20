import { cn } from '@/lib/utils'
import Link from 'next/link'

type ButtonProps = {
  href?: string
  children: React.ReactNode
  className?: string
}

const baseClass =
  'inline-flex items-center justify-center border border-transparent bg-[linear-gradient(165deg,#2872A1,#1F5F86)] px-5 py-2.5 text-sm font-semibold tracking-[0.01em] text-primary-foreground shadow-card transition-all duration-200  hover:brightness-[1.03] hover:shadow-float focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'

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
