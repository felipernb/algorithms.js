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

var knuthMorrisPratt = require('../../../algorithms/string/knuth_morris_pratt'),
    assert = require('assert');

describe('Knuth-Morris-Pratt', function () {
  it('should verify if a pattern is contained in some text (or array)',
    function () {
      var text = 'A string matching algorithm wants to find the starting' +
        'index m in string S[] that matches the search word W[].The most' +
        ' straightforward algorithm is to look for a character match at ' +
        'successive values of the index m, the position in the string be' +
        'ing searched, i.e. S[m]. If the index m reaches the end of the ' +
        'string then there is no match, in which case the search is said' +
        'to "fail". At each position m the algorithm first checks for eq' +
        'uality of the first character in the searched for word, i.e. S[' +
        'm] =? W[0]. If a match is found, the algorithm tests the other ' +
        'characters in the searched for word by checking successive valu' +
        'es of the word position index, i. The algorithm retrieves the c' +
        'haracter W[i] in the searched for word and checks for equality ' +
        'of the expression S[m+i] =? W[i]. If all successive characters ' +
        'match in W at position m then a match is found at that position' +
        ' in the search string. (Wikipedia, 2014): https://en.wikipedia.' +
        'org/wiki/Knuth-Morris-Pratt_algorithm';
      var pattern = 'https://en.wikipedia.org/wiki/Knuth-Morris-Pratt_al' +
        'gorithm';

      assert.equal(knuthMorrisPratt(text, pattern), 915);

      pattern = '(https://en.wikipedia.org/wiki/Knuth-Morris-Pratt_algorithm';

      assert.equal(knuthMorrisPratt(text, pattern), text.length);


      var arrayText = [3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 4];
      var arrayPattern = [8, 9, 8];

      assert.equal(knuthMorrisPratt(arrayText, arrayPattern), 5);

      arrayPattern = [];

      assert.equal(knuthMorrisPratt(arrayText, arrayPattern), arrayText.length);
    });
});
