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

var Stack = require('../../data_structures/stack'),
    assert = require('assert');

describe('Stack', function () {
  it('should start empty', function () {
    var s = new Stack();
    assert(s.isEmpty());
    assert.equal(s.length, 0);
  });

  it('should implement a LIFO logic', function () {
    var s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    assert.equal(s.length, 3);
    assert.equal(s.pop(), 3);
    assert.equal(s.pop(), 2);
    assert.equal(s.pop(), 1);
    assert(s.isEmpty());
    assert.throws(function () { s.pop(); }, Error);
  });

  it('should allow me to peek at the top element in' +
    ' the stack without popping it', function () {
      var s = new Stack();
      s.push(1);
      s.push(2);
      s.push(3);
      assert.equal(s.peek(), 3);
      assert.equal(s.peek(), 3);
      s.pop();
      assert.equal(s.peek(), 2);
    });

});


