interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// Solution 1: Provide a complete Point object
printCoord({ x: 3, y: 7 });

// Solution 2: Use a type assertion (less preferred)
// printCoord({ x: 3} as Point);

//Solution 3: Make the function accept partial points
function printCoordPartial(pt: Partial<Point>) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoordPartial({x: 3});