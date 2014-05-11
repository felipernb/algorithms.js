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
    assert(h.isEmpty());
    h.insert(10);
    h.insert(2091);
    h.insert(4);
    h.insert(1);
    h.insert(5);
    h.insert(500);
    h.insert(0);
    h.insert(18);
    h.insert(3);
    h.insert(22);
    h.insert(20);
    assert(!h.isEmpty());

    assert.equal(h.extract(), 0);
    assert.equal(h.extract(), 1);
    assert.equal(h.extract(), 3);
    assert.equal(h.extract(), 4);
    assert.equal(h.extract(), 5);
    assert.equal(h.extract(), 10);
    assert.equal(h.extract(), 18);
    assert.equal(h.extract(), 20);
    assert.equal(h.extract(), 22);
    assert.equal(h.extract(), 500);
    assert.equal(h.extract(), 2091);

    assert(h.isEmpty());
  });

  it('should heapify an unordered array', function () {
    var h = new heap.MinHeap();
    h.heapify([10, 2091, 4, 1, 5, 500, 0, 18, 3, 22, 20]);

    assert.equal(h.extract(), 0);
    assert.equal(h.extract(), 1);
    assert.equal(h.extract(), 3);
    assert.equal(h.extract(), 4);
    assert.equal(h.extract(), 5);
    assert.equal(h.extract(), 10);
    assert.equal(h.extract(), 18);
    assert.equal(h.extract(), 20);
    assert.equal(h.extract(), 22);
    assert.equal(h.extract(), 500);
    assert.equal(h.extract(), 2091);

    assert(h.isEmpty());
  });
});

describe('Max Heap', function () {
  it('should always return the greatest element', function () {
    var h = new heap.MaxHeap();
    assert(h.isEmpty());
    h.insert(10);
    h.insert(2091);
    h.insert(4);
    h.insert(1);
    h.insert(5);
    h.insert(500);
    h.insert(0);
    h.insert(18);
    h.insert(3);
    h.insert(22);
    h.insert(20);
    assert(!h.isEmpty());

    assert.equal(h.extract(), 2091);
    assert.equal(h.extract(), 500);
    assert.equal(h.extract(), 22);
    assert.equal(h.extract(), 20);
    assert.equal(h.extract(), 18);
    assert.equal(h.extract(), 10);
    assert.equal(h.extract(), 5);
    assert.equal(h.extract(), 4);
    assert.equal(h.extract(), 3);
    assert.equal(h.extract(), 1);
    assert.equal(h.extract(), 0);

    assert(h.isEmpty());
  });

  it('should heapify an unordered array', function () {
    var h = new heap.MaxHeap();
    h.heapify([10, 2091, 4, 1, 5, 500, 0, 18, 3, 22, 20]);

    assert.equal(h.extract(), 2091);
    assert.equal(h.extract(), 500);
    assert.equal(h.extract(), 22);
    assert.equal(h.extract(), 20);
    assert.equal(h.extract(), 18);
    assert.equal(h.extract(), 10);
    assert.equal(h.extract(), 5);
    assert.equal(h.extract(), 4);
    assert.equal(h.extract(), 3);
    assert.equal(h.extract(), 1);
    assert.equal(h.extract(), 0);

    assert(h.isEmpty());
  });
});
