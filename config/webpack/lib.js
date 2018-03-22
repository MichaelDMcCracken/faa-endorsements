const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: path.resolve(__dirname,'../../src/faa-endorsements.js'),
  output: {
    path: path.resolve(__dirname, '../../lib'),
    filename: 'faa-endorsements.js',
    library: 'FAAEndorsements',
    libraryExport: 'FAAEndorsements',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.md$/,
        use: ['json-loader','yaml-frontmatter-loader']
      }
    ]
  }
}
