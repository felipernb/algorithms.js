const mergeSort = require('../../..').Sorting.mergeSort;
const sortingTestsHelper = require('./sorting_tests_helper');

describe('Merge Sort', () => {
  it('should sort the given array', () => {
    sortingTestsHelper.testSort(mergeSort);
  });

  it('should sort the array with a specific comparison function', () => {
    sortingTestsHelper.testSortWithComparisonFn(mergeSort);
  });
});
