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

var BST = require('../../data_structures/bst'),
    assert = require('assert');

describe('Binary Search Tree', function () {
  it('should insert elements respecting the BST restrictions', function () {
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
    assert.equal(bst.size, 9);
  });
  it('should check if an element exists (in O(lg n))', function () {
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
    assert(bst.contains(4));
    assert(bst.contains(0));
    assert(bst.contains(8));
    assert(bst.contains(10));
    assert(bst.contains(5));
    assert(bst.contains(100));

    assert(!bst.contains(12));
    assert(!bst.contains(-10));
    assert(!bst.contains(10000));
    assert(!bst.contains(30));
    assert(!bst.contains(7));
  });
});
