//لحل هذه المشكلة، يمكننا تحويل السلسلة النصية إلى مصفوفة باستخدام split()
// ، ثم استخدام reverse() لعكس ترتيب العناصر، وأخيرًا
//  إعادة تحويل المصفوفة إلى نص باستخدام join().

const solution = (str) => str.split("").reverse().join("");

// solution = (str) => [...str].reverse().join("");

// function solution(str) {
//   let newStr = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }
console.log(solution("hello"));
