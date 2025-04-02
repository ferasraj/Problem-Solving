function howManyDalmations(number) {
  let dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIONS!!!",
  ];
  if (number <= 10) {
    return dogs[0];
  } else if (number <= 50) {
    return dogs[1];
  } else if (number <= 100) {
    return dogs[2];
  } else {
    return dogs[3];
  }
}
