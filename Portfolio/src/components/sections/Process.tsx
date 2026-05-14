import type { PortfolioCopy } from '@/data/portfolio'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Heading } from '@/components/typography/Heading'

type Props = {
  copy: PortfolioCopy['process']
}

export function ProcessSection({ copy }: Props) {
  return (
    <AnimatedSection
      className="border-t border-black/10 py-12 sm:py-16 lg:py-20"
      id="process"
    >
      <div className="grid gap-10 lg:grid-cols-[11rem_minmax(0,1fr)]">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-black/56">
          {copy.label}
        </p>

        <div>
          <div className="grid gap-6 border-b border-black/10 pb-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(16rem,20rem)]">
            <Heading
              as="h2"
              size="section"
            >
              {copy.title}
            </Heading>
            <p className="max-w-[18rem] text-sm leading-[1.7] text-black/78">
              {copy.description}
            </p>
          </div>

          <div className="divide-y divide-black/10">
            {copy.steps.map((step) => (
              <article
                key={step.number}
                className="grid gap-5 py-5 lg:grid-cols-[4rem_minmax(0,20rem)_1fr]"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/54">
                  {step.number}
                </p>
                <h3 className="text-[1.7rem] font-medium leading-[1.02] tracking-[-0.045em] text-black sm:text-[2.1rem]">
                  {step.title}
                </h3>
                <p className="max-w-[30rem] text-sm leading-[1.7] text-black/78">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
