remove = (string) => string.replace(/!+$/g, "");
console.log(remove("Hi! Hi!"));

// function remove(string) {
//     let result = "";
//     let end = string.length;

//     // نحدد آخر موقع غير علامة تعجب
//     for (let i = string.length - 1; i >= 0; i--) {
//     if (string[i] !== "!") {
//         end = i + 1;
//         break;
//     }
//     }

//     // ندمج بناء السلسلة هنا مباشرة
//     for (let i = 0; i < end; i++) {
//     result += string[i];
//     }

//     return result;
// }
