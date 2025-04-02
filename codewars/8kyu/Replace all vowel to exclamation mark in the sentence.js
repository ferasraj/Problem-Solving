// function replace(s) {
//     s = s.split("");
//     let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//     for (let i = 0; i < s.length; i++) {
//       if (arr.includes(s[i])) {
//         s[i] = "!";
//       }
//     }
//     return s.join("");
//   }

let str = "aeiouAEIOU";
replace = (s) =>
  s
    .split("")
    .map((x) => (str.includes(x) ? "!" : x))
    .join("");

// function replace(s){
//     return s.replace(/[aeoiu]/ig, '!')
//   }

console.log(replace("aeiouAEIOiU"));
console.log(replace("hi! h!!"));
