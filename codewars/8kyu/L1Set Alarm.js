// function setAlarm(employed, vacation) {
//     if (employed === true && vacation === false) {
//       return true;
//     } else {
//       return false;
//     }
//   }

setAlarm = (e, v) => e === true && v === false;
// setAlarm = (e, v) => e && !v;
// setAlarm = (e, v) => e > v;

console.log(setAlarm(true, false));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));
console.log(setAlarm(true, true));
console.log(setAlarm(false, false));
