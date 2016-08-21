'use strict';

var LinkedList = require('./linked_list');

/**
 * Queue (FIFO) using a Linked List as basis
 */
class Queue {
  constructor() {
    this._elements = new LinkedList();

    Object.defineProperty(this, 'length', {
      get: function() {
        return this._elements.length;
      }.bind(this)
    });
  };
  	
  isEmpty() {
    return this._elements.isEmpty();
  };

  /**
   * Adds element to the end of the queue
   */
  push(e) {
    this._elements.add(e);
  };

  /**
   * Pops the element in the beginning of the queue
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error('Empty queue');
    }
    var e = this._elements.get(0);
    this._elements.del(0);
    return e;
  };

  peek() {
    if (this.isEmpty()) {
      throw new Error('Empty queue');
    }

    return this._elements.get(0);
  };

  forEach(fn) {
    this._elements.forEach(fn);
  };

}

module.exports = Queue;
