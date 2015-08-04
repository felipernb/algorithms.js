'use strict';

var gcd = require('./gcd.js');

/**
 * Algorithm to calculate Least Common Multiple based on Euclidean algorithm
 *
 * @param Number
 * @param Number
 *
 * @return Number
 */
var lcmDivisionBased = function (a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }
  a = Math.abs(a);
  b = Math.abs(b);
  return a / gcd(a, b) * b;
};

/**
 * Algorithm to calculate Least Common Multiple based on Stein's Algorithm
 *
 * @param Number
 * @param Number
 *
 * @return Number
 */
var lcmBinaryIterative = function (a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }
  a = Math.abs(a);
  b = Math.abs(b);
  return a / gcd.binary(a, b) * b;
};

lcmDivisionBased.binary = lcmBinaryIterative;
module.exports = lcmDivisionBased;
