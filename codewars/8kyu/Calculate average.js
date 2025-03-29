// function findAverage(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return array.length === 0 ? 0 : sum / array.length;
// }

// findAverage = (array) => array.reduce((a, b) => a + b, 0) / array.length || 0;
findAverage = (array) =>
  array.length === 0 ? 0 : array.reduce((a, b) => a + b, 0) / array.length;

console.log(findAverage([1, 2, 3, 4, 5]));
console.log(findAverage([]));
