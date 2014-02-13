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
'use strict';

/**
 * Calculates the edit distance between two strings
 * considering the same cost of 1 to every operation
 * (addition, deletion, substitution)
 *
 * It uses dynamic programing and creates a matrix
 * where every cell [i,j] represents the distance between
 * the substrings a[0..i] and b[0..j]
 *
 * O(a.length * b.length)
 *
 * @param String
 * @param String
 * @return Number
 */
var levenshtein = function (a, b) {
  var editDistance = [];
  var i, j;

  // Initialize the edit distance matrix. The first collumn contains
  // the values comparing the string a to an empty string b
  for (i = 0; i <= a.length; i++) {
    editDistance[i] = [];
    editDistance[i][0] = i;
  }

  // And the first line the values comparint the string b to an empty string a
  for (j = 0; j <= b.length; j++) {
    editDistance[0][j] = j;
  }
  for (i = 1; i <= a.length; i++) {
    for (j = 1; j <= b.length; j++) {
      // Finds the minimum cost for keeping the two strings equal
      editDistance[i][j] =
        Math.min(
          editDistance[i - 1][j - 1], // if we replace a[i] by b[j]
          editDistance[i - 1][j], // if we delete the char from a
          editDistance[i][j - 1] // if we add the char from b
        ) +
        (a[i - 1] != b[j - 1] ? 1 : 0);
    }
  }

  return editDistance[a.length][b.length];
};

module.exports = levenshtein;
