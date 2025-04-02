// sumArray = (arr) =>
//   !arr || !arr.length
//     ? 0
//     : arr
//         .sort((a, b) => b - a)
//         .slice(1, -1)
//         .reduce((a, b) => a + b, 0);

sumArray = (arr) =>
  arr
    ? arr
        .sort((a, b) => b - a)
        .slice(1, -1)
        .reduce((a, b) => a + b, 0)
    : 0;

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray(null));
console.log(sumArray([]));
