'use strict';

/**
  *  Finds the maximum of unimodal function fn() within [left, right]
  *  To find the minimum, revert the if/else statement or revert the comparison.
  *  Time complexity: O(log(n))
  */

var ternarySearch = function (fn, left, right, precision) {
  while (Math.abs(right - left) > precision) {
    var leftThird = left + (right - left) / 3,
        rightThird = right - (right - left) / 3;

    if (fn(leftThird) < fn(rightThird))
      left = leftThird; else
      right = rightThird;
  }
  return (left + right) / 2;
};

module.exports = ternarySearch;
