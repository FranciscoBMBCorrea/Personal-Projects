import type { Locale, PortfolioCopy } from '@/data/portfolio'

import { PageShell } from '@/components/layout/PageShell'

type Props = {
  children: React.ReactNode
  copy: PortfolioCopy
  locale: Locale
}

export function EditorialPageShell({ children, copy, locale }: Props) {
  return (
    <PageShell
      copy={copy}
      locale={locale}
      navItems={[
        { href: `/${locale}`, label: copy.nav.home },
        { href: `/${locale}/about`, label: copy.nav.about },
        { href: `/${locale}/services`, label: copy.nav.services },
        { href: `/${locale}#contact`, label: copy.nav.contact },
      ]}
    >
      {children}
    </PageShell>
  )
}
