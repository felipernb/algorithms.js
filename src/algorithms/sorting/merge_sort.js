const Comparator = require('../../util/comparator');

const merge = (wp, arr, left, middle, right, comparator) => {
  let i = left;
  let j = middle + 1;
  let k = i;

  while (i <= middle && j <= right) {
    if (comparator.lessThan(arr[i], arr[j])) {
        wp[k++] = arr[i++];
    } else {
        wp[k++] = arr[j++];
    }
  }

  while (i <= middle) {
    wp[k++] = arr[i++];
  }
  while (j <= right) {
    wp[k++] = arr[j++];
  }
  while (left <= right) {
    arr[left] = wp[left++];
  }
};

/**
 * Merge sort
 * O(n.lgn)
 */
const mergeSortInit = (a, compareFn) => {
  const comparator = new Comparator(compareFn);
  (function mergeSort(wp, arr, left, right) {
    if (right - left >= 1) {
      const middle = Math.floor((left+right)/2);
      mergeSort(wp, arr, left, middle);
      mergeSort(wp, arr, middle + 1, right);
      merge(wp, arr, left, middle, right, comparator);
    }
  })([], a, 0, a.length - 1);
  return a;
};

module.exports = mergeSortInit;
