const res = require("express/lib/response");
const router = require("../routes/api");
const data = require("../data/student");
// const students = require("../data/student");

// import model student
const Student = require("../models/Students");

class StudentController {
  async index(req, res) {
    const students = await Student.all();
    const data = {
      messege: "Menampilkan data student",
      data: students,
    };
    res.status(200).json(data);
  }
  async store(req, res) {
    const students = await Student.create(req.body);
    const data = {
      messege: `menambahkan data student`,
      data: students,
    };
    res.json(data).status(201);
  }
  async update(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);
    if (student) {
      // update data
      const studentUpdated = await Student.update(id, req.body);
      const data = {
        messege: `mengedit data student `,
        data: studentUpdated,
      };
      res.json(data).status(200);
    } else {
      const data = {
        messege: "data tidak tersedia",
      };
      res.status(404);
      res.json(data);
    }
  }
  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      // hapus data
      await Student.delete(id);
      const data = {
        messege: "menghapus data student ",
      };
      res.status(200).json(data);
    } else {
      // data tidak ada
      const data = {
        messege: "data tidak ada ",
      };
      res.status(404).json(data);
    }
  }

  async show(req, res) {
    // cari id
    // jika ada, kirim datanya
    // jika tidak ada, kirim data tidak ada
    const { id } = req.params;
    const student = await Student.find(id);
    if (student) {
      const data = {
        messege: "mengedit data ",
        data: student, 
      };
      res.status(200).json(data);
    } else {
      const data = {
        messege: "data tidak ada",
      };
      res.status(404).json(data);
    }
  }
}

// buat object student controller
const object = new StudentController();

// export routing
module.exports = object;
