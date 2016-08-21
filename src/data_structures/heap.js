'use strict';
var Comparator = require('../util/comparator');

/**
 * Basic Heap structure
 */
class MinHeap {
  constructor(compareFn) {
    this._elements = [null];
    this._comparator = new Comparator(compareFn);

    Object.defineProperty(this, 'n', {
      get: function() {
        return this._elements.length - 1;
      }.bind(this)
    });
  };
  	
  _swap(a, b) {
    var tmp = this._elements[a];
    this._elements[a] = this._elements[b];
    this._elements[b] = tmp;
  };

  isEmpty() {
    return this.n === 0;
  };

  insert(e) {
    this._elements.push(e);
    this._siftUp();
  };

  extract() {
    var element = this._elements[1];

    // Get the one from the bottom in insert it on top
    // If this isn't already the last element
    var last = this._elements.pop();
    if (this.n) {
      this._elements[1] = last;
      this._siftDown();
    }

    return element;
  };

  /**
   * Sift up the last element
   * O(lg n)
   */
  _siftUp() {
    var i;
    var parent;

    for (i = this.n;
        i > 1 && (parent = i >> 1) && this._comparator.greaterThan(
          this._elements[parent], this._elements[i]);
        i = parent) {
      this._swap(parent, i);
    }
  };

  /**
   * Sifts down the first element
   * O(lg n)
   */
  _siftDown(i) {
    var c;
    for (i = i || 1; (c = i << 1) <= this.n; i = c) {
      // checks which is the smaller child to compare with
      if (c + 1 <= this.n && this._comparator.lessThan(
            this._elements[c + 1], this._elements[c]))
        // use the right child if it's lower than the left one
        c++;
      if (this._comparator.lessThan(this._elements[i],
            this._elements[c]))
        break;
      this._swap(i, c);
    }
  };

  heapify(a) {
    if (a) {
      this._elements = a;
      this._elements.unshift(null);
    }

    for (var i = this.n >> 1; i > 0; i--) {
      this._siftDown(i);
    }
  };

  forEach(fn) {
    // A copy is necessary in order to perform extract(),
    // get the items in sorted order and then restore the original
    // this._elements array
    var elementsCopy = [];
    var i;

    for (i = 0; i < this._elements.length; i++) {
      elementsCopy.push(this._elements[i]);
    }

    for (i = this.n; i > 0; i--) {
      fn(this.extract());
    }

    this._elements = elementsCopy;
  };

};

/**
 * Max Heap, keeps the highest element always on top
 *
 * To avoid code repetition, the Min Heap is used just with
 * a reverse comparator;
 */
class MaxHeap extends MinHeap {
  constructor(compareFn) {
    MinHeap.call(this, compareFn);
    this._comparator.reverse();
  };	
};

// MaxHeap.prototype = new MinHeap();  - new syntax (ES6) uses the keyword 'extends'

module.exports = {
  MinHeap: MinHeap,
  MaxHeap: MaxHeap
};
