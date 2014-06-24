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


var multiplicationOperator = function (a, b) {
  return a * b;
};


/**
 * Raise value to a positive integer power by repeated squaring.
 *
 * @param {*} base
 * @param {number} power
 * @param {function} [mul] - Multiplication function,
 *   standard multiplication operator by default.
 * @param {*} identity - Identity value, used when power == 0.
 *   If mul is not set, defaults to 1.
 * @return {*}
 */
var fastPower = function (base, power, mul, identity) {
  if (mul === undefined) {
    mul = multiplicationOperator;
    identity = 1;
  }
  if (power < 0 || Math.floor(power) != power) {
    throw new Error('Power must be a positive integer or zero.');
  }

  // If the power is zero, identity value must be given (or set by default).
  if (!power) {
    if (identity === undefined) {
      throw new Error('The power is zero, but identity value not set.');
    }
    else {
      return identity;
    }
  }

  // Iterative form of the algorithm avoids checking the same thing twice.
  var result;
  var multiplyBy = function (value) {
    result = (result === undefined) ? value : mul(result, value);
  };
  for (var factor = base; power; power >>>= 1, factor = mul(factor, factor)) {
    if (power & 1) {
      multiplyBy(factor);
    }
  }
  return result;
};


module.exports = fastPower;
