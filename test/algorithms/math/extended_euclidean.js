/**
 * Copyright (C) 2014 Shu Ding
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

var extEuclid = require('../../../algorithms/math/extended_euclidean'),
    assert = require('assert');

describe('extEuclid', function () {
  it('should calculate the solve to Bézout\'s identity', function () {
    var solve = extEuclid(1, 0);
    assert.equal(solve.x, 1);
    assert.equal(solve.y, 0);

    solve = extEuclid(25, 35);
    assert.equal(solve.x, 3);
    assert.equal(solve.y, -2);

    solve = extEuclid(-55, 22);
    assert.equal(solve.x, 1);
    assert.equal(solve.y, 3);
  });
});
