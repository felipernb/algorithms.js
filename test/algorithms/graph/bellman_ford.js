/**
 * Copyright (C) 2014 Tayllan Búrigo
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

var bellmanFord = require('../../../algorithms/graph/bellman_ford'),
    Graph = require('../../../data_structures/graph'),
    assert = require('assert');

describe('Bellman-Ford Algorithm', function () {
  it('should return the shortest paths to all nodes from a given origin',
  function () {
    var graph = new Graph(true);

    graph.addEdge('a', 'b', -1);
    graph.addEdge('a', 'c', 4);
    graph.addEdge('b', 'c', 3);
    graph.addEdge('b', 'd', 2);
    graph.addEdge('b', 'e', 2);
    graph.addEdge('d', 'b', 1);
    graph.addEdge('e', 'd', -3);
    graph.addEdge('d', 'c', 5);

    var shortestPaths = bellmanFord(graph, 'a');

    assert.equal(shortestPaths.distance.a, 0);
    assert.equal(shortestPaths.distance.d, -2);
    assert.equal(shortestPaths.distance.e, 1);

    // It'll cause a Negative-Weighted Cycle.
    graph.addEdge('c', 'a', -9);

    shortestPaths = bellmanFord(graph, 'a');

    // The 'distance' object is empty
    assert.equal(shortestPaths.distance.a, undefined);
  });
});
