const shortBubbleSort = require('../../..').Sorting.shortBubbleSort;
const sortingTestsHelper = require('./sorting_tests_helper');

describe('Short Bubble Sort', () => {
  it('should sort the given array', () => {
    sortingTestsHelper.testSort(shortBubbleSort);
  });

  it('should sort the array with a specific comparison function', () => {
    sortingTestsHelper.testSortWithComparisonFn(shortBubbleSort);
  });
});
