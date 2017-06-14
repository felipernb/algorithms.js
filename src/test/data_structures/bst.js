'use strict';

const root = require('../..');
const BST = root.DataStructures.BST;
const bfs = root.Search.bfs;
const assert = require('assert');

describe('Binary Search Tree', function() {
  it('should insert elements respecting the BST restrictions', function() {
    const bst = new BST();
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
  it('should check if an element exists (in O(lg n))', function() {
    const bst = new BST();
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
  const bst = new BST();
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

  const callbackGenerator = function(a) {
    return n => a.push(n);
  };

  it('should remove a leaf without altering anything else in ' +
    'the structure of the tree', function() {
    bst.remove(0);
      /**
       *            4
       *       2          8
       *    1     3    5     10
       *       2.5               100
       */
    const a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, [4, 2, 8, 1, 3, 5, 10, 2.5, 100]);
  });

  it('should remove an element with just one child and substitute ' +
    'it as the root of only subtree', function() {
    bst.remove(10);
      /**
       *            4
       *       2          8
       *    1     3    5     100
       *       2.5
       */
    const a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, [4, 2, 8, 1, 3, 5, 100, 2.5]);
  });

  it('should substitute an element by the leftmost child in the right ' +
    'subtree and remove it as a leaf', function() {
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
    let a = [];
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

  it('should always return the right root and size', function() {
    const bst = new BST();
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
      function() {
        const bst = new BST();
        assert.throws(() => bst.remove(0), Error);
        bst.insert(3);
        assert.throws(() => bst.remove(0), Error);
      });
});

describe('Binary Search Tree with custom comparator', function() {
  const strLenCompare = function(a, b) {
    if (a.length === b.length) return 0;
    return a.length < b.length ? -1 : 1;
  };

  it(
    'should insert elements respecting the BST restrictions', function() {
      const bst = new BST(strLenCompare);
      bst.insert('banana');
      bst.insert('apple');
      bst.insert('pineapple');
      bst.insert('watermelon');
      assert.equal(bst.size, 4);
    });

  it('should check if an element exists (in O(lg n))', function() {
    const bst = new BST(strLenCompare);
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
  const bst = new BST(strLenCompare);
  bst.insert('banana');
  bst.insert('apple');
  bst.insert('pear');
  bst.insert('pineapple');
  bst.insert('watermelon');

  const callbackGenerator = function(a) {
    return n => a.push(n);
  };

  it('should insert the items according to the comparator', function() {
    const a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, ['banana', 'apple', 'pineapple', 'pear', 'watermelon']);
  });

  it('should remove a leaf without altering anything else in ' +
    'the structure of the tree', function() {
    bst.remove('watermelon');
      /**
       *           'banana'
       *     'apple'      'pineapple'
       *  'pear'
       */
    const a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, ['banana', 'apple', 'pineapple', 'pear']);
  });

  it('should remove an element with just one child and substitute ' +
    'it as the root of only subtree', function() {
    bst.remove('apple');
      /**
       *           'banana'
       *     'pear'      'pineapple'
       */
    const a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, ['banana', 'pear', 'pineapple']);
  });

  it('should substitute an element by the leftmost child in the right ' +
    'subtree and remove it as a leaf', function() {
    bst.remove('banana');
      /**
       *       'pineapple'
       *   'pear'
       */
    const a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, ['pineapple', 'pear']);
  });
});
