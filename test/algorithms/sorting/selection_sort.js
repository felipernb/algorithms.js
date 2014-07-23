'use strict';

var selectionSort = require('../../../algorithms/sorting/selection_sort'),
    assert = require('assert');

describe('Selection Sort', function () {
  it('should sort the given array', function () {
    assert.deepEqual(selectionSort([]), []);
    assert.deepEqual(selectionSort([1]), [1]);
    assert.deepEqual(selectionSort([2, 1]), [1, 2]);
    assert.deepEqual(selectionSort([3, 1, 2]), [1, 2, 3]);
    assert.deepEqual(selectionSort([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(selectionSort([6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(selectionSort([1, 295, 3, 6, 8, 10, 10, 20, 0, 5]),
      [0, 1, 3, 5, 6, 8, 10, 10, 20, 295]);
    assert.deepEqual(selectionSort(['a', 'A', 'b', 'Z']), ['A', 'Z', 'a', 'b']);
    assert.deepEqual(selectionSort(['hi', 'everybody']), ['everybody', 'hi']);

  });

});
