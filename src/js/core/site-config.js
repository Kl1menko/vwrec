export const LOCALE_META = {
  uk: { label: 'Українська', short: 'UA', flag: '/flags/ua.svg' },
  en: { label: 'English', short: 'EN', flag: '/flags/gb.svg' },
  cs: { label: 'Čeština', short: 'CZ', flag: '/flags/cz.svg' },
  pl: { label: 'Polski', short: 'PL', flag: '/flags/pl.svg' },
  sk: { label: 'Slovenčina', short: 'SK', flag: '/flags/sk.svg' },
  de: { label: 'Deutsch', short: 'DE', flag: '/flags/de.svg' },
  lt: { label: 'Lietuvių', short: 'LT', flag: '/flags/lt.svg' },
  et: { label: 'Eesti', short: 'EE', flag: '/flags/ee.svg' },
  hu: { label: 'Magyar', short: 'HU', flag: '/flags/hu.svg' },
  hr: { label: 'Hrvatski', short: 'HR', flag: '/flags/hr.svg' },
  ro: { label: 'Română', short: 'RO', flag: '/flags/ro.svg' },
  bg: { label: 'Български', short: 'BG', flag: '/flags/bg.svg' },
}

export const LOCALE_LABELS = Object.fromEntries(
  Object.entries(LOCALE_META).map(([code, meta]) => [code, meta.label]),
)

export const LOCALES = Object.keys(LOCALE_META)

export const PAGE_DEFINITIONS = [
  { key: 'home', slug: '', label: 'Home' },
  { key: 'services', slug: 'services', label: 'Services' },
  { key: 'industries', slug: 'industries', label: 'Industries' },
  { key: 'cases', slug: 'cases', label: 'Case Studies' },
  { key: 'report', slug: 'report', label: 'Report' },
  { key: 'about', slug: 'about', label: 'About' },
  { key: 'contacts', slug: 'contacts', label: 'Contacts' },
  { key: 'faq', slug: 'faq', label: 'FAQ' },
  { key: 'privacy-policy', slug: 'privacy-policy', label: 'Privacy Policy' },
  { key: 'terms', slug: 'terms', label: 'Terms & Conditions' },
]

export const PAGE_LOOKUP = Object.fromEntries(
  PAGE_DEFINITIONS.map((page) => [page.key, page]),
)

export function buildPageUrl(locale, pageKey) {
  const page = PAGE_LOOKUP[pageKey]

  if (!page) return `/${locale}/`
  return page.slug ? `/${locale}/${page.slug}/` : `/${locale}/`
}
