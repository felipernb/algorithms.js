const DisjointSetForest = require('../../data_structures/disjoint_set_forest');
const Graph = require('../../data_structures/graph');

/**
 * Kruskal's minimum spanning tree (forest) algorithm.
 * Complexity: O(E * log(V)).
 *
 * @param {Graph} graph - Undirected graph.
 * @return {Graph} Minimum spanning tree or forest
 *   (depending on whether input graph is connected itself).
 */
const kruskal = graph => {
  if (graph.directed) {
    throw new Error('Can\'t build MST of a directed graph.');
  }

  const connectedComponents = new DisjointSetForest();
  const mst = new Graph(false);
  graph.vertices.forEach(mst.addVertex.bind(mst));

  const edges = [];
  graph.vertices.forEach(vertex => {
    graph.neighbors(vertex).forEach(neighbor => {
      // Compared as strings, loops intentionally omitted.
      if (vertex < neighbor) {
        edges.push({
          ends: [vertex, neighbor],
          weight: graph.edge(vertex, neighbor)
        });
      }
    });
  });

  edges.sort((a, b) => a.weight - b.weight).forEach(edge => {
    if (!connectedComponents.sameSubset(edge.ends[0], edge.ends[1])) {
      mst.addEdge(edge.ends[0], edge.ends[1], edge.weight);
      connectedComponents.merge(edge.ends[0], edge.ends[1]);
    }
  });

  return mst;
};

module.exports = kruskal;
