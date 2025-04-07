// function points(g) {
//   let count = 0;
//   for (let i = 0; i < g.length; i++) {
//     if (Number(g[i].split(":")[0]) > Number(g[i].split(":")[1])) {
//       count += 3;
//     } else if (Number(g[i].split(":")[1]) > Number(g[i].split(":")[0])) {
//       count += 0;
//     } else {
//       count += 1;
//     }
//   }
//   return count;
// }

const points = (games) =>
  games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0);

// function points(g) {
//     let count = 0;
//     for (let i = 0; i < g.length; i++) {
//       if (g[i][0] > g[i][2]) {
//         count += 3;
//       } else if (g[i][2] > g[i][0]) {
//         count += 0;
//       } else {
//         count += 1;
//       }
//     }
//     return count;
//   }

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);

console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);

console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
