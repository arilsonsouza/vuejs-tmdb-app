'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TMDB_API_KEY: '"dbaef0501d0ac3d26e8279360f21551a"'
})
