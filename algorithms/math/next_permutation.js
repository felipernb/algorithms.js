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

var Comparator = require('../../util/comparator');


/**
 * Narayana's algorithm computes the subsequent permutation
 *   in lexicographical order.
 * Complexity: O(n).
 *
 * @param {Array} array
 * @param {function} [compareFn] - Custom compare function.
 * @return {boolean} Boolean flag indicating whether the algorithm succeeded,
 *   true unless the input permutation is lexicographically the last one.
 */
var nextPermutation = function (array, compareFn) {
  if (!array.length) {
    return false;
  }
  var cmp = new Comparator(compareFn);

  // Find pivot and successor indices.
  var pivot = array.length - 1;
  while (pivot && cmp.greaterThanOrEqual(array[pivot - 1], array[pivot])) {
    pivot -= 1;
  }
  if (!pivot) {
    // Permutation is sorted in descending order.
    return false;
  }
  var pivotValue = array[--pivot];
  var successor = array.length - 1;
  while (cmp.lessThanOrEqual(array[successor], pivotValue)) {
    successor -= 1;
  }

  // Swap values.
  array[pivot] = array[successor];
  array[successor] = pivotValue;

  // Reverse the descending part.
  for (var left = pivot, right = array.length; ++left < --right;) {
    var temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }
  return true;
};


module.exports = nextPermutation;
