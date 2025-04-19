function mirror(data) {
  const sorted = [...data].sort((a, b) => a - b); // نسخ ثم ترتيب
  const mirrored = sorted.slice(0, -1).reverse();
  return sorted.concat(mirrored);
}

console.log(mirror([-8, 42, 18, 0, -16])); //[-16, -8, 0, 18, 42, 18, 0, -8, -16]
