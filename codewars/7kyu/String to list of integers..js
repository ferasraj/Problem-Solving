const stringToIntArray = (s) =>
  s
    .split(",")
    .filter((v) => v != "")
    .map((v) => Number(v));

// function stringToIntArray(s) {
//   return s.split(",").filter(Boolean).map(Number);
// }
console.log(stringToIntArray("1,2,3,,,4,,5,,,"));
console.log(stringToIntArray(""));
console.log(stringToIntArray(",,,,"));
console.log(stringToIntArray("21,12,23,34,45"));
