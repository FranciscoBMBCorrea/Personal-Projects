'use client'

import Link from 'next/link'
import { motion, useMotionValue, useReducedMotion, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import type { PortfolioCopy } from '@/data/portfolio'
import { motionTokens } from '@/lib/constants'
import { clamp } from '@/lib/utils'

type Props = {
  copy: PortfolioCopy
  locale: 'pt' | 'en'
  onComplete: () => void
}

export function Hero({ copy, locale, onComplete }: Props) {
  const reduceMotion = useReducedMotion()
  const [isComplete, setIsComplete] = useState(false)
  const progressRef = useRef(0)
  const touchStartRef = useRef<number | null>(null)
  const progress = useMotionValue(reduceMotion ? 1 : 0)
  const [firstName, ...restName] = copy.name.split(' ')
  const lastName = restName.join(' ')
  const alternateLocale = locale === 'pt' ? 'en' : 'pt'

  const titleY = useTransform(progress, [0, 1], [0, -92])
  const titleOpacity = useTransform(progress, [0, 0.88, 1], [1, 0.42, 0])
  const titleScale = useTransform(progress, [0, 1], [1, 0.985])
  const descriptionY = useTransform(progress, [0, 1], [0, 46])
  const descriptionOpacity = useTransform(progress, [0, 0.72, 1], [1, 0.18, 0])
  const veilY = useTransform(progress, [0, 1], ['110%', '0%'])
  const veilOpacity = useTransform(progress, [0, 0.35, 1], [0, 0.3, 1])
  const shellOpacity = useTransform(progress, [0, 0.96, 1], [1, 1, 0])
  const progressWidth = useTransform(progress, [0, 1], ['32%', '6%'])

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const updateProgress = (delta: number) => {
      if (isComplete) {
        return
      }

      const nextValue = clamp(progressRef.current + delta, 0, 1)
      progressRef.current = nextValue
      progress.set(nextValue)

      if (nextValue >= 1) {
        document.body.style.overflow = previousBodyOverflow
        document.documentElement.style.overflow = previousHtmlOverflow
        setIsComplete(true)
        onComplete()
      }
    }

    const onWheel = (event: WheelEvent) => {
      if (isComplete) {
        return
      }

      if (event.deltaY <= 0) {
        event.preventDefault()
        return
      }

      event.preventDefault()
      updateProgress(Math.min(event.deltaY * motionTokens.heroWheelFactor, motionTokens.heroUnlockStep))
    }

    const onTouchStart = (event: TouchEvent) => {
      touchStartRef.current = event.touches[0]?.clientY ?? null
    }

    const onTouchMove = (event: TouchEvent) => {
      if (isComplete) {
        return
      }

      const currentY = event.touches[0]?.clientY

      if (touchStartRef.current === null || typeof currentY !== 'number') {
        return
      }

      const delta = touchStartRef.current - currentY

      if (delta <= 0) {
        event.preventDefault()
        return
      }

      event.preventDefault()
      updateProgress(Math.min(delta * motionTokens.heroTouchFactor, motionTokens.heroUnlockStep))
      touchStartRef.current = currentY
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (isComplete) {
        return
      }

      if (!['ArrowDown', 'PageDown', 'Space', 'Enter'].includes(event.code)) {
        return
      }

      event.preventDefault()
      updateProgress(motionTokens.heroUnlockStep)
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: false })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
    }
  }, [isComplete, onComplete, progress, reduceMotion])

  return (
    <motion.section
      aria-label="Introduction"
      className="fixed inset-0 z-30 overflow-hidden bg-[var(--color-background)]"
      style={{
        opacity: shellOpacity,
        pointerEvents: isComplete ? 'none' : 'auto',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(0,0,0,0.06),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(0,0,0,0.045),transparent_24%)]" />
      <motion.div
        className="absolute inset-x-[-4%] bottom-0 top-[-10%] bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.82)_42%,rgba(236,236,232,1)_100%)]"
        style={{ opacity: veilOpacity, y: veilY }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[94rem] flex-col justify-between gap-14 px-4 pb-12 pt-10 sm:px-6 lg:px-10 lg:pb-14 lg:pt-12">
        <div className="flex items-start justify-between gap-6">
          <p className="max-w-[18rem] font-mono text-[0.72rem] uppercase tracking-[0.24em] text-black/56">
            {copy.hero.eyebrow}
          </p>
          <Link
            className="inline-flex min-h-11 items-center rounded-full px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-black/74 transition hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/20"
            href={`/${alternateLocale}`}
          >
            {copy.switchLanguageLabel}
          </Link>
        </div>

        <div className="space-y-10 sm:space-y-14">
          <motion.div
            className="space-y-1 sm:space-y-2"
            style={{ opacity: titleOpacity, scale: titleScale, y: titleY }}
          >
            <h1 className="space-y-1 sm:space-y-2">
              <span className="text-display block text-[4.1rem] text-black sm:text-[7rem] lg:text-[10rem] xl:text-[12rem]">
                {firstName}
              </span>
              <span className="text-display ml-[7vw] block text-[4.1rem] text-black sm:ml-[9vw] sm:text-[7rem] lg:ml-[11vw] lg:text-[10rem] xl:text-[12rem]">
                {lastName}
              </span>
              <span className="mt-4 block max-w-[15ch] text-[1rem] font-medium leading-[1.08] tracking-[-0.04em] text-black/74 sm:text-[1.2rem] lg:text-[1.4rem]">
                {copy.role}
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="grid gap-8 border-t border-black/10 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)] lg:items-end"
            style={{ opacity: descriptionOpacity, y: descriptionY }}
          >
            <div className="space-y-6">
              <p className="max-w-[12ch] text-[1.9rem] font-medium leading-[0.98] tracking-[-0.05em] text-black sm:text-[2.7rem] lg:text-[3.8rem]">
                {copy.hero.title}
              </p>
              <p className="max-w-[22rem] text-[1rem] leading-[1.78] text-black/82 sm:text-[1.05rem]">
                {copy.hero.description}
              </p>
            </div>

            <div className="space-y-4 lg:text-right">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-black/52">
                Scroll to enter
              </p>
              <p className="max-w-[16rem] text-[0.95rem] leading-[1.72] text-black/72 lg:ml-auto">
                {copy.hero.note}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            style={{ opacity: descriptionOpacity }}
          >
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-black/56">
              Scroll
            </span>
            <div className="relative h-px w-full max-w-[17rem] bg-black/8">
              <motion.div
                className="absolute inset-y-0 left-0 bg-black/60"
                style={{ width: progressWidth }}
              />
            </div>
            <span className="font-mono text-sm text-black/72">Enter portfolio</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
