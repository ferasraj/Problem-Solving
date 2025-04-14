// sumOfIntegersInString = (str) =>
//   str
//     .match(/\d+/g)
//     .map(Number)
//     .reduce((a, b) => a + +b, 0);

console.log(
  sumOfIntegersInString(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
  )
);

// function sumOfIntegersInString(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i])) {
//       arr.push(str[i]);
//     } else {
//       arr.push(" ");
//     }
//   }
//   return (
//     arr
//       .join("")
//       .split(" ")
//       // .map(Number)
//       .reduce((a, b) => a + +b, 0)
//   );
// }
