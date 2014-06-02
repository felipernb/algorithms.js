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

var newtonSqrt = require('../../../algorithms/math/newton_sqrt'),
    assert = require('assert');

describe('Newton square root', function () {
  it('should calculate the exact root of square numbers', function () {
    assert.strictEqual(newtonSqrt(0), 0);
    assert.strictEqual(newtonSqrt(1), 1);
    assert.strictEqual(newtonSqrt(4), 2);
    assert.strictEqual(newtonSqrt(9), 3);
    assert.strictEqual(newtonSqrt(16), 4);
    assert.strictEqual(newtonSqrt(25), 5);
    assert.strictEqual(newtonSqrt(36), 6);
    assert.strictEqual(newtonSqrt(49), 7);
    assert.strictEqual(newtonSqrt(64), 8);
    assert.strictEqual(newtonSqrt(81), 9);
    assert.strictEqual(newtonSqrt(100), 10);
  });

  it('should calculate an approximated root for every number',
    function () {
      for (var i = 0; i < 1000; i++) {
        var newton = newtonSqrt(i);
        var nativeJS = Math.sqrt(i);
        var difference = Math.abs(newton - nativeJS);
        assert(difference < 1e-6,
          'Square root of ' + i + ' should be ' + nativeJS +
          ' but got ' + newton + ' instead');
      }
    });

});
