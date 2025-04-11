// function evenNumbers(arr, count) {
//   let result = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//     result.splice(0, result.length - count);
//   }
//   return result;
// }
const evenNumbers = (array, number) =>
  array.filter((item) => item % 2 === 0).slice(-number);

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
