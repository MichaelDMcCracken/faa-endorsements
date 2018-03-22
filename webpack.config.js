/* jshint node: true, asi: true, esversion: 6 */
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './lib/faa-endorsements.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'faa-endorsements.js',
    library: 'FAAEndorsements',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals()]
}
