function checkOrder(arr) {
  let isAsc = true;
  let isDesc = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      isDesc = false; // مش تنازلي
    } else if (arr[i] > arr[i + 1]) {
      isAsc = false; // مش تصاعدي
    }
  }

  if (isAsc) {
    console.log("The array is sorted in Ascending Order.");
    return "asc";
  } else if (isDesc) {
    console.log("The array is sorted in Descending Order.");
    return "desc";
  } else {
    console.log("The array is not sorted.");
    return "unsorted";
  }
}

// Test example
let arr = [9, 7, 5, 3, 1];
checkOrder(arr);
