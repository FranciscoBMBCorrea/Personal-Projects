'use client'

import Link from 'next/link'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from 'motion/react'
import { useRef } from 'react'

import type { PortfolioCopy } from '@/data/portfolio'
import { motionTokens } from '@/lib/constants'

type Props = {
  copy: PortfolioCopy
  locale: 'pt' | 'en'
}

const containerStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: motionTokens.easing,
    },
  },
}

const lineDraw: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.7,
      ease: motionTokens.easing,
    },
  },
}

function lineReveal(offsetX = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      y: '108%',
      x: offsetX,
      clipPath: 'inset(0 0 100% 0)',
    },
    visible: {
      opacity: 1,
      y: '0%',
      x: 0,
      clipPath: 'inset(0 0 0% 0)',
      transition: {
        duration: 0.82,
        ease: motionTokens.easing,
      },
    },
  }
}

const nameOffsets = [
  '',
  'pl-[4vw] sm:pl-[8vw] lg:pl-[10vw]',
  'pl-[10vw] sm:pl-[16vw] lg:pl-[18vw]',
] as const

export function Hero({ copy, locale }: Props) {
  const reduceMotion = useReducedMotion()
  const rootRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ['start start', 'end start'],
  })

  const nameY = useTransform(scrollYProgress, [0, 1], [0, -42])
  const phraseY = useTransform(scrollYProgress, [0, 1], [0, -16])
  const metaOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.74, 0.42])

  const content =
    locale === 'pt'
      ? {
          statement: 'Clareza espacial, desenhada com contenção.',
          metadata: 'Interiores · Mobiliário à medida · 2D · 3D',
          projects: 'Projetos',
          about: 'Sobre',
          contact: 'Contacto',
        }
      : {
          statement: 'Spatial clarity, drawn with restraint.',
          metadata: 'Interiors · Custom furniture · 2D · 3D',
          projects: 'Projects',
          about: 'About',
          contact: 'Contact',
        }

  const [firstName = 'FRANCISCO', secondName = 'BEÇA', ...restName] = copy.name
    .toUpperCase()
    .split(' ')
  const thirdName = restName.join(' ') || 'MÚRIAS'
  const alternateLocale = locale === 'pt' ? 'en' : 'pt'
  const navLinks = [
    { href: `/${locale}#projects`, label: content.projects },
    { href: `/${locale}#about`, label: content.about },
    { href: `/${locale}#contact`, label: content.contact },
  ]

  return (
    <section
      ref={rootRef}
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[var(--color-background)] lg:min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_14%,rgba(17,17,17,0.05),transparent_22%),radial-gradient(circle_at_84%_16%,rgba(17,17,17,0.028),transparent_18%)]" />

      <motion.div
        animate={reduceMotion ? undefined : 'visible'}
        className="relative mx-auto flex w-full max-w-[94rem] flex-col justify-between px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8 lg:min-h-screen lg:px-10 lg:pb-12 lg:pt-10"
        initial={reduceMotion ? false : 'hidden'}
        variants={containerStagger}
      >
        <div className="grid gap-8">
          <div className="flex items-start justify-between gap-6">
            <motion.p
              className="max-w-[15rem] font-mono text-[0.68rem] uppercase tracking-[0.2em] text-black/68 sm:max-w-[22rem] sm:text-[0.72rem]"
              style={reduceMotion ? undefined : { opacity: metaOpacity }}
              variants={fadeUp}
            >
              {content.metadata}
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                className="inline-flex min-h-11 items-center rounded-full px-2 py-2 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-black/70 transition duration-200 hover:translate-x-[2px] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/20"
                href={`/${alternateLocale}`}
              >
                {copy.switchLanguageLabel}
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="origin-left"
            variants={lineDraw}
          >
            <span className="block h-px w-full bg-black/10" />
          </motion.div>
        </div>

        <div className="grid gap-10 py-10 lg:flex-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(15rem,24rem)] lg:items-end lg:py-12">
          <motion.div
            className="self-center"
            style={reduceMotion ? undefined : { y: nameY }}
          >
            <h1
              className="space-y-1 sm:space-y-2"
              id="hero-title"
            >
              {[firstName, secondName, thirdName].map((line, index) => (
                <span
                  key={line}
                  className={`block overflow-hidden ${nameOffsets[index] ?? nameOffsets[2]}`}
                >
                  <motion.span
                    className="text-display block text-[clamp(3rem,14.5vw,4.8rem)] leading-[0.86] tracking-[-0.075em] text-black sm:text-[clamp(4.25rem,14vw,7.5rem)] lg:text-[clamp(5.75rem,10.4vw,10rem)] lg:tracking-[-0.085em]"
                    variants={lineReveal(index === 2 ? 18 : 0)}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </motion.div>

          <div className="flex flex-col gap-8 lg:items-start lg:pb-5">
            <div className="space-y-5">
              <motion.div
                className="origin-left"
                variants={lineDraw}
              >
                <span className="block h-px w-28 bg-black/18 sm:w-36 lg:w-44" />
              </motion.div>

              <div className="overflow-hidden">
                <motion.p
                  className="text-serif max-w-[14ch] text-[clamp(1.85rem,4vw,3.75rem)] leading-[0.98] tracking-[-0.04em] text-black text-balance"
                  style={reduceMotion ? undefined : { y: phraseY }}
                  variants={fadeUp}
                >
                  {content.statement}
                </motion.p>
              </div>
            </div>

            <motion.nav
              aria-label={locale === 'pt' ? 'Navegação da capa' : 'Hero navigation'}
              className="flex flex-wrap gap-x-4 gap-y-3"
              variants={containerStagger}
            >
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={fadeUp}
                >
                  <Link
                    className="inline-flex min-h-11 items-center gap-2 rounded-full px-1 py-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-black/70 transition duration-200 hover:translate-x-[3px] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/20"
                    href={item.href}
                  >
                    <span className="text-black/52">0{index + 1}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </div>
        </div>

      </motion.div>
    </section>
  )
}
