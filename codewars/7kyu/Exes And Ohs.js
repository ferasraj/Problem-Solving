// function XO(str) {
//   let x = 0;
//   let o = 0;
//   for (i = 0; i < str.length; i++) {
//     if (str[i] === "x" || str[i] === "X") {
//       x++;
//     } else if (str[i] === "o" || str[i] === "O") {
//       o++;
//     }
//   }
//   if (x === o) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }
XO = (str) =>
  (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length;

// function XO(str) {
//   let x = "x";
//   let o = "o";
//   let countX = 0;
//   let countO = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === x) {
//       countX++;
//     } else if (str[i].toLowerCase() === o) {
//       countO++;
//     }
//   }
//   if (countX === countO) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function XO(str) {
//     var sum = 0;
//     for(var i=0; i<str.length; i++){
//       if(str[i].toLowerCase() == 'x') sum++;
//       if(str[i].toLowerCase() == 'o') sum--;
//     }
//     return sum == 0;
//   }

console.log(XO("ooxx"));
console.log(XO("ooxxx"));
console.log(XO("ooxXm"));
