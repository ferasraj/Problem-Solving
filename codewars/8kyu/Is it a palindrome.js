const isPalindrome = (x) =>
  x.toUpperCase() === x.split("").reverse().join("").toUpperCase()
    ? true
    : false;

console.log(isPalindrome("hello"));
console.log(isPalindrome("Madam"));
