//! Using O(n2)
// let twoSum = function (nums, target) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         arr = [i, j];
//         return arr;
//       }
//     }
//   }
// };

//! Using O(n)

let twoSum = function (nums, target) {
  let map = new Map();

  console.log(`Input array: ${nums}`);
  console.log(`Target: ${target}\n`);

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let complement = target - current;

    console.log(`Checking index ${i}, value: ${current}`);
    console.log(`Complement needed: ${complement}`);

    if (map.has(complement)) {
      console.log(
        `Found complement ${complement} at index ${map.get(complement)}`
      );
      console.log(`Returning indices: [${map.get(complement)}, ${i}]\n`);
      return [map.get(complement), i];
    }

    console.log(
      `Complement not found, storing ${current} at index ${i} in the map.\n`
    );
    map.set(current, i);
  }

  console.log("No solution found.");
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));
