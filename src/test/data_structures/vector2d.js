'use strict';

var root = require('../..'),
	Vector2D = root.DataStructures.Vector2D,
	assert = require('assert');

describe('Vector 2D', function (){
	it('should be able to perform correct addition', function (){
		var p = new Vector2D(1, 2);
		var q = new Vector2D(3, 4);
		
		var r = p.add(q);
		assert.equal(r.x, 4);
		assert.equal(r.y, 6);
	});
	it('should be able to perform correct substraction', function (){
		var p = new Vector2D(1, 2);
		var q = new Vector2D(3, 4);
		
		var r = p.minus(q);
		assert.equal(r.x, -2);
		assert.equal(r.y, -2);
	});
	it('should be able to perform correct scaling', function (){
		var p = new Vector2D(1, 2);
		var r = p.scale(9);
		assert.equal(r.x, 9);
		assert.equal(r.y, 18);
	});
	it('should be able to perform correct dot product', function (){
		var p = new Vector2D(1, 2);
		var q = new Vector2D(3, 4);
		
		var r = p.dot(q);
		assert.equal(r, 11);
	});
	it('should be able to perform correct scalar cross product', function (){
		var p = new Vector2D(1, 2);
		var q = new Vector2D(3, 4);
		
		var r = p.cross(q);
		assert.equal(r, -2);
	});
});