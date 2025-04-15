function findScreenHeight(width, ratio) {
  let ra = ratio.split(":").map(Number);
  ra = (width * ra[1]) / ra[0];
  console.log(ra);
  return `${width}x${ra}`;
}

console.log(findScreenHeight(1024, "4:3"));
