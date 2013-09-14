"use strict"

module.exports = (settings, nconf, libs) ->

  app = libs.app
  uuid = require('node-uuid')
  state = [];
  configs = {};


  app.post '/action', (req, res) ->
    console.log req.body.type
    console.log req.body.velocity
    if state.length < 1
      state.push({type : req.body.type, velocity : req.body.velocity})
    uid = uuid.v4().replace /-/gm, ""
    res.send uid


  app.post '/init', (req, res)->
    state = [];
    configs = {};

  app.get '/data', (req, res)->
    res.send(state.pop())


  # app.post '/config/:id', (req, res) ->
    # Defaults : req.body -> { deviceId : .., width: .., height:..} 
    # configs 

  @