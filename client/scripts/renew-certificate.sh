#!/bin/bash

pm2 kill
sudo service nginx restart
certbot renew
fuser -k 443/tcp && pm2 kill && pm2 start ../server.js
echo "new ssl certificate and server restarted!"

