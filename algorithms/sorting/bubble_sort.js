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
 * Bubble sort algorithm O(n^2)
 */
var bubbleSort = function(a, comparatorFn) {
  var comparator = new Comparator(comparatorFn),
    n = a.length,
    bound = n - 1;
  for (var i = 0; i < n - 1; i++) {
    var newbound = 0;
    for (var j = 0; j < bound; j++) {
      if (comparator.greaterThan(a[j], a[j + 1])) {
        var tmp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tmp;
        newbound = j;
      }
    }
    bound = newbound;
  }

  return a;
};

module.exports = bubbleSort;