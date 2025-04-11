function m(c) {
  let arr = [];
  if (c.length === 0) {
    return 0;
  }
  for (i = 0; i < c.length; i++) {
    let count = 0;
    for (j = 0; j < c.length; j++) {
      if (c[i] === c[j]) {
        count++;
      }
    }
    arr.push(count);
    arr.sort((a, b) => b - a); //!Delet
  }
  return arr[0]; //Math.max(...arr)
}
console.log(m([3, -1, -1]));
console.log(m([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));

// function m(c) {
//   let result = 0;
//   if (c.length === 0) {
//     return 0;
//   }
//   for (i = 0; i < c.length; i++) {
//     let count = 0;
//     for (j = 0; j < c.length; j++) {
//       if (c[i] === c[j]) {
//         count++;
//         // result = Math.max(result, count);
//       }
//       if (count > result) {
//         result = count;
//       }
//     }
//   }
//   return result;
// }
