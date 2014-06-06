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
 * Asymptotic Complexity: O(array.length * d), where 'd' represents
 * the amount of digits in the larger key of the array
 *
 * @param Array
 * @return Array
 */
var radixSort = function(array) {
  var max = maximumKey(array);
  var digitsMax = amountOfDigits(max);

  for (var i = 0; i < digitsMax; i++) {
    array = auxiliaryCountingSort(array, i);
  }

  return array;
};

/**
 * Auxiliary sorting method for RadixSort
 * Sorts an array of objects according to only one digit of
 * their 'key' property. The digit to be sorted is determined
 * by the 'mod' variable
 * Every object inside the array MUST have the 'key' property with
 * a integer value.
 *
 * Execution Time: (2 * array.length + 10)
 * Asymptotic Complexity: O(array.length)
 *
 * @param Array
 * @return Array
 */
var auxiliaryCountingSort = function(array, mod) {
  var length = array.length;
  var bucket = [];

  for (var i = 0; i < 10; i++) {
    bucket[i] = [];
  }

  for (i = 0; i < length; i++) {
    var digit = parseInt((array[i].key / Math.pow(10, mod)).toFixed(mod)) % 10;
    bucket[digit].push(array[i]);
  }

  var pointer = 0;

  for (i = 0; i < 10; i++) {
    var localLength = bucket[i].length;

    for (var j = 0; j < localLength; j++) {
      array[pointer++] = bucket[i][j];
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
 * @return Integer if array non-empty
 *         Undefined otherwise
 */
var maximumKey = function(array) {
  var length = array.length;

  if (length > 0) {
    var max = array[0].key;

    for (var i = 1; i < length; i++) {
      if (array[i].key > max) {
        max = array[i].key;
      }
    }

    return max;
  }
  else {
    return undefined;
  }
};

/**
 * Returns the amount of digits contained in a number
 * 
 * Asymptotic Complexity: O(d), where 'd' represents the
 * amount of digits in the number
 * 
 * @param Number
 * @return Number
 */
var amountOfDigits = function(number) {
  if (number === 0) {
    return 1;
  }
  else {
    var counter = 0;

    // For positive numbers
    while (parseInt(number) > 0) {
      number /= 10;
      ++counter;
    }

    // For negative numbers
    while (parseInt(number) < 0) {
      number /= 10;
      ++counter;
    }

    return counter;
  }
};

module.exports = radixSort;
