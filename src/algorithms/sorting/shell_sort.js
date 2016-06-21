'use strict';
var Comparator = require('../../util/comparator');
/**
 * shell sort  worst:O(n lg n)  best:O(n)
 */
var shellSort = function(array, comparatorFn) {
  var comparator = new Comparator(comparatorFn);
  var begin = 0;
  var end = array.length - 1;
  var gap = parseInt((end - begin + 1) / 2, 10);
  var i = 0;
  var j = 0;
  var temp = 0;

  while (gap >= 1) {
    for (i = begin + gap; i <= end; i += 1) {
      temp = array[i];
      j = i - gap;
      while (j >= begin && comparator.greaterThan(array[j], temp)) {
        array[j + gap] = array[j];
        j -= gap;
      }
      array[j + gap] = temp;
    }
    gap = parseInt(gap / 2, 10);
  }

  return array;
};

module.exports = shellSort;
