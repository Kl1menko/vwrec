import { buildLocalizedContent } from '../build-localized-content.js'
import { ukContent } from '../uk/site.js'

export const hrContent = buildLocalizedContent(
  ukContent,
  {
    code: 'hr',
    name: 'Croatian',
    nativeName: 'Hrvatski',
    translated: false,
  },
  {},
)
