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
var karpRabin = function (a, b) {
  var aLength = a.length;
  var bLength = b.length;
  var rs = hashFunction(b);
  var newString = [];

  for (var i = 0; i < bLength; i++) {
    newString.push(a.charAt(i));
  }

  var rt = hashFunction(newString.join(''));

  if (rs === rt && checkEquality(b, newString.join(''))) {
    return true;
  }
  else {
    for (i = 1; i < aLength; i++) {
      var previousCharacter = newString[0];
      var nextCharacter = a.charAt(i);

      rt = reHash(
        bLength,
        rt,
        previousCharacter,
        nextCharacter
      );
      newString.shift();
      newString.push(nextCharacter);

      if (rs === rt && checkEquality(b, newString.join(''))) {
        return true;
      }
    }

    return false;
  }
};

/**
 * Checks if 'a' is equal to 'b'
 *
 * @param String
 * @param String
 * @return Boolean
 */
var checkEquality = function (a, b) {
  var aLength = a.length;

  for (var i = 0; i < aLength; i++) {
    if (a.charAt(i) !== b.charAt(i)) {
      return false;
    }
  }

  return true;
};

/**
 * Creates the hash representation of 'word'
 *
 * @param String
 * @return Number
 */
var hashFunction = function (word) {
  var hash = 0;
  var wordLength = word.length;

  for (var i = 0, j = wordLength - 1; i < wordLength; i++, j--) {
    hash += word.charCodeAt(i) * Math.pow(base, j);
  }

  return hash;
};

/**
 * Recalculates the hash representation of a word so that it isn't
 * necessary to traverse the whole word again
 *
 * @param Number
 * @param Number
 * @param Character
 * @param Character
 * @return Number
 */
var reHash = function (length, hash, previousCharacter, nextCharacter) {
  hash -= previousCharacter.charCodeAt(0) * Math.pow(base, length - 1);
  hash *= base;
  hash += nextCharacter.charCodeAt(0);

  return hash;
};

module.exports = karpRabin;
