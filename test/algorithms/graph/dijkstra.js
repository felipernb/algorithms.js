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

var dijkstra = require('../../../algorithms/graph/dijkstra'),
    Graph = require('../../../data_structures/graph'),
    assert = require('assert');

describe('Dijkstra Algorithm', function () {
  it('should return the shortest paths to all nodes from a given origin',
    function () {
      var g = new Graph();
      g.addEdge('a', 'b', 5);
      g.addEdge('a', 'c', 10);
      g.addEdge('b', 'c', 2);
      g.addEdge('b', 'd', 20);
      g.addEdge('c', 'd', 1);
      g.addEdge('d', 'a', 10);

      var shortestPath = dijkstra(g, 'a');
      assert.equal(shortestPath.distance.b, 5);
      assert.equal(shortestPath.previous.b, 'a');

      assert.equal(shortestPath.distance.c, 7);
      assert.equal(shortestPath.previous.c, 'b');

      assert.equal(shortestPath.distance.d, 8);
      assert.equal(shortestPath.previous.d, 'c');
    });
});
