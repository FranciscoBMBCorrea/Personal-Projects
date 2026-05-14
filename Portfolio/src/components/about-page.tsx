import type { Locale, PortfolioCopy } from '@/data/portfolio'

import { PageShell } from '@/components/layout/PageShell'
import { Card } from '@/components/ui/Card'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Heading } from '@/components/typography/Heading'
import { TextBlock } from '@/components/typography/TextBlock'

type Props = {
  locale: Locale
  copy: PortfolioCopy
}

export function AboutPage({ locale, copy }: Props) {
  const navItems = [
    { href: `/${locale}`, label: copy.nav.home },
    { href: `/${locale}#projects`, label: copy.nav.projects },
    { href: `/${locale}/services`, label: copy.nav.services },
    { href: `/${locale}#contact`, label: copy.nav.contact },
  ]

  return (
    <PageShell
      copy={copy}
      locale={locale}
      navItems={navItems}
    >
      <AnimatedSection className="border-b border-black/10 pb-12 sm:pb-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(17rem,20rem)]">
          <div className="space-y-8">
            <Heading
              as="h1"
              eyebrow={copy.aboutPage.label}
              size="section"
            >
              {copy.aboutPage.title}
            </Heading>
            <p className="max-w-[34rem] text-lg leading-[1.72] text-black/82">
              {copy.aboutPage.intro}
            </p>
          </div>

          <Card className="p-6">
            <div className="space-y-4">
              {copy.aboutPage.stats.map(([label, value]) => (
                <div
                  key={label}
                  className="border-b border-black/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56">
                    {label}
                  </p>
                  <p className="mt-2 text-base leading-[1.6] text-black/84">{value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 sm:py-16">
        <TextBlock
          className="max-w-[44rem]"
          paragraphs={copy.aboutPage.body}
        />
      </AnimatedSection>
    </PageShell>
  )
}
