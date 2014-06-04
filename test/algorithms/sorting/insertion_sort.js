/**
 * Copyright (C) 2014 Bruno Roberto Búrigo
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

var insertionSort = require('../../../algorithms/sorting/insertion_sort'),
    assert = require('assert');

describe('Insertion Sort', function () {
  it('should sort the given array', function () {
    assert.deepEqual(insertionSort([]), []);
    assert.deepEqual(insertionSort([1]), [1]);
    assert.deepEqual(insertionSort([2, 1]), [1, 2]);
    assert.deepEqual(insertionSort([3, 1, 2]), [1, 2, 3]);
    assert.deepEqual(insertionSort([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(insertionSort([6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(
      insertionSort([1, 295, 3, 6, 8, 10, 10, 20, 0, 5]),
      [0, 1, 3, 5, 6, 8, 10, 10, 20, 295]
    );
  });


  it('should sort the array with a specific comparison function', function () {
    var compare = function (a, b) {
      if (a.length === b.length) {
        return 0;
      }
      return (a.length < b.length) ? -1 : 1;
    };
    assert.deepEqual(insertionSort([], compare), []);
    assert.deepEqual(insertionSort(['apple'], compare), ['apple']);
    assert.deepEqual(
      insertionSort(['apple', 'banana'], compare),
      ['apple', 'banana']
    );
    assert.deepEqual(
      insertionSort(['apple', 'banana', 'car'], compare),
      ['car', 'apple', 'banana']
    );
    assert.deepEqual(
      insertionSort(['apple', 'banana', 'car', 'z'], compare),
      ['z', 'car', 'apple', 'banana']
    );

    var reverseSort = function (a, b) {
      if (a === b) {
        return 0;
      }
      return (a < b) ? 1 : -1;
    };
    assert.deepEqual(
      insertionSort([1, 295, 3, 6, 8, 10, 10, 20, 0, 5], reverseSort),
      [295, 20, 10, 10, 8, 6, 5, 3, 1, 0]
    );

    var Guy = function(age) {
      this.age = age;
    };

    var compareAgeOfGuys = function(g1, g2) {
      if (g1.age === g2.age) {
        return 0;
      }
      return (g1.age < g2.age) ? -1 : 1;
    };

    var g1 = new Guy(30),
      g2 = new Guy(80),
      g3 = new Guy(15),
      g4 = new Guy(20);

    assert.deepEqual(
      insertionSort([g1, g2, g3, g4], compareAgeOfGuys), [g3, g4, g1, g2]
    );
  });
});
