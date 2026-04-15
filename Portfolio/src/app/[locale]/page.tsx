import { notFound } from 'next/navigation'

import { PortfolioHome } from '@/components/portfolio-home'
import {
  getPortfolioCopy,
  getProjects,
  isLocale,
  locales,
  type Locale,
} from '@/data/portfolio'

type Props = {
  params: Promise<{
    locale: string
  }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleHomePage({ params }: Props) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <PortfolioHome
      locale={locale as Locale}
      copy={getPortfolioCopy(locale as Locale)}
      projects={getProjects(locale as Locale)}
    />
  )
}
