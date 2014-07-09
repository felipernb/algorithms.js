/**
 * Copyright (C) 2014 Eugene Sharygin
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

var DisjointSetForest = require('../../data_structures/disjoint_set_forest'),
    assert = require('assert');


describe('Disjoint Set Forest', function () {
  it('should decide if two elements belong to the same subset or not',
     function () {
        var forest = new DisjointSetForest();
        assert(!forest.sameSubset(1, 2));
        forest.merge(1, 2);
        assert(forest.sameSubset(1, 2));
        forest.merge(3, 4);
        assert(!forest.sameSubset(2, 4));
        forest.merge(1, 3);
        assert(forest.sameSubset(1, 2, 3, 4));
        assert(!forest.sameSubset(1, 5));
      });

  it('should maintain subset sizes', function () {
    var forest = new DisjointSetForest();
    var assertSizesCorrect = function (elements, size) {
      elements.forEach(function (element) {
        assert.equal(forest.size(element), size);
      });
    };
    assertSizesCorrect([0, 1, 2, 3, 4], 1);
    forest.merge(0, 1);
    assertSizesCorrect([0, 1], 2);
    forest.merge(0, 2);
    assertSizesCorrect([0, 1, 2], 3);
    forest.merge(2, 1);
    assertSizesCorrect([0, 1, 2], 3);
    forest.merge(3, 4);
    assertSizesCorrect([3, 4], 2);
    forest.merge(0, 4);
    assertSizesCorrect([0, 1, 2, 3, 4], 5);
  });

  it('should point all elements to the same root', function () {
    var forest = new DisjointSetForest();
    var assertSameRoot = function (element) {
      var root = forest.root(element);
      [].slice.call(arguments, 1).forEach(function (element) {
        assert.equal(forest.root(element), root);
      });
    };
    forest.merge(0, 1);
    assertSameRoot(0, 1);
    forest.merge(1, 2);
    assertSameRoot(0, 1, 2);
    forest.merge(1, 3, 4);
    assertSameRoot(0, 1, 2, 3, 4);
    forest.merge(0, 5);
    assertSameRoot(0, 1, 2, 3, 4, 5);
  });

  it('should not choose the root element outside the subset', function () {
    var forest = new DisjointSetForest();
    var assertInside = function (value, set) {
      return set.some(function (element) {
        return element == value;
      });
    };
    assert.equal(forest.root(0), 0);
    forest.merge(0, 1);
    assertInside(forest.root(0), [0, 1]);
    forest.merge(2, 3);
    assertInside(forest.root(2), [2, 3]);
    forest.merge(4, 5, 6);
    assertInside(forest.root(4), [4, 5, 6]);
    forest.merge(0, 1, 2, 5, 6);
    assertInside(forest.root(4), [0, 1, 2, 3, 4, 5, 6]);
  });
});
