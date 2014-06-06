/**
 * Copyright (C) 2014 Tayllan Búrigo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"], to
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

var radixSort = require('../../../algorithms/sorting/radix_sort'),
    assert = require('assert');

var firstObject = {
  someProperty: 'The',
  key: 88541234132
};

var secondObject = {
  someProperty: 'winter',
  key: 90071992540992
};

var thirdObject = {
  someProperty: 'is',
  key: 0
};

var fourthObject = {
  someProperty: 'coming',
  key: 65234567,
  anotherProperty: '!'
};

var array = [
  thirdObject,
  fourthObject,
  firstObject,
  secondObject,
  secondObject,
  firstObject,
  firstObject,
  fourthObject
];

describe('Radix Sort', function () {
  it('should sort the given array', function () {
    array = radixSort(array);

    // Asserts that the array is truly sorted
    assert.deepEqual(array.indexOf(thirdObject), 0);
    assert.deepEqual(array.indexOf(fourthObject), 1);
    assert.deepEqual(array.indexOf(firstObject), 3);
    assert.deepEqual(array.indexOf(secondObject), 6);
    assert.deepEqual(array.indexOf({key: 99}), -1);
  });
});
