"use strict"

module.exports = (settings, nconf, libs) ->

  app = libs.app
  uuid = require('node-uuid')


  app.get '/keys', (req, res) ->
    RSA.create (ret) ->
      ret.uid = uuid.v4().replace /-/gm, ""
      res.send ret

  @
