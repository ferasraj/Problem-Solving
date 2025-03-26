String.prototype.toAlternatingCase = function () {
  let str = "";
  for (var i = 0; i < this.length; i++) {
    if (this[i] === this[i].toLowerCase()) {
      str += this[i].toUpperCase();
    } else {
      str += this[i].toLowerCase();
    }
  }
  return str;
};

// String.prototype.toAlternatingCase = function () {
//   return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
// }
console.log("HeLLo WoRLD".toAlternatingCase());
