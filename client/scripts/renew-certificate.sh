#!/bin/bash

certbot renew && pm2 kill && pm2 start
