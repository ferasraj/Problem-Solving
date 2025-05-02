var countCompleteSubarrays = function (nums) {
  let distinctCount = new Set(nums).size;
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let tempset = new Set();
    for (let j = i; j < nums.length; j++) {
      tempset.add(nums[j]);
      if (tempset.size === distinctCount) {
        total++;
      }
    }
  }
  return total;
};

console.log(countCompleteSubarrays([1, 3, 1, 2, 2]));

// var countCompleteSubarrays = function (nums) {
//     let distinctCount = new Set(nums).size;
//     console.log(`🔢 Original nums: [${nums}]`);
//     console.log(`🌟 Distinct elements count: ${distinctCount}\n`);

//     let total = 0;

//     for (let i = 0; i < nums.length; i++) {
//       let tempSet = new Set();
//       console.log(`\n➡️ Starting new subarray from index ${i}:`);

//       for (let j = i; j < nums.length; j++) {
//         tempSet.add(nums[j]);
//         console.log(
//           `   Added nums[${j}] = ${nums[j]} -> Current Set: {${[...tempSet]}}`
//         );

//         if (tempSet.size === distinctCount) {
//           total++;
//           console.log(`   ✅ Complete subarray found from index ${i} to ${j}`);
//         }
//       }
//     }

//     console.log(`\n🔚 Total complete subarrays: ${total}`);
//     return total;
//   };
//   countCompleteSubarrays([1, 3, 1, 2, 2]);
