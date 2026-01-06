console.log("Web Serverni boshlash");

const express = require("express");
const app = express();

const fs = require("fs");

//MongoDB chaqirish
/*
MongoDB’da ierarxiya qanday?

MongoDB tuzilishi shunday:

MongoClient
   ↓
Database (db)
   ↓
Collection
   ↓
Document
-------------------------
Ya’ni:
1- MongoClient → serverga ulanish
2- db → aniq bitta database
3 -collection → jadvalga o‘xshash
4 -document → bitta yozuv (JSON)
*/
const db = require("./server").db();
//db bu databse mizga bog'langan object // server.js dagi db() bilan mos// server.js da export qilgan nom //server fayldan kelgan object, ichidagi db nomli funksiyani oladi //db() → funksiya MongoDB ga ulanadi, database qaytaradi
//db bu mongodb ning database objecti
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    user = JSON.parse(data); // jsonda kelgan datani objectga o'zgartirib user o'zgaruvchiga tenglayapdi
  }
});
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

// db objectni olish (null bo‘lishi mumkin)

// if (!db) {
//   console.log("MongoDB hali ulanmagan!");
// } else {
//   db.collection("plans")
//     .find()
//     .toArray()
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// }

// app.get("/hello", function (req, res) {
//   //  Bu qator route (yo‘l) yaratadi.
//   res.end(`<h1 style="background: red">HELLO WORLD by David</h1>`); //foydalanuvchiga javobni yubor va aloqa tugasin
// });

// app.get("/gift", function (req, res) {
//   // so'rov gift bo'lsa  res dagi javobni chiqar
//   res.end(`<p>Siz sovg'alar bo'limidasiz</p>`); //foydalanuvchiga javobni yubor va aloqa tugasin
// });

// NEW CODE 19 LESSON
// app.post("/create-item", (req, res) => {
//   // ma'lumotni databasega yozish uchun
//   console.log(req.body, "reques body qismi"); // imputni name hisoblangan reja bilan ma'lumot kelyapdi
//   // res.json({ test: "success" });
//   const new_reja = req.body.reja;
//   db.collection("plans").inserOne({ reja: new_reja }, (err, data) => {
//     if (err) {
//       console.log(err);
//       resolveInclude("Something went wrong");
//     } else {
//       res.end("successfully added");
//     }
//   });
// });
//---------------------------------------------------------------------------
app.post("/delete-item", (req, res) => {
  const id = req.body.id;

  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      if (err) {
        console.log(err);
        res.json({ state: "error" });
      } else {
        res.json({ state: "success" });
      }
    }
  );
});
//---------------------------------------------------------------------------
app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar ochirildi" });
    });
  }
});
//---------------------------------------------------------------------------
app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});
//---------------------------------------------------------------------------
app.post("/create-item", (req, res) => {
  // create-item degan linkdan so'rov qabul qilib olaman va so'roq req ga kelib tushadi va yuborilgan so'rovni o'zini ko'rish uchun req.body qilinadi
  console.log("User entred /create-item");

  const new_reja = req.body.reja; // reja  formni ichidagi inputni name va o'sha namega inputni value si biriktirilgan bo'ladi
  // console.log(req.body);
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    //database ni  ichidagi plans degan collectionga bitta data qo'sh uni key reja bo'lsin value si inputdan kelgan value bo'lsin degani
    console.log(data.ops); // ops mongodb ga kiritilgan hujjat nusxasi
    res.json(data.ops[0]); //MongoDB ga endi qo‘shilgan documentni  json ko'rinishiga o'girib frontendga yuborish
  });
});
//---------------------------------------------------------------------------
app.get("/", (req, res) => {
  console.log("User entred / ");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      //database dan kelga ma'lumotni arrayga o'tkazdik
      if (err) {
        console.log(err);
        res.send("Something went wrong");
      } else {
        // console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;

// app.get("/", function (req, res) {
//   // ma'lumot o'qish uchun
//   res.render("harid");
// });
//---------------------------------------------------------------------------
app.get("/author", (req, res) => {
  res.render("author", { user: user }); // res.render("page", { NIMA_NOM_BILAN: QAYSI_MAʼLUMOT })
  // "qaysi ma'lumot"  deganda database dan kelgan json ma'lumotni object sifatida qbul qilib olgan o'zgaruvchi nomini yozamiz
  // 2- qiymat manashu page uchun kerak bo'ladigan ma'lumotlar manbai fake database real  projectda bunday qilinmaydi
});

//19- Dars
// public da frontedga tegishli bo'lgan js , css, html , video, foto lar turadi shu folder hammag ochiq bo'ladi
// ejs da html code yozildi faqat uni node js da ishlataolishimimz uchun ejs fileda yozishimiz kerak
//res.render() — Express’ning maxsus funksiyasi.
//U EJS faylni olib, ichidagi  kodlarini JS orqali ishlab, yakuniy HTMLga aylantiradi va uni brauzerga jo‘natadi.

//  * git reset --hard * => yangi yozgan kodlar kerak emas git dagi oxirgi commitga qaytish
// * git clean -df * =>  git repository ichidagi keraksiz, git kuzatmayotgan (untracked) fayl va papkalarni o‘chirib tashlaydi.
