// function getPlanetName(id) {
//   var name;
//   switch (id) {
//     case 1:
//       return "Mercury";
//     case 2:
//       return "Venus";
//     case 3:
//       return "Earth";
//     case 4:
//       return "Mars";
//     case 5:
//       return "Jupiter";
//     case 6:
//       return "Saturn";
//     case 7:
//       return "Uranus";
//     case 8:
//       return "Neptune";
//   }

//   return name;
// }
getPlanetName = (id) =>
  [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ][id - 1];

console.log(getPlanetName(3));
