#! /usr/bin/env bash

set -e

echo "Killing running conntainers"
docker ps | grep aeternity | awk '{print $1}' | xargs docker rm -f

echo "Start docker-compose"
docker-compose -f docker-compose.yml up --force-recreate
