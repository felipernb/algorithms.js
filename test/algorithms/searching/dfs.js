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

var BST = require('../../../data_structures/bst'),
    dfs = require('../../../algorithms/searching/dfs'),
    assert = require('assert');

describe('Depth First Search', function () {
  var bst = new BST();
  bst.insert(4);
  bst.insert(8);
  bst.insert(10);
  bst.insert(2);
  bst.insert(1);
  bst.insert(3);
  bst.insert(0);
  bst.insert(5);
  bst.insert(100);

  var callbackGenerator = function (a) {
    return function (n) { a.push(n); };
  };

  it('should return the items sorted when retrieving in order', function () {
    var a = [];
    dfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, [0, 1, 2, 3, 4, 5, 8, 10, 100]);
  });

  it('should return parents before children when retrieving pre-order',
      function () {
        var a = [];
        dfs.preOrder(bst.root, callbackGenerator(a));
        assert.deepEqual(a, [4, 2, 1, 0, 3, 8, 5, 10, 100]);
      });

  it('should return children before parents when retrieving post-order',
      function () {
        var a = [];
        dfs.postOrder(bst.root, callbackGenerator(a));
        assert.deepEqual(a, [0, 1, 3, 2, 5, 100, 10, 8, 4]);
      });
});
