'use strict';

var shortBubbleSort = require('../../..').Sorting.shortBubbleSort,
    sortingTestsHelper = require('./sorting_tests_helper');

describe('Short Bubble Sort', function () {
  it('should sort the given array', function () {
    sortingTestsHelper.testSort(shortBubbleSort);
  });

  it('should sort the array with a specific comparison function', function () {
    sortingTestsHelper.testSortWithComparisonFn(shortBubbleSort);
  });
});
