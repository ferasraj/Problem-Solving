function quadrant(x, y) {
  if (y > 0 && x > 0) {
    return 1;
  } else if (y > 0 && x < 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else {
    return 4;
  }
}
// function quadrant(x, y) {
//   if (x > 0 && y > 0) return 1;
//   if (x < 0 && y > 0) return 2;
//   if (x < 0 && y < 0) return 3;
//   return 4;
// }
// function quadrant(x, y) {
//     return x > 0 ? y > 0 ? 1 : 4 : y > 0 ? 2 : 3;
//   }
// function quadrant(x, y) {
//   const plane = [
//     [1, 2],
//     [3, 4],
//   ];
//   const xAxis = x > 0 ? 0 : 1;
//   const yAxis = y > 0 ? 0 : 1;

//   return plane[yAxis][xAxis];
// }
console.log(quadrant(1, 2));
console.log(quadrant(-100, 100));
console.log(quadrant(-1, -9));
console.log(quadrant(19, -56));
