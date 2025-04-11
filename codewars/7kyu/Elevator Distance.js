// function elevatorDistance(arr) {
//   let result = [];
//   for (i = 0; i < arr.length - 1; i++) {
//     result.push(Math.abs(arr[i + 1] - arr[i]));
//   }
//   return result.reduce((a, b) => a + b, 0);
// }

function elevatorDistance(arr) {
  let count = 0;
  for (i = 0; i < arr.length - 1; i++) {
    count += Math.abs(arr[i + 1] - arr[i]);
  }
  return count;
}
console.log(elevatorDistance([5, 2, 8]));
console.log(elevatorDistance([7, 1, 7, 1]));
console.log(elevatorDistance([1, 2, 3]));
console.log(
  elevatorDistance([12, 13, 16, 26, 15, 27, 23, 2, 0, 1, 17, 17, 2, 0, 2, 27])
);
