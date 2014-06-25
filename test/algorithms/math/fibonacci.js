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

var fib = require('../../../algorithms/math/fibonacci'),
    assert = require('assert');

var testFibonacciSequence = function (fib) {
  assert.equal(0, fib(0));
  assert.equal(1, fib(1));
  assert.equal(1, fib(2));
  assert.equal(2, fib(3));
  assert.equal(3, fib(4));
  assert.equal(5, fib(5));
  assert.equal(8, fib(6));
  assert.equal(13, fib(7));
  assert.equal(21, fib(8));
  assert.equal(34, fib(9));
  assert.equal(55, fib(10));
  assert.equal(89, fib(11));
  assert.equal(144, fib(12));
};

describe('Fibonacci', function () {
  describe('#exponential()', function () {
    it('should return the right value for fibonacci sequence', function () {
      testFibonacciSequence(fib.exponential);
    });
  });

  describe('#linear()', function () {
    it('should return the right value for fibonacci sequence', function () {
      testFibonacciSequence(fib);
    });
  });

  describe('#withMemoization()', function () {
    it('should return the right value for fibonacci sequence', function () {
      testFibonacciSequence(fib.withMemoization);
    });
  });
});

