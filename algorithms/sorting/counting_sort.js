/**
 * Copyright (C) 2014 Tayllan Búrigo
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
 * Sorts an array of objects according to their 'key' property
 * Every object inside the array MUST have the 'key' property with
 * a integer value.
 *
 * Execution Time: (3 * array.length - 1)
 * Asymptotic Complexity: O(array.length + maximumKey)
 *
 * @param Array
 * @return Array
 */
var countingSort = function (array) {
  var max = maximumKey(array);
  var auxiliaryArray = [];
  var length = array.length;

  for (var i = 0; i < length; i++) {
    var position = array[i].key;

    if (auxiliaryArray[position] === undefined) {
      auxiliaryArray[position] = [];
    }

    auxiliaryArray[position].push(array[i]);
  }

  array = [];
  var pointer = 0;

  for (i = 0; i <= max; i++) {
    if (auxiliaryArray[i] !== undefined) {
      var localLength = auxiliaryArray[i].length;

      for (var j = 0; j < localLength; j++) {
        array[pointer++] = auxiliaryArray[i][j];
      }
    }
  }

  return array;
};

/**
 * Finds the maximum key from an array of objects
 *
 * Asymptotic Complexity: O(array.length)
 *
 * @param Array
 * @return Integer
 */
var maximumKey = function (array) {
  var max = array[0].key;
  var length = array.length;

  for (var i = 1; i < length; i++) {
    if (array[i].key > max) {
      max = array[i].key;
    }
  }

  return max;
};

module.exports = countingSort;
