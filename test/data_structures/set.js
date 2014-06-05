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
    assert = require('assert');

describe('Set', function () {
  it('should start empty', function () {
    var s = new Set();
    assert.equal(s.size(), 0);
  });

  it('should add all initial arguments', function () {
    var s = new Set(1,2,3);
    assert.deepEqual(s.elts, [1,2,3]);
  });

  it('should add all arguments', function () {
    var s = new Set(1,2,3);
    s.add(4,5,6);
    assert.deepEqual(s.elts, [1,2,3,4,5,6]);
  });

  it('should remove all arguments', function() {
     var s = new Set(1,2,3);
     s.remove(1,3);
     assert.deepEqual(s.elts, [2]);
  });

  it('should do nothing xist is removed', function() {
    var s = new Set(1,2,3);
    s.remove(4);
    assert.deepEqual(s.elts, [1,2,3]);
  });

  it('should only contain its elements', function() {
    var s = new Set(1,2,3);
    assert.equal(s.contains(1), true);
    assert.equal(s.contains(4), false);
  });

  it('should check subsets', function() {
    var s = new Set();
    var t = new Set(1,2,3);
    assert.equal(s.subset(s), true);
    assert.equal(s.subset(t), true);
    assert.equal(t.subset(s), false);
    assert.equal(t.subset(t), true);
  });

  it('should union', function() {
    var s = new Set(1,2,3);
    var t = new Set(3,4,5);
    assert.deepEqual(s.union(t).elts,[1,2,3,4,5]);
  });

  it('should intersect', function() {
    var s = new Set(1,2,3);
    var t = new Set(3,4,5);
    assert.deepEqual(s.intersect(t).elts,[3]);
  });

  it('should subtract other sets', function() {
    var s = new Set(1,2,3);
    var t = new Set(3,4,5);
    assert.deepEqual(s.minus(t).elts,[1,2]);
    assert.deepEqual(t.minus(s).elts,[4,5]);
  });

  it('should get symmetric difference', function() {
    var s = new Set(1,2,3);
    var t = new Set(3,4,5);
    assert.deepEqual(s.symDiff(t).elts,[1,2,4,5]);
    assert.deepEqual(t.symDiff(s).elts,[4,5,1,2]);
  });

  it('should check equality', function() {
    var s = new Set();
    var t = new Set();
    assert.equal(s.equals(s), true);
    assert.equal(s.equals(t), true);
    assert.equal(t.equals(s), true);
    s.add(1,2,3);
    t.add(1,2,3);
    assert.equal(s.equals(s), true);
    assert.equal(s.equals(t), true);
    t.remove(2,3);
    assert.equal(s.equals(t), false);
  });
});


