'use strict';
var Comparator = require('../../util/comparator');
/**
 * shell sort  worst:O(n lg n)  best:O(n)
 */
var shellSort = function(array, comparatorFn) {
  var comparator = new Comparator(comparatorFn);
  var gap = Math.floor(array.length / 2);

  while (gap > 0) {
    for (var i = gap; i < array.length; i++) {
      var temp = array[i];
      var j = i - gap;
      while (j >= 0 && comparator.greaterThan(array[j], temp)) {
        array[j + gap] = array[j];
        j -= gap;
      }
      array[j + gap] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return array;
};

module.exports = shellSort;
