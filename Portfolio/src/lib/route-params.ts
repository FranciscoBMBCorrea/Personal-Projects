import { notFound } from 'next/navigation'

import { isLocale, type Locale } from '@/data/portfolio'

type LocaleRouteParams = Promise<{ locale: string }>

export function parseLocale(locale: string): Locale | null {
  if (!isLocale(locale)) {
    return null
  }

  return locale
}

export function resolveLocaleValue(locale: string): Locale {
  const resolvedLocale = parseLocale(locale)

  if (!resolvedLocale) {
    notFound()
  }

  return resolvedLocale
}

export async function resolveLocale(params: LocaleRouteParams): Promise<Locale> {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return locale
}

export async function resolveOptionalLocale(params: LocaleRouteParams): Promise<Locale | null> {
  const { locale } = await params

  return parseLocale(locale)
}
