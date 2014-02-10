var binarySearch = require('../../algorithms/array/binarysearch'),
    assert = require('assert');

describe('Binary Search', function() {
  it('should find elements in the sorted array', function() {
    assert(binarySearch([1,2,3,4,5], 3), "3 is in the array");
    assert(binarySearch([1,2,3,4,5], 1), "1 is in the array");
    assert(binarySearch([1,2,3,4,5], 2), "2 is in the array");
    assert(binarySearch([1,2,3,4,5], 4), "4 is in the array");
    assert(binarySearch([1,2,3,4,5], 5), "5 is in the array");
    assert(!binarySearch([1,2,3,4,5], 0), "0 is NOT in the array");
    assert(!binarySearch([1,2,3,4,5,8], 6), "6 is NOT in the array");
    assert(!binarySearch([1,2,3,4,5], 100), "100 is NOT in the array");
  });
});


