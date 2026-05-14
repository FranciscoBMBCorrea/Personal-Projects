import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: Props) {
  return (
    <div
      className={cn(
        'rounded-[1.5rem] border border-black/10 bg-[var(--color-background-soft)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
