function correct(string) {
  for (var i = 0; i < string.length; i++) {
    string[i] === "0" ? (string = string.replace("0", "O")) : null;
    string[i] === "1" ? (string = string.replace("1", "I")) : null;
    string[i] === "5" ? (string = string.replace("5", "S")) : null;
  }
  return string;
}

// function correct(string){
//     return string.replaceAll('0', 'O').replaceAll('1', 'I').replaceAll('5', 'S');
//   }
// const correct = (string) => string.replace(/\d/g, (val) => `OI   S`[val]);
console.log(correct("L0ND0N"));
console.log(correct("DUBL1N"));
console.log(correct("51NGAP0RE"));
