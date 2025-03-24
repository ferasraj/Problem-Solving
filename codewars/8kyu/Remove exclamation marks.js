//split to array , then join to string

// function removeExclamationMarks(s) {
//   return s.split("!").join("");
// }

// let s = "Hello! World!";
// let result = removeExclamationMarks(s);

// console.log(result);

function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

// function removeExclamationMarks(s) {
//     return s.replaceAll('!', '');
//   }
