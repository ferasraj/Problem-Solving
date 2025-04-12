const {
  getAverage,
  getGrade,
  hasPassingGrade,
  studentMsg,
} = require("./build-a-gradebook-app");

test("getGrade returns A+ for 100", () => {
  expect(getGrade(100)).toBe("A+");
});

test("getGrade returns B for 85", () => {
  expect(getGrade(85)).toBe("B");
});

test("getGrade returns F for 50", () => {
  expect(getGrade(50)).toBe("F");
});

test("getAverage calculates correctly", () => {
  expect(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])).toBe(71.7);
});

test("hasPassingGrade returns false for F", () => {
  expect(hasPassingGrade(30)).toBe(false);
});

test("hasPassingGrade returns true for B", () => {
  expect(hasPassingGrade(85)).toBe(true);
});

test("studentMsg returns correct fail message", () => {
  expect(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)).toBe(
    "Class average: 71.7. Your grade: F. You failed the course."
  );
});

test("studentMsg returns correct pass message", () => {
  expect(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100)).toBe(
    "Class average: 50.8. Your grade: A+. You passed the course."
  );
});
