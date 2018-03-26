const _path = require('path')

function path(p) {
  return _path.resolve(__dirname,'../..',p)
}

const resolve = {
  alias: {
    handlebars: path('node_modules/handlebars/dist/handlebars.js')
  }
}

module.exports = resolve
