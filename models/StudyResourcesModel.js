const mongoose = require("mongoose");
var studyResourcesSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    type: String,
    urls: [String],
    tags: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("StudyResources", studyResourcesSchema);
