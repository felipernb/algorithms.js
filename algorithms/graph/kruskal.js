/**
 * Copyright (C) 2014 Eugene Sharygin
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

var DisjointSetForest = require('../../data_structures/disjoint_set_forest'),
    Graph = require('../../data_structures/graph');


/**
 * Kruskal's minimum spanning tree (forest) algorithm.
 * Complexity: O(E * log(V)).
 *
 * @param {Graph} graph - Undirected graph.
 * @return {Graph} Minimum spanning tree or forest
 *   (depending on whether input graph is connected itself).
 */
var kruskal = function (graph) {
  if (graph.directed) {
    throw new Error('Can\'t build MST of a directed graph.');
  }

  var connectedComponents = new DisjointSetForest();
  var mst = new Graph(false);
  graph.vertices.forEach(mst.addVertex.bind(mst));

  var edges = graph.vertices.reduce(function (edges, vertex) {
    graph.neighbors(vertex).forEach(function (neighbor) {
      // Compared as strings, loops intentionally omitted.
      if (vertex < neighbor) {
        edges.push({
          ends: [vertex, neighbor],
          weight: graph.edge(vertex, neighbor)
        });
      }
    });
    return edges;
  }, []);

  edges.sort(function (a, b) {
    return a.weight - b.weight;
  }).forEach(function (edge) {
    if (!connectedComponents.sameSubset(edge.ends[0], edge.ends[1])) {
      mst.addEdge(edge.ends[0], edge.ends[1], edge.weight);
      connectedComponents.merge(edge.ends[0], edge.ends[1]);
    }
  });

  return mst;
};


module.exports = kruskal;
