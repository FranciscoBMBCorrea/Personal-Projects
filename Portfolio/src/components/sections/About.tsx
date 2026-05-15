import type { PortfolioCopy } from '@/data/portfolio'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Heading } from '@/components/typography/Heading'
import { TextBlock } from '@/components/typography/TextBlock'

type Props = {
  copy: PortfolioCopy['about']
  introCard: PortfolioCopy['introCard']
}

export function AboutSection({ copy, introCard }: Props) {
  return (
    <AnimatedSection
      className="border-t border-black/10 py-12 sm:py-16 lg:py-20"
      id="about"
    >
      <div className="grid gap-10 lg:grid-cols-[11rem_minmax(0,1fr)_minmax(15rem,20rem)]">
        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-black/56">
            {copy.label}
          </p>
        </div>

        <div className="space-y-8">
          <Heading
            as="h2"
            size="section"
          >
            {copy.title}
          </Heading>
          <TextBlock
            className="measure-copy"
            paragraphs={copy.paragraphs}
          />
        </div>

        <div className="space-y-4">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-black/56">
            {introCard.title}
          </p>
          {introCard.rows.map(([label, value]) => (
            <div
              key={label}
              className="border-b border-black/10 pb-4"
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/56">
                {label}
              </p>
              <p className="mt-2 max-w-[18rem] text-sm leading-[1.68] text-black/84">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
