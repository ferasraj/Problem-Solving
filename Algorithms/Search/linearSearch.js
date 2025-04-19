function linearSearch(arr, target) {
  let step = 1;

  for (let i = 0; i < arr.length; i++) {
    console.log(`🟨 Step ${step++}:`);
    console.log(`Index = ${i}, Value = ${arr[i]}, Target = ${target}`);

    if (arr[i] === target) {
      console.log("✅ Element found!");
      return i;
    }
  }

  console.log("❌ Element not found in the array.");
  return -1;
}

// Test Example
let arr = [2, 4, 5, 6, 9];
let target = 5;

let result = linearSearch(arr, target);
console.log(`📌 Result: element found at index = ${result}`);
