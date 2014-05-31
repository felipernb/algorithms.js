all: jshint coverage

setup:
	npm install

jshint: setup
	jshint algorithms data_structures test util

test: setup
	mocha -R spec --recursive test

coverage: setup
	istanbul cover ./node_modules/.bin/_mocha -- -R spec --recursive test

coveralls:
	cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

