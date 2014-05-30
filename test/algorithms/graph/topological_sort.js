/**
 * Copyright (C) 2014 Felipe Ribeiro
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"], to
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

var topologicalSort = require('../../../algorithms/graph/topological_sort'),
    Graph = require('../../../data_structures/graph'),
    assert = require('assert');

describe('Topological Sort', function () {
  it('should return a stack with the vertices ordered' +
    ' considering the dependencies', function () {

    var graph = new Graph();
    graph.addVertex('shirt');
    graph.addVertex('watch');
    graph.addVertex('socks');
    graph.addVertex('underwear');
    graph.addVertex('pants');
    graph.addVertex('belt');
    graph.addVertex('shoes');
    graph.addVertex('tie');
    graph.addVertex('jacket');

    graph.addEdge('shirt', 'belt');
    graph.addEdge('shirt', 'tie');
    graph.addEdge('shirt', 'jacket');

    graph.addEdge('socks', 'shoes');

    graph.addEdge('underwear', 'pants');
    graph.addEdge('underwear', 'shoes');

    graph.addEdge('pants', 'shoes');
    graph.addEdge('pants', 'belt');

    graph.addEdge('belt', 'jacket');

    graph.addEdge('tie', 'jacket');

    var stack = topologicalSort(graph);
    var a = [];
    while (!stack.isEmpty()) a.push(stack.pop());
    assert.deepEqual(a, ['underwear', 'pants', 'socks', 'shoes',
      'watch', 'shirt', 'tie', 'belt', 'jacket']);
  });
});
