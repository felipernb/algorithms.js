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

/**
 * Typical representation of a mathematical set
 * No restriction on element types
 *   i.e. set.add(1,'a', "b", { "foo" : "bar" })
 */
var Set = function() {
   this.elts = [];

   var toAdd = arguments || [];
   for(var i = 0; i < toAdd.length; i++) {
      this.add(toAdd[i]);
   }
}

Set.prototype.add = function() {
   for(var i = 0; i < arguments.length; i++) {
      if(!this.contains(arguments[i])) {
         this.elts.push(arguments[i]);
      }
   }
   return this;
}

Set.prototype.remove = function() {
   for(var i = 0; i < arguments.length; i++) {
      if(this.contains(arguments[i]))
         this.elts.splice(this.elts.indexOf(arguments[i]),1);
   }
   return this;
}

Set.prototype.contains = function(elt) {
   for(var i = 0; i < this.elts.length; i++) {
      if(this.elts[i] === elt) {
         return true;
      }
   }
   return false;
}

Set.prototype.intersect = function(other) {
   var newSet = new Set();
   for(var i = 0; i < this.elts.length; i++){
      if(other.contains(this.elts[i]))
         newSet.add(this.elts[i]);
   }
   return newSet;
}

Set.prototype.union = function(other) {
   var newSet = new Set();
   
   for(var i = 0; i < this.elts.length; i++)
      newSet.add(this.elts[i]);
   for(var i = 0; i < other.elts.length; i++)
      newSet.add(other.elts[i]);

   return newSet;
}

Set.prototype.subset = function(other) {
   for(var i = 0; i < this.elts.length; i++) {
      if(!other.contains(this.elts[i])) {
         return false;
      }
   }
   return true;
}

Set.prototype.minus = function(other) {
   var newSet = new Set();
   for(var i = 0; i < this.elts.length; i++){
      if(!other.contains(this.elts[i])){
         newSet.add(this.elts[i]);
      }
   }
   return newSet;
}

Set.prototype.symDiff = function(other) {
   return (this.minus(other)).union(other.minus(this));
}

Set.prototype.size = function() {
   return this.elts.length;
}

Set.prototype.equals = function(other) {
   return this.subset(other) && other.subset(this);
}

module.exports = Set;
