// function century(year) {
//   return Math.ceil(year / 100);
// }

let century = (year) => Math.ceil(year / 100);

// function century(year) {
//   return ((year + 99) / 100) | 0; // ال |0 كانه دالة truns تزيل الكسر
// }

console.log(century(101));
