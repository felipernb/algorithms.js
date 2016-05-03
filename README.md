# algorithms.js

[![Build Status](https://travis-ci.org/felipernb/algorithms.js.png?branch=master)](https://travis-ci.org/felipernb/algorithms.js)
[![Coverage Status](https://coveralls.io/repos/felipernb/algorithms.js/badge.png?branch=master)](https://coveralls.io/r/felipernb/algorithms.js?branch=master)
[![Dependency Status](https://david-dm.org/felipernb/algorithms.js.svg)](https://david-dm.org/felipernb/algorithms.js)
[![devDependency Status](https://david-dm.org/felipernb/algorithms.js/dev-status.svg)](https://david-dm.org/felipernb/algorithms.js#info=devDependencies)
[![Inline docs](http://inch-ci.org/github/felipernb/algorithms.js.svg?branch=master)](http://inch-ci.org/github/felipernb/algorithms.js)

![](http://www.quickmeme.com/img/8d/8d30a19413145512ad5a05c46ec0da545df5ed79e113fcf076dc03c7514eb631.jpg)


## Atwood's Law applied to CS101.

Classic algorithms and data structures implemented in JavaScript, you know... FOR SCIENCE.

### Installing
```
npm install --save algorithms
```

### Contents

#### Data Structures

```javascript
require('algorithms/data_structures');
// or
require('algorithms').DataStructures;
```

* BST
* DisjointSetForest
* FenwickTree
* Graph
* HashTable
* Heap
 * MaxHeap
 * MinHeap
* LinkedList
* PriorityQueue
* Queue
* Set (HashSet)
* Stack

#### Graph algorithms

```javascript
require('algorithms/graph');
// or
require('algorithms').Graph;
```

* breadthFirstSearch
* depthFirstSearch
* eulerPath
* topologicalSort

##### Shortest path
* bellmanFord
* bfsShortestPath
* dijkstra
* floydWarshall
* SPFA (Shortest Path Faster Algorithm)

##### Minimum spanning tree
* prim
* kruskal

#### Math algorithms

```javascript
require('algorithms/math');
// or
require('algorithms').Math;
```
* collatzConjecture
* extendedEuclidean
* fastPower
* fibonacci
* fisherYates
* gcd (Greatest common divisor)
* greatestDifference
* lcm (Least common multiple)
* newtonSqrt
* nextPermutation
* powerSet
* reservoirSampling
* shannonEntropy

#### Search algorithms

```javascript
require('algorithms/search');
// or
require('algorithms').Search;
```

* bfs (breadth-first search for binary trees)
* binarySearch
* dfs (depth-first search for binary trees)
 * inOrder (default)
 * postOrder
 * preOrder

#### Sorting algorithms

```javascript
require('algorithms/sorting');
// or
require('algorithms').Sorting;
```

* bubbleSort
* countingSort
* heapSort
* insertionSort
* quicksort
* radixSort
* selectionSort
* shellSort
* shortBubbleSort

#### String algorithms

```javascript
require('algorithms/string');
// or
require('algorithms').String;
```

* hamming
* huffman
 * decode
 * encode
* knuthMorrisPratt
* levenshtein
* longestCommonSubsequence
* longestCommonSubstring
* rabinKarp

#### Computational Geometry
```javascript
require('algorithms/geometry');
// or
require('algorithms').Geometry;
```
* inPolygon