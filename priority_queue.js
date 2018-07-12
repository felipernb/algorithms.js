class MinPriorityQueue {
  constructor() {
    this._indexLookup = {};
    this._elementHeap = [];
    this._priorityHeap = [];
    this._size = 0;
  }

  comparison(value1, value2) {
    return value1 < value2;
  }

  size() {
    return this._size;
  }

  empty() {
    return (this.size() === 0);
  }

  top() {
    if (!this.empty())
      return this._elementHeap[0];
  }

  swap(idx1, idx2) {
    let _tempElement = this._elementHeap[idx1];
    let _tempPriority = this._priorityHeap[idx1];

    this._elementHeap[idx1] = this._elementHeap[idx2];
    this._priorityHeap[idx1] = this._priorityHeap[idx2];

    this._elementHeap[idx2] = _tempElement;
    this._priorityHeap[idx2] = _tempPriority;

    this._indexLookup[this._elementHeap[idx1]] = idx1;
    this._indexLookup[this._elementHeap[idx2]] = idx2;
  }

  fixBottomHeap(idx) {
    let _leftIndex = (idx << 1) + 1;
    let _rightIndex = (idx << 1) + 2;

    let _changeIndex = idx;
    if (_leftIndex < this._size && this.comparison(this._priorityHeap[_leftIndex], this._priorityHeap[idx])) {
      _changeIndex = _leftIndex;
    }
    if (_rightIndex < this._size && this.comparison(this._priorityHeap[_rightIndex], this._priorityHeap[idx])) {
      _changeIndex = _rightIndex;
    }

    if (_changeIndex != idx) {
      this.swap(idx, _changeIndex);
      this.fixBottomHeap(_changeIndex);
    }
  }

  fixTopHeap(idx) {
    if (idx === 0) return;

    let _parentIdx = (idx - 1) >> 1;

    if (this.comparison(this._priorityHeap[idx], this._priorityHeap[_parentIdx])) {
      this.swap(idx, _parentIdx);
      this.fixTopHeap(_parentIdx);
    }
  }

  getPriority(element) {
    if (element in this._indexLookup) {
      return this._priorityHeap[this._indexLookup[element]];
    }
  }

  push(element, priority) {
    this._indexLookup[element] = this._size;
    this._priorityHeap.push(priority);
    this._elementHeap.push(element);

    this.fixTopHeap(this._size);
    this._size++;
  }

  pop() {
    if (this.empty()) return;
    let _minPriorityElement = this._elementHeap[0];
    this.swap(0, this._size - 1);
    this._elementHeap.splice(-1, 1);
    this._priorityHeap.splice(-1, 1);
    this._size--;

    this.fixBottomHeap(0);
    return _minPriorityElement;
  }

  changePriority(item, priority) {
    if (item in this._indexLookup === false) return;

    let _index = this._indexLookup[item];
    if (this._priorityHeap[_index] < priority) {
      this._priorityHeap[_index] = priority;
      this.fixBottomHeap(_index);
    }
    else if (this._priorityHeap[_index] > priority) {
      this._priorityHeap[_index] = priority;
      this.fixTopHeap(_index);
    }
  }
}

class MaxPriorityQueue extends MinPriorityQueue {
  comparison(value1, value2) {
    return value1 > value2;
  }

  changePriority(item, priority) {
    if (item in this._indexLookup === false) return;

    let _index = this._indexLookup[item];
    if (this._priorityHeap[_index] < priority) {
      this._priorityHeap[_index] = priority;
      this.fixTopHeap(_index);
    }
    else if (this._priorityHeap[_index] > priority) {
      this._priorityHeap[_index] = priority;
      this.fixBottomHeap(_index);
    }
  }
}

module.exports = PriorityQueue;
