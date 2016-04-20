'use strict';

require('chai').should();

var ternarySearch = require('../../..').Search.ternarySearch,
    eps = 1e-6;

var fn1 = function (x) {
  return -Math.pow(x - 2, 2) + 4;
};

var fn2 = function (x) {
  return -2 * Math.cos(x);
};

describe('Ternary search', function () {
  it('should find the maximum of passed function', function () {
    ternarySearch(fn1, 0.0, 4.0, eps).should.be.closeTo(2.0, eps);
    ternarySearch(fn1, 1.0, 1.1, eps).should.be.closeTo(1.1, eps);

    ternarySearch(fn2, -2.0, 2.0, eps).should.be.closeTo(2.0, eps);
    ternarySearch(fn2, 0, 2 * Math.PI, eps).should.be.closeTo(Math.PI, eps);
  });
});
