import type { Locale, PortfolioCopy } from '@/data/portfolio'

import { Header } from '@/components/layout/Header'

type Props = {
  copy: PortfolioCopy
  locale: Locale
}

export function SiteHeader({ copy, locale }: Props) {
  return (
    <Header
      alternateLocaleLabel={copy.switchLanguageLabel}
      locale={locale}
      name={copy.name}
      navItems={[
        { href: `/${locale}`, label: copy.nav.home },
        { href: `/${locale}/about`, label: copy.nav.about },
        { href: `/${locale}/services`, label: copy.nav.services },
        { href: `/${locale}#contact`, label: copy.nav.contact },
      ]}
    />
  )
}
