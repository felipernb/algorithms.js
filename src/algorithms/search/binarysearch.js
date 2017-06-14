'use strict';

/**
  * Binary Search finds elements in sorted arrays in logarithmic
  * time (O(lg n))
  *
  * @param Array
  * @param Number|String
  *
  * @return Boolean
  */
const binarySearch = function(sortedArray, element) {
  let init = 0;
  let end = sortedArray.length - 1;

  while (end >= init) {
    const m = ((end - init) >> 1) + init;
    if (sortedArray[m] === element) return m;

    if (sortedArray[m] < element) init = m + 1;
    else end = m - 1;
  }

  return -1;
};

module.exports = binarySearch;
