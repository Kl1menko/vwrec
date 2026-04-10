import { buildLocalizedContent } from '../build-localized-content.js'
import { ukContent } from '../uk/site.js'

export const enContent = buildLocalizedContent(
  ukContent,
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    translated: false,
  },
  {},
)
