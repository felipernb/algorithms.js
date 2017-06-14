'use strict';

const ternarySearch = require('../../..').Search.ternarySearch;
const assert = require('assert');
const eps = 1e-6;

const fn1 = function(x) {
  return -Math.pow(x - 2, 2) + 4;
};

const fn2 = function(x) {
  return -2 * Math.cos(x);
};

const closeEnough = function(a, b, precision) {
  return Math.abs(a - b) < precision;
};

describe('Ternary search', function() {
  it('should find the maximum of passed function', function() {
    assert(closeEnough(ternarySearch(fn1, 0.0, 4.0, eps), 2.0, eps));
    assert(closeEnough(ternarySearch(fn1, 0.0, 1.0, eps), 1.0, eps));

    assert(closeEnough(ternarySearch(fn2, -2.0, 2.0, eps), 2.0, eps));
    assert(closeEnough(ternarySearch(fn2, 0, 2 * Math.PI, eps), Math.PI, eps));
  });
});
