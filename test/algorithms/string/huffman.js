/**
 * Copyright (C) 2014 Eugene Sharygin
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

var huffman = require('../../../algorithms/string/huffman'),
    assert = require('assert');


describe('Huffman', function () {
  var messages = ['', 'a', 'b', 'hello', 'test', 'awwawwweeeqqq',
                  'The seething sea ceaseth and thus' +
                  ' the seething sea sufficeth us.',
                  'Shep Schwab shopped at Scott\'s Schnapps shop;' +
                  '\nOne shot of Scott\'s Schnapps stopped Schwab\'s watch.'];
  for (var randomTestIndex = 0; randomTestIndex < 15; ++randomTestIndex) {
    var length = Math.floor(Math.random() * 100 + 1);
    var characters = [];
    for (var charIndex = 0; charIndex < length; ++charIndex) {
      var charCode = Math.floor(Math.random() * 10 + 'a'.charCodeAt());
      characters.push(String.fromCharCode(charCode));
    }
    messages.push(characters.join(''));
  }

  it('should decode previously encoded messages correctly', function () {
    messages.forEach(function (message) {
      var encoded = huffman.encode(message);
      var decoded = huffman.decode(encoded.encoding, encoded.value);
      assert.equal(message, decoded);
      var encodedCompressed = huffman.encode(message, true);
      var decodedCompressed = huffman.decode(encodedCompressed.encoding,
                                             encodedCompressed.value);
      assert.equal(message, decodedCompressed);
    });
  });

  it('should raise an error if it fails to decode', function () {
    var badArgs = [[{}, '0'],
                   [{a: '0', b: '10', c: '11'}, '001']];
    badArgs.forEach(function (args) {
      assert.throws(function () {
        huffman.decode.apply(null, args);
      });
    });
  });

  it('should encode sample strings in the expected manner', function () {
    assert.deepEqual(huffman.encode(''), {encoding: {}, value: ''});
    assert.deepEqual(huffman.encode('a'), {encoding: {a: '0'}, value: '0'});
    assert.deepEqual(huffman.encode('aaaaa'), {encoding: {a: '0'},
                                               value: '00000'});
    var result = huffman.encode('aabc');
    assert.equal(result.encoding.a.length, 1);
    assert.equal(result.encoding.b.length, 2);
    assert.equal(result.encoding.c.length, 2);
    result = huffman.encode('abcdabcdabcdabcd');
    Object.keys(result.encoding).forEach(function (char) {
      assert.equal(result.encoding[char].length, 2);
    });
    assert.equal(result.value.length, 32);
  });

  it('should satisfy the entropy condition (H <= cost <= H+1)', function () {
    messages.forEach(function (message) {
      var frequencies = message.split('').reduce(function (acc, char) {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
      }, {});
      Object.keys(frequencies).forEach(function (char) {
        frequencies[char] /= message.length;
      });
      var entropy = Object.keys(frequencies).reduce(function (partial, char) {
        var freq = frequencies[char];
        return partial - freq * Math.log(freq);
      }, 0) / Math.log(2);
      var encoding = huffman.encode(message).encoding;
      var cost = Object.keys(encoding).reduce(function (partial, char) {
        return partial + frequencies[char] * encoding[char].length;
      }, 0);
      assert(entropy <= cost);
      assert(cost <= entropy + 1);
    });
  });
});
