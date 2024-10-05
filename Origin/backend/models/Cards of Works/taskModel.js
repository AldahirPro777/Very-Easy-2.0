const mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
  title: String,
  descripcion: String,
  materia: String,
  date: Date,

  teacher: String,
  resourceUrls: [String],
  importanceLevel: String,
  tags: [String],
  isFixed: Boolean,
});

module.exports = mongoose.model("Task", taskSchema);
