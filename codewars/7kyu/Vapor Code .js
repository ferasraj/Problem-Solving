vaporcode = (string) =>
  string.toUpperCase().replace(/ /g, "").split("").join("  ");

// const vaporcode = (string) => string.toUpperCase().match(/\S/g).join(`  `);

console.log(vaporcode("Lets go to the movies"));
