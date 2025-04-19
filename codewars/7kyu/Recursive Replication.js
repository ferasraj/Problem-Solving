// function replicate(times, number) {
//   let arr = [];
//   for (let i = 0; i < times; i++) {
//     arr.push(number);
//   }
//   return arr;
// }

//!Recursion الاستدعاء الذاتي
function replicate(times, number) {
  if (times <= 0) {
    return [];
  }
  return [number].concat(replicate(times - 1, number));
}
console.log(replicate(3, 5));
console.log(replicate(5, 1));
console.log(replicate(0, 12));
