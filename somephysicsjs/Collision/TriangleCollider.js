import { getDistance } from "../Utils/geometry.js";

function getTriangleArea(p1x, p1y, p2x, p2y, p3x, p3y) {
  let a = getDistance(p1x, p1y, p2x, p2y);
  let b = getDistance(p2x, p2y, p3x, p3y);
  let c = getDistance(p3x, p3y, p1x, p1y);

  return (
    (1 / 4) *
    Math.sqrt(
      4 * a * a * b * b - (a * a + b * b - c * c) * (a * a + b * b - c * c)
    )
  );
}

function getTrianglePointAreas(triangle_point_list, point) {
  let a1 = getTriangleArea(
    triangle_point_list[0].x,
    triangle_point_list[0].y,
    triangle_point_list[1].x,
    triangle_point_list[1].y,
    point.x,
    point.y
  );

  let a2 = getTriangleArea(
    triangle_point_list[1].x,
    triangle_point_list[1].y,
    triangle_point_list[2].x,
    triangle_point_list[2].y,
    point.x,
    point.y
  );

  let a3 = getTriangleArea(
    triangle_point_list[2].x,
    triangle_point_list[2].y,
    triangle_point_list[0].x,
    triangle_point_list[0].y,
    point.x,
    point.y
  );

  return a1 + a2 + a3;
}

export default function triangleCollider(triangle_point_list, point) {
  let a = getTriangleArea(
    triangle_point_list[0].x,
    triangle_point_list[0].y,
    triangle_point_list[1].x,
    triangle_point_list[1].y,
    triangle_point_list[2].x,
    triangle_point_list[2].y
  );

  let a2 = getTrianglePointAreas(triangle_point_list, point);

  return a2 <= a;
}
