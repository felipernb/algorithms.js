'use strict';

var ternarySearch = require('../../..').Search.ternarySearch,
    assert = require('assert'),
    eps = 1e-6;

var fn1 = function (x) {
  return -Math.pow(x - 2, 2) + 4;
};

var fn2 = function (x) {
  return -2 * Math.cos(x);
};

var closeEnough = function (a, b, precision) {
  return Math.abs(a - b) < precision;
};

describe('Ternary search', function () {
  it('should find the maximum of passed function', function () {
    assert(closeEnough(ternarySearch(fn1, 0.0, 4.0, eps), 2.0, eps));
    assert(closeEnough(ternarySearch(fn1, 0.0, 1.0, eps), 1.0, eps));

    assert(closeEnough(ternarySearch(fn2, -2.0, 2.0, eps), 2.0, eps));
    assert(closeEnough(ternarySearch(fn2, 0.0, 2*Math.PI, eps), Math.PI, eps));
  });
});
