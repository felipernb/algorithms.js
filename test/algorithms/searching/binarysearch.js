/**
 * Copyright (C) 2014 Felipe Ribeiro
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software'), to
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

var binarySearch = require('../../../algorithms/searching/binarysearch'),
    assert = require('assert');

describe('Binary Search', function () {
  it('should find elements in the sorted array', function () {
    assert(binarySearch([1, 2, 3, 4, 5], 3), '3 is in the array');
    assert(binarySearch([1, 2, 3, 4, 5], 1), '1 is in the array');
    assert(binarySearch([1, 2, 3, 4, 5], 2), '2 is in the array');
    assert(binarySearch([1, 2, 3, 4, 5], 4), '4 is in the array');
    assert(binarySearch([1, 2, 3, 4, 5], 5), '5 is in the array');
    assert(!binarySearch([1, 2, 3, 4, 5], 0), '0 is NOT in the array');
    assert(!binarySearch([1, 2, 3, 4, 5, 8], 6), '6 is NOT in the array');
    assert(!binarySearch([1, 2, 3, 4, 5], 100), '100 is NOT in the array');
  });
});


