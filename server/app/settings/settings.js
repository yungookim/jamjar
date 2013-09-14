"use strict";
module.exports = function(nconf, libs){

  var app = libs.app;
  var passport = libs.passport;
  var express = libs.express;
  
  // Log configurations
  // var winston = new (libs.winston.Logger)({
  //   exitOnError: false, //don't crash on exception
  //   transports: [
  //     new libs.winston.transports.Console({ level: 'info', colorize : true, json : true, 'timestamp' : true }),
  //     // new libs.winston.transports.File({ filename: 'error-logs.log', json : true, level : 'error', colorize : true }),
  //     // new libs.winston.transports.File({ filename: 'warn-logs.log', json : true, level : 'warn', colorize : true }),
  //     new libs.winston.transports.File({ filename: './logs/server-logs.log', json : true, level : 'info', 'timestamp' : true }),
  //   ],
  //   exceptionHandlers: [
  //     new libs.winston.transports.File({ filename: './logs/exceptions.log', json: true }),
  //     new libs.winston.transports.Console({ colorize: true, json: true })
  //   ]
  // });
  // winston.cli();
  // libs.winston = winston;

  // libs.api_call_log = function(req, returnCode, opt){
  //   // Log api call info and client info
  //   var log = {};
  //   if (req.user){
  //     log.email = req.user.email;
  //   }
  //   if (opt){
  //     log.opt = opt;
  //   }
  //   if(returnCode){
  //     log.returnCode = returnCode;
  //   }

  //   log.req = {
  //     method : req.originalMethod, 
  //     url : req.originalUrl, 
  //     ip : req.ip, 
  //     body : req.body, 
  //     params : req.params
  //   };
  //   libs.winston.info("API Access Log", log);
  // }

  var logFile = require('fs').createWriteStream('./logs/express.log', {flags: 'w'}); 
  
  app.configure(function(){
    // app.use(express.compress());
    app.use(express.logger('dev'));
    app.use(express.logger({stream: logFile}));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(function(err, req, res, next){
      console.error(err.stack);
      res.send(500, 'Something broke!');
    });
  });


  return this;
}
