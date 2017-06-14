'use strict';

const insertionSort = require('../../..').Sorting.insertionSort;
const sortingTestsHelper = require('./sorting_tests_helper');

describe('Insertion Sort', () => {
  it('should sort the given array', () => {
    sortingTestsHelper.testSort(insertionSort);
  });

  it('should sort the array with a specific comparison function', () => {
    sortingTestsHelper.testSortWithComparisonFn(insertionSort);
  });
});
