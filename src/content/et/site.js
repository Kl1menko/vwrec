import { buildLocalizedContent } from '../build-localized-content.js'
import { ukContent } from '../uk/site.js'

export const etContent = buildLocalizedContent(
  ukContent,
  {
    code: 'et',
    name: 'Estonian',
    nativeName: 'Eesti',
    translated: false,
  },
  {},
)
