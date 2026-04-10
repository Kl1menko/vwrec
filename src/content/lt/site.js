import { buildLocalizedContent } from '../build-localized-content.js'
import { ukContent } from '../uk/site.js'

export const ltContent = buildLocalizedContent(
  ukContent,
  {
    code: 'lt',
    name: 'Lithuanian',
    nativeName: 'Lietuvių',
    translated: false,
  },
  {},
)
