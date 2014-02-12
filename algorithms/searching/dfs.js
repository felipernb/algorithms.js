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

/**
 * Depth first search for trees
 * (in order)
 */
var inOrder = function (node, callback) {
  if (node) {
    inOrder(node.left, callback);
    callback(node.value);
    inOrder(node.right, callback);
  }
};

/**
 * Pre order
 */
var preOrder = function (node, callback) {
  if (node) {
    callback(node.value);
    preOrder(node.left, callback);
    preOrder(node.right, callback);
  }
};

/**
 * Post order
 */
var postOrder = function (node, callback) {
  if (node) {
    postOrder(node.left, callback);
    postOrder(node.right, callback);
    callback(node.value);
  }
};

// Set inOrder as the default implementation
inOrder.preOrder = preOrder;
inOrder.postOrder = postOrder;
module.exports = inOrder;
