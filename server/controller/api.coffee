"use strict"

module.exports = (settings, nconf, libs) ->

  app = libs.app
  uuid = require('node-uuid')
  state = [];
  positions = {};

  app.post '/action', (req, res) ->
    console.log req.body.type
    console.log req.body.velocity
    if state.length < 1
      state.push({type : req.body.type, velocity : req.body.velocity})
    uid = uuid.v4().replace /-/gm, ""
    res.send uid

  app.post '/init', (req, res)->
    state = [];
    positions = {};

  app.get '/action', (req, res)->
    res.send(state.pop())


  app.get '/data', (req, res) ->
    console.log 'positions'
    console.log positions
    console.log 'state'
    console.log state
    res.send(positions)


  app.post '/config/:id', (req, res) ->
    # Defaults : req.body -> { deviceId : .., width: .., height:..} 
    # configs 
    id = req.params.id
    positions[id].screen = {
      width : req.body.width,
      height : req.body.height
    }
    res.send(positions);
    console.log positions


  app.post '/position/:id', (req, res)->
    id = req.params.id
    positions[id].positions = { 
      top : req.body.top,
      left : req.body.left,
      statue : req.body.statue
    }
    res.send(positions)

  app.get '/positions', (req, res)->
    res.send(positions)

  @