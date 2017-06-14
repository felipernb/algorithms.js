'use strict';

const bubbleSort = require('../../..').Sorting.bubbleSort;
const sortingTestsHelper = require('./sorting_tests_helper');

describe('Bubble Sort', () => {
  it('should sort the given array', () => {
    sortingTestsHelper.testSort(bubbleSort);
  });

  it('should sort the array with a specific comparison function', () => {
    sortingTestsHelper.testSortWithComparisonFn(bubbleSort);
  });
});
