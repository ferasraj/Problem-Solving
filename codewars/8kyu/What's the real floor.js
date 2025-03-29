function getRealFloor(n) {
  if (n <= 13 && n > 0) {
    return n - 1;
  }
  if (n >= 14) {
    return n - 2;
  }
  if (n <= 0) {
    return n;
  }
}

// function getRealFloor(n) {
//   if (n >= 13) {
//     return n - 2;
//   }
//   if (n > 0) {
//     return n - 1;
//   }

//   return n;
// }

console.log(getRealFloor(1));
console.log(getRealFloor(0));
console.log(getRealFloor(5));
console.log(getRealFloor(15));
console.log(getRealFloor(-3));
