const sequenceSum = (begin, end, step) => {
  let count = 0;
  for (i = begin; i <= end; i += step) {
    count += i;
  }
  return count;
};

// sequenceSum = (b, e, s) =>  b > e ? 0 : b + sequenceSum(b + s, e, s);

console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
