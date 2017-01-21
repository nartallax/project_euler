#!/bin/bash

MY_DIR=`( cd \`dirname $0\` && pwd )`
cd $MY_DIR

node -e "'use strict'; require('./common/common.js'); global.algo = require('./algo/algo.js'); require('./solutions/$1.js');"

cd - > /dev/null