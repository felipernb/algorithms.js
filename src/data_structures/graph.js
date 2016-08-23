'use strict';

var HashSet = require('./set');

// Normalize vertex labels as strings
var _ = function(v) {
  return String(v);
};

/**
 * Adjacency list representation of a graph
 * @param {bool} directed
 */
class Graph {
  constructor(directed) {
    this.directed = typeof directed === 'undefined' || Boolean(directed);
    this.adjList = Object.create(null);
    this.vertices = new HashSet();
  }

  addVertex(v) {
    v = _(v);
    if (this.vertices.contains(v)) {
      throw new Error('Vertex "' + v + '" has already been added');
    }
    this.vertices.add(v);
    this.adjList[v] = Object.create(null);
  }

  addEdge(a, b, w) {
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
  }

  neighbors(v) {
    return Object.keys(this.adjList[_(v)]);
  }

  edge(a, b) {
    return this.adjList[_(a)][_(b)];
  }

}

module.exports = Graph;
