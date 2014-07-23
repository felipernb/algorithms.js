'use strict';

var radixSort = require('../../../algorithms/sorting/radix_sort'),
    assert = require('assert');

var firstObject = {
  someProperty: 'The',
  key: 88541234132
};

var secondObject = {
  someProperty: 'winter',
  key: 90071992540992
};

var thirdObject = {
  someProperty: 'is',
  key: 0
};

var fourthObject = {
  someProperty: 'coming',
  key: 65234567,
  anotherProperty: '!'
};

var array = [
  thirdObject,
  fourthObject,
  firstObject,
  secondObject,
  secondObject,
  firstObject,
  firstObject,
  fourthObject
];

describe('Radix Sort', function () {
  it('should sort the given array', function () {
    array = radixSort(array);

    // Asserts that the array is truly sorted
    assert.deepEqual(array.indexOf(thirdObject), 0);
    assert.deepEqual(array.indexOf(fourthObject), 1);
    assert.deepEqual(array.indexOf(firstObject), 3);
    assert.deepEqual(array.indexOf(secondObject), 6);
    assert.deepEqual(array.indexOf({key: 99}), -1);
  });
});
