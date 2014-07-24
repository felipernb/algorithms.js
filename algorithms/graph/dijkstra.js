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
