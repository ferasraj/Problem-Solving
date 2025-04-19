function gcContent(dna) {
  let count = 0;
  for (i = 0; i < dna.length; i++) {
    if (dna[i] === "G" || dna[i] === "C") {
      count++;
    }
  }

  return (count / dna.length) * 100 || 0;
}

// return parseFloat((count / dna.length) * 100).toFixed(2)); للتقريب

console.log(gcContent("AAATTTCCCGGG"));
console.log(gcContent("G"));
console.log(gcContent("C"));
console.log(gcContent("A"));
console.log(gcContent("AAA"));
console.log(gcContent(""));
