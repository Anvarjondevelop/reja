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

//------------

//TASK D
// class Shop {
//   constructor(non, lagmon, cola) {
//     this.products = {
//       non: non,
//       lagmon: lagmon,
//       cola: cola,
//     };
//   }

//   // hozirgi vaqtni olish uchun yordamchi method
//   _getTime() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, "0");
//     const minutes = now.getMinutes().toString().padStart(2, "0");
//     return `${hours}:${minutes}`;
//   }

//   // qoldiqni ko'rsatish
//   qoldiq() {
//     const time = this._getTime();
//     const { non, lagmon, cola } = this.products;
//     const message = `Hozir ${time}da ${non}ta non, ${lagmon}ta lagmon va ${cola}ta cola mavjud!`;
//     console.log(message);
//     return message;
//   }

//   // mahsulot sotish
//   sotish(product, quantity) {
//     if (!this.products[product]) {
//       console.log(`Bunday mahsulot mavjud emas: ${product}`);
//       return;
//     }

//     if (this.products[product] < quantity) {
//       console.log(`Etarli ${product} yo'q!`);
//       return;
//     }

//     this.products[product] -= quantity;
//     const time = this._getTime();
//     console.log(`${time}: ${quantity}ta ${product} sotildi`);
//   }

//   // mahsulot qabul qilish
//   qabul(product, quantity) {
//     if (!this.products[product]) {
//       console.log(`Bunday mahsulot mavjud emas: ${product}`);
//       return;
//     }

//     this.products[product] += quantity;
//     const time = this._getTime();
//     console.log(`${time}: ${quantity}ta ${product} qabul qilindi`);
//   }
// }

// // TEST
// const shop = new Shop(4, 5, 2);

// shop.qoldiq(); // Hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
// shop.sotish("non", 3); // 3ta non sotildi
// shop.qabul("cola", 4); // 4ta cola qabul qilindi
// shop.qoldiq(); // Hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

//TASK C
function checkContent(str1, str2) {
  // Agar uzunliklari teng bo‘lmasa — darrov false
  if (str1.length !== str2.length) return false;

  // Harflarni sort qilib solishtiramiz
  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
}

console.log(checkContent("mitgroup", "gmtiprou"));
console.log(checkContent("abc", "ab"));
console.log(checkContent("test", "taste"));
