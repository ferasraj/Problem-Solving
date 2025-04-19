function smartBinarySearch(arr, target) {
  let order = checkOrder(arr); // يتأكد من الترتيب

  if (order === "asc") {
    return binarySearchAscending(arr, target); // يبحث باستخدام Binary Search تصاعدي
  } else if (order === "desc") {
    return binarySearchDescending(arr, target); // يبحث باستخدام Binary Search تنازلي
  } else {
    console.log("Using Linear Search because the array is unsorted.");
    return linearSearch(arr, target); // لو غير مرتبة، نستخدم البحث الخطي
  }
}

// Test example
let arrMixed = [1, 3, 5, 7, 9]; // جرب مع مصفوفة مرتبة تصاعدي
let target = 7;

let result = smartBinarySearch(arrMixed, target);
console.log(`Element found at index = ${result}`);
