'use strict';

const quicksort = require('../../..').Sorting.quicksort;
const sortingTestsHelper = require('./sorting_tests_helper');

describe('QuickSort', function() {
  it('should sort the given array', function() {
    sortingTestsHelper.testSort(quicksort);
  });

  it('should sort the array with a specific comparison function', function() {
    sortingTestsHelper.testSortWithComparisonFn(quicksort);
  });
});
