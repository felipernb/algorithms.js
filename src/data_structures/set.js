'use strict';

var HashTable = require('./hash_table');

/**
 * Typical representation of a mathematical set
 * No restriction on element types
 *   i.e. set.add(1,'a', "b", { "foo" : "bar" })
 */
class HashSet {
  constructor() {
    this._elements = new HashTable(arguments.length);
    this.add.apply(this, arguments);

    Object.defineProperty(this, 'size', {
      get: function() {
        return this._elements.size;
      }
    });
  };
    
  add() {
    for (var i = 0; i < arguments.length; i++) {
      this._elements.put(arguments[i], true);
    }
    return this;
  };

  remove() {
    for (var i = 0; i < arguments.length; i++) {
      this._elements.del(arguments[i]);
    }
    return this;
  };

  contains(e) {
    return typeof this._elements.get(e) !== 'undefined';
  };

  forEach(fn) {
    this._elements.forEach(fn);
  };
};

module.exports = HashSet;
