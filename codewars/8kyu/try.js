// function betterThanAverage(classPoints, yourPoints) {
//   // حساب أكبر عدد في المصفوفة باستخدام حلقة for
//   let maxScore = classPoints[0]; // نبدأ بأول عنصر كأكبر عدد
//   for (let i = 1; i < classPoints.length; i++) {
//     if (classPoints[i] > maxScore) {
//       maxScore = classPoints[i]; // تحديث أكبر عدد إذا وجدنا عددًا أكبر
//     }
//   }

//   // مقارنة درجاتك مع أكبر عدد
//   return yourPoints > maxScore;
// }

function betterThanAverage(classPoints, yourPoints) {
  // حساب مجموع درجات الزملاء باستخدام حلقة for
  let totalClassPoints = 0;
  for (let i = 0; i < classPoints.length; i++) {
    totalClassPoints += classPoints[i];
  }

  // إضافة درجاتك إلى المجموع الكلي
  const totalPoints = totalClassPoints + yourPoints;

  // حساب المتوسط (عدد الطلاب = عدد الزملاء + نفسك)
  const average = totalPoints / (classPoints.length + 1);

  // مقارنة درجاتك مع المتوسط
  return yourPoints > average;
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // الناتج: true
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)); // الناتج: false
//https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
