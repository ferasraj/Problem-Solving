doubleEveryOther = (a) => a.map((v, i) => (i % 2 ? v * 2 : v));

// function doubleEveryOther(array) {
//     let arr = [];
//     for (let i = 0; i < array.length; i++) {
//       if (i % 2 !== 0) {
//         arr.push(array[i] * 2);
//       } else {
//         arr.push(array[i]);
//       }
//     }
//     return arr;
//   }

console.log(doubleEveryOther([1, 2, 3, 4]));
console.log(doubleEveryOther([-3, -3, 3, 3, -3, -3, 6]));
