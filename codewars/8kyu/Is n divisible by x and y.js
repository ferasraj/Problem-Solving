// function isDivisible(n, x, y) {
//   if (n % x == 0 && n % y == 0) {
//     return `true because ${n} is divisible by ${x} and ${y} `;
//   } else {
//     return `false because ${n} is not divisible by ${x} and ${y} `;
//   }
// }

// function isDivisible(n, ...dividers) {
//   return dividers.every((divider) => n % divider == 0);
// }

// const isDivisible = (n, x, y) => n % x == 0 && n % y == 0;

let isDivisible = (n, x, y) => (n % x == 0 && n % y == 0 ? true : false);

//
console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 3, 6));
