const path = require('path')

let filename = 'faa-endorsements.js'
if ( process.env.MIN ) {
  filename = 'faa-endorsements.min.js'
}

function output(dir) {
  return {
    path: path.resolve(__dirname, '../../' + dir),
    filename,
    library: 'FAAEndorsements',
    libraryExport: 'FAAEndorsements',
    libraryTarget: 'umd'
  }
}

module.exports = output
