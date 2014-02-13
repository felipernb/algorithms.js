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

/**
 * Merge sort
 * O(n.lgn)
 */
var mergeSort = function (a) {

  if (a.length > 1) {
    var middle = a.length >> 1;
    var left = mergeSort(a.slice(0, middle));
    var right = mergeSort(a.slice(middle));
    a = merge(left, right);
  }

  return a;
};

var merge = function (a, b) {
  var i = 0,
      j = 0,
      result = [];

  while (i < a.length && j < b.length) {
    result.push(a[i] < b[j] ? a[i++] : b[j++]);
  }

  if (i < a.length)
    result = result.concat(a.slice(i));
  else
    result = result.concat(b.slice(j));

  return result;
};

module.exports = mergeSort;
