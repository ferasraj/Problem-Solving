import chalk from "chalk"; // إذا تستخدم ESM
// أو const chalk = require("chalk"); // إذا تستخدم CommonJS
// أولاً، تأكد أنك قمت بتثبيت مكتبة chalk
// npm install chalk

// طباعة نصوص ملونة
console.log(chalk.green("This is green text! 🌱"));
console.log(chalk.blue.bgWhite("This is blue text on a white background!"));
console.log(chalk.red.bold("This is red bold text! 💥"));
console.log(chalk.yellow.underline("This is yellow underlined text! ⚡"));
console.log(chalk.magenta("This is magenta text! 🎨"));
console.log(chalk.cyan("This is cyan text! 🌊"));
console.log(chalk.white.bgBlue("This is white text on a blue background!"));

console.log(chalk.bgBlack.green("Black background and green text!"));
