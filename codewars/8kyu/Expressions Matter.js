function expressionMatter(a, b, c) {
  let x = a * (b + c);
  let y = a * b * c;
  let z = a + b * c;
  let u = (a + b) * c;
  let t = a + b + c;

  return Math.max(x, y, z, u, t);
}

// const expressionMatter = (a,b,c) => Math.max( a+b+c, (a+b)*c, a*(b+c), a*b*c ) ;

console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(2, 1, 1));
console.log(expressionMatter(1, 1, 1));
