/**
 * Copyright (C) 2014 Felipe Ribeiro
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
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
    insertionSort: require('./algorithms/sorting/insertion_sort')
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
