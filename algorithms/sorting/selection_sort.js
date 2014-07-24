'use strict';
/**
 * Selection sort algorithm O(n^2)
 */
var selectionSort = function (a) {
  var n = a.length;
  for (var i = 0; i < n - 1; i++) {
    var min = i;
    for (var j = i + 1; j < n; j++) {
      if (a[min] > a[j])
        min = j;
    }
    if (min != i) {
      var tmp = a[i];
      a[i] = a[min];
      a[min] = tmp;
    }
  }

  return a;
};

module.exports = selectionSort;
