// function sumOfDifferences(arr) {
//   arr = arr.sort((a, b) => b - a);
//   let sum = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     a = arr[i];
//     b = arr[i + 1];
//     c = a - b;
//     sum += c;
//   }
//   return sum;
// }

function sumOfDifferences(arr) {
  arr = arr.sort((a, b) => b - a);
  return arr
    .slice(0, -1)
    .map((number, i) => number - arr[i + 1])
    .reduce((a, b) => a + b, 0);
}
console.log(sumOfDifferences([1, 2, 10]));
console.log(
  sumOfDifferences([
    -11, 12, -3, -7, -10, -1, 2, -8, 3, -13, -3, 4, 12, -5, 1, 9, -11, 3, -6,
    -9, -3, -7,
  ])
);
// function sumOfDifferences(arr) {
//     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }
// const sumOfDifferences = arr =>
//     arr.sort((a, b) => b - a).shift() - arr.pop() || 0;
