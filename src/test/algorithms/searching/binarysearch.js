const binarySearch = require('../../..').Search.binarySearch;
const assert = require('assert');

describe('Binary Search', () => {
  it('should find elements in the sorted array', () => {
    assert.equal(binarySearch([1, 2, 3, 4, 5], 3), 2);
    assert.equal(binarySearch([1, 2, 3, 4, 5], 1), 0);
    assert.equal(binarySearch([1, 2, 3, 4, 5], 2), 1);
    assert.equal(binarySearch([1, 2, 3, 4, 5], 4), 3);
    assert.equal(binarySearch([1, 2, 3, 4, 5], 5), 4);
    assert.equal(binarySearch([1, 2, 3, 4, 5], 0), -1);
    assert.equal(binarySearch([1, 2, 3, 4, 5, 8], 6), -1);
    assert.equal(binarySearch([1, 2, 3, 4, 5], 100), -1);
  });
});
