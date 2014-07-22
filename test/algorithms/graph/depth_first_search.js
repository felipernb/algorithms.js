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

var depthFirstSearch = require('../../../algorithms/graph/depth_first_search'),
    Graph = require('../../../data_structures/graph'),
    assert = require('assert'),
    graph = new Graph(true);

graph.addEdge('one', 'three');
graph.addEdge('one', 'four');
graph.addEdge('four', 'two');
graph.addEdge('two', 'one');
graph.addEdge('three', 'one');
graph.addEdge('five', 'six');

describe('Depth First Search Algorithm', function () {
  it('should visit only the nodes reachable from the start node (inclusive)',
    function () {
      var finishingTimes = depthFirstSearch.dfsAdjacencyList(graph, 'one');

      assert.equal(finishingTimes.five, undefined);
      assert.equal(finishingTimes.six, undefined);

      assert.equal(finishingTimes.one, 3);
      assert.equal(finishingTimes.two, 1);
      assert.equal(finishingTimes.three, 0);
      assert.equal(finishingTimes.four, 2);

      // Finishing times for different calls shouldn't interfere.
      finishingTimes = depthFirstSearch.dfsAdjacencyList(graph, 'five');
      assert.equal(finishingTimes.six, 0);
      assert.equal(finishingTimes.five, 1);
    }
  );

  it('should visit all the nodes in the graph',
    function () {
      var finishingTimes = depthFirstSearch.dfsAdjacencyListStart(graph);

      assert.equal(finishingTimes.one, 3);
      assert.equal(finishingTimes.two, 1);
      assert.equal(finishingTimes.three, 0);
      assert.equal(finishingTimes.four, 2);
      assert.equal(finishingTimes.five, 5);
      assert.equal(finishingTimes.six, 4);
    }
  );
});

