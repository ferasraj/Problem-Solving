// function twoSort(arr) {
//   arr.sort();
//   arr = arr[0];

//   let str = "";
//   for (i = 0; i < arr.length; i++) {
//     str += `${arr[i]}${i < arr.length - 1 ? "***" : ""}`;
//   }
//   return str;
// }

// function twoSort(arr) {
//   return arr[0]
//     .split("")
//     .sort()
//     .map((_, x) => arr[0][x] + `${x < arr[0].length - 1 ? "***" : ""}`)
//     .join("");
// }

twoSort = (arr) => arr.sort()[0].split("").join("***");
console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
