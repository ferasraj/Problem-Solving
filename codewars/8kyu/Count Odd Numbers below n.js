function oddCount(n) {
  let result = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2 !== 0) {
      result++;
    }
  }
  return result;
}

// function oddCount(n) {
//   return Math.floor(n / 2);
// }

// function oddCount(n) {
//  return parseInt(n/2);;
// }

// const oddCount = (n) => (n - (n % 2)) / 2;
console.log(oddCount(10));
