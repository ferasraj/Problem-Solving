function addLength(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i] + " " + str[i].length;
  }
  return str;
}

// var addLength = (s) => s.split(" ").map((x) => x + " " + x.length);

str = "hello 000000000";
console.log(addLength(str));
