summation = (num) =>
  [...Array(num)].map((_, i) => i + 1).reduce((a, b) => a + b);

// var summation = function (num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//       sum += i;
//     }
//     return sum;
//   };

// function summation(num) {
//     return num * (num + 1) / 2
//   }

console.log(summation(8)); // (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) =
