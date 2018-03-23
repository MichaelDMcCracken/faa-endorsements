const entry = require('./entry')
const nodeExternals = require('webpack-node-externals')
const output = require('./output')
const module_rules = require('./module')
const path = require('path')
const resolve = require('./resolve')

module.exports = {
  entry,
  output: output('lib'),
  module: module_rules,
  target: 'node',
  externals: [nodeExternals()],
  resolve
}
