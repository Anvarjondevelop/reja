const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://anvarjondevelop:PkvWta7TUm4RkFM9@cluster0.63htnhl.mongodb.net/Reja";

let db;

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log("Error on Connection mongodb");
    } else {
      console.log("Mongodb connection succeed");
      console.log(client);
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, () => {
        console.log(`Server ${PORT} da ulandi, http://localhost:${PORT}`);
      });
    }
  }
);
/*
 db qayerdan keladi?
const { MongoClient } = require("mongodb");
const client = new MongoClient(url);
await client.connect();
const db = client.db("myDatabase");

👉 Shu yerda:

client → MongoDB server

client.db("myDatabase") → database obyekt

db → mana shu database obyektiga ishora qiladi

❗ Demak:

db — MongoDB’ning database object’i

3️⃣ db bilan nima qilamiz?

db o‘zi ma’lumot saqlamaydi, u orqali collectionlarga chiqamiz.

*/
//mongoDB atlas bu claude database ma'lumotlar omboriga email verify qilish orqali xohlagan payt xohlagan yerdan ulanish imkonini beradi
//mongoDB compass mongodb bilan gaplashish uchun yaxshi bir client
//mongoDB compass Userinterface bor database bilan ishlashda qulay bo'lgan instrument

//---------------- Hozirgi zamonaviy uslubda mongoDB ulanishi
/*
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URL);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log(" MongoDB connected");
  } catch (err) {
    console.error(" MongoDB connection error:", err);
    process.exit(1);
  }
}

function getDB() {
  if (!db) {
    throw new Error(" DB not connected yet");
  }
  return db;
}

module.exports = { connectDB, getDB };
*/
