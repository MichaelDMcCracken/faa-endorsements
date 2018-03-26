const module_rules = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.md$/,
      use: ['json-loader','yaml-frontmatter-loader']
    }
  ]
}

module.exports = module_rules
