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

var Set = require('../../data_structures/set'),
    HashTable = require("../../data_structures/hash_table"),
    assert = require('assert');

describe('Set', function () {
  it('should start empty', function () {
    var s = new Set();
    assert.equal(s.size(), 0);
  });

  it('should add all initial arguments', function () {
    var s = new Set(1,2,3);
    var ht = new HashTable(3);
    ht.put(1, {});
    ht.put(2,{});
    ht.put(3,{});
    assert.deepEqual(s.elts, ht);
  });

  it('should add all arguments', function () {
    var s = new Set(1,2,3);
    s.add(4,5,6);
    var ht = new HashTable(3);
    ht.put(1, {});
    ht.put(2, {});
    ht.put(3,{});
    ht.put(4,{});
    ht.put(5,{});
    ht.put(6,{});

    assert.deepEqual(s.elts, ht);
  });

  it('should remove all arguments', function() {
    var s = new Set(1,2,3);
    s.remove(1,3);
    assert.equal(s.contains(1), false);
    assert.equal(s.contains(3), false);
  });

  it('should do nothing xist is removed', function() {
    var s = new Set(1,2,3);
    s.remove(4);
    var ht = new HashTable(3);
    ht.put(1, {});
    ht.put(2,{});
    ht.put(3,{});
    assert.deepEqual(s.elts, ht);
  });

  it('should only contain its elements', function() {
    var s = new Set(1,2,3);
    assert.equal(s.contains(1), true);
    assert.equal(s.contains(4), false);
  });
});


