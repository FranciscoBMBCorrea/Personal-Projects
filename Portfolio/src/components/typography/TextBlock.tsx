import { cn } from '@/lib/utils'

type Props = {
  className?: string
  paragraphs: string[]
  size?: 'base' | 'large'
}

const sizeClasses = {
  base: 'text-base leading-[1.78] text-black/82',
  large: 'text-lg leading-[1.72] text-black/80',
} as const

export function TextBlock({ className, paragraphs, size = 'base' }: Props) {
  return (
    <div className={cn('space-y-5', className)}>
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
