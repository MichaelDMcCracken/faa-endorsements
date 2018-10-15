var path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'index.js'),
  output: {
    path: path.resolve(__dirname,'dist/'),
    filename: 'index.js',
    library: 'FaaEndorsements',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: 'gray-matter-loader'
      }
    ]
  },
  mode: 'development'
};
