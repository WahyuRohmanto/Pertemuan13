// import db
const res = require("express/lib/response");
const db = require("../config/database.js");

// buat model student
class Student {
  static all() {
    return new Promise((resolve, reject) => {
      // melakukan query ke db untuk ambil data
      const sql = "SELECT * FROM students";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO students set ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    const student = await this.find(id);
    return student;
  }
  // model untuk mencari data
  static find(id) {
    // lakukan promise, select by id
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results[0]);
      });
    });
  }
  // method untuk mengupdate data
  static async update(id, data) {
    // update data
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });
    // select data by id
    const student = await this.find(id);
    return student;
  }

  static delete(id) {
    // query delete
    return new Promise((resolve, reject) => {
      // query sql
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
}

module.exports = Student;
