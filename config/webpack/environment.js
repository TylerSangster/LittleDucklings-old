const { environment } = require('@rails/webpacker')

const webpacker = require('webpack')
environment.plugin.append('Provide',
  new webpack.ProvidePlugin({
      s: 'query',
      jQuery: 'jquery',
      Popper: ['popper.js', 'default']
  })
  )
module.exports = environment
