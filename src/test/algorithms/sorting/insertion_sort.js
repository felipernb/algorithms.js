const insertionSort = require('../../..').Sorting.insertionSort;
const sortingTestsHelper = require('./sorting_tests_helper');

describe('Insertion Sort', () => {
  it('sorts the given array', () => {
    sortingTestsHelper.testSort(insertionSort);
  });

  it('sorts the array with a specific comparison function', () => {
    sortingTestsHelper.testSortWithComparisonFn(insertionSort);
  });
});
