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

var gcd = require('../../../algorithms/math/gcd'),
    assert = require('assert');

describe('GCD', function () {
  it('should calculate the correct GCD between two numbers', function () {
    assert.equal(gcd(1, 0), 1);
    assert.equal(gcd(2, 2), 2);
    assert.equal(gcd(2, 4), 2);
    assert.equal(gcd(4, 2), 2);
    assert.equal(gcd(5, 2), 1);
    assert.equal(gcd(10, 100), 10);
    assert.equal(gcd(10000000, 2), 2);
    assert.equal(gcd(7, 49), 7);
    assert.equal(gcd(7, 5), 1);
    assert.equal(gcd(35, 49), 7);
  });

  it('should calculate the correct GCD between two numbers using ' +
    'the binary method', function () {
      var gcdb = gcd.binary;
      assert.equal(gcdb(1, 0), 1);
      assert.equal(gcdb(0, 1), 1);
      assert.equal(gcdb(0, 0), 0);
      assert.equal(gcdb(2, 2), 2);
      assert.equal(gcdb(2, 4), 2);
      assert.equal(gcdb(4, 2), 2);
      assert.equal(gcdb(5, 2), 1);
      assert.equal(gcdb(10, 100), 10);
      assert.equal(gcdb(10000000, 2), 2);
      assert.equal(gcdb(7, 49), 7);
      assert.equal(gcdb(7, 5), 1);
      assert.equal(gcdb(35, 49), 7);
  });
});


