'use strict';

/**
 * 2D bezier-curve, https://en.wikipedia.org/wiki/B%C3%A9zier_curve
 * Usage:
 *   var b = new BezierCurve([ [0, 0], [10, 3] ]);
 *   b.get(0.5); // [5, 1.5]
 */

/**
 * Generates a bezier-curve from a series of points
 * @param Array array of control points ([[x0, y0], [x1, y1]])
 */
var BezierCurve = function (array) {
    var n = array.length;

    // The binomial coefficient
    var c = [1];
    var i, j;
    for (i = 1; i < n; ++i) {
        c.push(0);
        for (j = i; j >= 1; --j) {
            c[j] += c[j - 1];
        }
    }

    // the i-th control point times the coefficient
    var p = [];
    for (i = 0; i < n; ++i) {
        p.push([c[i] * array[i][0], c[i] * array[i][1]]);
    }

    this.p = p;
    this.n = n;
};

/**
 * @param Number float variable from 0 to 1
 */
BezierCurve.prototype.get = function (t) {
    var res = [0, 0], i;
    var a = 1, b = 1;

    // The coefficient
    var c = [];
    for (i = 0; i < this.n; ++i) {
        c.push(a);
        a *= t;
    }

    for (i = this.n - 1; i >= 0; --i) {
        res[0] += this.p[i][0] * c[i] * b;
        res[1] += this.p[i][1] * c[i] * b;
        b *= 1 - t;
    }
    return res;
};

module.exports = BezierCurve;
