'use strict';

var root = require('../../../'),
    inPolygon = root.Geometry.inPolygon,
    Vector2D = root.DataStructures.Vector2D,
    assert = require('assert');

describe('In-polygon detection', function (){
    it('should be able to detect if a point is inside a polygon', function (){
        var polygon = [
            new Vector2D(1, 1),
            new Vector2D(1, 2),
            new Vector2D(2, 2),
            new Vector2D(2, 1)
        ];
        assert(inPolygon(polygon, new Vector2D(1.5, 1.5)));
        assert(!inPolygon(polygon, new Vector2D(5, 1)));
    });
    it('should treat on-boundary points as inside', function (){
        var polygon = [
            new Vector2D(1, 1),
            new Vector2D(1, 2),
            new Vector2D(2, 2),
            new Vector2D(2, 1)
        ];
        assert(inPolygon(polygon, new Vector2D(1, 1.5)));
        assert(inPolygon(polygon, new Vector2D(1.5, 2)));
    });
});