// function removeChar(string) {
//   let arr = string.split("");
//   arr.pop();
//   arr.shift();

//   return arr.join("");
// }
removeChar = (s) => s.slice(1, -1);

// function removeChar(string) {
//   let stringA = "";
//   for (let i = 1; i < string.length - 1; i++) {
//     stringA += string[i];
//   }
//   return stringA;
// }

console.log(removeChar("hello")); // الناتج: "ell"
