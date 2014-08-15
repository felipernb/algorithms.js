'use strict';

var shellSort = require('../../../algorithms/sorting/shell_sort'),
	assert = require('assert');

describe('shellSort', function () {
	it('should sort the given array', function () {
		assert.deepEqual(shellSort([]), []);
		assert.deepEqual(shellSort([1]), [1]);
		assert.deepEqual(shellSort([2, 1]), [1, 2]);
		assert.deepEqual(shellSort([3, 1, 2]), [1, 2, 3]);
		assert.deepEqual(shellSort([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
		assert.deepEqual(shellSort([6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6]);
		assert.deepEqual(shellSort([1, 295, 3, 6, 8, 10, 10, 20, 0, 5]),
		  [0, 1, 3, 5, 6, 8, 10, 10, 20, 295]);
	});

	it('should sort the array with a specific comparison function', function () {
		var compare = function (a, b) {
			if (a.length === b.length) return 0;
			return a.length < b.length ? -1 : 1;
		};
		assert.deepEqual(shellSort([], compare), []);
		assert.deepEqual(shellSort(['apple'], compare), ['apple']);
		assert.deepEqual(shellSort(['apple', 'banana'], compare),
		  ['apple', 'banana']);
		assert.deepEqual(shellSort(['apple', 'banana', 'car'], compare),
		  ['car', 'apple', 'banana']);
		assert.deepEqual(shellSort(['apple', 'banana', 'car', 'z'], compare),
		  ['z', 'car', 'apple', 'banana']);

		var reverseSort = function (a, b) {
			if (a == b) return 0;
			return a < b ? 1 : -1;
		};
		assert.deepEqual(shellSort([1, 295, 3, 6, 8, 10, 10, 20, 0, 5],
			reverseSort),
		  [295, 20, 10, 10, 8, 6, 5, 3, 1, 0]);
	});
});
