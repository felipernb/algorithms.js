'use strict';

var LinkedList = require('./linked_list');

/**
 * Queue (FIFO) using a Linked List as basis
 */
function Queue() {
  this._elements = new LinkedList();

  Object.defineProperty(this, 'length', {
    get: function() {
      return this._elements.length;
    }.bind(this)
  });
}

Queue.prototype.isEmpty = function() {
  return this._elements.isEmpty();
};

/**
 * Adds element to the end of the queue
 */
Queue.prototype.push = function(e) {
  this._elements.add(e);
};

/**
 * Pops the element in the beginning of the queue
 */
Queue.prototype.pop = function() {
  if (this.isEmpty()) {
    throw new Error('Empty queue');
  }
  var e = this._elements.head;
  this._elements.delNode(e);
  return e.value;
};

Queue.prototype.peek = function() {
  if (this.isEmpty()) {
    throw new Error('Empty queue');
  }

  return this._elements.get(0);
};

module.exports = Queue;
