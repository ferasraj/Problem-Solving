spread = (func, args) => func(...args);

greet = (name, age) => `Hello ${name}, you are ${age} years old`;

console.log(spread(greet, ["Feras", 30]));
("Hello Firas, you are 30 years old");
