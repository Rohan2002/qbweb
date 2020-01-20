#!/bin/bash

npm run build && fuser -k 443/tcp && pm2 kill && pm2 start server.js

echo "server restarted"

