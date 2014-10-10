/**
 * Implementation of longest common subsequence
 *
 * @author Joshua Curl <curljosh@msu.edu>
 */

'use strict';

/**
 * Implementation via dynamic programming
 */
var longestCommonSubsequence = function (s1, s2) {
  // Multidimensional array for dynamic programming algorithm
  var cache = [];

  var i, j;

  // First column and row are initialized with zeroes
  for (i = 0; i < s1.length + 1; i++) {
    cache[i] = [];
    cache[i][0] = 0;
  }
  for (i = 0; i < s2.length + 1; i++) {
    cache[0][i] = 0;
  }

  // Fill in the cache
  for (i = 1; i < s1.length + 1; i++) {
    for (j = 1; j < s2.length + 1; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        var newValue = cache[i - 1][j - 1] + 1;
        cache[i][j] = newValue;
      }
      else {
        cache[i][j] = Math.max(cache[i][j - 1], cache[i - 1][j]);
      }
    }
  }

  // Build LCS from cache
  i = s1.length;
  j = s2.length;
  var lcs = '';

  while (cache[i][j] !== 0) {
    if (s1[i - 1] === s2[j - 1]) {
      lcs += s1[i - 1];
      i--;
      j--;
    }
    else {
      if (cache[i - 1][j] > cache[i][j - 1]) {
        i--;
      }
      else {
        j--;
      }
    }
  }

  // LCS is built in reverse, return reversed string
  return lcs.split('').reverse().join('');
};

module.exports = longestCommonSubsequence;
