const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  title: String,
  materia: String,
  date: Date,

  teacher: String,
  resourceUrls: [String],
  importanceLevel: String,
  tags: [String],
  studyGuideUrls: [String],
  isFixed: Boolean,
});

module.exports = mongoose.model("Exam", examSchema);
