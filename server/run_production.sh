#!/bin/bash
npm install
pm2 kill
pm2 web
export NODE_ENV=production
pm2 start -f app.js
# echo "Ping 192.241.134.36:8080/api/ping"
# sleep 1
# curl 192.241.134.36:8080/api/ping
mocha
