'use strict';

var root = require('../../..'),
    primalityTests = root.Math.primalityTests,
    assert = require('assert'),
    s = 'should correctly determine whether a number is prime';

describe('Primality Tests', function () {
  describe('#naiveTest()', function () {
    it(s, function () {
      f(primalityTests.naiveTest);
    });
  });
  describe('#trialDivisionTest()', function () {
    it(s, function () {
      f(primalityTests.trialDivisionTest);
    });
  });
});

var f = function (primalityTest) {
  assert.equal(primalityTest(1), false);
  assert.equal(primalityTest(2), true);
  assert.equal(primalityTest(3), true);
  assert.equal(primalityTest(4), false);
  assert.equal(primalityTest(5), true);
  assert.equal(primalityTest(14), false);
  assert.equal(primalityTest(21), false);
  assert.equal(primalityTest(37), true);
  assert.equal(primalityTest(209), false);
  assert.equal(primalityTest(211), true);
};
