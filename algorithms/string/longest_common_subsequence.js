/**
 * Copyright (C) 2014 Felipe Ribeiro
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

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

  // First column and row are initialized with zeroes
  for(var i = 0; i < s1.length + 1; i++) {
    cache[i] = [];
    cache[i][0] = 0;
  }
  for(var i = 0; i < s2.length + 1; i++) {
    cache[0][i] = 0;
  }

  // Fill in the cache
  for(var i = 1; i < s1.length + 1; i++) {
    for(var j = 1; j < s2.length + 1; j++) {
      if(s1[i - 1] == s2[j - 1]) {
        var new_value = cache[i - 1][j - 1] + 1;
        cache[i][j] = new_value;
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

  while(cache[i][j] !== 0) {
    if(s1[i - 1] === s2[j - 1]){
      lcs += s1[i - 1];
      i--;
      j--;
    }
    else {
      if(cache[i - 1][j] > cache[i][j - 1]) {
        i--;
      }
      else {
        j--;
      }
    }
  }

  // LCS is built in reverse, return reversed string
  return lcs.split('').reverse().join('');
}

module.exports = longestCommonSubsequence;
