import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ServicesPage } from '@/components/services-page'
import { getPortfolioCopy, isLocale, locales, type Locale } from '@/data/portfolio'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const copy = getPortfolioCopy(locale as Locale)

  return {
    title: `${copy.name} | ${copy.nav.services}`,
    description: copy.servicesPage.intro,
  }
}

export default async function ServicesRoutePage({ params }: Props) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return <ServicesPage locale={locale as Locale} copy={getPortfolioCopy(locale as Locale)} />
}
