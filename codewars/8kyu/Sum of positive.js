positiveSum = (arr) => arr.filter((n) => n > 0).reduce((a, b) => a + b, 0);
// positiveSum = (arr) => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
