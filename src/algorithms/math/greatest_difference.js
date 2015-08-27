'use strict';

/**
 * Find the greatest difference between two numbers in a set
 * This solution has a cost of O(n)
 *
 * @param {number[]} numbers
 * @returns {number}
 */

var greatestDifference = function (numbers) {
  var index = 0;
  var largest = numbers[0];
  var length = numbers.length;
  var number;
  var smallest = numbers[0];

  for (index; index < length; index++) {
    number = numbers[index];

    if (number > largest) largest = number;
    if (number < smallest) smallest = number;
  }

  return largest - smallest;
};

module.exports = greatestDifference;
