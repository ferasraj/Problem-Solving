flip = (d, a) =>
  d === "R" ? a.sort((x, y) => x - y) : a.sort((x, y) => y - x);

// const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);

// function gravitySwitch(d, a) {
//   if (d === "R") {
//     // ترتيب تصاعدي للجاذبية باتجاه اليمين
//     return [...a].sort((x, y) => x - y);
//   } else {
//     // ترتيب تنازلي للجاذبية باتجاه اليسار
//     return [...a].sort((x, y) => y - x);
//   }
// }

console.log(flip("R", [3, 2, 1, 2])); // [1, 2, 2, 3]
console.log(flip("L", [1, 4, 5, 3, 5])); // [5, 5, 4, 3, 1]
