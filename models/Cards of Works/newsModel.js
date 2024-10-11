const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: String,
  date: String,
  autor: String,
  /* imagen: String, */
  description: String,
  importanceLevel: String,
  fuente: String,
  archivosAdjuntos: [String],
  isFixed: Boolean,
});

module.exports = mongoose.model("News", newsSchema);
