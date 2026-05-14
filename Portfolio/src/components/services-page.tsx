import type { Locale, PortfolioCopy } from '@/data/portfolio'

import { PageShell } from '@/components/layout/PageShell'
import { Card } from '@/components/ui/Card'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Heading } from '@/components/typography/Heading'

type Props = {
  locale: Locale
  copy: PortfolioCopy
}

export function ServicesPage({ locale, copy }: Props) {
  const navItems = [
    { href: `/${locale}`, label: copy.nav.home },
    { href: `/${locale}/about`, label: copy.nav.about },
    { href: `/${locale}#projects`, label: copy.nav.projects },
    { href: `/${locale}#contact`, label: copy.nav.contact },
  ]

  return (
    <PageShell
      copy={copy}
      locale={locale}
      navItems={navItems}
    >
      <AnimatedSection className="border-b border-black/10 pb-12 sm:pb-16">
        <div className="space-y-8">
          <Heading
            as="h1"
            eyebrow={copy.servicesPage.label}
            size="section"
          >
            {copy.servicesPage.title}
          </Heading>
          <p className="max-w-[38rem] text-lg leading-[1.72] text-black/82">
            {copy.servicesPage.intro}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {copy.servicesPage.sections.map((section, index) => (
            <Card
              key={section.title}
              className="flex h-full flex-col gap-5 p-6"
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56">
                0{index + 1}
              </p>
              <h2 className="text-[1.9rem] leading-[1.02] tracking-[-0.045em] text-black">
                {section.title}
              </h2>
              <p className="max-w-[20rem] text-sm leading-[1.72] text-black/80">
                {section.text}
              </p>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </PageShell>
  )
}
