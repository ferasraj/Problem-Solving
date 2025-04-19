// 🎯 Goal of the exercise:
// Given a number n, the task is to return an array containing a set of numbers,
// where each number is a power of 2 (like 1, 2, 4, 8, 16...) and their sum equals n.

// 💡 Idea:
// Any decimal number can be broken down into a sum of powers of 2 using the binary system.
// Each bit in the binary representation tells us whether to include 2^i or not.
// Example: number 19 → binary = 10011 → means we take 2^0 + 2^1 + 2^4 = [1, 2, 16]

// 🛠️ How to implement:
// - Start with i = 0 (the power)
// - Divide n by 2 and check the remainder each time:
//    - If the remainder is 1 → add 2^i to the result array
// - Keep dividing and incrementing i until n becomes 0

// ✅ This way we extract all the powers of 2 that sum up to the given number n.

const powers = (n) => {
  let arr = [];
  i = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      arr.push(Math.pow(2, i));
    }
    n = Math.floor(n / 2);
    i++;
  }
  return arr;
};
// const powers = (n) => {
//   return n
//     .toString(2)
//     .split("")
//     .reverse()
//     .map((v, i) => (+v ? 2 ** i : 0))
//     .filter((v) => v);
// };
console.log(powers(19));
console.log(powers(31));
console.log(powers(1));
