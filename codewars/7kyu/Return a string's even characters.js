// function evenChars(string) {
//   let arr = [];

//   for (let i = 1; i < string.length; i++) {
//     if (i % 2 != 0) {
//       arr.push(string[i]);
//     }
//   }
//   if (string.length < 2 || string.length > 100) {
//     return "invalid string";
//   }
//   return arr;
// }

const evenChars = (string) =>
  string.length < 2 || string.length > 100
    ? "invalid string"
    : [...string].filter((_, i) => i % 2);

console.log(evenChars("abcdefghijklm"));
console.log(evenChars(""));
console.log(
  evenChars(
    "aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva"
  )
);
