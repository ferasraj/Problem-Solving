function trickyDoubles(n) {
  n = String(n);
  if (n.length % 2 == 0) {
    return +n;
  }
  return n * 2;
}
console.log(trickyDoubles(4));
console.log(trickyDoubles(15));
console.log(trickyDoubles(100100));
console.log(trickyDoubles(100100));

// function trickyDoubles(n) {
//     let str = String(n); // نحول الرقم إلى نص
//     if (str.length % 2 === 0) { // فقط لو طوله زوجي
//       let half = str.length / 2;
//       let left = str.slice(0, half); // النصف الأول
//       let right = str.slice(half);   // النصف الثاني
//       if (left === right) {
//         return n; // إذا الجزئين متساويين، نرجع الرقم
//       }
//     }
//     return n * 2; // إذا مو double، نرجع الرقم مضروب ×2
//   }
