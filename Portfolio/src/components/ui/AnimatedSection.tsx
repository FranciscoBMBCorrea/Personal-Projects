'use client'

import { motion, useReducedMotion } from 'motion/react'

import { createFadeInUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
}

export function AnimatedSection({ children, className, delay = 0, id }: Props) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <section
        className={className}
        id={id}
      >
        {children}
      </section>
    )
  }

  return (
    <motion.section
      className={cn(className)}
      id={id}
      initial="hidden"
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
    >
      <motion.div variants={createFadeInUp(delay)}>{children}</motion.div>
    </motion.section>
  )
}
