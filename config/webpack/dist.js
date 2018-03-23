const entry = require('./entry')
const Uglify = require('uglifyjs-webpack-plugin')
const output = require('./output')
const module_rules = require('./module')
const plugins = []
if ( process.env.MIN ) {
  plugins.push(new Uglify())
}

module.exports = {
  entry,
  output: output('dist'),
  module: module_rules,
  plugins
}
