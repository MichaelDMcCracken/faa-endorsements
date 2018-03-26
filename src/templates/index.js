const map = require('lodash.map')
const arrayToObjectTemplate = require('array-to-object-template')

const a3  = require('./a-3-pre-solo-knowledge.md')
const a4  = require('./a-4-pre-solo-flight-training.md')
const a5  = require('./a-5-pre-solo-flight-night.md')
const a6  = require('./a-6-solo-first-ninety.md')
const a7  = require('./a-7-solo-flight-additional-ninety.md')
const a8  = require('./a-8-solo-within-25-miles.md')
const a9  = require('./a-9-solo-xc-flight.md')
const a10 = require('./a-10-solo-xc-individual-flight.md')
const a11 = require('./a-11-repeated-within-50.md')

const templates = [a3,a4,a5,a6,a7,a8,a9,a10,a11]

const Templates = map(templates,t => {
  t.attributes.locals = arrayToObjectTemplate(t.attributes.locals)
  return t
})

module.exports = Templates
