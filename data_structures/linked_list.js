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
 * Doubly-linked list
 */
function LinkedList() {

  this._length = 0;
  this.head = null;
  this.tail = null;

  // Read-only length property
  Object.defineProperty(this, 'length', {
    get: function () {
      return this._length;
    }.bind(this)
  });
}

/**
 * A linked list node
 */
function Node(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}

/**
 * Whether the list is empty
 *
 * @return Boolean
 */
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

/**
 * Adds the element to the end of the list or to the desired index
 *
 * @param misc
 * @param Number
 */
LinkedList.prototype.add = function (n, index) {
  if (index > this.length || index < 0) {
    throw new Error('Index out of bounds');
  }

  var node = new Node(n);

  if (index !== undefined && index < this.length) {
    var prevNode,
        nextNode;

    if (index  === 0) {
      // Insert in the beginning
      nextNode = this.head;
      this.head = node;
    } else {
      nextNode = this.getNode(index);
      prevNode = nextNode.prev;
      prevNode.next = node;
      node.prev = prevNode;
    }
    nextNode.prev = node;
    node.next = nextNode;
  } else {
    // Insert at the end
    if (!this.head) this.head = node;

    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
  }

  this._length++;
};

/**
 * Return the value associated to the Node on the given index
 *
 * @param Number
 * @return misc
 */
LinkedList.prototype.get = function (index) {
  return this.getNode(index).value;
};

/**
 * O(n) get
 *
 * @param Number
 * @return Node
 */
LinkedList.prototype.getNode = function (index) {
  if (index >= this.length || index < 0) {
    throw new Error('Index out of bounds');
  }

  var node = this.head;
  for (var i = 1; i <= index; i++) {
    node = node.next;
  }

  return node;
};

/**
 * Delete the element in the indexth position
 *
 * @param Number
 */
LinkedList.prototype.del = function (index) {
  if (index >= this.length || index < 0) {
    throw new Error('Index out of bounds');
  }
  var node = this.getNode(index);

  if (node === this.tail) {
    // node is the last element
    this.tail = node.prev;
  } else {
    node.next.prev = node.prev;
  }
  if (node === this.head) {
    // node is the first element
    this.head = node.next;
  } else {
    node.prev.next = node.next;
  }

  this._length--;
};

/**
 * Performs the fn function with each element in the list
 */
LinkedList.prototype.map = function (fn) {
  var node = this.head;
  while (node) {
    fn(node.value);
    node = node.next;
  }
};

module.exports = LinkedList;
