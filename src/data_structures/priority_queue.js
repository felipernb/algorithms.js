/*
Minimum Priority Queue implementation using heap.

elementHeap stores all element,
priorityHeap stores priority for given element,
priority[i] stores priority of element[i].

indexLookup stores index of element, so when priority is changed,
the top or bottom heap can be fixed from that position itself.
*/

class PriorityQueue {
  constructor(initialItems) {
    this._indexLookup = {};
    this._elementHeap = [];
    this._priorityHeap = [];
    this._size = 0;

    initialItems = initialItems || {};
    Object.keys(initialItems).forEach(item => {
      this.insert(item, initialItems[item]);
    });
  }

  // comparator function
  comparison(value1, value2) {
    return value1 < value2;
  }

  // Returns true if heap is empty
  isEmpty() {
    return (this._size === 0);
  }

  // swaps element with their priorities and their indexLookup values
  _swap(idx1, idx2) {
    let _tempElement = this._elementHeap[idx1];
    let _tempPriority = this._priorityHeap[idx1];

    this._elementHeap[idx1] = this._elementHeap[idx2];
    this._priorityHeap[idx1] = this._priorityHeap[idx2];

    this._elementHeap[idx2] = _tempElement;
    this._priorityHeap[idx2] = _tempPriority;

    this._indexLookup[this._elementHeap[idx1]] = idx1;
    this._indexLookup[this._elementHeap[idx2]] = idx2;
  }

  /*
  To fix bootom heap from position: idx

  Finds if left or right child is smaller, if true, swaps smallest element
  with parent and then calls fixBottomHeap for index of smallest element
  */
  _fixBottomHeap(idx) {
    let _leftIndex = (idx << 1) + 1;
    let _rightIndex = (idx << 1) + 2;

    let _changeIndex = idx;
    if (_leftIndex < this._size &&
      this.comparison(
        this._priorityHeap[_leftIndex], this._priorityHeap[_changeIndex])) {
      _changeIndex = _leftIndex;
    }
    if (_rightIndex < this._size &&
      this.comparison(
        this._priorityHeap[_rightIndex], this._priorityHeap[_changeIndex])) {
      _changeIndex = _rightIndex;
    }

    if (_changeIndex != idx) {
      this._swap(idx, _changeIndex);
      this._fixBottomHeap(_changeIndex);
    }
  }

  /*
  Fix the top heap from position: idx

  Finds if the element at given index is smaller than parent, if true
  swaps it and call fixTopHeap for its parent
  */
  _fixTopHeap(idx) {
    if (idx === 0) return;

    let _parentIdx = (idx - 1) >> 1;

    if (this.comparison(
      this._priorityHeap[idx], this._priorityHeap[_parentIdx])) {
      this._swap(idx, _parentIdx);
      this._fixTopHeap(_parentIdx);
    }
  }

  /*
  Returns priority of element
  */
  priority(element) {
    if (element in this._indexLookup) {
      return this._priorityHeap[this._indexLookup[element]];
    }
  }

  /*
  Insert item with its priority in heap
  */
  insert(item, priority) {
    if (item == null) return;
    if (item in this._indexLookup) {
      return this.changePriority(item, priority);
    }

    this._indexLookup[item] = this._size;
    this._priorityHeap.push(priority);
    this._elementHeap.push(item);

    this._fixTopHeap(this._size);
    this._size++;
  }

  /*
  Returns item with least priority from heap and removes it from heap
  */
  extract(withPriority) {
    if (this.isEmpty()) return;
    let _minPriorityItem = this._elementHeap[0];
    let _minPriority = this._priorityHeap[0];
    this._swap(0, this._size - 1);
    this._elementHeap.splice(-1, 1);
    this._priorityHeap.splice(-1, 1);
    this._indexLookup[_minPriorityItem] = null;
    this._size--;

    this._fixBottomHeap(0);
    return withPriority
    ? _minPriorityItem && {item: _minPriorityItem, priority: _minPriority}
    : _minPriorityItem;
  }

  /*
  To change priority of element already in heap
  */
  changePriority(item, priority) {
    if (item in this._indexLookup === false) return;

    let _index = this._indexLookup[item];
    if (this._priorityHeap[_index] < priority) {
      this._priorityHeap[_index] = priority;
      this._fixBottomHeap(_index);
    } else if (this._priorityHeap[_index] > priority) {
      this._priorityHeap[_index] = priority;
      this._fixTopHeap(_index);
    }
  }
}

module.exports = PriorityQueue;
