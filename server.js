const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  " mongodb+srv://anvarjondevelop:PkvWta7TUm4RkFM9@cluster0.63htnhl.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) console.log("Error on connection MOngoDB");
    else {
      console.log("MongoDb connection successed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app); // “Node.js, iltimos, Express app bilan ishlaydigan server yaratib ber” degani.
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `Server ${PORT}- portda muvaffaqiyatli ishga tushdi, http://localhost:${PORT}`
        );
      }); // Serverni ishga tushir va Portni eshit !
    }
  }
);
