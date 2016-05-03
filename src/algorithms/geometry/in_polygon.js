'use strict';

function inPolygon(polygonPoints, testPoint){
	// Detect whether a point is inside a polygon using even-odd winding rule.
	var x = testPoint.x, y = testPoint.y;
	var inside = false;
	var i = 0;
	var j = polygonPoints.length - 1;
	for (; i < polygonPoints.length; j = i++) {
		var xi = polygonPoints[i].x, yi = polygonPoints[i].y;
		var xj = polygonPoints[j].x, yj = polygonPoints[j].y;
		if ((xi - x) * (yj - y) === (xj - x) * (yi - y) 
			&& (xi <= x && x <= xj || xj <= x && x <= xi) 
			&& (yi <= y && y <= yj || yj <= y && y <= yi)) {
			// The test point is on the boundary.
			// Simply return YES.
			return true;
		};
		var intersect = ((yi > y) !== (yj > y)) 
			&& (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
		if (intersect) inside = !inside;
	};
	return inside;
};

module.exports = inPolygon;