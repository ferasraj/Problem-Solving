function gimmeTheLetters(sp) {
  let [start, end] = sp.split("-");
  let startCode = start.charCodeAt(0);
  let endCode = end.charCodeAt(0);
  let str = "";
  for (i = startCode; i <= endCode; i++) {
    str += String.fromCharCode(i);
  }
  return str;
}

console.log(gimmeTheLetters("Q-Z"));
console.log(gimmeTheLetters("A-D"));

// function gimmeTheLetters(sp) {
//     str = "";
//     for (i = sp[0].charCodeAt(); i <= sp[2].charCodeAt(); i++) {
//       str += String.fromCharCode(i);
//     }
//     return str;
//   }
