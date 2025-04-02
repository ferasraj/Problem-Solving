combat = (h, d) => (h - d <= 0 ? 0 : h - d);
// combat = (h, d) => (h <d   ? 0 : h - d);

// combat = (h, d) => Math.max(h - d, 0);

console.log(combat(100, 5));
console.log(combat(92, 8));
console.log(combat(20, 30));
