// function sum() {
//   return [...arguments].reduce((a, b) => a + b, 0);
// }
// function sum(...a) {
//   return a.reduce((a, b) => a + b, 0);
// }
sum = (...a) => a.reduce((a, b) => a + b, 0);

console.log(sum(4, 5, 7, 5, 4, 8));
