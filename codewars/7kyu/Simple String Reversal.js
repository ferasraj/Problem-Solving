function solve(str) {
  let res = "";
  for (i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      res += str[i];
    }
    if (str[res.length] === " ") {
      res += " ";
    }
  }
  return res;
}

console.log(solve("codewars"));
console.log(solve("your code"));
console.log(solve("your code rocks"));
