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
var lcmDivisionBased = function(a, b) {
  return (a * b) / gcd(a, b);
};

/**
 * Algorithm to calculate Least Common Multiple based on Stein's Algorithm
 *
 * @param Number
 * @param Number
 *
 * @return Number
 */
var lcmBinaryIterative = function(a, b) {
  return (a * b) / gcd.binary(a, b);
};

lcmDivisionBased.binary = lcmBinaryIterative;
module.exports = lcmDivisionBased;
