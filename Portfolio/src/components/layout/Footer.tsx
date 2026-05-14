import { contactLinks } from '@/data/profile'
import { layoutTokens } from '@/lib/constants'

type Props = {
  note: string
}

export function Footer({ note }: Props) {
  return (
    <footer className="border-t border-black/10 py-8 sm:py-10">
      <div className={`${layoutTokens.page} grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end`}>
        <div className="space-y-2">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-black/54">
            Francisco Beça Múrias
          </p>
          <p className="max-w-[32rem] text-sm leading-[1.72] text-black/70">{note}</p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {contactLinks.map((contact) => (
            <a
              key={contact.label}
              className="text-sm text-black/74 transition hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/20"
              href={contact.href}
              rel="noreferrer"
              target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
            >
              {contact.label}
            </a>
          ))}
          <a
            className="text-sm text-black/54"
            href="#top"
          >
            Top
          </a>
        </div>
      </div>
    </footer>
  )
}
