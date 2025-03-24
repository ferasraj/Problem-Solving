var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// var min = function (list) {
//   let min = list[0];
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] < min) {
//       min = list[i];
//     }
//   }
//   return min;
// };
// console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));

// const min = list => list.reduce((a, b) => a < b ? a : b)

// const max = list => list.reduce((a, b) => a > b ? a : b)
