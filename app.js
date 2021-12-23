// Import Express
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { route } = require("./routes/api");

// Buat object express
const app = express();

// menggunakan middleware
app.use(express.json());


// buat routing home
app.get("/", (req, res) => {
  res.send("hello express");
});

// definisikan route 
const router = require("./routes/api");
app.use(router);

// deefinisikan port
app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});
