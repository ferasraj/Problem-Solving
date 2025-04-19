function jumpSearch(arr, target) {
  const n = arr.length;
  const stepSize = Math.floor(Math.sqrt(n));
  let step = stepSize;
  let prev = 0;
  let logStep = 1;

  // Jump through blocks to find the block where target could be
  while (arr[Math.min(step, n) - 1] < target) {
    console.log(
      `🟨 Jump Step ${logStep++}: Checking index ${Math.min(step, n) - 1}`
    );
    prev = step;
    step += stepSize;

    if (prev >= n) return -1; // target is beyond array range
  }

  // Do linear search in the block found
  for (let i = prev; i < Math.min(step, n); i++) {
    console.log(`🟨 Linear Step ${logStep++}: Checking index ${i}`);
    if (arr[i] === target) {
      return i;
    }
  }

  return -1; // not found
}

// مثال:
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
const target = 15;
console.log(`🎯 Index of ${target} is: ${jumpSearch(arr, target)}`);
