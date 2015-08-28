'use strict';

/**
 * Tree node
 */
function Node(value, left, right) {
	this.value = value;
	this.children = [left, right];
	this.size = 1;
	this.key = Math.random();
}

Node.prototype.resize = function () {
	return this.size = this.children[0].size + this.children[1].size + 1;
};

/**
 * Zigzag rotate of tree nodes
 */
Node.prototype.rotate = function (side) {
	var temp = this.children[side];

	// Rotate
	this.children[side] = temp.children[1 - side];
	temp.children[1 - side] = this;

	this.resize();
	temp.resize();

	return temp;
};

/**
 * Treap
 */
function Treap() {
	/**
	 * nil: virtual node represent 'null'
	 * It's very convenient to avoid special judges in rotate operations.
	 */
	this.nil = new Node(0, 0, 0);
	this.nil.size = 0;
	this.nil.key = 1;

	this.root = this.nil;
}

/**
 * Using an object to pass reference of Node,
 *   nodeRef = {
 *     node: node
 *   }
 * just like `*node` usage in C/C++.
 */
Treap.prototype._insert = function (nodeRef, value) {
	if (nodeRef.node == this.nil) {
		nodeRef.node = new Node(value, this.nil, this.nil);
		return;
	}

	if (nodeRef.node.value == value) {
		// Duplicated
		return;
	}

	// Pass to childnodes
	var side = ~~(value > nodeRef.node.value);
	var newNodeRef = {
		node: nodeRef.node.children[side]
	};
	this._insert(newNodeRef, value);
	nodeRef.node.children[side] = newNodeRef.node;

	// Keep balance
	if (newNodeRef.node.key < nodeRef.node.key) {
		nodeRef.node = nodeRef.node.rotate(side);
	} else {
		nodeRef.node.resize();
	}
};

Treap.prototype._find = function (nodeRef, value) {
	if (nodeRef.node == this.nil) {
		// Empty tree
		return false;
	}
	if (nodeRef.node.value == value) {
		// Found!
		return true;
	}

	// Search within childnodes
	var side = ~~(value > nodeRef.node.value);
	var newNodeRef = {
		node: nodeRef.node.children[side]
	};
	return this._find(newNodeRef, value);
};

Treap.prototype._minimum = function (nodeRef) {
	if (nodeRef.node == this.nil) {
		// Empty tree, returns Infinity
		return Infinity;
	}

	var newNodeRef = {
		node: nodeRef.node.children[0] // Left child
	};
	return Math.min(nodeRef.node.value, this._minimum(newNodeRef));
};

Treap.prototype._maximum = function (nodeRef) {
	if (nodeRef.node == this.nil) {
		// Empty tree, returns -Infinity
		return -Infinity;
	}

	var newNodeRef = {
		node: nodeRef.node.children[1] // Right child
	};
	return Math.max(nodeRef.node.value, this._maximum(newNodeRef));
};

Treap.prototype._remove = function (nodeRef, value) {
	if (nodeRef.node == this.nil) {
		// Empty node, value not found
		return;
	}

	if (nodeRef.node.value == value) {
		if (nodeRef.node.children[0] == this.nil && nodeRef.node.children[1] == this.nil) {
			// Leaf node, set to nil
			nodeRef.node = this.nil;
			return;
		}
		/**
		 * Rotate up the child which has a smaller key
		 * notice nil node has the biggest key, it will always stay behind
		 */
		var side = ~~(nodeRef.node.children[0].key > nodeRef.node.children[1].key);
		nodeRef.node = nodeRef.node.rotate(side);

		var newNodeRef = {
			node: nodeRef.node.children[1 - side]
		};
		this._remove(newNodeRef, value);
		nodeRef.node.children[1 - side] = newNodeRef.node;
	} else {
		var side = ~~(value > nodeRef.node.value);
		var newNodeRef = {
			node: nodeRef.node.children[side]
		};
		this._remove(newNodeRef, value);
		nodeRef.node.children[side] = newNodeRef.node;
	}

	nodeRef.node.resize();
};

Treap.prototype.insert = function (value) {
	var rootRef = {
		node: this.root
	};
	this._insert(rootRef, value);

	// Reset root from reference
	this.root = rootRef.node;
};

Treap.prototype.find = function (value) {
	return this._find({
		node: this.root
	}, value);
};

Treap.prototype.minimum = function () {
	return this._minimum({
		node: this.root
	});
};

Treap.prototype.maximum = function () {
	return this._maximum({
		node: this.root
	});
};

Treap.prototype.remove = function (value) {
	var rootRef = {
		node: this.root
	};
	this._remove(rootRef, value);

	// Reset root from reference
	this.root = rootRef.node;
}

module.exports = Treap;
