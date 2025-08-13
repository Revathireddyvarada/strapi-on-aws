#!/bin/bash
pm2 restart all || pm2 start npm --name "strapi-app" -- run start
