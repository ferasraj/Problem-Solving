var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};
// const countSheep = (num) =>
//   [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");

console.log(countSheep(3));
console.log(countSheep(2));
console.log(countSheep(0));

//1 sheep...2 sheep...3 sheep..."
