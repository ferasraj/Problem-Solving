const strongEnough = (earthquake, age) =>
  1000 * 0.99 ** age >=
  earthquake.map((row) => row.reduce((a, b) => a + b)).reduce((a, b) => a * b)
    ? "Safe!"
    : "Needs Reinforcement!";

console.log(
  strongEnough(
    [
      [2, 3, 1],
      [3, 1, 1],
      [1, 1, 2],
    ],
    2
  )
);
