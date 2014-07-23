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
      var enter = [], leave = [];
      var numEdgeTails = 0, numEdgeHeads = 0;

      var dfsCallbacks = {
        enterVertex: [].push.bind(enter),
        leaveVertex: [].push.bind(leave),
        beforeTraversal: function () {
          numEdgeHeads += 1;
        },
        afterTraversal: function () {
          numEdgeTails += 1;
        }
      };

      depthFirstSearch(graph, 'one', dfsCallbacks);
      assert.deepEqual(enter, ['one', 'three', 'four', 'two']);
      assert.deepEqual(leave, ['three', 'two', 'four', 'one']);
      assert.equal(numEdgeTails, numEdgeHeads);
      assert.equal(numEdgeHeads, 3);

      enter.splice(0, 4);
      leave.splice(0, 4);
      depthFirstSearch(graph, 'five', dfsCallbacks);
      assert.deepEqual(enter, ['five', 'six']);
      assert.deepEqual(leave, ['six', 'five']);
      assert.equal(numEdgeTails, numEdgeHeads);
      assert.equal(numEdgeHeads, 4);
    }
  );

  it('should allow user-defined allowTraversal rules', function () {
    var seen = new Graph(graph.directed);
    graph.vertices.forEach(seen.addVertex.bind(seen));
    var path = ['one'];

    // Edge-centric DFS.
    depthFirstSearch(graph, path[0], {
      allowTraversal: function (vertex, neighbor) {
        return !seen.edge(vertex, neighbor);
      },
      beforeTraversal: function (vertex, neighbor) {
        seen.addEdge(vertex, neighbor);
        path.push(neighbor);
      }
    });

    assert.deepEqual(path, ['one', 'three', 'one', 'four', 'two', 'one']);
  });
});
