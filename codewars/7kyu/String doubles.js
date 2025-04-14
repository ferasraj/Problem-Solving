doubles = (s) =>
  (s = s
    .split("")
    .reduce((a, b) => (a[a.length - 1] === b ? a.pop() : a.push(b), a), [])
    .join(""));

console.log(doubles("abbbzz"));
console.log(doubles("rrrmooomqqqqj"));

// function doubles(s) {
//   let result = [];

//   for (let i = 0; i < s.length; i++) {
//     let current = s[i];

//     if (result.length > 0 && result[result.length - 1] === current) {
//       // حذف آخر عنصر لأنه متكرر
//       result.pop();
//     } else {
//       // نضيف الحرف لأنه مختلف
//       result.push(current);
//     }
//   }

//   return result.join("");
// }
