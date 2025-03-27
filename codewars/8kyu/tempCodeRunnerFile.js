function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
}