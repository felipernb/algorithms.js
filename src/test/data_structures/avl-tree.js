'use strict';

var root = require('../..'),
  	AVLTree = root.DataStructures.AVLTree,
  	assert = require('assert');

describe('AVL Tree', function () {
  it('should start with null root', function () {
    assert.equal(new AVLTree().root, null);
  });

  it('should insert and single rotate (leftRight) properly', function () {
    var avlTree = new AVLTree();
    avlTree.insert(9);
    avlTree.insert(3);
    avlTree.insert(5);

    assert.equal(avlTree.root.value, 5);
    assert.equal(avlTree.root.left.value, 3);
    assert.equal(avlTree.root.right.value, 9);

    assert.equal(avlTree.root.height, 2);
    assert.equal(avlTree.root.left.height, 1);
    assert.equal(avlTree.root.right.height, 1);
  });

  it('should insert and single rotate (rightLeft) properly', function () {
    var avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(75);
    avlTree.insert(60);

    assert.equal(avlTree.root.value, 60);
    assert.equal(avlTree.root.left.value, 50);
    assert.equal(avlTree.root.right.value, 75);

    assert.equal(avlTree.root.height, 2);
    assert.equal(avlTree.root.left.height, 1);
    assert.equal(avlTree.root.right.height, 1);
  });

  it('should insert and double rotate (leftLeft) properly', function () {
    var avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(25);
    avlTree.insert(10);

    assert.equal(avlTree.root.value, 25);
    assert.equal(avlTree.root.left.value, 10);
    assert.equal(avlTree.root.right.value, 50);

    assert.equal(avlTree.root.height, 2);
    assert.equal(avlTree.root.left.height, 1);
    assert.equal(avlTree.root.right.height, 1);
  });

  it('should insert and double rotate (rightRight) properly', function () {
    var avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(75);
    avlTree.insert(100);

    assert.equal(avlTree.root.value, 75);
    assert.equal(avlTree.root.left.value, 50);
    assert.equal(avlTree.root.right.value, 100);

    assert.equal(avlTree.root.height, 2);
    assert.equal(avlTree.root.left.height, 1);
    assert.equal(avlTree.root.right.height, 1);
  });

  it('should insert multiple nodes and balance properly (1)', function () {
    var avlTree = new AVLTree();
    avlTree.insert(30);
    avlTree.insert(15);
    avlTree.insert(60);
    avlTree.insert(90);
    avlTree.insert(100);

    assert.equal(avlTree.root.value, 30);
    assert.equal(avlTree.root.left.value, 15);
    assert.equal(avlTree.root.right.value, 90);
    assert.equal(avlTree.root.right.left.value, 60);
    assert.equal(avlTree.root.right.right.value, 100);

    assert.equal(avlTree.root.height, 3);
    assert.equal(avlTree.root.left.height, 1);
    assert.equal(avlTree.root.right.height, 2);
    assert.equal(avlTree.root.right.left.height, 1);
    assert.equal(avlTree.root.right.right.height, 1);
  });

  it('should remove nodes and balance properly (2)', function () {
    var avlTree = new AVLTree();
    avlTree.insert(55);
    avlTree.insert(25);
    avlTree.insert(11);
    avlTree.insert(1);
    avlTree.remove(55);

    assert.equal(avlTree.root.value, 11);
    assert.equal(avlTree.root.height, 2);

    assert.equal(avlTree.root.left.value, 1);
    assert.equal(avlTree.root.left.height, 1);
    assert.equal(avlTree.root.right.value, 25);
    assert.equal(avlTree.root.right.height, 1);
  });
 });
