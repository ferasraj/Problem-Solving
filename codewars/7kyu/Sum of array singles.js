function r(arr) {
  let count = {};
  let result = [];
  for (let num of arr) {
    //العداد عام يكون
    count[num] = (count[num] || 0) + 1;
  }
  for (let num of arr) {
    count[num] === 1 ? result.push(num) : null;
  }
  return result.reduce((a, b) => a + b, 0);
}

console.log(r([4, 5, 7, 5, 4, 8]));
