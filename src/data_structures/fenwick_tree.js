'use strict';

/**
 * Fenwick Tree (Binary Indexed Tree)
 */
function FenwickTree(length) {
  this._elements = new Array(length+1);
  for(var i=0; i<this._elements.length; i++)
    this._elements[i] = 0;
}

/**
 * Adds value to the array at specified index in O(log n)
 */
FenwickTree.prototype.adjust = function(index, value) {
  for(; index < this._elements.length; index += (index&-index))
    this._elements[index] += value;
};

/**
* Returns the sum of all value up to specified index in O(log n)
*/
FenwickTree.prototype.prefixSum = function(index) {
  var sum = 0;
  for(; index > 0; index -= (index&-index))
    sum += this._elements[index];
  return sum;
};

/**
* Returns the sum of all value between two indexes in O(log n)
*/
FenwickTree.prototype.rangeSum = function(fromIndex, toIndex) {
  return this.prefixSum(toIndex) - this.prefixSum(fromIndex-1);
};

module.exports = FenwickTree;
