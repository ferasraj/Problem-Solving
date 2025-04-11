function digits(num) {
  num = [...num.toString()].map(Number);
  let result = [];
  for (i = 0; i < num.length; i++) {
    for (j = i + 1; j < num.length; j++) {
      result.push(num[i] + num[j]);
    }
  }
  return result;
}

console.log(digits(12345));
