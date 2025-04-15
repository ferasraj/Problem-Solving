function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

let consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

let vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getPunctuationCount(sentence) {
  const punctuation = "'.,!?";
  let count = 0;
  for (const char of sentence.toLowerCase()) {
    if (punctuation.includes(char)) {
      count++;
    }
  }
  return count;
}
let punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  let words = sentence
    .trim()
    .split(" ")
    .filter((word) => word.length > 0);
  // const words = sentence.trim().split(/\s+/);
  return words.length;
}

let wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);

console.log(getWordCount(""));
