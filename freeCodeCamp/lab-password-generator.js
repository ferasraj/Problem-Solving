let char =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";
function generatePassword(passLength) {
  let password = "";
  for (let i = 0; i < passLength; i++) {
    let ranInd = Math.floor(Math.random() * char.length);
    password += char[ranInd];
  }

  return password;
}

let password = generatePassword(10);
console.log(`Generated password: ${password}`);
