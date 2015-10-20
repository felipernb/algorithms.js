'use strict';

// cache algorithm results
var cache = {1: 1};

/**
 * Collatz Conjecture algorithm
 *
 * @param Number
 * @return Number
 */

function calculateCollatzConjecture(number) {
  if (number in cache) return cache[number];
  if (number % 2 === 0) return cache[number] = number >> 1;

  return cache[number] = number * 3 + 1;
}

/**
 * Generate Collatz Conjecture
 *
 * @param Number
 * @return Array
 */

function generateCollatzConjecture(number) {
  var collatzConjecture = [];

  do {
    number = calculateCollatzConjecture(number);
    collatzConjecture.push(number);
  } while (number !== 1);

  return collatzConjecture;
}

// export Collatz Conjecture methods
module.exports = {
  generate: generateCollatzConjecture,
  calculate: calculateCollatzConjecture,
};
