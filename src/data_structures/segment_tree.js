/**
* Segment Tree
*
* Segment Tree helps to perform various function over a range efficiently
* in O(log n) time.
*
* In addition to functions that can be implemented by Fenwick Tree, 
* Segment Tree can even perform functions such as minimum or maximum 
* over a range, which cannot be answered by Fenwick Tree.
*
* More complicated functions can be done in logarithmic time by doing 
* lazy modification, however the implementation depends on type of function
* and hence is not implemented here.
*
* Segment Tree is similiar to binary tree. The element value is stored in
* leaf nodes and value of function from range[l,r] is stored in internal nodes.
*
* The root node i.e. index 1 stores the value by performing function over
* entire range. Similarly other index stores value by performing function 
* in range of its subtree.
* /

class SumSegmentTree {
  // Creates an empty segment tree with capacity = length
  constructor(length) {
      this._baseValue = 0;
      this._size = length;
      this._tree = new Array(length*2);
      for (let i = 0; i < this._tree.length; i++) {
          this._tree[i] = 0;
      }
  }
  
  // Commutative binary function to be performed over values
  func(value1, value2) {
      return (value1 + value2);
  }
  
  // Changes the element at given index to be equal to given value
  modify(index, value) {
      let idx = index + this._size;
      this._tree[idx] = value;
      for (let i = idx; i > 1; i >>= 1) {
          this._tree[ i >> 1 ] = this.func(this._tree[i], this._tree[i^1]);
      }
  }
  
  // Returns the value by performing the binary function in range = [from,to]
  get(from, to) {
      let ans = this._baseValue;
      let l = from + this._size;
      let r = to + this._size + 1;
      for (; l < r; l >>= 1, r >>= 1) {
          if (l&1) ans = this.func(ans, this._tree[l++]);
          if (r&1 ) ans = this.func(ans, this._tree[--r]);
      }
      return ans;
  }
}

class MinSegmentTree extends SumSegmentTree {
  constructor(length) {
      super(length);
      this._baseValue = Number.MAX_SAFE_INTEGER;
  }

  func(value1, value2) {
      return Math.min(value1, value2);
  }
}

class MaxSegmentTree extends SumSegmentTree {
  constructor(length) {
      super(length);
      this._baseValue = Number.MIN_SAFE_INTEGER;
  }

  func(value1, value2) {
      return Math.max(value1, value2);
  }
}

module.exports = {
  SumSegmentTree,
  MinSegmentTree,
  MaxSegmentTree
};
