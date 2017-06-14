const quicksort = require('../../..').Sorting.quicksort;
const sortingTestsHelper = require('./sorting_tests_helper');

describe('QuickSort', () => {
  it('should sort the given array', () => {
    sortingTestsHelper.testSort(quicksort);
  });

  it('should sort the array with a specific comparison function', () => {
    sortingTestsHelper.testSortWithComparisonFn(quicksort);
  });
});
