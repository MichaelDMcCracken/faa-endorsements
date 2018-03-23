const path = require('path')

const resolve = {
  alias: {
    Templates: path.resolve(__dirname,'../../src/templates/'),
    handlebars: path.resolve(__dirname,'../../node_modules/handlebars/dist/handlebars.js')
  }
}

module.exports = resolve
