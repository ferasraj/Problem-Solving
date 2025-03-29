function calculator(value1, value2, sign) {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    return "unknown value";
  }

  if (sign === "+") return value1 + value2;
  else if (sign === "-") return value1 - value2;
  else if (sign === "*") return value1 * value2;
  else if (sign === "/") return value1 / value2;
  else return "unknown value";
}

// function calculator(a,b,sign){
// 	var oper = {
// 		"+": a + b,
// 		"-": a - b,
// 		"*": a * b,
// 		"/": a / b
// 	}
// 	return oper[sign] ? oper[sign] : "unknown value"
// }

// function calculator(a, b, sign) {
//     // التحقق مما إذا كانت a و b أرقام صالحة
//     if (typeof a !== "number" || typeof b !== "number") {
//       return "unknown value";
//     }

//     // تنفيذ العملية باستخدام switch
//     switch (sign) {
//       case "+":
//         return a + b;
//       case "-":
//         return a - b;
//       case "*":
//         return a * b;
//       case "/":
//         return a / b;
//       default:
//         return "unknown value"; // إذا كان العامل غير صالح
//     }
//   }

//   // اختبارات
//   console.log(calculator(6, "h", "*")); // الناتج: 'unknown value'
//   console.log(calculator(6, 2, "*"));   // الناتج: 12
//   console.log(calculator(6, 2, "$"));  // الناتج: 'unknown value'

console.log(calculator(1, 2, "+"));
console.log(calculator(1, "h", "-"));
console.log(calculator(6, 2, "$"));
