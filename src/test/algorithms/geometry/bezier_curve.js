'use strict';

var root = require('../../../'),
    BezierCurve = root.Geometry.BezierCurve,
    assert = require('assert');

// Testing with http://pomax.github.io/bezierjs/

describe('Bézier-Curve Algorithm', function () {
  it('should get a linear Bézier-curve', function () {
    var b = new BezierCurve([{x: 0, y: 0}, {x: 10, y: 3}]);

    // Ends
    assert.deepEqual(b.get(0), {x: 0, y: 0});
    assert.deepEqual(b.get(1), {x: 10, y: 3});

    // Middle
    assert.deepEqual(b.get(0.5), {x: 5, y: 1.5});

    // 1/4 and 3/4
    assert.deepEqual(b.get(0.25), {x: 2.5, y: 0.75});
    assert.deepEqual(b.get(0.75), {x: 7.5, y: 2.25});
  });
  it('should get a quadratic Bézier-curve', function () {
    var b = new BezierCurve([{x: 150, y: 40},
                             {x: 80, y: 30},
                             {x: 105, y: 150}]);

    assert.deepEqual(b.get(0.5), {x: 103.75, y: 62.5});
    assert.deepEqual(b.get(0.25), {x: 120.9375, y: 43.125});
  });
  it('should get a cubic Bézier-curve', function () {
    var b = new BezierCurve([{x: 150, y: 40},
                             {x: 80, y: 30},
                             {x: 105, y: 150},
                             {x: 100, y: 100}]);

    assert.deepEqual(b.get(0.5), {x: 100.625, y: 85});
  });
});
