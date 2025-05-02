const isPalindrome = (x) => {
  if (x < 0) return false;

  let original = x;
  let reversed = 0;

  while (x > 0) {
    let digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  if (reversed === original) return true;
  else return false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(333));
console.log(isPalindrome(100));

// const isPalindrome = (x) => {
//     if (x < 0) return false;

//     let original = x;
//     let reversed = 0;

//     console.log(`Original number: ${original}`);
//     console.log("Starting the reverse process:\n");

//     while (x > 0) {
//       let digit = x % 10;
//       console.log(`Got digit: ${digit} (from ${x} % 10)`);

//       reversed = reversed * 10 + digit;
//       console.log(`Updated reversed: ${reversed}`);

//       x = Math.floor(x / 10);
//       console.log(`Trimmed x: ${x}\n`);
//     }

//     console.log(`Final reversed number: ${reversed}`);
//     console.log(`Is palindrome? ${original === reversed}\n`);

//     return original === reversed;
//   };
//   isPalindrome(121);
