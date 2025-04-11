function r(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    let count = 0;
    for (j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    count === 1 ? result.push(arr[i]) : null;
  }
  return result.reduce((a, b) => a + b, 0);
}
console.log(r([4, 5, 7, 5, 4, 8]));

// function r(arr) {
//   let count = {};
//   let result = [];
//   for (let num of arr) {
//     //العداد عام يكون
//     count[num] = count[num] + 1 || 1;
//   }
//   for (let num of arr) {
//     count[num] === 1 ? result.push(num) : null;
//   }
//   return result.reduce((a, b) => a + b, 0);
// }

// console.log(r([4, 5, 7, 5, 4, 8]));
