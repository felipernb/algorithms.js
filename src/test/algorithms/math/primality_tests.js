'use strict';

const root = require('../../..');
const primalityTests = root.Math.primalityTests;
const assert = require('assert');

const validate = function(primalityTest) {
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

describe('Primality Tests', function() {
  describe('#naiveTest()', function() {
    it('should correctly determine whether a number is prime', function() {
      validate(primalityTests.naiveTest);
    });
  });
  describe('#trialDivisionTest()', function() {
    it('should correctly determine whether a number is prime', function() {
      validate(primalityTests.trialDivisionTest);
    });
  });
});

