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
 * Euclidean algorithm to calculate the Greatest Common Divisor (GCD)
 *
 * @param Number
 * @param Number
 *
 * @return Number
 */
var gcdDivisionBased = function (a, b) {
  var tmp = a;
  a = Math.max(a, b);
  b = Math.min(tmp, b);
  while (b !== 0) {
    tmp = b;
    b = a % b;
    a = tmp;
  }

  return a;
};

/**
 * Binary GCD algorithm (Stein's Algorithm)
 *
 * @link https://en.wikipedia.org/wiki/Binary_GCD_algorithm
 * This is basically a js version of the c implementation on Wikipedia
 *
 * @param Number
 * @param Number
 *
 * @return Number
 */
var gcdBinaryIterative = function (a, b) {

  // GCD(0,b) == b; GCD(a,0) == a, GCD(0,0) == 0
  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  // Let shift = log(K), where K is the greatest power of 2
  // dividing both a and b
  for (var shift = 0; ((a | b) & 1) === 0; ++shift) {
    a >>= 1;
    b >>= 1;
  }

  // Remove all factors of 2 in a -- they are not common
  // Note: a is not zero, so while will terminate
  while ((a & 1) === 0) {
    a >>= 1;
  }

  var tmp;

  // From here on, a is always odd
  do {
    // Remove all factors of 2 in b -- they are not common
    // Note: b is not zero, so while will terminate
    while ((b & 1) === 0) {
      b >>= 1;
    }

    // Now a and b are both odd. Swap if necessary so a <= b,
    // then set b = b - a (which is even).
    if (a > b) {
      tmp = b;
      b = a;
      a = tmp;
    }

    b -= a;  // Here b >= a
  } while (b !== 0);

  // restore common factors of 2
  return a << shift;
};

gcdDivisionBased.binary = gcdBinaryIterative;
module.exports = gcdDivisionBased;
