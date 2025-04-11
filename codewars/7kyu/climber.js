function climb(n) {
  let arr = [];
  while (n > 0) {
    arr.push(n);
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (n - 1) / 2;
    }
  }
  return arr.reverse();
}
console.log(climb(13));

// function climb(n) {
//     let arr = [n];
//     while (n > 1) {
//       n = (n / 2) | 0;
//       arr.push(n);
//     }
//     return arr.reverse();
//   }
