digitize = (n) => n.toString().split("").map(Number).reverse();

// function digitize(n) {
//   let arr = [];
//   n = n.toString();
//   for (i = 0; i < n.length; i++) {
//     arr.push(+n[i]);
//   }
//   return arr.reverse();
// }

console.log(digitize(35231));
