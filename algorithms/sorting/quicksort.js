/**
 * Copyright (C) 2014 Felipe Ribeiro
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
 * Quicksort recursively sorts parts of the array in
 * O(n.lg n)
 */
var quicksortInit = function (array, comparatorFn) {

  var comparator = new Comparator(comparatorFn);

  return (function quicksort(array, lo, hi) {
    if (lo < hi) {
      var p = partition(array, comparator, lo, hi);
      quicksort(array, lo, p - 1);
      quicksort(array, p + 1, hi);
    }

    return array;
  })(array, 0, array.length - 1);
};

/**
 * Chooses a pivot and makes every element that is
 * lower than the pivot move to its left, and every
 * greater element moves to its right
 *
 * @return Number the positon of the pivot
 */
var partition = function (a, comparator, lo, hi) {
  // pick a random element, swap with the rightmost and
  // use it as pivot
  swap(a, Math.floor(Math.random() * (hi - lo)) + lo, hi);
  var pivot = hi;

  // dividerPosition keeps track of the position
  // where the pivot should be inserted
  var dividerPosition = lo;

  for (var i = lo; i < hi; i++) {
    if (comparator.lessThan(a[i], a[pivot])) {
      swap(a, i, dividerPosition);
      dividerPosition++;
    }
  }
  swap(a, dividerPosition, pivot);
  return dividerPosition;
};

/**
 * Swaps two elements in the array
 */
var swap = function (array, x, y) {
  var tmp = array[y];
  array[y] = array[x];
  array[x] = tmp;
};

module.exports = quicksortInit;
