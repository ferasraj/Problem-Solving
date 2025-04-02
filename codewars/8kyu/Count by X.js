countBy = (x, n) => [...Array(n)].map((_, f) => ++f * x);

// const countBy = (x, n) => Array.from({ length: n }, (_, k) => ++k * x);

console.log(countBy(1, 10));
console.log(countBy(2, 5));
console.log(countBy(3, 5));
