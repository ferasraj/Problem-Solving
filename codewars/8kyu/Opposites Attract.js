// function lovefunc(flower1, flower2) {
//   if (
//     (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
//     (flower1 % 2 !== 0 && flower2 % 2 === 0)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;

console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
console.log(lovefunc(0, 1));
console.log(lovefunc(0, 0));
console.log(lovefunc(563, 859));
