const res = require("express/lib/response");
const router = require("../routes/api");
const data = require("../data/student");
const students = require("../data/student");

class StudentController {
  index(req, res) {
    const data = {
      messege: "Menampilkan data student",
      data: students,
    };
    res.json(data);
  }
  store(req, res) {
    const { nama } = req.body;
    const data = {
      messege: `menambahkan data student ${nama}`,
      data: students.push(nama)
    };
    res.json(data);
  }
  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    const data = {
      messege: `mengedit data student id ${id}, nama ${nama}`,
      data: students[id] = nama,
    };
    res.json(data);
  }
  destroy(req, res) {
    const { id } = req.params;
    const data = {
      messege: `menghapus data student ${id}`,
      data: students.splice(id,1)
    };
    res.json(data);
  }
}

// buat object student controller
const object = new StudentController();

// export routing
module.exports = object;
