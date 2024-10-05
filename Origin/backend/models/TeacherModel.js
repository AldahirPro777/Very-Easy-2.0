const mongoose = require("mongoose");

var teacherSchema = new mongoose.Schema({
  name: String,
  asignatura: String,
  phone: String,
  birthDate: Date,
  genero: Boolean,
  tasksNumber: Number,
  projectsNumber: Number,
  examNow: Boolean,
});

module.exports = mongoose.model("Teachers", teacherSchema);
