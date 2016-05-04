'use strict';

/**
 * 2D bezier-curve, https://en.wikipedia.org/wiki/B%C3%A9zier_curve
 * Usage:
 *   var b = new BezierCurve([{x: 0, y: 0}, {x: 10, y: 3}]);
 *   b.get(0.5); // {x: 5, y: 1.5}
 */

/**
 * Generates a bezier-curve from a series of points
 * @param Array array of control points ([{x: x0, y: y0}, {x: x1, y: y1}])
 */
var BezierCurve = function (points) {
  this.n = points.length;
  this.p = [];

  // The binomial coefficient
  var c = [1];
  var i, j;
  for (i = 1; i < this.n; ++i) {
    c.push(0);
    for (j = i; j >= 1; --j) {
        c[j] += c[j - 1];
    }
  }

  // the i-th control point times the coefficient
  for (i = 0; i < this.n; ++i) {
    this.p.push({x: c[i] * points[i].x, y: c[i] * points[i].y});
  }
};

/**
 * @param Number float variable from 0 to 1
 */
BezierCurve.prototype.get = function (t) {
  var res = {x: 0, y: 0};
  var i;
  var a = 1, b = 1;

  // The coefficient
  var c = [];
  for (i = 0; i < this.n; ++i) {
    c.push(a);
    a *= t;
  }

  for (i = this.n - 1; i >= 0; --i) {
    res.x += this.p[i].x * c[i] * b;
    res.y += this.p[i].y * c[i] * b;
    b *= 1 - t;
  }
  return res;
};

module.exports = BezierCurve;
