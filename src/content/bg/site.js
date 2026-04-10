import { buildLocalizedContent } from '../build-localized-content.js'
import { ukContent } from '../uk/site.js'

export const bgContent = buildLocalizedContent(
  ukContent,
  {
    code: 'bg',
    name: 'Bulgarian',
    nativeName: 'Български',
    translated: false,
  },
  {},
)
