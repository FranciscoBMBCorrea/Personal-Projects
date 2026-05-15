import type { Metadata } from 'next'

import { AboutPage } from '@/components/about-page'
import { StructuredData } from '@/components/seo/structured-data'
import { locales } from '@/data/portfolio'
import { getPortfolioSiteCopy } from '@/lib/portfolio-content'
import { resolveLocale, resolveOptionalLocale } from '@/lib/route-params'
import {
  buildPageMetadata,
  createBreadcrumbSchema,
  createPersonSchema,
  createProfilePageSchema,
} from '@/lib/seo'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveOptionalLocale(params)

  if (!locale) {
    return {}
  }

  const copy = await getPortfolioSiteCopy(locale)

  return buildPageMetadata({
    locale,
    path: `/${locale}/about`,
    title: `${copy.name} | ${copy.nav.about}`,
    description: copy.aboutPage.intro,
  })
}

export default async function AboutRoutePage({ params }: Props) {
  const locale = await resolveLocale(params)
  const copy = await getPortfolioSiteCopy(locale)
  const schema = [
    createPersonSchema(copy),
    createProfilePageSchema(copy, locale),
    createBreadcrumbSchema([
      { name: copy.nav.home, path: `/${locale}` },
      { name: copy.nav.about, path: `/${locale}/about` },
    ]),
  ]

  return (
    <>
      <StructuredData data={schema} />
      <AboutPage
        locale={locale}
        copy={copy}
      />
    </>
  )
}
