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


var Graph = require('../../data_structures/graph');


/** Examine a graph and compute pair of end vertices of the existing Euler path.
 * Return pair of undefined values if there is no specific choice of end points.
 * Return value format: {start: START, finish: FINISH}.
 *
 * @param {Graph} Graph, must be connected and contain at least one vertex.
 * @return Object
 */
var eulerEndpoints = function (graph) {
  var rank = {};
  //     start     ->  rank = +1
  // middle points ->  rank =  0
  //    finish     ->  rank = -1

  // Initialize ranks to be outdegrees of vertices.
  graph.vertices.forEach(function (vertex) {
    rank[vertex] = graph.neighbors(vertex).length;
  });

  if (graph.directed) {
    // rank = outdegree - indegree
    graph.vertices.forEach(function (vertex) {
      graph.neighbors(vertex).forEach(function (neighbor) {
        rank[neighbor] -= 1;
      });
    });
  }
  else {
    // Compute ranks from vertex degree parity values.
    var startChosen = false;
    graph.vertices.forEach(function (vertex) {
      rank[vertex] %= 2;
      if (rank[vertex]) {
        if (startChosen) {
          rank[vertex] = -1;
        }
        startChosen = true;
      }
    });
  }

  var start, finish;

  graph.vertices.forEach(function (vertex) {
    if (rank[vertex] == 1) {
      if (start !== undefined) {
        throw new Error('Duplicate start vertex.');
      }
      start = vertex;
    }
    else if (rank[vertex] == -1) {
      if (finish !== undefined) {
        throw new Error('Duplicate finish vertex.');
      }
      finish = vertex;
    }
    else if (rank[vertex]) {
      throw new Error('Unexpected vertex degree for ' + vertex);
    }
  });

  if (start === undefined && finish === undefined) {
    start = finish = graph.vertices[0];
  }

  return {start: start,
          finish: finish};
};


/**
 * Compute Euler path (either walk or tour, depending on the graph).
 * Euler path is a trail in a graph which visits every edge exactly once.
 * The procedure works both for directed and undirected graphs,
 *   although the details differ a bit.
 * The resulting array consists of exactly |E|+1 vertices.
 *
 * @param {Graph}
 * @return Array
 */
var eulerPath = function (graph) {
  if (!graph.vertices.length) {
    return [];
  }

  var endpoints = eulerEndpoints(graph);
  var route = [endpoints.finish];

  var seen = new Graph(graph.directed);
  graph.vertices.forEach(seen.addVertex.bind(seen));

  (function dfs(vertex) {
    graph.neighbors(vertex).forEach(function (neighbor) {
      if (!seen.edge(vertex, neighbor)) {
        seen.addEdge(vertex, neighbor);
        dfs(neighbor);
        route.push(vertex);
      }
    });
  }(endpoints.start));

  graph.vertices.forEach(function (vertex) {
    if (seen.neighbors(vertex).length < graph.neighbors(vertex).length) {
      throw new Error('There is no euler path for a disconnected graph.');
    }
  });
  return route.reverse();
};


module.exports = eulerPath;
