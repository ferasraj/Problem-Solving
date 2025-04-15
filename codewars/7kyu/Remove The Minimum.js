// function removeSmallest(numbers) {
//   let arr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (
//       Math.min(...numbers) != numbers[i] ||
//       numbers.indexOf(Math.min(...numbers)) != i
//     ) {
//       arr.push(numbers[i]);
//     }
//   }
//   return arr;
// }
removeSmallest = (numbers) =>
  numbers.filter((_, i) => i !== numbers.indexOf(Math.min(...numbers)));

console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
