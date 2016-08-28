'use strict';

/**
 * Different implementations for finding the divisors
 */

/**
 * Find all the divisors of a natural number
 * This solution has a cost of O(n)
 * This solution uses the naive method to print all divisors
 *
 * @param {number}
 * @returns {number[]} - returns the divisors
 */

var findDivisorsGeneric = function(number) {
  var index = 1;
  var divisors = [];

  for (index; index <= number; index++) {
    if (number % index === 0) {
      divisors.push(index);
    }
  }
  return divisors;
};

/**
 * Find all the divisors of a natural number
 * This solution has a cost of O(sqrt(n))
 * This method returns the divisors in an unsorted manner.
 * All divisors of a number are present in pairs.
 * Eg : For n=16: (1, 16), (2, 8), (4, 4). Include only one of the repeated divisors if any.
 *
 * @param {number}
 * @returns {number[]} - returns the divisors
 */

var findDivisorsByPairingUnsorted = function(number) {
  var index = 1;
  var divisors = [];

  for (index; index <= Math.sqrt(number); index++) {
    if (number % index === 0) {
      if (number / index === index)
        divisors.push(index);
      else {
        divisors.push(index);
        divisors.push(number / index);
      }
    }
  }
  return divisors;
};

/**
 * Find all the divisors of a natural number
 * This solution has a cost of O(sqrt(n))
 * This method returns the array in a sorted manner
 * All divisors of a number are present in pairs (divisorLessThanSqrt, divisorGreaterThanSqrt)
 * Reverse the divisorGreaterThanSqrt array and append to divisorLessThanSqrt to sort the result
 * Eg : For n=16: (1, 16), (2, 8), (4, 4). Include only one of the repeated divisors if any
 *
 * @param {number}
 * @returns {number[]} - returns the divisors
 */

var findDivisorsByPairingSorted = function(number) {
  var index = 1;
  var divisors = [];
  var divisorsLessThanSqrt = [];
  var divisorsMoreThanSqrt = [];

  for (index; index <= Math.sqrt(number); index++) {
    if (number % index === 0) {
      if (number / index === index)
        divisorsLessThanSqrt.push(index);
      else {
        divisorsLessThanSqrt.push(index);
        divisorsMoreThanSqrt.push(number / index);
      }
    }
  }
  divisors = divisorsLessThanSqrt.concat(divisorsMoreThanSqrt.reverse());
  return divisors;
};

// Use findDivisorsGeneric as the default implementation
findDivisorsGeneric.pairingUnsorted = findDivisorsByPairingUnsorted;
findDivisorsGeneric.pairingSorted = findDivisorsByPairingSorted;
module.exports = findDivisorsGeneric;
