// const quarterOf = (month) => {
//   if (month <= 3) {
//     return 1;
//   } else if (month <= 6) {
//     return 2;
//   } else if (month <= 9) {
//     return 3;
//   } else return 4;
// };

const quarterOfm = (month) => Math.ceil(month / 3);
console.log(quarterOfm(11));
