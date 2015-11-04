'use strict';

var root = require('../../../'),
    BezierCurve = root.Geometry.bezierCurve,
    assert = require('assert');

// Testing with http://pomax.github.io/bezierjs/

describe('Bézier-Curve Algorithm', function () {
    it('should get a linear Bézier-curve', function () {
        var b = new BezierCurve([[0, 0], [10, 3]]);

        // Ends
        assert.deepEqual(b.get(0), [0, 0]);
        assert.deepEqual(b.get(1), [10, 3]);

        // Middle
        assert.deepEqual(b.get(0.5), [5, 1.5]);

        // 1/4 and 3/4
        assert.deepEqual(b.get(0.25), [2.5, 0.75]);
        assert.deepEqual(b.get(0.75), [7.5, 2.25]);
    });
    it('should get a quadratic Bézier-curve', function () {
        var b = new BezierCurve([[150, 40], [80, 30], [105, 150]]);

        assert.deepEqual(b.get(0.5), [103.75, 62.5]);
        assert.deepEqual(b.get(0.25), [120.9375, 43.125]);
    });
    it('should get a cubic Bézier-curve', function () {
        var b = new BezierCurve([[150, 40], [80, 30], [105, 150], [100, 100]]);

        assert.deepEqual(b.get(0.5), [100.625, 85]);
    });
});
