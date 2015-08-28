'use strict';

/**
* Checks whether a number is prime using a given primality test
*
* @param Function
* @param Number
*
* @return Boolean
*/
var genericPrimalityTest = function (primalityTest, n) {
  if (n <= 1) {
    return false;
  }
  return primalityTest(n);
};

/**
* Checks whether a number is prime using the naive algorithm O(n)
*
* @param Number
*
* @return Boolean
*/
var naiveTest = function (n) {
  for (var i = 2; i < n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/**
* Checks whether a number is prime using the trial divison algorithm O(sqrt(n))
*
* @param Number
*
* @return Boolean
*/
var trialDivisionTest = function (n) {
  var sqrt = Math.sqrt(n);
  for (var i = 2; i <= sqrt; ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = {
  naiveTest: genericPrimalityTest.bind(null, naiveTest),
  trialDivisionTest: genericPrimalityTest.bind(null, trialDivisionTest)
};
