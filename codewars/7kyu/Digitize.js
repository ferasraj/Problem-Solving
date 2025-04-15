digitize = (n) => [...n.toString()].map(Number);
// digitize = (n) => [...String(n)].map(Number);
// digitize = (n) => Array.from(n.toString(), Number);
console.log(digitize(35231));
