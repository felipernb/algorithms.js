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

var MinHeap = require('./heap').MinHeap;

/**
 * Extends the MinHeap with the only difference that
 * the heap operations are performed based on the priority of the element
 * and not on the element itself
 */
function PriorityQueue(initialItems) {
  MinHeap.call(this, function (a, b) {
    return a.priority < b.priority ? -1 : 1;
  });

  this._items = {};

  initialItems = initialItems || {};
  var self = this;
  Object.keys(initialItems).forEach(function (item) {
    self.insert(item, initialItems[item]);
  });
}

PriorityQueue.prototype = new MinHeap();

PriorityQueue.prototype.insert = function (item, priority) {
  var o = {
    item: item,
    priority: priority
  };

  this._items[item] = o;
  MinHeap.prototype.insert.call(this, o);
};

PriorityQueue.prototype.extract = function () {
  var min = MinHeap.prototype.extract.call(this);
  return min && min.item;
};

PriorityQueue.prototype.changePriority = function (item, priority) {
  this._items[item].priority = priority;
  this.heapify();
};

module.exports = PriorityQueue;
