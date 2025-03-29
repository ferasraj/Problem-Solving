greet = (name) =>
  name === "Johnny" ? `Hello, ${(name = "my love")}!` : `Hello, ${name}!`;

// function greet(name){
//   return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
// }

console.log(greet("Johnny"));
console.log(greet("Feras"));
