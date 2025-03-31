// function abbrevName(name) {
//   name = name.split(" ");
//   return name[0][0].toUpperCase() + "." + name[1][0].toUpperCase();
// }
function abbrevName(name) {
  return name.match(/\b\w/g).join(".").toUpperCase();
}
console.log(abbrevName("Sam Harris"));
console.log(abbrevName("feras raj"));
