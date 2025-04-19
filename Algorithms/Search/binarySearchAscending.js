function binarySearchAscending(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let step = 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    console.log(`🟨 Step ${step++}:`);
    console.log(`left = ${left}, right = ${right}, mid = ${mid}`);
    console.log(`arr[mid] = ${arr[mid]}, target = ${target}`);

    if (arr[mid] === target) {
      console.log("✅ Element found!");
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    console.log("-------------------------------------");
  }

  console.log("❌ Element not found in the array.");
  return -1;
}

// Test example
let arrAsc = [1, 3, 5, 7, 9];
let targetAsc = 7;

binarySearchAscending(arrAsc, targetAsc);
