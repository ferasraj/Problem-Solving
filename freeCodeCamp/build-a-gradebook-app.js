function getAverage(score) {
  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  return sum / score.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  let grade = getGrade(score);
  return grade !== "F";
}

function studentMsg(classScores, studentScore) {
  let average = getAverage(classScores);
  let grade = getGrade(studentScore);
  let passed = hasPassingGrade(studentScore);
  return `Class average: ${average}. Your grade: ${grade}. You ${
    passed ? "passed" : "failed"
  } the course.`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// Class average: 71.7. Your grade: F. You failed the course.

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
// Class average: 50.8. Your grade: A+. You passed the course.

module.exports = {
  getAverage,
  getGrade,
  hasPassingGrade,
  studentMsg,
};
