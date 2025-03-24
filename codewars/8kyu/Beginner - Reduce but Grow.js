// function grow(x) {
//   let result = 1;
//   for (let i = 0; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// function grow(x) {
//     let result = 1;
//     for (let num of x) {
//         result *= num;
//     }
//     return result;
// }

grow = (x) => x.reduce((a, b) => a * b);

// جوين تحول الى نص 2*2*2*2*2*2 ثم
//eval تحول الى بيانات جافاسكرربت
// const grow = (x) => eval(x.join("*"));

console.log(grow([2, 2, 2, 2, 2, 2]));
