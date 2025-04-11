function oddOnesOut(nums) {
  let arr = [];
  for (i = 0; i < nums.length; i++) {
    let count = 0;
    for (j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count % 2 === 0) {
      arr.push(nums[i]);
    }
  }
  return arr;
}
console.log(oddOnesOut([1, 1, 2, 2, 3, 3, 3]));
console.log(oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]));
console.log(oddOnesOut([1, 2, 3]));
