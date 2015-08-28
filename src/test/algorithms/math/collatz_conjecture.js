'use strict';

var math = require('../../..').Math,
    collatzConjecture = math.collatzConjecture,
    assert = require('assert');

describe('Collatz Conjecture', function () {
  it('should return odd numbers divided by two', function () {
    assert.equal(collatzConjecture.calculate(200), 100);
    assert.equal(collatzConjecture.calculate(222), 111);
    assert.equal(collatzConjecture.calculate(444), 222);
  });

  it('should return even numbers multiplied by 3 + 1', function () {
    assert.equal(collatzConjecture.calculate(111), 334);
    assert.equal(collatzConjecture.calculate(333), 1000);
    assert.equal(collatzConjecture.calculate(555), 1666);
  });

  it('should return Collatz Conjecture sequence ', function () {
    assert.deepEqual(collatzConjecture.generate(10), [5, 16, 8, 4, 2, 1]);
  });
});

