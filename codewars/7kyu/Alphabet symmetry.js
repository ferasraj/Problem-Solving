function solve(arr) {
  let newArr = [];
  for (let word of arr) {
    word = word.toLowerCase();
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (word.charCodeAt(i) - 96 === i + 1) {
        count++;
      }
    }
    newArr.push(count);
  }
  return newArr;
}
console.log(solve(["abode"]));
console.log(solve(["codewars", "abc", "xyz"]));
console.log(solve(["a", "b", "c"]));

// function solve(arr) {
//   // استقبال النتائج
//   let newArr = [];
//   //!التعامل مع اجزاء المصفوفة ك جزء جزء [[]]
//   for (let word of arr) {
//     word = word.toLowerCase(); //^ للتعامل مع الحروف كبتل او سمول
//     let count = 0;
//     //!لوب للمرور على [word] في ال مصفوفة
//     for (let i = 0; i < word.length; i++) {
//       //التحقق من موقع العنصر بناء ع ascii
//       if (word.charCodeAt(i) - 96 === i + 1) {
//         count++;
//       }
//     }
//     // تصدير نتيجة العداد لداخل ال مصفوفة الجديدة
//     newArr.push(count);
//   }
//   //!خارج اللوب كامل اعادة المصفوفة الجديدة
//   return newArr;
// }
// console.log(solve(["abode"]));
// console.log(solve(["codewars", "abc", "xyz"]));
// console.log(solve(["a", "b", "c"]));

// function solve(arr){
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'

//     let final = []
//     for (let i = 0; i < arr.length; i++) {
//       let count = 0;
//       for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j].toLowerCase() === alphabet[j]) {
//           count++;
//         }
//       }
//       final.push(count);
//     }
//     return final
//   };
