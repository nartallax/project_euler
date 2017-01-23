#!/bin/bash

MY_DIR=`( cd \`dirname $0\` && pwd )`
cd $MY_DIR

run_problem(){
	node -e "'use strict'; require('./common/common.js'); global.algo = require('./algo/algo.js'); require('./solutions/$1.js');"
}

if [ -z "$1" ]
	then
		for filename in ./solutions/*.js; do
			TASKNUM=`echo $filename | grep -o -P "\d+"`
			ANSWER=`run_problem $TASKNUM 2> /dev/null`
			echo "$TASKNUM: $ANSWER"
		done
	else
		run_problem $1
fi



cd - > /dev/null