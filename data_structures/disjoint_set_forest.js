/**
 * Copyright (C) 2014 Eugene Sharygin
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
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
 * Disjoint Set Forest data structure.
 * Allows fast subset merging and querying.
 * New elements lie in their own one-element subsets by default.
 *
 * @constructor
 */
function DisjointSetForest() {
  this._parents = {};
  this._ranks = {};
  this._sizes = {};
}


DisjointSetForest.prototype._introduce = function (element) {
  if (!(element in this._parents)) {
    this._parents[element] = element;
    this._ranks[element] = 0;
    this._sizes[element] = 1;
  }
};


/**
 * Check if the elements belong to the same subset.
 * Complexity: O(A^-1) (inverse Ackermann function) amortized.
 *
 * @param {...*} element
 * @return {boolean}
 */
DisjointSetForest.prototype.sameSubset = function (element) {
  this._introduce(element);
  var root = this.root(element);
  return [].slice.call(arguments, 1).every(function (element) {
    this._introduce(element);
    return this.root(element) == root;
  }.bind(this));
};


/**
 * Return the root element which represents the given element's subset.
 * The result does not depend on the choice of the element,
 *   but rather on the subset itself.
 * Complexity: O(A^-1) (inverse Ackermann function) amortized.
 *
 * @param {*} element
 * @return {*}
 */
DisjointSetForest.prototype.root = function (element) {
  this._introduce(element);
  if (this._parents[element] != element) {
    this._parents[element] = this.root(this._parents[element]);
  }
  return this._parents[element];
};


/**
 * Return the size of the given element's subset.
 * Complexity: O(A^-1) (inverse Ackermann function) amortized.
 *
 * @param {*} element
 * @return {number}
 */
DisjointSetForest.prototype.size = function (element) {
  this._introduce(element);
  return this._sizes[this.root(element)];
};


/**
 * Merge subsets containing two (or more) given elements into one.
 * Complexity: O(A^-1) (inverse Ackermann function) amortized.
 *
 * @param {*} element1
 * @param {*} element2
 * @param {...*}
 * @return {DisjointSetForest}
 */
DisjointSetForest.prototype.merge = function merge(element1, element2) {
  if (arguments.length > 2) {
    merge.apply(this, [].slice.call(arguments, 1));
  }

  this._introduce(element1);
  this._introduce(element2);
  var root1 = this.root(element1);
  var root2 = this.root(element2);

  if (this._ranks[root1] < this._ranks[root2]) {
    this._parents[root1] = root2;
    this._sizes[root2] += this._sizes[root1];
  }
  else if (root1 != root2) {
    this._parents[root2] = root1;
    this._sizes[root1] += this._sizes[root2];
    if (this._ranks[root1] == this._ranks[root2]) {
      this._ranks[root1] += 1;
    }
  }
  return this;
};


module.exports = DisjointSetForest;
