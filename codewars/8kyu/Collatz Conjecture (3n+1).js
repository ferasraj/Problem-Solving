// var hotpo = function (n) {
//   let result = 0;
//   for (; n !== 1; result++) {
//     if (n % 2 === 0) {
//       n = n / 2;
//     } else {
//       n = n * 3 + 1;
//     }
//   }
//   return result;
// };

// const hotpo = n => n === 1 ? 0 : 1 + hotpo(n % 2 ? (n * 3 + 1) : n / 2);

var hotpo = function (n) {
  let result = 0;
  while (n !== 1) {
    if (n % 2 === 0) n = n / 2;
    else n = n * 3 + 1;
    result++;
  }
  return result;
};
console.log(hotpo(6));
