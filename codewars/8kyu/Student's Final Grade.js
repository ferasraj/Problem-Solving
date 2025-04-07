function finalGrade(e, p) {
  if (e > 90 || p > 10) return 100;
  if (e > 75 && p >= 5) return 90;
  if (e > 50 && p >= 2) return 75;
  return 0;
}

// finalGrade = (e, p) =>
//     e > 90 || p > 10 ? 100 : e > 75 && p >= 5 ? 90 : e > 50 && p >= 2 ? 75 : 0;

console.log(finalGrade(100, 12));
console.log(finalGrade(85, 5));
console.log(finalGrade(60, 4));
