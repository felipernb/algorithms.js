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

/**
 * Binary Search Tree
 */
function BST() {
  this.root = null;
  this._size = 0;

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
function Node(value) {
  this.value = value;
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

  if (value < parent.value) {
    if (parent.left)
      this.insert(value, parent.left);
    else {
      parent.left = new Node(value);
      this._size++;
    }
  } else {
    if (parent.right)
      this.insert(value, parent.right);
    else {
      parent.right = new Node(value);
      this._size++;
    }
  }
};

/**
 * Returns if a tree contains an element in O(lg n)
 */
BST.prototype.contains = function (e, root) {
  if (!root) {
    if (this.root) root = this.root;
    else return false;
  }

  if (e < root.value) return root.left && this.contains(e, root.left);
  if (e > root.value) return root.right && this.contains(e, root.right);
  return true;
};

module.exports = BST;
