function multiTable(number) {
  let str = "";
  for (i = 1; i <= 10; i++) {
    str += `${i} * ${number} = ${number * i}${i < 10 ? "\n" : ""} `;
  }
  return str;
}

// function multiTable(n) {
//   return [...Array(10)]
//     .map((_, i) => `${i + 1} * ${n} = ${n * i + n}`)
//     .join("\n");
// }
// const multiTable = n => Array.from(Array(10), (e, i) => `${++i} * ${n} = ${i * n}`).join('\n');

console.log(multiTable(5));
