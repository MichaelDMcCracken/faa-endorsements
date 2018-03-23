import map from 'lodash/map'

import a3  from './a-3-pre-solo-knowledge.md'
import a4  from './a-4-pre-solo-flight-training.md'
import a5  from './a-5-pre-solo-flight-night.md'
import a6  from './a-6-solo-first-ninety.md'
import a7  from './a-7-solo-flight-additional-ninety.md'
import a8  from './a-8-solo-within-25-miles.md'
import a9  from './a-9-solo-xc-flight.md'
import a10 from './a-10-solo-xc-individual-flight.md'
import a11 from './a-11-repeated-within-50.md'

export const Templates = [a3,a4,a5,a6,a7,a8,a9,a10,a11]

export const Endorsements = map(Templates,t => t.attributes.title)
