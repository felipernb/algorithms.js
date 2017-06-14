'use strict';

const HashSet = require('../..').DataStructures.Set;
const assert = require('assert');

describe('HashSet', () => {
  it('should start empty', () => {
    const s = new HashSet();
    assert.equal(s.size, 0);
  });

  it('should add all initial arguments', () => {
    const s = new HashSet(1, 2, 3);
    assert.equal(s.size, 3);
    assert(s.contains(1));
    assert(s.contains(2));
    assert(s.contains(3));
  });

  it('should add all arguments', () => {
    const s = new HashSet(1, 2, 3);
    assert.equal(s.size, 3);
    s.add(4, 5, 6);
    assert.equal(s.size, 6);
    assert(s.contains(1));
    assert(s.contains(2));
    assert(s.contains(3));
    assert(s.contains(4));
    assert(s.contains(5));
    assert(s.contains(6));
  });

  it('should remove all arguments', () => {
    const s = new HashSet(1, 2, 3);
    assert.equal(s.size, 3);
    s.remove(1, 3);
    assert.equal(s.size, 1);
    assert(!s.contains(1));
    assert(!s.contains(3));
    assert(s.contains(2));
  });

  it('should do nothing when trying to remove an element that doesn\'t exist',
    () => {
      const s = new HashSet(1, 2, 3);
      assert.equal(s.size, 3);
      s.remove(4);
      assert.equal(s.size, 3);
      assert(s.contains(1));
      assert(s.contains(2));
      assert(s.contains(3));
    });

  it('should only contain its elements', () => {
    const s = new HashSet(1, 2, 3);
    assert(s.contains(1));
    assert(!s.contains(4));
  });

  it('should perform a function to all elements with forEach', () => {
    const s = new HashSet();
    s.add(1, 2, 3);

    let total = 0;
    s.forEach(elem => {
      total += elem;
    });

    assert.equal(total, 6);
  });
});

