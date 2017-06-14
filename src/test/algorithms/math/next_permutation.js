'use strict';

const math = require('../../..').Math;
const nextPermutation = math.nextPermutation;
const Comparator = require('../../../util/comparator');
const assert = require('assert');

const range = function(begin, end) {
  if (end === undefined) {
    end = begin;
    begin = 0;
  }
  if (end <= begin) {
    return [];
  }
  return new Array(end - begin + 1).join(0).split('').map(function(_, index) {
    return begin + index;
  });
};

const factorial = function(n) {
  return range(1, n + 1).reduce(function(product, value) {
    return product * value;
  }, 1);
};

const permutations = function(start, compareFn) {
  const permutations = [];
  const perm = start.slice();
  do {
    permutations.push(perm.slice());
  } while (nextPermutation(perm, compareFn));
  return permutations;
};

describe('Next Permutation', function() {
  it('should return immediately following permutation', function() {
    assert.deepEqual(permutations([1, 2]), [[1, 2], [2, 1]]);
    assert.deepEqual(permutations([1, 2, 2]),
                     [[1, 2, 2], [2, 1, 2], [2, 2, 1]]);
    assert.deepEqual(permutations([1]), [[1]]);
    assert.deepEqual(permutations([]), [[]]);
  });

  it('should generate all N! permutations if the elements are distinct',
     function() {
       [4, 5, 6].forEach(function(size) {
         let count = 0;
         const perm = range(size);
         do {
           count += 1;
         } while (nextPermutation(perm));
         assert.equal(count, factorial(size));
       });
     });

  it('should support custom compare functions', function() {
    const reverseComparator = new Comparator();
    reverseComparator.reverse();
    const reverseCompareFn = reverseComparator.compare;

    assert.deepEqual(permutations([1, 2, 3]).reverse(),
                     permutations([3, 2, 1], reverseCompareFn));
    assert.deepEqual(permutations([0, 0, 1]).reverse(),
                     permutations([1, 0, 0], reverseCompareFn));
  });
});
