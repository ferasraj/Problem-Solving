function strCount(str, letter) {
  let letterC = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      letterC += str[i];
    }
  }
  return letterC.length;
}

// function strCount(str, letter) {
//   let letterC = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       letterC.push(str[i]);
//     }
//   }
//   return letterC.length;
// }

// const strCount = (str, letter) => str.split(letter).length - 1
// function strCount(str, letter){
//     return (str.match(new RegExp(letter, 'g')) || []).length;
// }

console.log(strCount("hello", "l"));
console.log(strCount("", "z"));
