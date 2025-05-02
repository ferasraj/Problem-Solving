const age = (x, y) => x / (y - 1) + x;
// function age(x, y) {
//   for (let i = 1; i < 1000; i++) {
//     if (i + x === i * y) {
//       return Math.round(i * y);
//     }
//   }
// }
// function age(x, y) {
//   let b = x / (y - 1);
//   return b + x;
// }

console.log(age(6, 3)); // 9
console.log(age(-15, 0.25)); // 5
