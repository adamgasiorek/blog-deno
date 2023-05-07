#!/bin/sh
if [ $# -lt 1 ] ; then
  echo "USAGE: $0 input.ged"
  exit 1
fi
npm install && \
  node_modules/.bin/parse-gedcom "$1" > ./apps/blog/familytree/src/entries.json && \
  node_modules/.bin/webpack ./apps/blog/familytree/src/index.js --output-path ./apps/blog/src/assets/family
