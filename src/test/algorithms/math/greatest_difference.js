'use strict';

var assert = require('assert');
var math = require('../../..').Math;
var greatestDifference = math.greatestDifference;

describe('Greatest Difference', function () {
  it('should return 7 for [5, 8, 6, 1]', function () {
    assert.equal(greatestDifference([5, 8, 6, 1]), 7);
  });

  it('should return 4 for [7, 8, 4]', function () {
    assert.equal(greatestDifference([7, 8, 4]), 4);
  });

  it('should return 38 for the Lost numbers', function () {
    assert.equal(greatestDifference([4, 8, 15, 16, 23, 42]), 38);
  });
});
