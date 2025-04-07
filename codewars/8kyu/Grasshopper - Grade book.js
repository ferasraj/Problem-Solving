function getGrade(s1, s2, s3) {
  let avarage = (s1 + s2 + s3) / 3;
  switch (true) {
    case avarage >= 90:
      return "A";
    case avarage >= 80:
      return "B";
    case avarage >= 70:
      return "C";
    case avarage >= 60:
      return "D";
    default:
      return "F";
  }
}
console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 50));
