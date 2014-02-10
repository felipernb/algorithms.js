/**
 * Different implementations of the Fibonacci sequence
 *
 * @author Felipe Ribeiro <felipernb@gmail.com>
 */

(function(module) {
  "use strict";

  /**
   * Regular fibonacci implementation following the definition:
   * Fib(0) = 0
   * Fib(1) = 1
   * Fib(n) = Fib(n-1) + Fib(n-2)
   *
   * @param Number
   * @return Number
   */
  var fibExponential = function (n) {
    return n < 2 ? n : fibExponential(n-1) + fibExponential(n-2);
  };

  /**
   * O(n) in time, O(1) in space and doesn't use recursion
   *
   * @param Number
   * @return Number
   */
  var fibLinear = function(n) {
    var fibNMinus2 = 0,
        fibNMinus1 = 1,
        fib = n;
    for (var i = 1; i < n; i++) {
      fib = fibNMinus1 + fibNMinus2;
      fibNMinus2 = fibNMinus1;
      fibNMinus1 = fib;
    }
    return fib;
  };

  /**
   * Implementation with memoization, O(n) in time, O(n) in space
   *
   * @param Number
   * @return Number
   */
  var fibWithMemoization = (function() {
    var cache = [0, 1];

    var fib = function(n) {
      if (cache[n] === undefined) {
        cache[n] = fib(n-1) + fib(n-2);
      }
      return cache[n];
    };

    return fib;
  })();

  module.exports = {
    exponential: fibExponential,
    linear: fibLinear,
    withMemoization: fibWithMemoization
  };
})(module);
