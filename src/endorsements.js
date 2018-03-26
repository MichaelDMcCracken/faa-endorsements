const map = require('lodash.map')
const Templates = require('./templates')

const Endorsements = map(Templates,t => t.attributes.title)

module.exports = Endorsements
