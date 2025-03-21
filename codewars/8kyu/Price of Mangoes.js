function mango(quantity, price) {
  let free = ((quantity / 3) | 0) * price;
  let total = quantity * price - free;
  return total;
}

// function mango(quantity, price) {
//   return (quantity - quantity / 3) * price;
// }

console.log(mango(70, 53));
