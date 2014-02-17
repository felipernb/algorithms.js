.PHONY: test
test-cov: istanbul
test:
	mocha --recursive test
istanbul:
	istanbul cover node_modules/.bin/_mocha -- --recursive test
coveralls:
	   cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

