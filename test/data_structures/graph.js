/**
 * Copyright (C) 2014 Felipe Ribeiro
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"], to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
'use strict';

var Graph = require('../../data_structures/graph'),
    assert = require('assert');

describe('Graph - Adjacency list', function () {
  it('should be directed by default', function () {
    var g = new Graph();
    assert(g.directed);

    g = new Graph(false);
    assert(!g.directed);

    g = new Graph(true);
    assert(g.directed);
  });

  it('should default weight 1 for edges', function () {
    var g = new Graph();
    g.addVertex('a');
    g.addVertex('b');
    g.addEdge('a', 'b');
    assert.strictEqual(g.edge('a', 'b'), 1);
  });

  it('should create the vertex if an edge is inserted and vertex doesnt exist',
    function () {
      var g = new Graph();
      g.addEdge('a', 'b');
      assert.equal(g.vertices.length, 2);
      assert.notEqual(g.vertices.indexOf('a'), -1);
      assert.notEqual(g.vertices.indexOf('b'), -1);
    });

  it('should sum multiple edges between the same vertices', function () {
    var g = new Graph();
    g.addEdge('a', 'b', 10);
    assert.equal(g.edge('a', 'b'), 10);
    g.addEdge('a', 'b', 4);
    assert.equal(g.edge('a', 'b'), 14);
  });

  it('should have edges in both directions if undirected', function () {
    var g = new Graph(false);
    g.addVertex('a');
    g.addVertex('b');
    g.addVertex('c');
    g.addVertex('d');
    g.addEdge('a', 'b', 10);
    g.addEdge('a', 'c', 5);
    g.addEdge('c', 'd', 2);

    assert.equal(g.edge('a', 'b'), 10);
    assert.equal(g.edge('b', 'a'), 10);
    assert.equal(g.edge('a', 'c'), 5);
    assert.equal(g.edge('c', 'a'), 5);
    assert.equal(g.edge('c', 'd'), 2);
    assert.equal(g.edge('d', 'c'), 2);

    assert.equal(g.edge('a', 'd'), undefined);
    g.addEdge('b', 'a', 2);
    assert.equal(g.edge('a', 'b'), 12);
    assert.equal(g.edge('b', 'a'), 12);
  });

  it('should respect direction of the edges in directed graphs', function () {
    var g = new Graph();
    g.addVertex('a');
    g.addVertex('b');
    g.addVertex('c');
    g.addVertex('d');
    g.addEdge('a', 'b', 10);
    g.addEdge('a', 'c', 5);
    g.addEdge('c', 'd', 2);

    assert.equal(g.edge('a', 'b'), 10);
    assert.equal(g.edge('b', 'a'), undefined);
    assert.equal(g.edge('a', 'c'), 5);
    assert.equal(g.edge('c', 'a'), undefined);
    assert.equal(g.edge('c', 'd'), 2);
    assert.equal(g.edge('d', 'c'), undefined);

    assert.equal(g.edge('a', 'd'), undefined);
    g.addEdge('b', 'a', 2);
    assert.equal(g.edge('a', 'b'), 10);
    assert.equal(g.edge('b', 'a'), 2);
  });

  it('should have a list of vertices', function () {
    var g = new Graph();
    assert.deepEqual(g.vertices, []);
    g.addVertex('a');
    g.addVertex('b');
    g.addVertex('c');
    assert.deepEqual(g.vertices, ['a', 'b', 'c']);
  });

  it('should return a list of neighbors of a vertex', function () {
    var g = new Graph();
    g.addVertex('a');
    g.addVertex('b');
    g.addVertex('c');
    g.addVertex('d');
    g.addEdge('a', 'b', 10);
    g.addEdge('a', 'c', 5);
    g.addEdge('c', 'd', 2);

    assert.deepEqual(g.neighbors('a'), ['b', 'c']);
    assert.deepEqual(g.neighbors('b'), []);
    assert.deepEqual(g.neighbors('c'), ['d']);
  });

  it('should return the weight of the edge', function () {
    var g = new Graph();
    g.addVertex('a');
    g.addVertex('b');
    g.addVertex('c');
    g.addVertex('d');
    g.addEdge('a', 'b', 10);
    g.addEdge('a', 'c', 5);
    g.addEdge('c', 'd', 2);

    assert.equal(g.edge('a', 'b'), 10);
    assert.equal(g.edge('a', 'c'), 5);
    assert.equal(g.edge('c', 'd'), 2);
  });
});
