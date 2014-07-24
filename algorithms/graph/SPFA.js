'use strict';

/**
 * Calculates the shortest paths in a graph to every node from the node s
 * with SPFA(Shortest Path Faster Algorithm) algorithm
 *
 * @param {Object} graph An adjacency list representing the graph
 * @param {string} start the starting node
 *
 */
function SPFA(graph, s) {
  var distance = {};
  var previous = {};
  var queue = {};
  var isInQue = {};
  var head = 0;
  var tail = 1;
  // initialize
  distance[s] = 0;
  queue[0] = s;
  isInQue[s] = true;
  graph.vertices.forEach(function (v) {
    if (v !== s) {
      distance[v] = Infinity;
      isInQue[v] = false;
    }
  });

  var currNode;
  while (head != tail) {
    currNode = queue[head++];
    isInQue[currNode] = false;
    var neighbors = graph.neighbors(currNode);
    for (var i = 0; i < neighbors.length; i++) {
      var v = neighbors[i];
      // relaxation
      var newDistance = distance[currNode] + graph.edge(currNode, v);
      if (newDistance < distance[v]) {
        distance[v] = newDistance;
        previous[v] = currNode;
        if (!isInQue[v]) {
          queue[tail++] = v;
          isInQue[v] = true;
        }
      }
    }
  }

  return {
    distance: distance,
    previous: previous
  };
}

module.exports = SPFA;
