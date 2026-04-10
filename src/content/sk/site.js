import { buildLocalizedContent } from '../build-localized-content.js'
import { ukContent } from '../uk/site.js'

export const skContent = buildLocalizedContent(
  ukContent,
  {
    code: 'sk',
    name: 'Slovak',
    nativeName: 'Slovenčina',
    translated: false,
  },
  {},
)
