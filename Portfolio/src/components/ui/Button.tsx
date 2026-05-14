import Link from 'next/link'

import { cn, isExternalHref } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

const variantClasses = {
  primary:
    'bg-black text-white hover:bg-black/88 focus-visible:outline-black/40',
  secondary:
    'border border-black/14 bg-white text-black/86 hover:border-black/30 hover:text-black focus-visible:outline-black/25',
  ghost:
    'text-black/74 hover:text-black focus-visible:outline-black/20',
} as const

export function Button({ children, className, href, variant = 'primary' }: Props) {
  const classes = cn(
    'inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-[-0.02em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    variantClasses[variant],
    className,
  )

  if (isExternalHref(href)) {
    return (
      <a
        className={classes}
        href={href}
        rel="noreferrer"
        target={href.startsWith('mailto:') ? undefined : '_blank'}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      className={classes}
      href={href}
    >
      {children}
    </Link>
  )
}
