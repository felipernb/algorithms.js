'use strict';

const selectionSort = require('../../..').Sorting.selectionSort;
const sortingTestsHelper = require('./sorting_tests_helper');

describe('Selection Sort', () => {
  it('should sort the given array', () => {
    sortingTestsHelper.testSort(selectionSort);
  });

  it('should sort the array with a specific comparison function', () => {
    sortingTestsHelper.testSortWithComparisonFn(selectionSort);
  });
});
