const sumDigits = (n) =>
  [...Math.abs(n).toString()].reduce((a, b) => a + +b, 0);

// const sumDigits = (number) =>
//   String(number)
//     .split("")
//     .filter((n) => n !== "-")
//     .map(Number)
//     .reduce((a, b) => a + b, 0);

// function sumDigits(number) {
//   number = Math.abs(number); // نخلي الرقم موجب
//   let sum = 0;

//   while (number > 0) {
//     sum += number % 10;
//     console.log(number % 10);
//     // نأخذ الرقم الأخير ونضيفه للمجموع
//     number = Math.floor(number / 10); // نحذف الرقم الأخير
//   }

//   return sum;
// }

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));
