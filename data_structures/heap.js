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
 * Basic Heap structure
 */
function Heap() {
  this._elements = [null];

  Object.defineProperty(this, 'n', {
    get: function () {
      return this._elements.length - 1;
    }.bind(this)
  });
}

Heap.prototype._swap = function (a, b) {
  var tmp = this._elements[a];
  this._elements[a] = this._elements[b];
  this._elements[b] = tmp;
};

Heap.prototype.isEmpty = function () {
  return this.n === 0;
};

Heap.prototype.insert = function (e) {
  this._elements.push(e);
  this._siftUp();
};

Heap.prototype.extract = function () {
  var element = this._elements[1];
  // Get the one from the bottom in insert it on top
  this._elements[1] = this._elements.pop();
  this._siftDown();

  return element;
};


/**
 * Min Heap, keeps the lowest element always on top
 */
function MinHeap() {
  Heap.apply(this);
}

MinHeap.prototype = new Heap();

/**
 * Sift up the element in pos
 * O(lg n)
 */
MinHeap.prototype._siftUp = function (pos) {
  if (pos === undefined) pos = this.n;

  var i, parent;

  for (i = pos;
      i > 1 && (parent = i >> 1) && this._elements[parent] > this._elements[i];
      i = parent) {
    this._swap(parent, i);
  }
};

/**
 * Sifts down the element in pos
 * O(lg n)
 */
MinHeap.prototype._siftDown = function (pos) {
  if (pos === undefined) pos = 1;

  var i, c;
  for (i = pos; (c = i << 1) <= this.n; i = c) {
    // checks which is the smaller child to compare with
    if (c + 1 <= this.n && this._elements[c + 1] < this._elements[c])
      // use the right child if it's lower than the left one
      c++;
    if (this._elements[i] < this._elements[c])
      break;
    this._swap(i, c);
  }
};


/**
 * Max Heap, keeps the highest element always on top
 */
function MaxHeap() {
  Heap.apply(this);
}

MaxHeap.prototype = new Heap();

/**
 * Sift up the element in pos
 * O(lg n)
 */
MaxHeap.prototype._siftUp = function (pos) {
  if (pos === undefined) pos = this.n;

  var i, parent;

  for (i = pos;
      i > 1 && (parent = i >> 1) && this._elements[parent] < this._elements[i];
      i = parent) {
    this._swap(parent, i);
  }
};

/**
 * Sifts down the element in pos
 * O(lg n)
 */
MaxHeap.prototype._siftDown = function (pos) {
  if (pos === undefined) pos = 1;

  var i, c;
  for (i = pos; (c = i << 1) <= this.n; i = c) {
    // checks which is the greater child to compare with
    if (c + 1 <= this.n && this._elements[c + 1] > this._elements[c])
      // use the right child if it's greater than the left one
      c++;
    if (this._elements[i] > this._elements[c])
      break;
    this._swap(i, c);
  }
};

module.exports = {
  MinHeap: MinHeap,
  MaxHeap: MaxHeap
};
