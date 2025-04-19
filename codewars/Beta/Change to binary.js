// const powers = (n) => {
//   let arr = [];
//   i = 0;
//   while (n > 0) {
//     if (n % 2 === 1) {
//       arr.push(1);
//     } else {
//       arr.push(0);
//     }
//     n = Math.floor(n / 2);
//     i++;
//   }
//   return arr.reverse().join("");
// };
powers = (n) => n.toString(2);

console.log(powers(31)); //11111
console.log(powers(3));
