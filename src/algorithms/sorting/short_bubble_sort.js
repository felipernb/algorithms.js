'use strict';

var Comparator = require('../../util/comparator');

/**
 * short bubble sort algorithm
 * worst: O(n^2) best: O(n)
 */

function shortBubbleSort(array, comparatorFn) {
  var comparator = new Comparator(comparatorFn);
  var length = array.length;
  var i = 0;

  for (i; i < length; i++) {
    var current = array[i];
    var next = array[i+1];

    if (next === undefined) break;
    if (comparator.lessThanOrEqual(current, next)) continue;

    array[i+1] = current;
    array[i] = next;
    i = -1;
  }

  return array;
}

module.exports = shortBubbleSort;
