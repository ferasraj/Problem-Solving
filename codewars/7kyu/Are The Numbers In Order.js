function inAscOrder(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

inAscOrder = (arr) => arr.every((_, i) => i == 0 || arr[i] > arr[i - 1]);
// const inAscOrder = (arr) => arr.slice(1).every((val, i) => val >= arr[i]);

console.log(inAscOrder([1, 2, 4, 7, 19]));
console.log(inAscOrder([1, 2, 3, 4, 5]));
console.log(inAscOrder([1, 6, 10, 18, 2, 4]));
