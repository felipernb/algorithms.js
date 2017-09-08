const vectorOp = require('./vector_operations2d.js');

/**
 * Given an array P with N points on a two dimensional space,
 * the function grahamScan calculates the convex hull of P
 * in O(N * log(N)) time and using O(N) space.
 * Implemented algorithm: Graham's Scan.
 *
 * @param An array P with N points, each point should be a literal,
 * example: {x:0,y:0}.
 * @return An array P' with N' points which belongs to the convex hull of P.
 *
 * Node: If three points are collinear and all of the three points
 * belongs to the convex hull, then the three points will be present on P'.
 */
const grahamScan = function(P) {
  if (P.length <= 3) {
    return P;
  }
  preprocessing(P);
  const convexHull = [P[0], P[1]];
  for (let i = 2; i < P.length; i++) {
    let j = convexHull.length;
    while (j >= 2 && vectorOp.
                      isClockwise(convexHull[j-2], convexHull[j-1], P[i])) {
      convexHull.pop();
      j--;
    }
    convexHull.push(P[i]);
  }
  return convexHull;
};

const preprocessing = function(P) {
  let pivot = P[0];
  for (let i = 1; i < P.length; i++) {
    if (pivot.y > P[i].y || (pivot.y === P[i].y && pivot.x > P[i].x)) {
      pivot = P[i];
    }
  }
  P.sort(function cmp(a, b) {
    const area = vectorOp.parallelogramArea(pivot, a, b);
    if (Math.abs(area) < 1e-6) {
      return vectorOp.length(vectorOp.newVector(pivot, a))
              - vectorOp.length(vectorOp.newVector(pivot, b));
    }
    return -area;
  });
};

module.exports = grahamScan;
