/*
* Copyright (C) 2014 Joshua Curl
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

var powerSet = require('../../../algorithms/math/power_set'),
    assert = require('assert');

function testArrayEqual(a, b) {
  var arrayEqual = true;
  a.forEach(function(elem, index) {
    if(a[index] != b[index]) {
      arrayEqual = false;
    }
  });
  return arrayEqual && a.length === b.length;
}

function testArrayInArray(a, b) {
  var arrayInArray = false;
  b.forEach(function(array) {
    if(testArrayEqual(a, array)) {
      arrayInArray = true;
    }
  });
  return arrayInArray;
}

describe('Power set', function () {
  describe('#iterative()', function () {
    it('should return the right elements of power set', function () {
      var zeroElementTest = powerSet([]);
      assert(zeroElementTest.length === 0);

      var oneElementTest = powerSet([0]);
      assert(testArrayInArray([], oneElementTest));
      assert(testArrayInArray([0], oneElementTest));
      assert(oneElementTest.length === 2);

      var twoElementTest = powerSet([0, 1]);
      assert(testArrayInArray([], twoElementTest));
      assert(testArrayInArray([0], twoElementTest));
      assert(testArrayInArray([1], twoElementTest));
      assert(testArrayInArray([0, 1], twoElementTest));
      assert(twoElementTest.length === 4);

      var threeElementTest = powerSet([0, 1, 2]);
      assert(testArrayInArray([], threeElementTest));
      assert(testArrayInArray([0], threeElementTest));
      assert(testArrayInArray([1], threeElementTest));
      assert(testArrayInArray([2], threeElementTest));
      assert(testArrayInArray([0, 1], threeElementTest));
      assert(testArrayInArray([0, 2], threeElementTest));
      assert(testArrayInArray([1, 2], threeElementTest));
      assert(testArrayInArray([0, 1, 2], threeElementTest));
      assert(testArrayInArray([0, 1], threeElementTest));
      assert(threeElementTest.length === 8);

      var fourElementTest = powerSet([0, 1, 2, 3]);
      assert(testArrayInArray([], fourElementTest));
      assert(testArrayInArray([0], fourElementTest));
      assert(testArrayInArray([1], fourElementTest));
      assert(testArrayInArray([2], fourElementTest));
      assert(testArrayInArray([3], fourElementTest));
      assert(testArrayInArray([0, 1], fourElementTest));
      assert(testArrayInArray([0, 2], fourElementTest));
      assert(testArrayInArray([0, 3], fourElementTest));
      assert(testArrayInArray([1, 2], fourElementTest));
      assert(testArrayInArray([1, 3], fourElementTest));
      assert(testArrayInArray([2, 3], fourElementTest));
      assert(testArrayInArray([0, 1, 2], fourElementTest));
      assert(testArrayInArray([0, 1, 3], fourElementTest));
      assert(testArrayInArray([0, 2, 3], fourElementTest));
      assert(testArrayInArray([1, 2, 3], fourElementTest));
      assert(testArrayInArray([0, 1, 2, 3], fourElementTest));
      assert(fourElementTest.length === 16);

    });
  });

  describe('#recursive()', function () {
    it('should return the right elements of power set', function () {
      var zeroElementTest = powerSet.recursive([]);
      assert(zeroElementTest.length === 0);

      var oneElementTest = powerSet.recursive([0]);
      assert(testArrayInArray([], oneElementTest));
      assert(testArrayInArray([0], oneElementTest));
      assert(oneElementTest.length === 2);

      var twoElementTest = powerSet.recursive([0, 1]);
      assert(testArrayInArray([], twoElementTest));
      assert(testArrayInArray([0], twoElementTest));
      assert(testArrayInArray([1], twoElementTest));
      assert(testArrayInArray([0, 1], twoElementTest));
      assert(twoElementTest.length === 4);

      var threeElementTest = powerSet.recursive([0, 1, 2]);
      assert(testArrayInArray([], threeElementTest));
      assert(testArrayInArray([0], threeElementTest));
      assert(testArrayInArray([1], threeElementTest));
      assert(testArrayInArray([2], threeElementTest));
      assert(testArrayInArray([0, 1], threeElementTest));
      assert(testArrayInArray([0, 2], threeElementTest));
      assert(testArrayInArray([1, 2], threeElementTest));
      assert(testArrayInArray([0, 1, 2], threeElementTest));
      assert(testArrayInArray([0, 1], threeElementTest));
      assert(threeElementTest.length === 8);

      var fourElementTest = powerSet.recursive([0, 1, 2, 3]);
      assert(testArrayInArray([], fourElementTest));
      assert(testArrayInArray([0], fourElementTest));
      assert(testArrayInArray([1], fourElementTest));
      assert(testArrayInArray([2], fourElementTest));
      assert(testArrayInArray([3], fourElementTest));
      assert(testArrayInArray([0, 1], fourElementTest));
      assert(testArrayInArray([0, 2], fourElementTest));
      assert(testArrayInArray([0, 3], fourElementTest));
      assert(testArrayInArray([1, 2], fourElementTest));
      assert(testArrayInArray([1, 3], fourElementTest));
      assert(testArrayInArray([2, 3], fourElementTest));
      assert(testArrayInArray([0, 1, 2], fourElementTest));
      assert(testArrayInArray([0, 1, 3], fourElementTest));
      assert(testArrayInArray([0, 2, 3], fourElementTest));
      assert(testArrayInArray([1, 2, 3], fourElementTest));
      assert(testArrayInArray([0, 1, 2, 3], fourElementTest));
      assert(fourElementTest.length === 16);
    });
  });
});
