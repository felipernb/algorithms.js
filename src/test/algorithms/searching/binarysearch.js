const binarySearch = require('../../..').Search.binarySearch;
const lowerBound = require('../../..').Search.lowerBound;
const assert = require('assert');

describe('Binary Search', () => {
  it('finds elements in the sorted array', () => {
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

describe('Lower Bound', () => {
  it('finds the first element greater than search key', () => {
    let arr = [1, 2, 3, 4, 5];

    assert.equal(lowerBound(arr, 0), 0);
    assert.equal(lowerBound(arr, 1), 1);
    assert.equal(lowerBound(arr, 2), 2);
    assert.equal(lowerBound(arr, 3), 3);
    assert.equal(lowerBound(arr, 4), 4);
    assert.equal(lowerBound(arr, 5), 5);
    assert.equal(lowerBound(arr, 6), 5);
  });

  it('ignores duplicate values', () => {
    let duplicates = [1, 1, 2, 2, 3, 3];

    assert.equal(lowerBound(duplicates, 1), 2);
    assert.equal(lowerBound(duplicates, 2), 4);
    assert.equal(lowerBound(duplicates, 3), 6);
  });
});

describe('White-box testing with MCC coverage', () => {
  it('finds first element in the sorted array', () => {
    assert.equal(binarySearch([], 23), -1);
    assert.equal(binarySearch([1], 1), 0);
    assert.equal(binarySearch([-5, 3, 4, 6, 7], 4), 2);
    assert.equal(binarySearch([0, 2, 9, 12, 23], 23), 4);
    assert.equal(binarySearch([2, 5, 6, 7, 9], 2), 0);
  });
});

describe('White-box testing with All-DU Path coverage', () => {
  it('finds first element in the sorted array', () => {
    assert.equal(binarySearch([1], 2), -1);
    assert.equal(binarySearch([-5, 3, 10, 6, 7, 12, 15], 6), 3);
    assert.equal(binarySearch([-10, 2, 5, 12, 23], 23), 4);
    assert.equal(binarySearch([1, 10, 6], 10), 1);
    assert.equal(binarySearch([-1, 2, 5, 10, 15], 2), 1);
  });
});
