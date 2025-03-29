function swapValues(args) {
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

let arr = [1, 2];
swapValues(arr);
console.log(arr);

// function swapValues() {
//     return arguments[0].reverse();
//   }

// function swapValues(arr) {
//     return arr.reverse();
// }
