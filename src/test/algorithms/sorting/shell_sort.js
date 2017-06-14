'use strict';

const shellSort = require('../../..').Sorting.shellSort;
const sortingTestsHelper = require('./sorting_tests_helper.js');

describe('ShellSort', () => {
  it('should sort the given array', () => {
    sortingTestsHelper.testSort(shellSort);
  });

  it('should sort the array with a specific comparison function', () => {
    sortingTestsHelper.testSortWithComparisonFn(shellSort);
  });
});

