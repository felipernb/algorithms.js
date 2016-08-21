'use strict';

var Queue = require('./queue');

/**
 * Stack (LIFO) using a Linked List as basis
 */
class Stack extends Queue {
  constructor() {
    Queue.call(this);
  };
  	
  /**
   * Adds element to the top of the stack
   */
  push(e) {
    this._elements.add(e, 0);
  };

}

/**
 * Use a Queue as prototype and just overwrite
 * the push method to insert at the 0 position
 * instead of the end of the queue
 */
//Stack.prototype = new Queue();  - new syntax (ES6) uses the keyword 'extends'

module.exports = Stack;
