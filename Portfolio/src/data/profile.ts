import profileData from '@/data/profile.json'
import type { ContactLink, Locale, PortfolioCopy } from '@/types/portfolio'

type ProfileDataset = {
  contactLinks: ContactLink[]
  profileContent: Record<Locale, PortfolioCopy>
}

const dataset = profileData as ProfileDataset

export const contactLinks = dataset.contactLinks
export const profileContent = dataset.profileContent

export function getProfileCopy(locale: Locale) {
  return profileContent[locale]
}
