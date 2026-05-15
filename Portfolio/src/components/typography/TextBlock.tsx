import { cn } from '@/lib/utils'

type Props = {
  className?: string
  paragraphs: string[]
  size?: 'base' | 'large'
}

const sizeClasses = {
  base: 'text-[var(--font-size-body)] leading-[var(--line-height-body)] tracking-[var(--tracking-body)] text-black/82',
  large: 'text-[var(--font-size-lead)] leading-[1.6] tracking-[-0.018em] text-black/82',
} as const

export function TextBlock({ className, paragraphs, size = 'base' }: Props) {
  return (
    <div className={cn('measure-copy space-y-5 text-pretty', className)}>
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className={sizeClasses[size]}
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}
