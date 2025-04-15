// solution = (str, ending) => str.endsWith(ending);
solution = (str, ending) => ending === str.slice(-ending.length);

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
console.log(solution("abcde", "bc"));
