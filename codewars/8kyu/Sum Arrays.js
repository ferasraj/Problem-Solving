sum = (n) => (!n.length ? 0 : n.reduce((a, b) => a + b));
// sum = (n) => n.reduce((a, b) => a + b, 0);

console.log(sum([1, 2, 3]));
console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));
console.log(sum([null, 2]));
