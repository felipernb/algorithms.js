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
 * Initialize the comparator object with a compare function
 *
 * If the function is not passed, it will use the default
 * compare signs (<, > and ==)
 *
 * @param Function
 */
function Comparator(compareFn) {
  if (compareFn) {
    this.compare = compareFn;
  }
}

/**
 * Default implementation for the compare function
 */
Comparator.prototype.compare = function (a, b) {
  if (a == b) return 0;
  return a < b ? -1 : 1;
};

Comparator.prototype.lessThan = function (a, b) {
  return this.compare(a, b) < 0;
};

Comparator.prototype.lessThanOrEqual = function (a, b) {
  return this.lessThan(a, b) || this.equal(a, b);
};

Comparator.prototype.greaterThan = function (a, b) {
  return this.compare(a, b) > 0;
};

Comparator.prototype.greaterThanOrEqual = function (a, b) {
  return this.greaterThan(a, b) || this.equal(a, b);
};

Comparator.prototype.equal = function (a, b) {
  return this.compare(a, b) === 0;
};

/**
 * Reverse the comparison function to use the opposite logic, e.g:
 * this.compare(a, b) => 1
 * this.reverse();
 * this.compare(a, b) => -1
 */
Comparator.prototype.reverse = function () {
  var originalCompareFn = this.compare;
  this.compare = function (a, b) {
    return originalCompareFn(b, a);
  };
};

module.exports = Comparator;
