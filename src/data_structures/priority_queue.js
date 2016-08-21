'use strict';

var MinHeap = require('./heap').MinHeap;

/**
 * Extends the MinHeap with the only difference that
 * the heap operations are performed based on the priority of the element
 * and not on the element itself
 */
class PriorityQueue extends MinHeap {
  constructor(initialItems) {
    var self = this;
    MinHeap.call(this, function(a, b) {
      return self.priority(a) < self.priority(b) ? -1 : 1;
    });

    this._priority = {};

    initialItems = initialItems || {};
    Object.keys(initialItems).forEach(function(item) {
      self.insert(item, initialItems[item]);
    });
  };
  	
  insert(item, priority) {
    if (this._priority[item] !== undefined) {
      return this.changePriority(item, priority);
    }
    this._priority[item] = priority;
    MinHeap.prototype.insert.call(this, item);
  };

  extract(withPriority) {
    var min = MinHeap.prototype.extract.call(this);
    return withPriority ?
      min && {item: min, priority: this._priority[min]} :
      min;
  };

  priority(item) {
    return this._priority[item];
  };

  changePriority(item, priority) {
    this._priority[item] = priority;
    this.heapify();
  };

}

// PriorityQueue.prototype = new MinHeap();  - new syntax (ES6) uses the keyword 'extends'

module.exports = PriorityQueue;
