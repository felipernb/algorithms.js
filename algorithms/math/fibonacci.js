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

var power = require('./fast_power');

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

/**
  * Implementation using Binet's formula with the rounding trick.
  * O(1) in time, O(1) in space
  *
  * @author Eugene Sharygin
  * @param Number
  * @return Number
  */
var fibDirect = function (number) {
  var phi = (1 + Math.sqrt(5)) / 2;
  return Math.floor(Math.pow(phi, number) / Math.sqrt(5) + 0.5);
};

/**
  * Implementation based on matrix exponentiation.
  * O(log(n)) in time, O(1) in space
  *
  * @author Eugene Sharygin
  * @param Number
  * @return Number
  */
var fibLogarithmic = function (number) {
  // Transforms [f_1, f_0] to [f_2, f_1] and so on.
  var nextFib = [[1, 1], [1, 0]];

  var zeroRow = [0, 0];
  var matrixMultiply = function (matrix1, matrix2) {
    return matrix1.map(function (factors) {
      return matrix2.reduce(function (sum, row, i) {
        return sum.map(function (a, j) {
          return a + factors[i] * row[j];
        });
      }, zeroRow);
    });
  };

  var transform = power(nextFib, number, matrixMultiply, [[1, 0], [0, 1]]);
  var initialState = [0, 1];
  var finalState = transform.map(function (factors) {
    return factors.reduce(function (sum, factor, index) {
      return sum + factor * initialState[index];
    }, 0);
  });
  return finalState[0];
};

// Use fibLinear as the default implementation
fibLinear.exponential = fibExponential;
fibLinear.withMemoization = fibWithMemoization;
fibLinear.direct = fibDirect;
fibLinear.logarithmic = fibLogarithmic;
module.exports = fibLinear;
