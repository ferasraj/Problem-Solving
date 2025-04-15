function validParentheses(parens) {
  let result = 0;
  for (i of parens) {
    if (i === "(") {
      result++;
    } else {
      result--;
    }
    if (result < 0) {
      return false;
    }
  }
  return !result;
}
console.log(validParentheses("()"));
console.log(validParentheses("())("));

// function validParentheses(parens) {
//     let result = 0;
//     for (i of parens) if ((i === "(" ? result++ : result--) < 0) return false;

//     return !result;
//   }
