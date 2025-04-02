bonusTime = (salary, bonus) => (bonus ? `£${salary * 10}` : `£${salary}`);

// const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;

console.log(bonusTime(10000, true));
console.log(bonusTime(25000, true));
console.log(bonusTime(10000, false));
console.log(bonusTime(60000, false));
console.log(bonusTime(2, true));
