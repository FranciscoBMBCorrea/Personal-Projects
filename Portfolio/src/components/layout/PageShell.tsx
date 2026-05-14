import type { Locale, PortfolioCopy } from '@/data/portfolio'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { layoutTokens } from '@/lib/constants'

type Props = {
  children: React.ReactNode
  copy: PortfolioCopy
  locale: Locale
  navItems: Array<{
    href: string
    label: string
  }>
}

export function PageShell({ children, copy, locale, navItems }: Props) {
  return (
    <main
      className="relative min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]"
      id="top"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.045),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(0,0,0,0.04),transparent_24%)]" />
      <div className="relative">
        <Header
          alternateLocaleLabel={copy.switchLanguageLabel}
          locale={locale}
          name={copy.name}
          navItems={navItems}
          role={copy.role}
        />
        <div className={`${layoutTokens.page} pb-16 pt-8 sm:pt-10 lg:pb-20`}>
          {children}
        </div>
        <Footer note={copy.footer} />
      </div>
    </main>
  )
}
