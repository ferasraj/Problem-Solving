// getMiddle = (s) =>
//   s.length % 2 === 0
//     ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
//     : s.slice(s.length / 2, s.length / 2 + 1);

getMiddle = (s) => s.slice((s.length - 1) / 2, s.length / 2 + 1);

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
console.log(getMiddle("of"));
