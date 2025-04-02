// function getAge(inputString) {
//   switch (inputString) {
//     case "0 year old":
//       return 0;
//     case "1 year old":
//       return 1;
//     case "2 years old":
//       return 2;
//     case "3 years old":
//       return 3;
//     case "4 years old":
//       return 4;
//     case "5 years old":
//       return 5;
//     case "6 years old":
//       return 6;
//     case "7 years old":
//       return 7;
//     case "8 years old":
//       return 8;
//     case "9 years old":
//       return 9;
//   }
// }

getAge = (inputString) => Number(inputString[0]);
// getAge = (inputString) => parseInt(inputString);
// getAge = (inputString) => +inputString[0];
// getAge = parseInt;

console.log(getAge("4 years old"));
console.log(getAge("9 years old"));
console.log(getAge("1 year old"));
