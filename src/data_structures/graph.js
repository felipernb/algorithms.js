'use strict';

var HashSet = require('./set');

/**
 * Adjacency list representation of a graph
 * @param {bool} directed
 */
function Graph(directed) {
  this.directed = typeof directed === 'undefined' || Boolean(directed);
  this.adjList = Object.create(null);
  this.vertices = new HashSet();
}

// Normalize vertex labels as strings
var _ = function(v) {
  return String(v);
};

Graph.prototype.addVertex = function(v) {
  v = _(v);
  if (this.vertices.contains(v)) {
    throw new Error('Vertex "' + v + '" has already been added');
  }
  this.vertices.add(v);
  this.adjList[v] = Object.create(null);
};

Graph.prototype.addEdge = function(a, b, w) {
  a = _(a);
  b = _(b);
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

Graph.prototype.neighbors = function(v) {
  return Object.keys(this.adjList[_(v)]);
};

Graph.prototype.edge = function(a, b) {
  return this.adjList[_(a)][_(b)];
};

Graph.prototype.reverse = function() {
  var self = this;
  var r = new Graph(this.directed);

  self.vertices.forEach(function(v) {
    r.addVertex(v);
  });

  Object.keys(self.adjList).forEach(function(a) {
    Object.keys(self.adjList[a]).forEach(function(b) {
      r.adjList[b][a] = self.adjList[a][b];
    });
  });

  return r;
};

module.exports = Graph;
