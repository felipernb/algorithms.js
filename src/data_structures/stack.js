const LinkedList = require('./linked_list');

/**
 * Stack (LIFO) using a Linked List as basis
 */
function Stack() {
  this._elements = new LinkedList();

  Object.defineProperty(this, 'length', {
    get: () => this._elements.length
  });
}

Stack.prototype.isEmpty = function() {
  return this._elements.isEmpty();
};

/**
 * Adds element to the top of the stack
 */
Stack.prototype.push = function(e) {
  this._elements.add(e);
};

/**
 * Pops the element from the top of the stack
 */
Stack.prototype.pop = function() {
  if (this.isEmpty()) {
    throw new Error('Empty queue');
  }

  const e = this._elements.tail;
  this._elements.delNode(e);
  return e.value;
};

Stack.prototype.peek = function() {
  if (this.isEmpty()) {
    throw new Error('Empty queue');
  }

  return this._elements.tail.value;
};

module.exports = Stack;
