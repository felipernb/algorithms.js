'use strict';

const shannonEntropy = require('../../../').Math.shannonEntropy;
const assert = require('assert');

describe('Shannon Entropy', function() {
  it('calculates shannon entropy', function() {
    assert.equal(shannonEntropy([]), 0);
    assert.equal(shannonEntropy([1]), 0);
    assert.equal(shannonEntropy([1, 0]), 1);
    assert.equal(shannonEntropy(['a', 'b', 'c', 'd']), 2);
  });
});
