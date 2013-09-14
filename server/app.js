"use strict";
var express        = require('express')
  , app            = express()
  , nconf          = require('nconf')
  , underscore     = require('underscore')
  , winston        = require('winston')
  , async          = require('async');

//Load configuration hierarch
nconf.env().argv().file(__dirname + '/settings/config.json');

var libs = {
  app : app,
  express : express,
  _ : underscore,
  winston : winston,
  async : async
};

var settings      = new require('./settings/settings')(nconf, libs);
var controller    = new require('./controller/api')(settings, nconf, libs);

app.use(express.static(__dirname + '/../../plugin/package'));

// Start listening after everything is loaded
app.listen(nconf.get("port"));
console.log("Running on " + nconf.get("port"));
console.log("ENV configs : " + app.settings.env);
