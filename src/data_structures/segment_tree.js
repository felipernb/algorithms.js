/**
* Segment Tree 
*
* Segment Tree helps to perform various function over a range efficiently in O(log n) time.
*
* In addition to functions that can be implemented by Fenwick Tree, Segment Tree can even perform functions such as
* minimum or maximum over a range, which cannot be answered by Fenwick Tree.
*
* More complicated functions can be done in logarithmic time by doing lazy modification, however the implementation
* depends on type of function and hence is not implemented here.
*
* Segment Tree is similiar to binary tree. The element value is stored in leaf nodes and value of function from range[l,r]
* is stored in internal nodes.
*
* The root node i.e. index 1 stores the value by performing function over entire range. Similarly other index stores value
* by performing function in range of its subtree.
*/

class SegmentTree {
  constructor(length) {
    this._size = length;
    this._elementsSum = new Array(length * 2);
    this._elementsMin = new Array(length * 2);
    this._elementsMax = new Array(length * 2);

    for (let i = 0; i < this._elementsSum.length; i++) {
      this._elementsSum[i] = 0;
      this._elementsMin[i] = 0;
      this._elementsMax[i] = 0;
    }
  }

  /**
  Updates the value at index with the given value
  */
  modify(index, value) {
    index = index + this._size;

    this._elementsSum[index] = value;
    this._elementsMin[index] = value;
    this._elementsMax[index] = value;
    for (let i = index; i > 1; i >>= 1) {
      this._elementsSum[i >> 1] = (this._elementsSum[i] + this._elementsSum[i ^ 1]);
      this._elementsMin[i >> 1] = Math.min(this._elementsMin[i], this._elementsMin[i ^ 1]);
      this._elementsMax[i >> 1] = Math.max(this._elementsMax[i], this._elementsMax[i ^ 1]);
    }
  }

  /**
  Return the sum of all elements in the range [from, to]
  */
  getSum(from, to) {
    let ans = 0;
    for (from += this._size, to += this._size + 1; from < to; from >>= 1, to >>= 1) {
      if (from % 2 == 1) ans += this._elementsSum[from++];
      if (to % 2 == 1) ans += this._elementsSum[--to];
    }
    return ans;
  }

  /**
  Return the minimum of all elements in the range [from, to]
  */
  getMin(from, to) {
    let ans = Number.MAX_SAFE_INTEGER;
    for (from += this._size, to += this._size + 1; from < to; from >>= 1, to >>= 1) {
      if (from % 2 == 1) ans = Math.min(ans, this._elementsMin[from++]);
      if (to % 2 == 1) ans = Math.min(ans, this._elementsMin[--to]);
    }
    return ans;
  }

  /**
  Return the maximum of all elements in the range [from, to]
  */
  getMax(from, to) {
    let ans = Number.MIN_SAFE_INTEGER;
    for (from += this._size, to += this._size + 1; from < to; from >>= 1, to >>= 1) {
      if (from % 2 == 1) ans = Math.max(ans, this._elementsMax[from++]);
      if (to % 2 == 1) ans = Math.max(ans, this._elementsMin[--to]);
    }
    return ans;
  }
}

module.exports = SegmentTree;