'use strict';

// Graph algorithms
module.exports = {
  topologicalSort: require('./topological_sort'),
  dijkstra: require('./dijkstra'),
  SPFA: require('./SPFA'),
  bellmanFord: require('./bellman_ford'),
  eulerPath: require('./euler_path'),
  depthFirstSearch: require('./depth_first_search'),
  kruskal: require('./kruskal'),
  breadthFirstSearch: require('./breadth_first_search'),
  bfsShortestPath: require('./bfs_shortest_path'),
  prim: require('./prim'),
  floydWarshall: require('./floyd_warshall')
};
