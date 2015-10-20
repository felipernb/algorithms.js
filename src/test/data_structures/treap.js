'use strict';

var root = require('../..'),
  Treap = root.DataStructures.Treap,
  assert = require('assert');

describe('Treap', function () {
  var treap;
  before(function () {
    treap = new Treap();
  });

  it('should insert elements', function () {
    treap.insert(3);
    treap.insert(2);
    treap.insert(10);
    treap.insert(-1);
    treap.insert(100);
    treap.insert(101);
    treap.insert(1);
    assert.equal(treap.root.size, 7);
    treap.insert(-100);
    assert.equal(treap.root.size, 8);
  });

  it('should remove elements correctly', function () {
    // Value that not exist
    treap.remove(200);
    assert.equal(treap.root.size, 8);
    treap.remove(100);
    assert.equal(treap.root.size, 7);
    treap.remove(1);
    treap.remove(-1);
    treap.remove(-1);
    treap.remove(101);
    assert.equal(treap.root.size, 4);
  });

  it('should insert and remove elements', function () {
    // [-100, 2, 3, 10]
    treap.insert(200);
    // [-100, 2, 3, 10, 200]
    assert.equal(treap.root.size, 5);
    treap.remove(-100);
    // [2, 3, 10, 200]
    assert.equal(treap.root.size, 4);
    treap.insert(1);
    treap.remove(1);
    treap.insert(1);
    // [1, 2, 3, 10, 200]
    treap.remove(200);
    treap.insert(100);
    // [1, 2, 3, 10, 100]
    assert.equal(treap.root.size, 5);
  });

  it('should check if an element exists', function () {
    // [1, 2, 3, 10, 100]
    assert.equal(treap.find(1), true);
    assert.equal(treap.find(2), true);
    assert.equal(treap.find(3), true);
    assert.equal(treap.find(10), true);
    assert.equal(treap.find(100), true);
    assert.equal(treap.find(200), false);
    assert.equal(treap.find(-100), false);
    assert.equal(treap.find(-1), false);
    assert.equal(treap.find(101), false);
  });

  it('should get minimum element', function () {
    // [1, 2, 3, 10, 100]
    assert.equal(treap.minimum(), 1);
    treap.remove(1);
    // [2, 3, 10, 100]
    assert.equal(treap.minimum(), 2);
    treap.insert(-100);
    // [-100, 2, 3, 10, 100]
    assert.equal(treap.minimum(), -100);
    treap.remove(-100);
    // [2, 3, 10, 100]
    assert.equal(treap.minimum(), 2);
  });

  it('should get maximum element', function () {
    // [2, 3, 10, 100]
    assert.equal(treap.maximum(), 100);
    treap.remove(100);
    // [2, 3, 10]
    assert.equal(treap.maximum(), 10);
    treap.remove(10);
    // [2, 3]
    assert.equal(treap.maximum(), 3);
    treap.remove(3);
    // [2]
    assert.equal(treap.maximum(), 2);
    treap.insert(1);
    // [1, 2]
    assert.equal(treap.maximum(), 2);
    treap.remove(2);
    // [1]
    assert.equal(treap.maximum(), 1);
  });
  
  it('should handle dumplicated elements', function () {
	treap.insert(1);
	// [1, 1]
	assert.equal(treap.size(), 2);
	treap.insert(-1);
	// [-1, 1, 1]
	assert.equal(treap.size(), 3);
	treap.remove(1);
	// [-1, 1]
	assert.equal(treap.size(), 2);
	treap.insert(-1);
	treap.insert(-1);
	treap.insert(-1);
	// [-1, -1, -1, -1, 1]
	assert.equal(treap.size(), 5);
	treap.remove(-1);
	treap.remove(1);
	treap.remove(-1);
	treap.remove(-1);
	treap.remove(-1);
	assert.equal(treap.size(), 0);
  });

  it('should keep balance', function () {
	// Insert 1023 elements randomly
	for (var i = 0; i < 1023; ++i) {
	  treap.insert(Math.random());
	}
	assert.equal(treap.size(), 1023);
	// The averange height should be 23 (with an error of 5)
	assert(Math.abs(treap.height() - 23) < 5);
  });

  it('should rotate correctly', function () {
  	// Force clear the tree
	treap.root = null;
    treap.insert(1);
    // 1
    assert.equal(treap.height(), 1);

    // Make the tree definite
    treap.root.key = 2;
    treap.insert(2);
    /**
     *   2
     *  /
     * 1
     *
	 */
    assert.equal(treap.height(), 2);

	treap.root.key = 1;
    treap.insert(3);
    /**
     *     3
     *    /
     *   2
     *  /
     * 1
     *
	 */
    assert.equal(treap.height(), 3);
    assert.equal(treap.root.value, 3);

    treap.root = treap.root.rotate(0);
    /**
     *   2
     *  / \
     * 1   3
     *
	 */
    assert.equal(treap.height(), 2);
    assert.equal(treap.root.value, 2);

    treap.root = treap.root.rotate(0);
    /**
     * 1
     *  \
     *   2
     *    \
     *     3
     *
	 */
    assert.equal(treap.height(), 3);
    assert.equal(treap.root.value, 1);
  });
});