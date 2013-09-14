#!/bin/bash
npm install
pm2 kill
pm2 web
export NODE_ENV=development
pm2 dev app.js