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

var levenshtein = require('../../../algorithms/string/edit_distance'),
    assert = require('assert');

describe('Levenshtein', function () {
  it('should calculate the minimal edit distance between two words',
    function () {
      assert.equal(levenshtein('', ''), 0);
      assert.equal(levenshtein('a', ''), 1);
      assert.equal(levenshtein('', 'a'), 1);
      // Should just add I to the beginning
      assert.equal(levenshtein('ISLANDER', 'SLANDER'), 1);
      // Needs to substitute M by K, T by M and add an A to the end
      assert.equal(levenshtein('MART', 'KARMA'), 3);
      // Needs to substitute K by S, E by I and add G to the end
      assert.equal(levenshtein('KITTEN', 'SITTING'), 3);
      // Needs to substitute the first 5 chars: INTEN by EXECU
      assert.equal(levenshtein('INTENTION', 'EXECUTION'), 5);
    });
});
