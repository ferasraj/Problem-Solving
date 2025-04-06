console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");

function printTriangle(height, symbol = "#") {
  for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(height - i);
    let symbols = symbol.repeat(2 * i - 1);
    console.log(spaces + symbols);
  }
}
printTriangle(5, "%");
