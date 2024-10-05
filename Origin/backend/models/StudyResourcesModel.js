const mongoose = require("mongoose");
var studyResourcesSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  url: [String],
  tags: [String],
});

module.exports = mongoose.model("StudyResources", studyResourcesSchema);
