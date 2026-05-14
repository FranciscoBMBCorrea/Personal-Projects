import { cn } from '@/lib/utils'

type Props = {
  align?: 'left' | 'right'
  as?: 'h1' | 'h2' | 'h3'
  children: React.ReactNode
  className?: string
  eyebrow?: string
  size?: 'hero' | 'section' | 'card'
}

const sizeClasses = {
  hero: 'text-[clamp(3.3rem,11vw,10rem)] leading-[0.92] tracking-[-0.07em] font-semibold',
  section: 'text-[clamp(2rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.06em] font-semibold',
  card: 'text-[clamp(1.8rem,4vw,3.5rem)] leading-[0.98] tracking-[-0.05em] font-semibold',
} as const

export function Heading({
  align = 'left',
  as: Tag = 'h2',
  children,
  className,
  eyebrow,
  size = 'section',
}: Props) {
  return (
    <div className={cn('space-y-4', align === 'right' && 'text-right')}>
      {eyebrow ? (
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-black/56">
          {eyebrow}
        </p>
      ) : null}
      <Tag className={cn(sizeClasses[size], 'text-black', className)}>{children}</Tag>
    </div>
  )
}
