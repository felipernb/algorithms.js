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

var heap = require('../../data_structures/heap'),
    assert = require('assert');

describe('Min Heap', function () {
  it('should always return the lowest element', function () {
    var h = new heap.MinHeap();
    h.insert(10);
    h.insert(2091);
    h.insert(5);
    h.insert(1);
    h.insert(4);

    assert.equal(h.extract(), 1);
    assert.equal(h.extract(), 4);
    assert.equal(h.extract(), 5);
    assert.equal(h.extract(), 10);
    assert.equal(h.extract(), 2091);
  });
});

describe('Max Heap', function () {
  it('should always return the greatest element', function () {
    var h = new heap.MaxHeap();
    h.insert(10);
    h.insert(2091);
    h.insert(5);
    h.insert(1);
    h.insert(4);

    assert.equal(h.extract(), 2091);
    assert.equal(h.extract(), 10);
    assert.equal(h.extract(), 5);
    assert.equal(h.extract(), 4);
    assert.equal(h.extract(), 1);
  });
});
