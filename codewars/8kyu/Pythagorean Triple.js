function isPythagoreanTriple(i) {
  i.sort((a, b) => a - b);
  return i[0] ** 2 + i[1] ** 2 === i[2] ** 2;
}
console.log(isPythagoreanTriple([3, 4, 5]));
console.log(isPythagoreanTriple([5, 3, 4]));
console.log(isPythagoreanTriple([3, 5, 9]));
console.log(isPythagoreanTriple([13, 12, 5]));
