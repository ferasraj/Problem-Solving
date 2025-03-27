String.prototype.isUpperCase = function () {
  for (var i = 0; i < this.length; i++) {
    if (this[i] !== this[i].toUpperCase()) {
      return false;
    }
  }
  return true;
};

// String.prototype.isUpperCase = function () {
//   return this == this.toUpperCase();
// };

console.log("HELLO".isUpperCase());
console.log("hello".isUpperCase());
console.log("Hello".isUpperCase());
