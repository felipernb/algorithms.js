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

var bubbleSort = require('../../../algorithms/sorting/bubble_sort'),
    assert = require('assert');

describe('BUbble Sort', function() {
  it('should sort the given array', function() {
    assert.deepEqual(bubbleSort([]), []);
    assert.deepEqual(bubbleSort([1]), [1]);
    assert.deepEqual(bubbleSort([2,1]), [1,2]);
    assert.deepEqual(bubbleSort([3,1,2]), [1,2,3]);
    assert.deepEqual(bubbleSort([1,2,3,4,5,6]), [1,2,3,4,5,6]);
    assert.deepEqual(bubbleSort([6,5,4,3,2,1]), [1,2,3,4,5,6]);
    assert.deepEqual(bubbleSort([1,295,3,6,8,10,10,20,0,5]), [0,1,3,5,6,8,10,10,20,295]);
  });
});
