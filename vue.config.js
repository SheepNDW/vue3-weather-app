const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue3-weather-app/'
    : '/',

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.scss')
      ]
    }
  }
}
