'use strict';

var lib = {
  Graph: {
    topologicalSort: require('./algorithms/graph/topological_sort'),
    dijkstra: require('./algorithms/graph/dijkstra'),
    SPFA: require('./algorithms/graph/SPFA'),
    bellmanFord: require('./algorithms/graph/bellman_ford'),
    eulerPath: require('./algorithms/graph/euler_path'),
    depthFirstSearch: require('./algorithms/graph/depth_first_search'),
    kruskal: require('./algorithms/graph/kruskal'),
    breadthFirstSearch: require('./algorithms/graph/breadth_first_search'),
    bfsShortestPath: require('./algorithms/graph/bfs_shortest_path'),
    prim: require('./algorithms/graph/prim'),
    floydWarshall: require('./algorithms/graph/floyd_warshall'),
  },
  Math: {
    fibonacci: require('./algorithms/math/fibonacci'),
    fisherYates: require('./algorithms/math/fisher_yates'),
    gcd: require('./algorithms/math/gcd'),
    extendedEuclidean: require('./algorithms/math/extended_euclidean'),
    newtonSqrt: require('./algorithms/math/newton_sqrt'),
    reservoirSampling: require('./algorithms/math/reservoir_sampling'),
    fastPower: require('./algorithms/math/fast_power'),
    nextPermutation: require('./algorithms/math/next_permutation'),
    powerSet: require('./algorithms/math/power_set')
  },
  Search: {
    bfs: require('./algorithms/searching/bfs'),
    binarySearch: require('./algorithms/searching/binarysearch'),
    dfs: require('./algorithms/searching/dfs')
  },
  Sort: {
    bubbleSort: require('./algorithms/sorting/bubble_sort'),
    countingSort: require('./algorithms/sorting/counting_sort'),
    heapSort: require('./algorithms/sorting/heap_sort'),
    mergeSort: require('./algorithms/sorting/merge_sort'),
    quicksort: require('./algorithms/sorting/quicksort'),
    selectionSort: require('./algorithms/sorting/selection_sort'),
    radixSort: require('./algorithms/sorting/radix_sort'),
    insertionSort: require('./algorithms/sorting/insertion_sort'),
    shellsort: require('./algorithms/sorting/shell_sort')
  },
  String: {
    levenshtein: require('./algorithms/string/levenshtein'),
    rabinKarp: require('./algorithms/string/rabin_karp'),
    knuthMorrisPratt: require('./algorithms/string/knuth_morris_pratt'),
    huffman: require('./algorithms/string/huffman'),
    hamming: require('./algorithms/string/hamming'),
    longestCommonSubsequence: require(
      './algorithms/string/longest_common_subsequence')
  },
  DataStructure: {
    BST: require('./data_structures/bst'),
    Graph: require('./data_structures/graph'),
    HashTable: require('./data_structures/hash_table'),
    Heap: require('./data_structures/heap'),
    LinkedList: require('./data_structures/linked_list'),
    PriorityQueue: require('./data_structures/priority_queue'),
    Queue: require('./data_structures/queue'),
    Stack: require('./data_structures/stack'),
    Set: require('./data_structures/set'),
    DisjointSetForest: require('./data_structures/disjoint_set_forest')
  }
};

module.exports = lib;
