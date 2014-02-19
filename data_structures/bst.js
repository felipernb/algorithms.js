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
var Comparator = require('../util/comparator');

/**
 * Binary Search Tree
 */
function BST(compareFn) {
  this.root = null;
  this._size = 0;
  /**
   * @var Comparator
   */
  this._comparator = new Comparator(compareFn);

  /**
   * Read-only property for the size of the tree
   */
  Object.defineProperty(this, 'size', {
    get: function () { return this._size; }.bind(this)
  });
}

/**
 * Tree node
 */
function Node(value, parent) {
  this.value = value;
  this.parent = parent;
  this.left = null;
  this.right = null;
}

/**
 * Insert elements to the tree respecting the BST restrictions
 */
BST.prototype.insert = function (value, parent) {
  // Set the root as the initial insertion point
  // if it has not been passed
  if (!parent) {
    if (!this.root) {
      this.root = new Node(value);
      this._size++;
      return;
    }
    parent = this.root;
  }

  var child = this._comparator.lessThan(value, parent.value) ? 'left' : 'right';
  if (parent[child])
    this.insert(value, parent[child]);
  else {
    parent[child] = new Node(value, parent);
    this._size++;
  }
};

/**
 * Returns if a tree contains an element in O(lg n)
 */
BST.prototype.contains = function (e) {
  return !!this._find(e);
};

BST.prototype._find = function (e, root) {

  if (!root) {
    if (this.root) root = this.root;
    else return false;
  }

  if (root.value === e)
    return root;

  if (this._comparator.lessThan(e, root.value))
    return root.left && this._find(e, root.left);

  if (this._comparator.greaterThan(e, root.value))
    return root.right && this._find(e, root.right);
};

/**
 * Substitute two nodes
 */
BST.prototype._replaceNodeInParent = function (currNode, newNode) {
  var parent = currNode.parent;
  if (parent) {
    parent[currNode === parent.left ? 'left' : 'right'] = newNode;
    if (newNode)
      newNode.parent = parent;
  } else {
    this.root = newNode;
  }
};

/**
 * Find the minimum value in a tree
 */
BST.prototype._findMin = function (root) {
  var minNode = root;
  while (minNode.left) {
    minNode = minNode.left;
  }
  return minNode;
};

/**
 * Remove an element from the BST
 */
BST.prototype.remove = function (e) {
  var node = this._find(e);
  if (!node) {
    throw new Error('Item not found in the tree');
  }

  if (node.left && node.right) {
    /**
     * If the node to be removed has both left and right children,
     * replace the node's value by the minimum value of the right
     * sub-tree, and remove the leave containing the value
     */
    var successor = this._findMin(node.right);
    this.remove(successor.value);
    node.value = successor.value;
  } else {
    /**
     * If the node is a leaf, just make the parent point to null,
     * and if it has one child, make the parent point to this child
     * instead
     */
    this._replaceNodeInParent(node, node.left || node.right);
    this._size--;
  }
};

module.exports = BST;
