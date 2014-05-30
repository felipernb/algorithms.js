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

/**
 * Adjacency list representation of a graph
 * @param {bool} directed
 */
function Graph(directed) {
  this.directed = (directed === undefined ? true : !!directed);
  this.adjList = {};
  this.vertices = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
  this.adjList[v] = {};
};

Graph.prototype.addEdge = function (a, b, w) {
  // If no weight is assigned to the edge, 1 is the default
  w = (w === undefined ? 1 : w);

  if (!this.adjList[a]) this.addVertex(a);
  if (!this.adjList[b]) this.addVertex(b);

  // If there's already another edge with the same origin and destination
  // sum with the current one
  this.adjList[a][b] = (this.adjList[a][b] || 0) + w;

  // If the graph is not directed add the edge in both directions
  if (!this.directed) {
    this.adjList[b][a] = (this.adjList[b][a] || 0) + w;
  }
};

Graph.prototype.neighbors = function (v) {
  return Object.keys(this.adjList[v]);
};

Graph.prototype.edge = function (a, b) {
  return this.adjList[a][b];
};

module.exports = Graph;
