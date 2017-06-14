'use strict';

const insertionSort = require('../../..').Sorting.insertionSort;
const sortingTestsHelper = require('./sorting_tests_helper');

describe('Insertion Sort', function() {
  it('should sort the given array', function() {
    sortingTestsHelper.testSort(insertionSort);
  });

  it('should sort the array with a specific comparison function', function() {
    sortingTestsHelper.testSortWithComparisonFn(insertionSort);
  });
});
