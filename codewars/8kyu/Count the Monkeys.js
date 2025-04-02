// function monkeyCount(n) {
//   let arr = [];
//   for (i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

monkeyCount = (n) => [...Array(n)].map((_, i) => i + 1);
// monkeyCount = (n) => [...Array(n).keys()].map((i) => i + 1);

console.log(monkeyCount(10));

// function monkeyCount(n) {
//     for (var i = 0, arr = []; i < n; arr.push(++i));

//     return arr;
//   }
