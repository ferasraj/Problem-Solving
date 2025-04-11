function elementsSum(arr, d) {
  let result = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let inCu = n - 1 - i;
    if (arr[i].length > inCu) {
      result += arr[i][inCu];
    } else {
      result += d | 0;
    }
  }
  return result;
}
console.log(
  elementsSum([
    [3, 2, 1, 0],
    [4, 6, 5, 3, 2],
    [9, 8, 7, 4],
  ])
);
console.log(elementsSum([[3], [4, 6, 5, 3, 2], [9, 8, 7, 4]]));
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []], 5));

// function elementsSum(arr, d) {
//     let n = arr.length;
//     return arr.reduce((sum, subArr, i) =>
//       sum + (subArr[n - 1 - i] !== undefined ? subArr[n - 1 - i] : (d || 0)), 0);
//   }
