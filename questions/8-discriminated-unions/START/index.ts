interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius! ** 2;
  }
  if (shape.kind === "square") {
    return shape.sideLength! ** 2;
  }
  return shape;
}
