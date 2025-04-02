sumStr = (a, b) => +a + +b + "";
// sumStr = (a, b) => String(+a + +b);
// sumStr = (a, b) => (+a + +b).toString();
// sumStr = (a, b) => (Number(a) + Number(b)).toString();
// sumStr = (a, b) => String(Number(a) + Number(b));

console.log(sumStr("4", "5"));
console.log(sumStr("34", "5"));
