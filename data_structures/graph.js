'use strict';

/**
 * Adjacency list representation of a graph
 * @param {bool} directed
 */
function Graph(directed) {
  this.directed = (directed === undefined ? true : !!directed);
  this.adjList = Object.create(null);
  this.vertices = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push('' + v);
  this.adjList[v] = Object.create(null);
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
