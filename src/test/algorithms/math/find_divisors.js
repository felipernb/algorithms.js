'use strict';

const math = require('../../..').Math;
const findDivisors = math.findDivisors;
const assert = require('assert');

/**
 * Deep equal for arrays
 */
function testArrayEqual(a, b) {
  let arrayEqual = true;
  a.sort();
  b.sort();
  a.forEach(function(elem, index) {
    if (a[index] !== b[index]) {
      arrayEqual = false;
    }
  });
  return arrayEqual && a.length === b.length;
}

const testFindDivisors = function(findDivisors) {
  assert(testArrayEqual([], findDivisors(-2)));
  assert(testArrayEqual([], findDivisors(0)));
  assert(testArrayEqual([1], findDivisors(1)));
  assert(testArrayEqual([1, 2], findDivisors(2)));
  assert(testArrayEqual([1, 3], findDivisors(3)));
  assert(testArrayEqual([1, 2, 4], findDivisors(4)));
  assert(testArrayEqual([1, 5], findDivisors(5)));
  assert(testArrayEqual([1, 2, 4, 5, 10, 20, 25, 50, 100], findDivisors(100)));
  assert(testArrayEqual([1, 2, 7, 13, 14, 26, 91, 182], findDivisors(182)));
};

describe('Find divisors', function() {
  describe('#Generic()', function() {
    it('should return the divisors of the number', function() {
      testFindDivisors(findDivisors);
    });
  });

  describe('#PairingUnsorted()', function() {
    it('should return the divisors of the number', function() {
      testFindDivisors(findDivisors.pairingUnsorted);
    });
  });

  describe('#PairingSorted()', function() {
    it('should return the divisors of the number', function() {
      testFindDivisors(findDivisors.pairingSorted);
    });
  });
});
