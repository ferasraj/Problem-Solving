function countSheeps(sheep) {
  let arr = [];
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      arr.push(sheep[i]);
    }
  }
  return arr.length;
}
// countSheeps= (sheep) => sheep.filter(Boolean).length;
