function save(sizes, hd) {
  let counut = 0;
  sizes.reduce((a, b) => (a + b <= hd ? counut++ : 0, a + b), 0);
  return counut;
}

// function save(sizes, hd) {
//     let counut = 0;
//     for (i = 0; i < sizes.length; i++) {
//       counut += sizes[i];
//       if (counut > hd) {
//         break;
//       }
//     }
//     return i;
//   }
console.log(save([4, 4, 4, 3, 3], 12)); //3
console.log(save([4, 8, 15, 16, 23, 42], 108)); //6
console.log(save([4, 4, 4, 3, 3], 11)); //2
