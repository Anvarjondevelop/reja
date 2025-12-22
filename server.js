console.log("Web Serverni boshqarish");

const express = require("express");
const app = express();
const http = require("http");
// Express => bu Node.js da web server qurishni juda osonlashtirib beradigan framework
// 1 Kirish code
// express ga kirib kelayotgan ma'lumotlarga bog'liq bo'lgan code
app.use(express.static("public")); // Bu harqanday brawserdan kirib kelayotgan so'rovlar uchun public folderi ochiq degani
app.use(express.json()); // kirib kelayotgan json formatdagi datani object ko'rinishiga o'zgartirib beradi
app.use(express.urlencoded({ extended: true })); // Agar HTML  formdan malumot yuborilsa, uni o‘qiy ol

// 2 Session code

// 3 Views code
//SSR — Server Side Rendering
//SSR — HTML sahifani serverning o‘zi tayyorlab, browserga tayyor holatda yuborishi.
app.set("views", "views"); // => EJS fayllar (front-end template) qayerda joylashganini ko'rsatadi.
app.set("view engine", "ejs"); // => Express’ga: “HTMLni EJS orqali generatsiya qilamiz” deb aytadi.

// 4 Routing code

// 4 Routing code
// app.get("/", function (req, res) {
//   //  Bu qator route (yo‘l) yaratadi.
//   res.end(`<h1 style="background: red">Siz asosiy oynadasiz</h1>`); //foydalanuvchiga javobni yubor va aloqa tugasin
// });

// app.get("/hello", function (req, res) {
//   //  Bu qator route (yo‘l) yaratadi.
//   res.end(`<h1 style="background: red">HELLO WORLD by David</h1>`); //foydalanuvchiga javobni yubor va aloqa tugasin
// });

// app.get("/gift", function (req, res) {
//   // so'rov gift bo'lsa  res dagi javobni chiqar
//   res.end(`<p>Siz sovg'alar bo'limidasiz</p>`); //foydalanuvchiga javobni yubor va aloqa tugasin
// });

const server = http.createServer(app); // “Node.js, iltimos, Express app bilan ishlaydigan server yaratib ber” degani.
let PORT = 3000;
server.listen(PORT); //Serverni ishga tushir ! Va shu portni tinglab tur!
//, function () {
//   console.log(`Server ${PORT}- portda muvaffaqiyatli ishga tushdi`);
// });

// NEW CODE 19 LESSON
app.post("/create-item", (req, res) => {
  // ma'lumotni databasega yozish uchun
  console.log(req.body, "reques body qismi");
  // res.json({ test: "success" });
  res.send("So'rov qabul qilindi!");
});

app.get("/", function (req, res) {
  // ma'lumot o'qish uchun
  res.render("harid");
});

//19- Dars
// public da frontedga tegishli bo'lgan js , css, html , video, foto lar turadi shu folder hammag ochiq bo'ladi
// ejs da html code yozildi faqat uni node js da ishlataolishimimz uchun ejs fileda yozishimiz kerak
//res.render() — Express’ning maxsus funksiyasi.
//U EJS faylni olib, ichidagi  kodlarini JS orqali ishlab, yakuniy HTMLga aylantiradi va uni brauzerga jo‘natadi.

//  * git reset --hard * => yangi yozgan kodlar kerak emas git dagi oxirgi commitga qaytish
// * git clean -df * =>  git repository ichidagi keraksiz, git kuzatmayotgan (untracked) fayl va papkalarni o‘chirib tashlaydi.
