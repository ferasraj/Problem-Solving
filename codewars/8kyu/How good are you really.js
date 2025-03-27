// function betterThanAverage(classPoints, yourPoints) {
//   let totalClassPoints = 0;
//   for (i = 0; i < classPoints.length; i++) {
//     totalClassPoints += classPoints[i];
//   }
//   let total = totalClassPoints + yourPoints;
//   return yourPoints >= total / classPoints.length;
// }

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length;
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); //  true
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)); //  false
console.log(betterThanAverage([2, 3], 5)); // true
