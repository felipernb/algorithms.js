/**
 * Copyright (C) 2014 Eugene Sharygin
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
'use strict';

var nextPermutation = require('../../../algorithms/math/next_permutation'),
    Comparator = require('../../../util/comparator'),
    assert = require('assert');


var range = function (begin, end) {
  if (end === undefined) {
    end = begin;
    begin = 0;
  }
  if (end <= begin) {
    return [];
  }
  return new Array(end - begin + 1).join(0).split('').map(function (_, index) {
    return begin + index;
  });
};


var factorial = function (n) {
  return range(1, n + 1).reduce(function (product, value) {
    return product * value;
  }, 1);
};


var permutations = function (start, compareFn) {
  var permutations = [];
  var perm = start.slice();
  do {
    permutations.push(perm.slice());
  } while (nextPermutation(perm, compareFn));
  return permutations;
};


describe('Next Permutation', function () {
  it('should return immediately following permutation', function () {
    assert.deepEqual(permutations([1, 2]), [[1, 2], [2, 1]]);
    assert.deepEqual(permutations([1, 2, 2]),
                     [[1, 2, 2], [2, 1, 2], [2, 2, 1]]);
    assert.deepEqual(permutations([1]), [[1]]);
    assert.deepEqual(permutations([]), [[]]);
  });

  it('should generate all N! permutations if the elements are distinct',
     function () {
        [4, 5, 6].forEach(function (size) {
          var count = 0;
          var perm = range(size);
          do {
            count += 1;
          } while (nextPermutation(perm));
          assert.equal(count, factorial(size));
        });
      });

  it('should support custom compare functions', function () {
    var reverseComparator = new Comparator();
    reverseComparator.reverse();
    var reverseCompareFn = reverseComparator.compare;

    assert.deepEqual(permutations([1, 2, 3]).reverse(),
                     permutations([3, 2, 1], reverseCompareFn));
    assert.deepEqual(permutations([0, 0, 1]).reverse(),
                     permutations([1, 0, 0], reverseCompareFn));
  });
});
