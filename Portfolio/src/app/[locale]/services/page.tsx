import type { Metadata } from 'next'

import { ServicesPage } from '@/components/services-page'
import { StructuredData } from '@/components/seo/structured-data'
import { locales } from '@/data/portfolio'
import { getPortfolioSiteCopy } from '@/lib/portfolio-content'
import { resolveLocale, resolveOptionalLocale } from '@/lib/route-params'
import {
  buildPageMetadata,
  createBreadcrumbSchema,
  createProfessionalServiceSchema,
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
    path: `/${locale}/services`,
    title: `${copy.name} | ${copy.nav.services}`,
    description: copy.servicesPage.intro,
  })
}

export default async function ServicesRoutePage({ params }: Props) {
  const locale = await resolveLocale(params)
  const copy = await getPortfolioSiteCopy(locale)
  const schema = [
    createProfessionalServiceSchema(copy, locale),
    createBreadcrumbSchema([
      { name: copy.nav.home, path: `/${locale}` },
      { name: copy.nav.services, path: `/${locale}/services` },
    ]),
  ]

  return (
    <>
      <StructuredData data={schema} />
      <ServicesPage
        locale={locale}
        copy={copy}
      />
    </>
  )
}
