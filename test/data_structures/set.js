/**
 * Copyright (C) 2014 Andre Oliveira
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

var HashSet = require('../../data_structures/set'),
    assert = require('assert');

describe('HashSet', function () {
  it('should start empty', function () {
    var s = new HashSet();
    assert.equal(s.size, 0);
  });

  it('should add all initial arguments', function () {
    var s = new HashSet(1, 2, 3);
    assert.equal(s.size, 3);
    assert(s.contains(1));
    assert(s.contains(2));
    assert(s.contains(3));

  });

  it('should add all arguments', function () {
    var s = new HashSet(1, 2, 3);
    assert.equal(s.size, 3);
    s.add(4, 5, 6);
    assert.equal(s.size, 6);
    assert(s.contains(1));
    assert(s.contains(2));
    assert(s.contains(3));
    assert(s.contains(4));
    assert(s.contains(5));
    assert(s.contains(6));
  });

  it('should remove all arguments', function () {
    var s = new HashSet(1, 2, 3);
    assert.equal(s.size, 3);
    s.remove(1, 3);
    assert.equal(s.size, 1);
    assert(!s.contains(1));
    assert(!s.contains(3));
    assert(s.contains(2));
  });

  it('should do nothing when trying to remove an element that doesn\'t exist',
    function () {
      var s = new HashSet(1, 2, 3);
      assert.equal(s.size, 3);
      s.remove(4);
      assert.equal(s.size, 3);
      assert(s.contains(1));
      assert(s.contains(2));
      assert(s.contains(3));
    });

  it('should only contain its elements', function () {
    var s = new HashSet(1, 2, 3);
    assert(s.contains(1));
    assert(!s.contains(4));
  });
});


