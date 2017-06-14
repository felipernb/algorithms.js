const assert = require('assert');
const math = require('../../..').Math;
const greatestDifference = math.greatestDifference;

describe('Greatest Difference', () => {
  it('should return 7 for [5, 8, 6, 1]', () => {
    assert.equal(greatestDifference([5, 8, 6, 1]), 7);
  });

  it('should return 4 for [7, 8, 4]', () => {
    assert.equal(greatestDifference([7, 8, 4]), 4);
  });

  it('should return 38 for the Lost numbers', () => {
    assert.equal(greatestDifference([4, 8, 15, 16, 23, 42]), 38);
  });
});
