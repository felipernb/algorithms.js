'use strict';
var LinkedList = require('./linked_list');

/**
 * Stack (LIFO) using a Linked List as basis
 */
function Stack() {
  this._elements = new LinkedList();

  Object.defineProperty(this, 'length', {
    get: (function() {
      return this._elements.length;
    }).bind(this)
  });
}

Stack.prototype.isEmpty = function() {
  return this._elements.isEmpty();
};

/**
 * Adds element to the end of the stack
 */
Stack.prototype.push = function(e) {
  this._elements.add(e);
};

/**
 * Pops the element from the end of the stack
 */
Stack.prototype.pop = function() {
  if (this.isEmpty()) {
    throw new Error('Empty queue');
  }

  var e = this._elements.tail;
  this._elements.delNode(e);
  return e.value;
};

Stack.prototype.peek = function() {
  if (this.isEmpty()) {
    throw new Error('Empty queue');
  }

  return this._elements.tail.value;
};

Stack.prototype.forEach = function(fn) {
  this._elements.forEach(fn);
};

module.exports = Stack;
