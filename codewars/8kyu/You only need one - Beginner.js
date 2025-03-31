function check(a, x) {
  for (i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
}

// const check = (a,x) => a.includes(x);
console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check(["t", "e", "s", "t"], "e"));
console.log(check(["what", "a", "great", "kata"], "kat"));
