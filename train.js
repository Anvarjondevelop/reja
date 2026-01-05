// Node js event loop

// node js => single thread with event loop => thread pool

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", //20-30
//   "uzingizga ishlashni boshlang", //30-40
//   "siz kuchli bo'lgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling", //60+
// ];

//// CALLBACK function
// function maslahatBering(a, callback) {
//   if (typeof a != "number") callback("insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed here 0");
// maslahatBering(61, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// 22-DARS
/* =========================== Asynchronous Function =========================== */
// sinxron function to'liq ishlab bo'lgachgina asinxron function ishga tushadi

//// ASYNCHRONOUS function

// async function maslahatBering(a) {
//   if (typeof a != "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
// setTimeout(function () {
//   list[5];
// }, 5000);
//   }
// }ㅋ

// ----------------- then | catch -----------------
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// ----------------- await -----------------
// bunday ko'rinishda asosan bosqichma- bosqich biror operatsiyani bajarganda ishlatiladi
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }

// run();

// ------------------ callback + Set interval ------------------

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "togri boshliq tanlang va koproq xato qiling", //20-30
//   "uzingizga ishlashni boshlang", //30-40
//   "siz kuchli bo'lgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling", //60+
// ];
// function maslahatBering(a, callback) {
//   if (typeof a != "number") callback("insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log("passed here 0");
// maslahatBering(61, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// TASK A
// function countLetter(letter, word) {
//   let count = 0;

//   letter = letter.toLowerCase();
//   word = word.toLowerCase();

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(
//   "Bu jumlada",
//   countLetter("e", "Software Engineer"),
//   "'e'",
//   "harf qatnashgan"
// );

// function countnumber(str) {
//   let count = 0;

//   for (let char of str) {
//     if (char >= "0" && char <= "9") {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countnumber("njd9rjv33fjf0ef32fj24"));
