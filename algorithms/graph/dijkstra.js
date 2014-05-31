/**
 * Copyright (C) 2014 Felipe Ribeiro
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
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

var PriorityQueue = require('../../data_structures/priority_queue');

/**
 * Calculates the shortest paths in a graph to every node from the node s
 * with Dijkstra's algorithm
 *
 * @param {Object} graph An adjacency list representing the graph
 * @param {string} start the starting node
 *
 */
function dijkstra(graph, s) {
  var distance = {};
  var previous = {};
  var q = new PriorityQueue();
  // Initialize
  distance[s] = 0;
  graph.vertices.forEach(function (v) {
    if (v !== s) {
      distance[v] = Infinity;
    }
    q.insert(v, distance[v]);
  });

  var currNode;
  while (!q.isEmpty()) {
    currNode = q.extract();
    var neighbors = graph.neighbors(currNode);
    for (var i = 0; i < neighbors.length; i++) {
      var v = neighbors[i];
      // relaxation
      var newDistance = distance[currNode] + graph.edge(currNode, v);
      if (newDistance < distance[v]) {
        distance[v] = newDistance;
        previous[v] = currNode;
        q.changePriority(v, distance[v]);
      }
    }
  }
  return {
    distance: distance,
    previous: previous
  };
}

module.exports = dijkstra;
