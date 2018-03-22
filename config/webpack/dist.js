const path = require('path')
const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname,'../../src/faa-endorsements.js'),
  output: {
    path: path.resolve(__dirname,'../../dist'),
    filename: 'faa-endorsements.js',
    library: 'FAAEndorsements',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new Uglify()
  ]
}
