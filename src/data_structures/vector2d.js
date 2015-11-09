'use strict';

function Vector2D(x, y){
	this.x = x;
	this.y = y;
};
Vector2D.prototype.add = function (that){
	return new Vector2D(this.x + that.x, this.y + that.y);
};
Vector2D.prototype.minus = function (that){
	return new Vector2D(this.x - that.x, this.y - that.y);
};
Vector2D.prototype.scale = function (amount){
	return new Vector2D(this.x * amount, this.y * amount);
};
Vector2D.prototype.dot = function (that){
	return this.x * that.x + this.y * that.y;
};
Vector2D.prototype.cross = function (that){
	return this.x * that.y - this.y * that.x;
};


module.exports = Vector2D;