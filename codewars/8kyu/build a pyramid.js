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
printTriangle(5, "o");

function pyramid(pattern, rows, isInverted) {
  let result = "\n";
  for (i = 1; i <= rows; i++) {
    let level = isInverted ? rows - i + 1 : i;
    result += " ".repeat(rows - level) + pattern.repeat(2 * level - 1) + "\n";
  }
  return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("o", 4, true));
