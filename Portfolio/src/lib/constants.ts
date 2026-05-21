export const layoutTokens = {
  page: 'mx-auto w-full max-w-[94rem] px-4 sm:px-6 lg:px-10',
  narrow: 'max-w-[42rem]',
  medium: 'max-w-[58rem]',
  wide: 'max-w-[72rem]',
  section: 'py-14 sm:py-18 lg:py-24',
  sectionCompact: 'py-10 sm:py-14 lg:py-16',
  touchTarget: 'min-h-11 min-w-11',
} as const

export const motionTokens = {
  duration: {
    fast: 0.18,
    base: 0.42,
    slow: 0.68,
  },
  easing: [0.22, 1, 0.36, 1] as const,
  sectionOffset: 26,
  heroUnlockStep: 0.18,
  heroWheelFactor: 0.00185,
  heroTouchFactor: 0.0022,
} as const

export const typographyTokens = {
  display: 'tracking-[-0.065em] leading-[0.94]',
  heading: 'tracking-[-0.055em] leading-[1.02]',
  body: 'leading-[1.72] tracking-[-0.01em]',
  meta: 'tracking-[0.22em] leading-none',
} as const

export const surfaceTokens = {
  border: 'border-black/12',
  softBorder: 'border-black/8',
  mutedText: 'text-black/68',
  bodyText: 'text-black/82',
  softBackground: 'bg-[var(--color-background-soft)]',
} as const
