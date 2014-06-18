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
 * String Matching algorithm
 * Tries to match the given pattern inside the given text
 * If the pattern exists inside the text, it will be returned
 * the index of the begining of the pattern in the text,
 * otherwise it will be returned the length of the text
 *
 * Asymptotic Complexity: O(text.length)
 *
 * @param {Array} text of Numbers, Strings or Characters
 *     or {String}
 * @param {Array} pattern of Numbers, Strings or Characters
 *     or {String}
 * @return {Number}
 */
var knuthMorrisPratt = function (text, pattern) {
  var textLength = text.length;
  var patternLength = pattern.length;
  var m = 0;
  var i = 0;
  var table = buildTable(pattern);

  while (m + i < textLength) {
    if (pattern[i] === text[m + i]) {
      if (i === patternLength - 1) {
        return m;
      }
      ++i;
    }
    else {
      if (table[i] >= 0) {
        i = table[i];
        m = m + i - table[i];
      }
      else {
        i = 0;
        ++m;
      }
    }
  }

  return textLength;
};

/**
 * Builds the dinamic table of the given pattern
 * to record how the pattern can match it self
 *
 * Asymptotic Complexity: O(pattern.length)
 *
 * @param {Array} pattern of Numbers, Strings or Characters
 *     or {String}
 * @return {Array} of Integers
 */
var buildTable = function (pattern) {
  var length = pattern.length;
  var table = [];
  var position = 2;
  var cnd = 0;

  table[0] = -1;
  table[1] = 0;

  while (position < length) {
    if (pattern[position - 1] === pattern[cnd]) {
      ++cnd;
      table[position] = cnd;
      ++position;
    }
    else if (cnd > 0) {
      cnd = table[cnd];
    }
    else {
      table[position] = 0;
      ++position;
    }
  }

  return table;
};

module.exports = knuthMorrisPratt;
