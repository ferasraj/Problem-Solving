hero = (bullets, dragons) => (bullets / 2 >= dragons ? true : false);

console.log(hero(10, 5));
console.log(hero(100, 40));
console.log(hero(0, 5));
