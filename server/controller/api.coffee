"use strict"

module.exports = (settings, nconf, libs) ->

  app = libs.app
  uuid = require('node-uuid')

  app.get '/keys', (req, res) ->
      uid = uuid.v4().replace /-/gm, ""
      res.send uid

  @
