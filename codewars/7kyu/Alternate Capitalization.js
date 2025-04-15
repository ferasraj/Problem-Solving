function capitalize(s) {
  let str1 = "",
    str2 = "";
  for (i = 0; i < s.length; i++) {
    str1 += i % 2 == 0 ? s[i] : s[i].toUpperCase();
    str2 += i % 2 == 0 ? s[i].toUpperCase() : s[i];
  }
  return [str2, str1];
}

console.log(capitalize("abcdef"));
console.log(capitalize("codewarriors"));

// capitalize = (s) =>
//   [0, 1].map((r) =>
//     [...s].map((c, i) => (i % 2 === r ? c.toUpperCase() : c)).join("")
//   );

// capitalize = (s) => [
//   [...s].map((x, i) => (i % 2 == 0 ? x.toUpperCase() : x)).join(""),
//   [...s].map((x, i) => (i % 2 != 0 ? x.toUpperCase() : x)).join(""),
// ];
