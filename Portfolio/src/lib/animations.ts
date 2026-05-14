'use client'

import type { Variants } from 'motion/react'

import { motionTokens } from '@/lib/constants'

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: motionTokens.sectionOffset,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing,
    },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

export const subtleScaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionTokens.duration.base,
      ease: motionTokens.easing,
    },
  },
}

export const headerReveal: Variants = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.base,
      ease: motionTokens.easing,
    },
  },
}

export function createFadeInUp(delay = 0): Variants {
  return {
    hidden: fadeInUp.hidden,
    visible: {
      ...fadeInUp.visible,
      transition: {
        duration: motionTokens.duration.slow,
        ease: motionTokens.easing,
        delay,
      },
    },
  }
}
