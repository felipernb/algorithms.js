'use strict';


/**
 * Floyd-Warshall algorithm.
 * Compute all-pairs shortest paths (a path for each pair of vertices).
 * Complexity: O(V^3).
 *
 * @param {Graph} graph
 * @return {{distance, path}}
 */
var floydWarshall = function (graph) {

  // Fill in the distances with initial values:
  //   - 0 if source == destination;
  //   - edge(source, destination) if there is a direct edge;
  //   - +inf otherwise.
  var distance = graph.vertices.reduce(function (distance, source) {
    distance[source] =
      graph.vertices.reduce(function (distanceTo, destination) {
        if (source == destination) {
          distanceTo[destination] = 0;
        }
        else if (graph.edge(source, destination) !== undefined) {
          distanceTo[destination] = graph.edge(source, destination);
        }
        else {
          distanceTo[destination] = Infinity;
        }
        return distanceTo;
      }, {});
    return distance;
  }, {});

  // Internal vertex with the largest index along the shortest path.
  // Needed for path reconstruction.
  var middleVertex = graph.vertices.reduce(function (middleVertex, vertex) {
    middleVertex[vertex] = {};
    return middleVertex;
  }, {});

  graph.vertices.forEach(function (middle) {
    graph.vertices.forEach(function (source) {
      graph.vertices.forEach(function (destination) {
        var dist = distance[source][middle] + distance[middle][destination];
        if (dist < distance[source][destination]) {
          distance[source][destination] = dist;
          middleVertex[source][destination] = middle;
        }
      });
    });
  });

  // Check for a negative-weighted cycle.
  graph.vertices.forEach(function (vertex) {
    if (distance[vertex][vertex] < 0) {
      // Negative-weighted cycle found.
      throw new Error('The graph contains a negative-weighted cycle!');
    }
  });

  /**
   * Reconstruct the shortest path for a given pair of end vertices.
   * Complexity: O(L), L - length of the path (number of edges).
   *
   * @param {string} source
   * @param {string} destination
   * @return {?string[]} Null if destination is unreachable.
   */
  var path = function (source, destination) {
    if (!Number.isFinite(distance[source][destination])) {
      // Destination unreachable.
      return null;
    }

    var path = [source];

    if (source != destination) {
      (function pushInOrder(source, destination) {
        if (middleVertex[source][destination] === undefined) {
          path.push(destination);
        }
        else {
          var middle = middleVertex[source][destination];
          pushInOrder(source, middle);
          pushInOrder(middle, destination);
        }
      }(source, destination));
    }

    return path;
  };

  return {
    distance: distance,
    path: path
  };
};


module.exports = floydWarshall;
