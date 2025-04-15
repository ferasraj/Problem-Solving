function getDivisorsCnt(n) {
  let count = 0;
  for (i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if (i !== n / i) count++;
    }
  }
  return count;
}

// function getDivisorsCnt(n) {
//   let count = 0;
//   for (i = 1; i < n; i++) if (n % i === 0) count++;
//   if (i !== n / i) count++;
//   return count;
// }

// function getDivisorsCnt(n) {
//   let arr = [...Array(n + 1)]
//     .map((_, i) => n % i === 0 && i)
//     .filter(Boolean).length;
//   return arr;
// }
console.log(getDivisorsCnt(1));
