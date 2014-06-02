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

var PriorityQueue = require('../../data_structures/priority_queue'),
    assert = require('assert');

describe('Min Priority Queue', function () {
  it('should always return the element with the lowest priority', function () {
    var q = new PriorityQueue();
    assert(q.isEmpty());
    q.insert('a', 10);
    q.insert('b', 2091);
    q.insert('c', 4);
    q.insert('d', 1);
    q.insert('e', 5);
    q.insert('f', 500);
    q.insert('g', 0);
    q.insert('h', 18);
    q.insert('i', 3);
    q.insert('j', 22);
    q.insert('k', 20);
    assert(!q.isEmpty());

    assert.equal(q.extract(), 'g');
    assert.equal(q.extract(), 'd');
    assert.equal(q.extract(), 'i');
    assert.equal(q.extract(), 'c');
    assert.equal(q.extract(), 'e');
    assert.equal(q.extract(), 'a');
    assert.equal(q.extract(), 'h');
    assert.equal(q.extract(), 'k');
    assert.equal(q.extract(), 'j');
    assert.equal(q.extract(), 'f');
    assert.equal(q.extract(), 'b');

    assert(q.isEmpty());
  });

  it('can receive a dictionary with item => priority in construction',
    function () {
      var q = new PriorityQueue({
        a: 10,
        b: 2091,
        c: 4,
        d: 1,
        e: 5
      });

      assert(!q.isEmpty());
      assert.equal(q.extract(), 'd');
      assert.equal(q.extract(), 'c');
      assert.equal(q.extract(), 'e');
      assert.equal(q.extract(), 'a');
      assert.equal(q.extract(), 'b');
    });

  it('should be possible to change the priority of an item', function () {
    var q = new PriorityQueue({
      a: 10,
      b: 2091,
      c: 4,
      d: 1,
      e: 5
    });

    assert(!q.isEmpty());

    q.changePriority('b', 0);
    assert.equal(q.extract(), 'b');
    assert.equal(q.extract(), 'd');
    assert.equal(q.extract(), 'c');
    assert.equal(q.extract(), 'e');
    assert.equal(q.extract(), 'a');

  });
});


