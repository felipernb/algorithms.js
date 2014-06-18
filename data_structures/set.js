/**
 * Copyright (C) 2014 Andre Oliveira
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"], to
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

var HashTable = require('./hash_table');

/**
 * Typical representation of a mathematical set
 * No restriction on element types
 *   i.e. set.add(1,'a', "b", { "foo" : "bar" })
 */
var Set = function() {
   this.elts = new HashTable(arguments.length);

   for(var i = 0; i < arguments.length; i++) {
      this.add(arguments[i]);
   }
};

Set.prototype.add = function() {
   for(var i = 0; i < arguments.length; i++) {
      this.elts.put(arguments[i], {});
   }
   return this;
};

Set.prototype.remove = function() {
   for(var i = 0; i < arguments.length; i++) {
      this.elts.del(arguments[i]);
   }
   return this;
};

Set.prototype.contains = function(elt) {
   return this.elts.get(elt) !== undefined;
};

Set.prototype.size = function() {
   return this.elts._items;
};

module.exports = Set;
