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

var LinkedList = require('./linked_list');

/**
 * Queue (FIFO) using a Linked List as basis
 */
function Queue() {
  this._elements = new LinkedList();

  Object.defineProperty(this, 'length', {
    get: function () {
      return this._elements.length;
    }.bind(this)
  });
}

Queue.prototype.isEmpty = function () {
  return this._elements.isEmpty();
};

/**
 * Adds element to the end of the queue
 */
Queue.prototype.push = function (e) {
  this._elements.add(e);
};

/**
 * Pops the element in the beginning of the queue
 */
Queue.prototype.pop = function () {
  if (this.isEmpty()) {
    throw new Error('Empty queue');
  }
  var e = this._elements.get(0);
  this._elements.del(0);
  return e;
};

Queue.prototype.peek = function () {
  if (this.isEmpty()) {
    throw new Error('Empty queue');
  }

  return this._elements.get(0);
};

module.exports = Queue;
