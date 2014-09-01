/**
 * Implementation of longest common substring
 *
 * @author Joshua Curl <curljosh@msu.edu>
 */

'use strict';

/**
 * Implementation via dynamic programming
 */
var longestCommonSubstring = function (s1, s2) {
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

  var lcsPosition = {};
  var commonSubstringFound = false;

  // Fill in the cache
  for (i = 1; i < s1.length + 1; i++) {
    for (j = 1; j < s2.length + 1; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        cache[i][j] = cache[i - 1][j - 1] + 1;
        if (commonSubstringFound) {
          if (cache[i][j] > cache[lcsPosition.i][lcsPosition.j]) {
            lcsPosition.i = i;
            lcsPosition.j = j;
            commonSubstringFound = true;
          }
        }
        else {
          lcsPosition.i = i;
          lcsPosition.j = j;
        }
      }
      else {
        cache[i][j] = 0;
      }
    }
  }

  // Build LCS from cache
  i = lcsPosition.i;
  j = lcsPosition.j;
  var lcs = '';

  while (cache[i][j] !== 0) {
    lcs += s1[i - 1];
    i--;
    j--;
  }

  // LCS is built in reverse, return reversed string
  return lcs.split('').reverse().join('');
};

module.exports = longestCommonSubstring;
