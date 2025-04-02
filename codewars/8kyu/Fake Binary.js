// fakeBin = (x) => x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
// fakeBin = (x) =>
//   x
//     .split("")
//     .map((i) => (i < 5 ? "0" : "1"))
//     .join("");

fakeBin = (x) =>
  [...Array(x.length)].map((_, i) => (x[i] < 5 ? "0" : "1")).join("");

// function fakeBin(x) {
//   let str = "";
//   for (i = 0; i < x.length; i++) {
//     x[i] < 5 ? (str += "0") : (str += "1");
//   }
//   return str;
// }

console.log(fakeBin("45385593107843568"));
