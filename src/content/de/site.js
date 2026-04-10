import { buildLocalizedContent } from '../build-localized-content.js'
import { ukContent } from '../uk/site.js'

export const deContent = buildLocalizedContent(
  ukContent,
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    translated: false,
  },
  {},
)
