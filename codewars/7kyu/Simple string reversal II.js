function solve(st, a, b) {
  st =
    st.slice(0, a) +
    st
      .slice(a, b + 1)
      .split("")
      .reverse()
      .join("") +
    st.slice(b + 1);

  return st;
}

console.log(solve("codingIsFun", 2, 100)); //conuFsIgnid
console.log(solve("cODEWArs", 1, 5)); //cAWEDOrs
console.log(solve("codewars", 1, 5)); //cawedors
