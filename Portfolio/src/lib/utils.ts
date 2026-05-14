export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ')
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function isExternalHref(href: string) {
  return /^(https?:\/\/|mailto:|tel:)/.test(href)
}

export function swapLocaleInPathname(pathname: string, nextLocale: string) {
  const segments = pathname.split('/')

  if (segments.length > 1) {
    segments[1] = nextLocale
  }

  return segments.join('/') || `/${nextLocale}`
}
