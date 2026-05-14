import type { PortfolioCopy } from '@/data/portfolio'
import { contactLinks } from '@/data/profile'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/typography/Heading'

type Props = {
  copy: PortfolioCopy['contact']
}

export function ContactSection({ copy }: Props) {
  return (
    <AnimatedSection
      className="border-t border-black/10 py-12 sm:py-16 lg:py-20"
      id="contact"
    >
      <div className="grid gap-10 lg:grid-cols-[11rem_minmax(0,1fr)]">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-black/56">
          {copy.label}
        </p>

        <div className="grid gap-8 border-b border-black/10 pb-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(16rem,20rem)]">
          <div className="space-y-6">
            <Heading
              as="h2"
              size="section"
            >
              {copy.title}
            </Heading>
            <p className="max-w-[30rem] text-base leading-[1.78] text-black/82">
              {copy.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href={contactLinks[1].href}>{copy.secondaryCta}</Button>
              <Button
                href={contactLinks[2].href}
                variant="secondary"
              >
                {copy.primaryCta}
              </Button>
            </div>
          </div>

          <div className="divide-y divide-black/10">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                className="group flex min-h-11 items-end justify-between py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/20"
                href={contact.href}
                rel="noreferrer"
                target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
              >
                <span className="text-[1.5rem] leading-none tracking-[-0.04em] text-black sm:text-[1.8rem]">
                  {contact.label}
                </span>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-black/60 transition duration-200 group-hover:translate-x-1 group-hover:text-black">
                  Open
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
