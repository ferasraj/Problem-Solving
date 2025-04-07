function countPositivesSumNegatives(input) {
  let arrP = [];
  let arrN = [];
  if (input === null || input.length === 0) {
    return [];
  }
  for (i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      arrN.push(input[i]);
    } else if (input[i] > 0) {
      arrP.push(input[i]);
    }
  }
  arrN = arrN.reduce((a, b) => a + b, 0);
  arrP = arrP.length;

  console.log(arrP);
  console.log(arrN);
  return [arrP, arrN];
}
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
console.log(countPositivesSumNegatives([]));
