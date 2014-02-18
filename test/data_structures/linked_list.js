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

var LinkedList = require('../../data_structures/linked_list'),
    assert = require('assert');

describe('LinkedList', function () {

  it('should start empty', function () {
    var l = new LinkedList();
    assert(l.isEmpty());
    assert.equal(l.length, 0);
  });

  it('should increment length when an item is added', function () {
    var l = new LinkedList();
    l.add(1);
    assert.equal(l.length, 1);
    assert(!l.isEmpty());

    l.add(2);
    assert.equal(l.length, 2);
  });

  it('should return the items from the positions they were inserted',
    function () {
      var l = new LinkedList();
      l.add(1);
      l.add(2);
      l.add(3);
      l.add(4);
      l.add(5);
      l.add(6);
      l.add(7);
      l.add(8);
      l.add(9);
      l.add(10);
      l.add(11);
      assert.equal(l.get(0), 1);
      assert.equal(l.get(1), 2);
      assert.equal(l.get(2), 3);
      assert.equal(l.get(3), 4);
      assert.equal(l.get(4), 5);
      assert.equal(l.get(5), 6);
      assert.equal(l.get(6), 7);
      assert.equal(l.get(7), 8);
      assert.equal(l.get(8), 9);
      assert.equal(l.get(9), 10);
      assert.equal(l.get(10), 11);

      // Add 12 to the position 7
      l.add(12, 7);
      assert.equal(l.get(7), 12);
      assert.equal(l.length, 12);

      // Asserts that other elements were shifted
      assert.equal(l.get(8), 8);
      assert.equal(l.get(9), 9);
      assert.equal(l.get(10), 10);
      assert.equal(l.get(11), 11);

      l.add(13, 12);
      assert.equal(l.get(12), 13);
    });

  it('should throw errors when trying to access indexes out of bounds',
      function () {
        var l = new LinkedList();
        assert.throws(function () { l.get(0); }, Error);
        assert.throws(function () { l.get(1); }, Error);
        assert.throws(function () { l.get(10); }, Error);
        assert.throws(function () { l.add(10, 1); }, Error);
        assert.throws(function () { l.add(10, 10); }, Error);

        l.add(1);
        l.add(2);
        // length = 2
        assert.doesNotThrow(function () { l.get(0); });
        assert.doesNotThrow(function () { l.get(1); });
        assert.doesNotThrow(function () { l.add(3, 2); }); // length = 3
        assert.doesNotThrow(function () { l.add(3, 0); }); // length =4
        assert.doesNotThrow(function () { l.add(4, 1); }); // length = 5
        assert.doesNotThrow(function () { l.add(5, 5); }); // length = 6

        assert.throws(function () { l.add(10, 10); }, Error);
        assert.throws(function () { l.add(10, 7); }, Error);
        assert.throws(function () { l.get(10); }, Error);
      });

  it('should be able to delete elements', function () {
    var l = new LinkedList();

    l.add(1);
    l.add(2);
    l.add(3);
    l.add(4);
    l.add(5);
    l.add(6);
    l.add(7);
    l.add(8);

    assert.equal(l.head.value, 1);
    assert.equal(l.tail.value, 8);
    assert.equal(l.length, 8);

    assert.equal(l.get(7), 8);
    l.del(7);
    assert.equal(l.length, 7);
    assert.equal(l.tail.value, 7);
    assert.throws(function () { l.get(7); }, Error);

    l.del(0);
    assert.equal(l.length, 6);
    assert.equal(l.head.value, 2);
    assert.equal(l.get(0), 2);
    assert.equal(l.get(1), 3);

    l.del(4);
    assert.equal(l.length, 5);

    assert.equal(l.get(0), 2);
    assert.equal(l.get(1), 3);
    assert.equal(l.get(2), 4);
    assert.equal(l.get(3), 5);
    assert.equal(l.get(4), 7);

    for (var i = 0; i < 5; i++) {
      l.del(0);
    }

    assert(l.isEmpty());
    assert.equal(l.head, null);
    assert.equal(l.tail, null);
    assert.equal(l.length, 0);
  });

  it('should perform a function to all elements with map', function () {
    var l = new LinkedList();
    l.add(5);
    l.add(1);
    l.add(3);
    l.add(10);
    l.add(1000);

    var a = [];
    l.map(function (e) {
      a.push(e);
    });

    assert.deepEqual(a, [5, 1, 3, 10, 1000]);
  });

  it('should throw an error when trying to delete from an empty list',
      function () {
        var l = new LinkedList();
        assert.throws(function () { l.del(0); }, Error);
      });
});
