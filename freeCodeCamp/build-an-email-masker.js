function maskEmail(email) {
  let atIndex = email.indexOf("@");
  let user = email[0] + "*".repeat(atIndex - 2) + email[atIndex - 1];
  return user + email.slice(atIndex);
}
let email = "apple.pie@example.com";
maskEmail(email);
console.log(maskEmail(email));
