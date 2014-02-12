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

/**
 * Different implementations of the Fibonacci sequence
 *
 * @author Felipe Ribeiro <felipernb@gmail.com>
 */

'use strict';

/**
  * Regular fibonacci implementation following the definition:
  * Fib(0) = 0
  * Fib(1) = 1
  * Fib(n) = Fib(n-1) + Fib(n-2)
  *
  * @param Number
  * @return Number
  */
var fibExponential = function (n) {
  return n < 2 ? n : fibExponential(n - 1) + fibExponential(n - 2);
};

/**
  * O(n) in time, O(1) in space and doesn't use recursion
  *
  * @param Number
  * @return Number
  */
var fibLinear = function (n) {
  var fibNMinus2 = 0,
      fibNMinus1 = 1,
      fib = n;
  for (var i = 1; i < n; i++) {
    fib = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fib;
  }
  return fib;
};

/**
  * Implementation with memoization, O(n) in time, O(n) in space
  *
  * @param Number
  * @return Number
  */
var fibWithMemoization = (function () {
  var cache = [0, 1];

  var fib = function (n) {
    if (cache[n] === undefined) {
      cache[n] = fib(n - 1) + fib(n - 2);
    }
    return cache[n];
  };

  return fib;
})();

// Use fibLinear as the default implementation
fibLinear.exponential = fibExponential;
fibLinear.withMemoization = fibWithMemoization;
module.exports = fibLinear;
