import { cn } from '@/lib/utils'

type Props = {
  align?: 'left' | 'right'
  as?: 'h1' | 'h2' | 'h3'
  children: React.ReactNode
  className?: string
  eyebrow?: string
  size?: 'hero' | 'section' | 'card'
  tone?: 'auto' | 'sans' | 'serif'
}

const sizeClasses = {
  hero: 'text-[var(--font-size-h1)] leading-[var(--line-height-tight)] tracking-[var(--tracking-display)] font-semibold',
  section: 'text-[var(--font-size-h2)] leading-[var(--line-height-heading)] tracking-[var(--tracking-heading)] font-medium',
  card: 'text-[var(--font-size-h3)] leading-[var(--line-height-heading)] tracking-[-0.045em] font-medium',
} as const

export function Heading({
  align = 'left',
  as: Tag = 'h2',
  children,
  className,
  eyebrow,
  size = 'section',
  tone = 'auto',
}: Props) {
  const fontClass =
    tone === 'sans'
      ? 'text-condensed'
      : tone === 'serif'
        ? 'text-serif'
        : size === 'hero'
          ? 'text-display'
          : 'text-serif'

  return (
    <div className={cn('space-y-4', align === 'right' && 'text-right')}>
      {eyebrow ? (
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-black/56">
          {eyebrow}
        </p>
      ) : null}
      <Tag className={cn(fontClass, sizeClasses[size], 'text-balance text-black', className)}>{children}</Tag>
    </div>
  )
}
