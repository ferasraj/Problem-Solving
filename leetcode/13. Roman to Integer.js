// let romanToInt = function (s) {
//   let result = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "I") {
//       if (s[i + 1] === "V" || s[i + 1] === "X") result -= 1;
//       else result += 1;
//     } else if (s[i] === "V") {
//       result += 5;
//     } else if (s[i] === "X") {
//       if (s[i + 1] === "L" || s[i + 1] === "C") result -= 10;
//       else result += 10;
//     } else if (s[i] === "L") {
//       result += 50;
//     } else if (s[i] === "C") {
//       if (s[i + 1] === "D" || s[i + 1] === "M") result -= 100;
//       else result += 100;
//     } else if (s[i] === "D") {
//       result += 500;
//     } else if (s[i] === "M") {
//       result += 1000;
//     }
//   }
//   return result;
// };

let romanToInt = function (s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let current = roman[s[i]];
    let next = roman[s[i + 1]];
    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("I"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
