function divisibleBy(numbers, divisor) {
  let arr = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      arr.push(numbers[i]);
    }
  }
  return arr;
}

// divisibleBy = (n, d) =>
//   n.map((n) => (n % d === 0 ? n : null)).filter((x) => x !== null);
divisibleBy = (n, d) => n.filter((n) => !(n % d));

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));
