const printNums = (...arg) =>
  arg.length === 0
    ? ""
    : arg
        .map((n) =>
          String(n).padStart(Math.max(...arg.map((x) => String(x).length)), "0")
        )
        .join("\n");

console.log(printNums([]));
console.log(printNums([12]));
console.log(printNums(1, 23, 2, 17, 102));
