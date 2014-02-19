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
    bfs = require('../../algorithms/searching/bfs'),
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

  /**
   *            4
   *       2          8
   *    1     3    5     10
   *  0    2.5               100
   */
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
  bst.insert(2.5);

  var callbackGenerator = function (a) {
    return function (n) { a.push(n); };
  };


  it('should remove a leaf without altering anything else in ' +
      'the structure of the tree', function () {

    bst.remove(0);
    /**
     *            4
     *       2          8
     *    1     3    5     10
     *       2.5               100
     */
    var a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, [4, 2, 8, 1, 3, 5, 10, 2.5, 100]);
  });

  it('should remove an element with just one child and substitute ' +
      'it as the root of only subtree', function () {

    bst.remove(10);
    /**
     *            4
     *       2          8
     *    1     3    5     100
     *       2.5
     */
    var a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, [4, 2, 8, 1, 3, 5, 100, 2.5]);
  });

  it('should substitute an element by the leftmost child in the right ' +
      'subtree and remove it as a leaf', function () {
    /**
     *            4
     *       2          8
     *    1     3    5     100
     *       2.5
     */
    bst.remove(2);
    /**
     *            4
     *       2.5        8
     *     1     3    5     100
     *
     */
    var a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, [4, 2.5, 8, 1, 3, 5, 100]);

    bst.remove(4);
    /**
     *            5
     *       2.5        8
     *     1     3        100
     *
     */
    a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, [5, 2.5, 8, 1, 3, 100]);

    bst.remove(2.5);
    /**
     *            5
     *        3        8
     *     1              100
     *
     */
    a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, [5, 3, 8, 1, 100]);
  });

  it('should always return the right root and size', function () {
    var bst = new BST();
    bst.insert(5);
    assert.equal(bst.size, 1);
    bst.remove(5);
    assert.equal(bst.size, 0);
    assert.equal(bst.root, null);
    bst.insert(10);
    bst.insert(3);
    bst.insert(20);
    assert.equal(bst.size, 3);
    bst.remove(10);
    assert.equal(bst.size, 2);
    bst.remove(20);
    assert.equal(bst.size, 1);
    bst.remove(3);
    assert.equal(bst.size, 0);
  });

  it('should throw an error when trying to remove an unexisting node',
      function () {
        var bst = new BST();
        assert.throws(function () { bst.remove(0); }, Error);
        bst.insert(3);
        assert.throws(function () { bst.remove(0); }, Error);
      });

});

describe('Binary Search Tree with custom comparator', function () {
  var strLenCompare = function (a, b) {
    if (a.length == b.length) return 0;
    return a.length < b.length ? -1 : 1;
  };

  it('should insert elements respecting the BST restrictions', function () {
    var bst = new BST(strLenCompare);
    bst.insert('banana');
    bst.insert('apple');
    bst.insert('pineapple');
    bst.insert('watermelon');
    assert.equal(bst.size, 4);
  });

  it('should check if an element exists (in O(lg n))', function () {
    var bst = new BST(strLenCompare);
    bst.insert('banana');
    bst.insert('apple');
    bst.insert('pineapple');
    bst.insert('watermelon');

    assert(bst.contains('watermelon'));
    assert(bst.contains('apple'));
    assert(bst.contains('banana'));
    assert(bst.contains('pineapple'));

    assert(!bst.contains('mango'));
    assert(!bst.contains('melon'));
    assert(!bst.contains('tangerine'));
  });

  /**
   *           'banana'
   *     'apple'      'pineapple'
   *  'pear'               'watermelon'
   *
   */
  var bst = new BST(strLenCompare);
  bst.insert('banana');
  bst.insert('apple');
  bst.insert('pear');
  bst.insert('pineapple');
  bst.insert('watermelon');

  var callbackGenerator = function (a) {
    return function (n) { a.push(n); };
  };

  it('should insert the items according to the comparator', function () {

    var a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, ['banana', 'apple', 'pineapple', 'pear', 'watermelon']);
  });

  it('should remove a leaf without altering anything else in ' +
      'the structure of the tree', function () {

    bst.remove('watermelon');
    /**
     *           'banana'
     *     'apple'      'pineapple'
     *  'pear'
     */
    var a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, ['banana', 'apple', 'pineapple', 'pear']);
  });

  it('should remove an element with just one child and substitute ' +
      'it as the root of only subtree', function () {

    bst.remove('apple');
    /**
     *           'banana'
     *     'pear'      'pineapple'
     */
    var a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, ['banana', 'pear', 'pineapple']);
  });

  it('should substitute an element by the leftmost child in the right ' +
      'subtree and remove it as a leaf', function () {

    bst.remove('banana');
    /**
     *       'pineapple'
     *   'pear'
     */
    var a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, ['pineapple', 'pear']);
  });
});
