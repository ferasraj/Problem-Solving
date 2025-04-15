// function reverseNumber(n) {
//   n = String(n);
//   if (n[0] === "-") {
//     n = n.slice(1).split("").reverse().join("");
//     n = "-" + n;
//     return n * 1;
//   } else {
//     n = n.split("").reverse().join("");
//   }

//   return n * 1;
// }
reverseNumber = (n) =>
  String(Math.abs(n)).split("").reverse().join("") * Math.sign(n);

// reverseNumber = (n) =>
//     n > 0
//       ? String(Math.abs(n)).split("").reverse().join("") * 1
//       : String(Math.abs(n)).split("").reverse().join("") * -1;

console.log(reverseNumber(12345));
console.log(reverseNumber(-123));
console.log(reverseNumber(10000));
