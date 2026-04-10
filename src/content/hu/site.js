import { buildLocalizedContent } from '../build-localized-content.js'
import { ukContent } from '../uk/site.js'

export const huContent = buildLocalizedContent(
  ukContent,
  {
    code: 'hu',
    name: 'Hungarian',
    nativeName: 'Magyar',
    translated: false,
  },
  {},
)
