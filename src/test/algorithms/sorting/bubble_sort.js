const bubbleSort = require('../../..').Sorting.bubbleSort;
const sortingTestsHelper = require('./sorting_tests_helper');

describe('Bubble Sort', () => {
  it('sorts the given array', () => {
    sortingTestsHelper.testSort(bubbleSort);
  });

  it('sorts the array with a specific comparison function', () => {
    sortingTestsHelper.testSortWithComparisonFn(bubbleSort);
  });
});
