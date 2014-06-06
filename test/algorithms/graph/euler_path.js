/**
 * Copyright (C) 2014 Eugene Sharygin
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


var eulerPath = require('../../../algorithms/graph/euler_path'),
    Graph = require('../../../data_structures/graph'),
    assert = require('assert');


var verifyEulerPath = function (graph, trail) {
  var visited = new Graph(graph.directed);
  graph.vertices.forEach(visited.addVertex.bind(visited));

  trail.slice(1).reduce(function (previous, current) {
    assert(graph.edge(previous, current));
    assert(!visited.edge(previous, current));
    visited.addEdge(previous, current);
    return current;
  }, trail[0]);

  graph.vertices.forEach(function (vertex) {
    assert.equal(graph.neighbors(vertex).length,
                 visited.neighbors(vertex).length);
  });
};


var graphFromEdges = function (directed, edges) {
  var graph = new Graph(directed);
  edges.forEach(function (edge) {
    graph.addEdge(edge[0], edge[1]);
  });
  return graph;
};


describe('Euler Path', function () {
  it('should compute Euler tour over the undirected graph', function () {
    var graph = graphFromEdges(false, [[1, 2],
                                       [1, 5],
                                       [1, 7],
                                       [1, 8],
                                       [2, 3],
                                       [2, 4],
                                       [2, 5],
                                       [3, 5],
                                       [4, 6],
                                       [4, 9],
                                       [4, 10],
                                       [5, 6],
                                       [6, 9],
                                       [6, 10],
                                       [7, 8]]);
    var trail = eulerPath(graph);
    verifyEulerPath(graph, trail);
    assert.equal(trail[0], trail.slice(-1)[0]);
  });

  it('should compute Euler walk over the undirected graph', function () {
    var graph = graphFromEdges(false, [[1, 2],
                                       [1, 5],
                                       [1, 7],
                                       [2, 3],
                                       [2, 4],
                                       [2, 5],
                                       [3, 5],
                                       [4, 6],
                                       [4, 9],
                                       [4, 10],
                                       [5, 6],
                                       [6, 9],
                                       [6, 10],
                                       [7, 8]]);
    var trail = eulerPath(graph);
    verifyEulerPath(graph, trail);
    var endpoints = [trail[0], trail.slice(-1)[0]];
    endpoints.sort();
    assert.equal(endpoints[0], 1);
    assert.equal(endpoints[1], 8);
  });

  it('should compute Euler tour over the directed graph', function () {
    var graph = graphFromEdges(true, [[0, 1],
                                      [1, 2],
                                      [2, 0],
                                      [0, 3],
                                      [3, 4],
                                      [4, 0],
                                      [4, 1],
                                      [1, 5],
                                      [5, 6],
                                      [6, 4]]);
    var trail = eulerPath(graph);
    verifyEulerPath(graph, trail);
    assert.equal(trail[0], trail.slice(-1)[0]);
  });

  it('should compute Euler walk over the directed graph', function () {
    var graph = graphFromEdges(true, [[5, 0],
                                      [0, 2],
                                      [2, 4],
                                      [4, 0],
                                      [1, 5],
                                      [3, 1],
                                      [5, 3]]);
    var trail = eulerPath(graph);
    assert.deepEqual(trail, [5, 3, 1, 5, 0, 2, 4, 0]);
  });

  it('should return single-vertex-trail for an isolated vertex', function () {
    var graph = new Graph();
    graph.addVertex('loner');
    var trail = eulerPath(graph);
    assert.deepEqual(trail, ['loner']);
  });

  it('should return empty trail for an empty graph', function () {
    var graph = new Graph();
    var trail = eulerPath(graph);
    assert.deepEqual(trail, []);
  });

  it('should raise an error if there is no Euler path', function () {
    var graph = graphFromEdges(false, [[0, 1], [2, 3]]);
    assert.throws(eulerPath.bind(graph));
    graph = graphFromEdges(false, [[0, 1],
                                   [0, 2],
                                   [0, 3]]);
    assert.throws(eulerPath.bind(graph));
    graph = graphFromEdges(true, [[0, 1], [0, 2]]);
    assert.throws(eulerPath.bind(graph));
    graph = graphFromEdges(true, [[1, 0], [2, 0]]);
    assert.throws(eulerPath.bind(graph));
    graph = graphFromEdges(true, [[0, 1],
                                  [1, 2],
                                  [2, 3],
                                  [3, 0],
                                  [3, 1]]);
    assert.throws(eulerPath.bind(graph));
  });
});
