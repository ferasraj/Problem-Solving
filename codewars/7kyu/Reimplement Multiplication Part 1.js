function mul(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}

console.log(mul(5, 5));
console.log(mul(1, 0));
console.log(mul(1, 1));
console.log(mul(2, 2));
