// import StudentController
const StudentController = require("../controllers/StudentController");

// import express
const express = require("express");
// buat object rout
const router = express.Router();

// buat routing home
router.get("/", (req, res) => {
  res.send("hello express");
});

// buat routing student
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);
router.get("/students/:id", StudentController.show);

// export routing
module.exports = router;
