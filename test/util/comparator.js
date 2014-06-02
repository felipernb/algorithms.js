/**
 * Copyright (C) 2014 Felipe Ribeiro
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
'use strict';

var Comparator = require('../../util/comparator'),
    assert = require('assert');

describe('Comparator', function () {
  it('Should use a default arithmetic comparison if no function is passed',
    function () {
      var c = new Comparator();
      assert.equal(c.compare(1, 1), 0);
      assert.equal(c.compare(1, 2), -1);
      assert.equal(c.compare(1, 0), 1);
      assert.equal(c.compare('a', 'b'), -1);
      assert(c.lessThan(0, 1));
      assert(!c.lessThan(1, 1));
      assert(c.lessThanOrEqual(1, 1));
      assert(c.lessThanOrEqual(0, 1));
      assert(!c.lessThanOrEqual(1, 0));
      assert(c.greaterThan(1, 0));
      assert(!c.greaterThan(1, 1));
      assert(c.greaterThanOrEqual(1, 1));
      assert(c.greaterThanOrEqual(1, 0));
      assert(!c.greaterThanOrEqual(0, 1));
      assert(c.equal(0, 0));
      assert(!c.equal(0, 1));
    });

  it('should allow comparison function to be defined by user', function () {
    var compareFn = function () {
      return 0;
    };
    var c = new Comparator(compareFn);
    assert.equal(c.compare(1, 1), 0);
    assert.equal(c.compare(1, 2), 0);
    assert.equal(c.compare(1, 0), 0);
    assert.equal(c.compare('a', 'b'), 0);
    assert(!c.lessThan(0, 1));
    assert(!c.lessThan(1, 1));
    assert(c.lessThanOrEqual(1, 1));
    assert(c.lessThanOrEqual(0, 1));
    assert(c.lessThanOrEqual(1, 0));
    assert(!c.greaterThan(1, 0));
    assert(!c.greaterThan(1, 1));
    assert(c.greaterThanOrEqual(1, 1));
    assert(c.greaterThanOrEqual(1, 0));
    assert(c.greaterThanOrEqual(0, 1));
    assert(c.equal(0, 0));
    assert(c.equal(0, 1));
  });

  it('Should allow reversing the comparisons', function () {
    var c = new Comparator();
    c.reverse();
    assert.equal(c.compare(1, 1), 0);
    assert.equal(c.compare(1, 2), 1);
    assert.equal(c.compare(1, 0), -1);
    assert.equal(c.compare('a', 'b'), 1);
    assert(!c.lessThan(0, 1));
    assert(!c.lessThan(1, 1));
    assert(c.lessThanOrEqual(1, 1));
    assert(!c.lessThanOrEqual(0, 1));
    assert(c.lessThanOrEqual(1, 0));
    assert(!c.greaterThan(1, 0));
    assert(!c.greaterThan(1, 1));
    assert(c.greaterThanOrEqual(1, 1));
    assert(!c.greaterThanOrEqual(1, 0));
    assert(c.greaterThanOrEqual(0, 1));
    assert(c.equal(0, 0));
    assert(!c.equal(0, 1));
  });
});

