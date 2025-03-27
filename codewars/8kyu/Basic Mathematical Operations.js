// function basicOp(operation, value1, value2){

//     if (operation === "+" ){
//         return value1 + value2
//         }
//     if (operation === "-" ){
//         return value1 - value2
//         }
//     if (operation === "*" ){
//         return value1 * value2
//         }
//     if (operation === "/" ){
//         return value1 / value2
//         }

//     return 0;
//   }

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}

// لتجنب القسمة ع 0
// if (b === 0) {
//     throw new Error("Division by zero is not allowed");
//   }
//   return a / b;
// default:
//   throw new Error("Invalid operator");

// function basicOp(operation, value1, value2)
// {
//   var cases = {
//     '+': value1 + value2,
//     '-': value1 - value2,
//     '*': value1 * value2,
//     '/': value1 / value2
//   };
//   return cases[operation]
// }

// function basicOp(o, a, b) {
//   return eval(a + o + b);
// }
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 0));
