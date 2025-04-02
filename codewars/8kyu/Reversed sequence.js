reverseSeq = (n) => [...Array(n)].map((_, i) => n - i);
// reverseSeq = (n) => Array.from(Array(n), (_, i) => n - i);
// reverseSeq = (n) => Array.from({ length: n }, (_, i) => n - i);
// reverseSeq = length => Array.from({length}, () => length--)

console.log(reverseSeq(5));
