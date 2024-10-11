const mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
  title: String,
  descripcion: String,
  materia: String,
  date: String,

  teacher: String,
  resourceUrls: [String],
  importanceLevel: String,
  tags: [String],
  isFixed: Boolean,
});

module.exports = mongoose.model("Projects", projectSchema);
