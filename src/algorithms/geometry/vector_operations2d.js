/**
 * Performs the cross product between two vectors.
 * @param A vector object, example: {x : 0,y : 0}
 * @param A vector object, example: {x : 0,y : 0}
 * @return The result of the cross product between u and v.
 */
const crossProduct = (u, v) => {
  return u.x*v.y - u.y*v.x;
};

/**
 * @param A point object, example: {x : 0,y : 0}
 * @param A point object, example: {x : 0,y : 0}
 * @param A point object, example: {x : 0,y : 0}
 * @return Returns true if the point c is counter-clockwise with respect
 * to the straight-line which contains the vector ab, otherwise returns false.
 */
const isClockwise = (a, b, c) => {
  return crossProduct({x: b.x-a.x, y: b.y-a.y}, c) < 0;
};

module.exports = {
  crossProduct: crossProduct,
  isClockwise: isClockwise
};
