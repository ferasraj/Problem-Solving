function betweenExtremes(numbers) {
  numbers = numbers.sort((a, b) => a - b);

  return numbers[numbers.length - 1] - numbers[0];
}

// function betweenExtremes(numbers) {
//     return Math.max.apply(Math, numbers) - Math.min.apply(Math, numbers);
// }
console.log(betweenExtremes([21, 34, 54, 43, 26, 12]));
