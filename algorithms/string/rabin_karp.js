/**
 * Copyright (C) 2014 Tayllan Búrigo
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
 * A prime number used to create
 * the hash representation of a word
 *
 * Bigger the prime number,
 * bigger the hash value
 */
var base = 997;

/**
 * Calculates String Matching between two Strings
 * Returns true if String 'b' is contained in String 'a'
 *
 * Average and Best Case Complexity: O(a.length + b.length)
 * Worst Case Complexity: O(a.length * b.length)
 *
 * @param String
 * @param String
 * @return Boolean
 */
var rabinKarp = function (s, pattern) {
  if (pattern.length === 0) return 0;

  var hashPattern = hash(pattern);
  var currentSubstring = s.substring(0, pattern.length);
  var hashCurrentSubstring;

  for (var i = pattern.length; i <= s.length; i++) {
    if (hashCurrentSubstring === undefined) {
      hashCurrentSubstring = hash(currentSubstring);
    } else {
      /*
       * Re-hash
       * Recalculates the hash representation of a word so that it isn't
       * necessary to traverse the whole word again
       */
      hashCurrentSubstring -= currentSubstring.charCodeAt(0) *
        Math.pow(base, pattern.length - 1);
      hashCurrentSubstring *= base;
      hashCurrentSubstring += s.charCodeAt(i);

      currentSubstring = currentSubstring.substring(1) + s[i];
    }

    if (hashPattern === hashCurrentSubstring &&
        pattern === currentSubstring) {
      // Hack for the off-by-one when matching in the beginning of the string
      return i === pattern.length ? 0 : i - pattern.length + 1;
    }
  }

  return -1;
};

/**
 * Creates the hash representation of 'word'
 *
 * @param String
 * @return Number
 */
var hash = function (word) {
  var h = 0;

  for (var i = 0; i < word.length; i++) {
    h += word.charCodeAt(i) * Math.pow(base, word.length - i - 1);
  }

  return h;
};

module.exports = rabinKarp;
