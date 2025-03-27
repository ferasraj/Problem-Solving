function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
}
//
// function squareSum(numbers) {
//   return numbers.reduce((sum, num) => sum + num * num, 0);
// }

// function squareSum(numbers) {
//   let arr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     arr.push(Math.pow(numbers[i], 2));
//   }
//   return arr.reduce((x, y) => x + y, 0);
// }

// function squareSum(numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i] * numbers[i];
//   }
//   return result;
// }

console.log(squareSum([]));
console.log(squareSum([1, 2, 2]));
