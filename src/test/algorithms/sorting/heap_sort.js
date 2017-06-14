const heapSort = require('../../..').Sorting.heapSort;
const sortingTestsHelper = require('./sorting_tests_helper');

describe('Heap Sort', () => {
  it('should sort the given array', () => {
    sortingTestsHelper.testSort(heapSort);
  });

  it('should sort the array with a specific comparison function', () => {
    sortingTestsHelper.testSortWithComparisonFn(heapSort);
  });
});
