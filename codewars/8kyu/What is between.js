function between(a, b) {
  let arr = [];
  for (i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr;
}
console.log(between(1, 4));
console.log(between(-2, 2));
