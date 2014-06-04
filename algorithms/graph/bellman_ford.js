/**
 * Copyright (C) 2014 Tayllan Búrigo
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

/**
 * Calculates the shortest paths in a graph to every node
 * from the node 'startNode' with Bellman-Ford's algorithm
 *
 * Worst Case Complexity: O(|V| * |E|), where |V| is the number of
 * vertices and |E| is the number of edges in the graph
 *
 * @param Object 'graph' An adjacency list representing the graph
 * @param String 'startNode' The starting node
 * @return Object the minimum distance to reach every vertice of
 *    the graph starting in 'startNode', or an empty object if there
 *    exists a Negative-Weighted Cycle in the graph
 */
var bellmanFord = function(graph, startNode) {
  var minDistance = {};
  var edges = [];
  var adjacencyListSize = 0;

  // Add all the edges from the graph to the 'edges' array
  graph.vertices.forEach(function (s) {
    graph.neighbors(s).forEach(function(t) {
      edges.push({
        source: s,
        target: t,
        weight: graph.edge(s, t)
      });
    });

    minDistance[s] = Infinity;
    ++adjacencyListSize;
  });

  minDistance[startNode] = 0;

  var edgesSize = edges.length;
  var sourceDistance;
  var targetDistance;

  for (var i = 0; i < adjacencyListSize - 1; i++) {
    for (var j = 0; j < edgesSize; j++) {
      sourceDistance = minDistance[edges[j].source] + edges[j].weight;
      targetDistance = minDistance[edges[j].target];

      if (sourceDistance < targetDistance) {
        minDistance[edges[j].target] = sourceDistance;
      }
    }
  }

  for (i = 0; i < edgesSize; i++) {
    sourceDistance = minDistance[edges[i].source] + edges[i].weight;
    targetDistance = minDistance[edges[i].target];

    if (sourceDistance < targetDistance) {

      // Empty 'distance' object indicates Negative-Weighted Cycle
      return {
        distance: {}
      };
    }
  }

  return {
    distance: minDistance
  };
};

module.exports = bellmanFord;
