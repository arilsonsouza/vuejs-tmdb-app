'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TMDB_API_KEY: '"AIzaSyDA0ouAySvaTww1kc_OCFTQEmxEIsUDtt0"'
})
