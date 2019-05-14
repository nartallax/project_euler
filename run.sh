#!/bin/bash

# usage: ./run.sh 3
# where 3 is a problem number

set -e

node ../ts-bundler/main.js \
	--entry-point "solutions/$1" \
	--entry-point-function main \
	--environment node \
	--tsconfig ./tsconfig.json \
	--fancy \
	--silent \
	> res.js

node res.js