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


var reservoirSampling = require('../../../algorithms/math/reservoir_sampling'),
    assert = require('assert');


describe('Reservoir Sampling', function () {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('should sample K distinct values from the array', function () {
    var sample = reservoirSampling(array, 5);
    assert.equal(sample.length, 5);
    var seen = {};
    array.forEach(function (value) {
      assert(!seen[value]);
      assert(array.indexOf(value) >= 0);
      seen[value] = true;
    });
  });

  it('should work in corner cases', function () {
    assert.deepEqual(reservoirSampling(array, 0), []);
    assert.deepEqual(reservoirSampling([], 0), []);
    var fullSample = reservoirSampling(array, array.length);
    assert.deepEqual(fullSample.sort(), array);
  });

  it('should raise an error if asked for too many elements', function () {
    assert.throws(function () {
      reservoirSampling(array, array.length + 1);
    });
  });
});
