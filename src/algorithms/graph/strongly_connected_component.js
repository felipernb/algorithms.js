'use strict';

var Stack = require('../../data_structures/stack');
var depthFirstSearch = require('../../algorithms/graph/depth_first_search');

/**
 * Kosaraju's Strongly Connected Component algorithm, https://en.wikipedia.org/wiki/Kosaraju%27s_algorithm
 * Complexity: O(V + E).
 *
 * @param {Graph} graph
 * @return {{count: number, id: Object.<string, number>}}
 *           count is the number of strongly connected components in the graph
 *           id is a Object, receives a vertex and returns id of the strongly
 *           connected component vertex belongs to, ranges from 0 to count - 1.
 *           note: 1.if v and w are in same scc, then id[v] == id[w]
 *                 2.if v and w are in different scc and there is a path from v to w, then id[v] > id[w].
 *
 * Usage:
 *  var scc = stronglyConnectedComponent(g);
 *  scc.count; // count of strongly connected components
 *  scc.id[v]; // id of the strongly connected component which v belongs to
 */
var stronglyConnectedComponent = function(graph) {
  var reverse = graph.reverse();
  var stack = new Stack();
  var visited = {};
  var count = 0;
  var id = Object.create(null);

  reverse.vertices.forEach(function(node) {
    if (!visited[node]) {
      depthFirstSearch(reverse, node, {
        allowTraversal: function(node, neighbor) {
          return !visited[neighbor];
        },
        enterVertex: function(node) {
          visited[node] = true;
        },
        leaveVertex: function(node) {
          stack.push(node);
        }
      });
    }
  });

  visited = {};
  while(!stack.isEmpty()) {
    var node = stack.pop();
    if (!visited[node]) {
      depthFirstSearch(graph, node, {
        allowTraversal: function(node, neighbor) {
          return !visited[neighbor];
        },
        enterVertex: function(node) {
          visited[node] = true;
          id[node] = count;
        }
      });

      ++count;
    }
  }

  return {
    count: count,
    id: id
  };
};

module.exports = stronglyConnectedComponent;
