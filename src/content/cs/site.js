import { buildLocalizedContent } from '../build-localized-content.js'
import { ukContent } from '../uk/site.js'

export const csContent = buildLocalizedContent(
  ukContent,
  {
    code: 'cs',
    name: 'Czech',
    nativeName: 'Čeština',
    translated: false,
  },
  {},
)
