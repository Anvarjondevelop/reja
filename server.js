console.log("Web Serverni boshqarish");

const express = require("express");
const app = express();
const http = require("http");

// 1 Kirish code
// express ga kirib kelayotgan ma'lumotlarga bog'liq bo'lgan code
app.use(express.static("public")); // Bu harqanday brawserdan kirib kelayotgan so'rovlar uchun public folderi ochiq degani
app.use(express.json()); // kirib kelayotgan json formatdagi datani object ko'rinishiga o'zgartirib beradi
app.use(express.urlencoded({ extended: true })); // Agar HTML  formdan malumot yuborilsa, uni o‘qiy ol

// 2 Session code

// 3 Views code
app.set("view", "views");
app.set("view engine", "ejs");

// 4 Routing code

app.get("/hello", function (req, res) {
  //  Bu qator route (yo‘l) yaratadi.
  res.end(`<h1 style="background: red">HELLO WORLD by David</h1>`); //foydalanuvchiga javobni yubor va aloqa tugasin
});

app.get("/", function (req, res) {
  //  Bu qator route (yo‘l) yaratadi.
  res.end(`<h1 style="background: red">Siz asosiy oynadasiz</h1>`); //foydalanuvchiga javobni yubor va aloqa tugasin
});

app.get("/gift", function (req, res) {
  // so'rov gift bo'lsa  res dagi javobni chiqar
  res.end(`<p>Siz sovg'alar bo'limidasiz</p>`); //foydalanuvchiga javobni yubor va aloqa tugasin
});

const server = http.createServer(app); // “Node.js, iltimos, Express app bilan ishlaydigan server yaratib ber” degani.
let PORT = 3000;
server.listen(PORT); //Serverni ishga tushir ! Va shu portni tinglab tur!
//, function () {
//   console.log(`Server ${PORT}- portda muvaffaqiyatli ishga tushdi`);
// });
