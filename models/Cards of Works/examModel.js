const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    materia: { type: String, required: true },
    date: { type: String, required: true },
    teacher: { type: String, required: true },
    resourceUrls: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.every((url) => /^https?:\/\//.test(url));
        },
        message: (props) => `${props.value} no es una URL válida!`,
      },
      default: [],
    },
    importanceLevel: String,
    tags: {
      type: [String],
      default: [],
    },
    studyGuideUrls: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.every((url) => /^https?:\/\//.test(url));
        },
        message: (props) => `${props.value} no es una URL válida!`,
      },
      default: [],
    },
    isFixed: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Exams", examSchema);
