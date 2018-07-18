const segmentTree = require('../..').DataStructures.SegmentTree;
const assert = require('assert');

describe('SumSegmentTree', () => {
  it('allows modification of value at any index', () => {
    const tree = new segmentTree.SumSegmentTree(10);
    tree.modify(0, 5);
    tree.modify(1, 12);
    tree.modify(2, 7);
    tree.modify(3, -100);
    tree.modify(4, 3);
    tree.modify(5, 9);
    tree.modify(6, 100);
    tree.modify(7, 0);
    tree.modify(8, -25);
    tree.modify(9, 40);

    assert.equal(tree.get(0, 0), 5);
    assert.equal(tree.get(5, 5), 9);
    assert.equal(tree.get(9, 9), 40);
    assert.equal(tree.get(4, 4), 3);
    assert.equal(tree.get(3, 3), -100);
    assert.equal(tree.get(1, 1), 12);
    assert.equal(tree.get(7, 7), 0);
    assert.equal(tree.get(8, 8), -25);
  });

  it('allows range queries', () => {
    const tree = new segmentTree.SumSegmentTree(10);
    tree.modify(0, 5);
    tree.modify(1, 12);
    tree.modify(2, 7);
    tree.modify(3, -100);
    tree.modify(4, 3);
    tree.modify(5, 9);
    tree.modify(6, 100);
    tree.modify(7, 0);
    tree.modify(8, -25);
    tree.modify(9, 40);

    assert.equal(tree.get(0, 5), 5 + 12 + 7 - 100 + 3 + 9);
    assert.equal(tree.get(5, 5), 9);
    assert.equal(tree.get(7, 9), 0 - 25 + 40);
    assert.equal(tree.get(4, 6), 3 + 9 + 100);
    assert.equal(tree.get(1, 2), 12 + 7);
    assert.equal(tree.get(5, 8), 9 + 100 + 0 - 25);
    assert.equal(tree.get(0, 9), 5 + 12 + 7 - 100 + 3 + 9 + 100 + 0 - 25 + 40);
    assert.equal(tree.get(8, 8), -25);
  });
});

describe('MinSegmentTree', () => {
  it('allows modification of value at any index', () => {
    const tree = new segmentTree.MinSegmentTree(10);
    tree.modify(0, 5);
    tree.modify(1, 12);
    tree.modify(2, 7);
    tree.modify(3, -100);
    tree.modify(4, 3);
    tree.modify(5, 9);
    tree.modify(6, 100);
    tree.modify(7, 0);
    tree.modify(8, -25);
    tree.modify(9, 40);

    assert.equal(tree.get(0, 0), 5);
    assert.equal(tree.get(5, 5), 9);
    assert.equal(tree.get(9, 9), 40);
    assert.equal(tree.get(4, 4), 3);
    assert.equal(tree.get(3, 3), -100);
    assert.equal(tree.get(1, 1), 12);
    assert.equal(tree.get(7, 7), 0);
    assert.equal(tree.get(8, 8), -25);
  });

  it('allows range queries', () => {
    const tree = new segmentTree.MinSegmentTree(10);
    tree.modify(0, 5);
    tree.modify(1, 12);
    tree.modify(2, 7);
    tree.modify(3, -100);
    tree.modify(4, 3);
    tree.modify(5, 9);
    tree.modify(6, 100);
    tree.modify(7, 0);
    tree.modify(8, -25);
    tree.modify(9, 40);

    assert.equal(tree.get(0, 5), -100);
    assert.equal(tree.get(5, 5), 9);
    assert.equal(tree.get(7, 9), -25);
    assert.equal(tree.get(4, 6), 3);
    assert.equal(tree.get(1, 2), 7);
    assert.equal(tree.get(5, 8), -25);
    assert.equal(tree.get(0, 9), -100);
    assert.equal(tree.get(6, 6), 100);
  });
});

describe('MaxSegmentTree', () => {
  it('allows modification of value at any index', () => {
    const tree = new segmentTree.MaxSegmentTree(10);
    tree.modify(0, 5);
    tree.modify(1, 12);
    tree.modify(2, 7);
    tree.modify(3, -100);
    tree.modify(4, 3);
    tree.modify(5, 9);
    tree.modify(6, 100);
    tree.modify(7, 0);
    tree.modify(8, -25);
    tree.modify(9, 40);

    assert.equal(tree.get(0, 0), 5);
    assert.equal(tree.get(5, 5), 9);
    assert.equal(tree.get(9, 9), 40);
    assert.equal(tree.get(4, 4), 3);
    assert.equal(tree.get(3, 3), -100);
    assert.equal(tree.get(1, 1), 12);
    assert.equal(tree.get(7, 7), 0);
    assert.equal(tree.get(8, 8), -25);
  });

  it('allows range queries', () => {
    const tree = new segmentTree.MaxSegmentTree(10);
    tree.modify(0, 5);
    tree.modify(1, 12);
    tree.modify(2, 7);
    tree.modify(3, -100);
    tree.modify(4, 3);
    tree.modify(5, 9);
    tree.modify(6, 100);
    tree.modify(7, 0);
    tree.modify(8, -25);
    tree.modify(9, 40);

    assert.equal(tree.get(0, 5), 12);
    assert.equal(tree.get(5, 5), 9);
    assert.equal(tree.get(7, 9), 40);
    assert.equal(tree.get(4, 6), 100);
    assert.equal(tree.get(1, 2), 12);
    assert.equal(tree.get(5, 8), 100);
    assert.equal(tree.get(0, 9), 100);
    assert.equal(tree.get(3, 3), -100);
  });
});

