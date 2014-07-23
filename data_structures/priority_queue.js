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
