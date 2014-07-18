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

var newDfsState = function () {
  return {
    time: 0,
    visitedNodes: {},
    finishingTimes: {}
  };
};

/**
 * Depth First Search for all the vertices in the graph
 * Worst Case Complexity: O(V + E)
 *
 * @param {Object}
 * @return {Object} representing the order in which the
 *    vertices are visited
 */
var dfsAdjacencyListStart = function (graph) {
  var dfsState = newDfsState();

  graph.vertices.forEach(function (v) {
    if (dfsState.visitedNodes[v] !== true) {
      dfsInternalLoop(graph, v, dfsState);
    }
  });

  return dfsState.finishingTimes;
};

var dfsInternalLoop = function (graph, startNode, dfsState) {
  dfsState.visitedNodes[startNode] = true;

  graph.neighbors(startNode).forEach(function (v) {
    if (dfsState.visitedNodes[v] !== true) {
      dfsInternalLoop(graph, v, dfsState);
    }
  });

  dfsState.finishingTimes[startNode] = dfsState.time++;
};

/**
 * Depth First Search for the vertices reachable from 'startNode'
 * Worst Case Complexity: O(V + E)
 *
 * @param {Object}
 * @param {Object}
 * @return {Object}
 */
var dfsAdjacencyList = function (graph, startNode) {
  var dfsState = newDfsState();
  dfsInternalLoop(graph, startNode, dfsState);
  return dfsState.finishingTimes;
};

var depthFirstSearch = {
  dfsAdjacencyList: dfsAdjacencyList,
  dfsAdjacencyListStart: dfsAdjacencyListStart
};

module.exports = depthFirstSearch;
