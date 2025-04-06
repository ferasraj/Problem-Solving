// function powersOfTwo(n) {
//     let arr = [];
//     for (i = 0; i <= n; i++) {
//       arr.push(Math.pow(2, i));
//     }
//     return arr;
//   }

powersOfTwo = (n) => [...Array(n + 1)].map((_, i) => Math.pow(2, i));

console.log(powersOfTwo(4));
