function solve(t) {
  let even = [];
  let odd = [];
  for (i = 0; i < t.length; i++) {
    if (t[i] % 2 === 0) {
      even.push(t[i]);
    } else if (t[i] % 2 !== 0 && typeof t[i] === "number") {
      odd.push(t[i]);
    }
  }
  return even.length - odd.length;
}
console.log(solve([0, 1, 2, 3]));
console.log(solve([0, 15, "z", 16, "m", 13, 14, "c", 9, 10, 13, "u", 4, 3]));
console.log(solve([1, "a", 17, 8, "e", 3, "i", 12, 1]));

// function solve(a){
//     let theEvens = a.filter(number => number % 2 == 0); // find even numbers
//     let theOdds = a.filter(number => number % 2 == 1); // find odd numbers
//     return theEvens.length - theOdds.length; //return number of evens minus number of odds
//   };

// function solve(a){
//   return a.reduce(((x, y) => Number.isInteger(y) ? (y%2 === 0 ? x+1 : x-1) : x), 0);
// }

// function solve(t) {
//   let count = 0;
//   for (i = 0; i < t.length; i++) {
//     if (typeof t[i] === "number") {
//       if (t[i] % 2 === 0) {
//         count++;
//       } else {
//         count--;
//       }
//     }
//   }
//   return count;
// }
