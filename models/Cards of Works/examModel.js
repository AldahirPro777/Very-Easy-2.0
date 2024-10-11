const mongoose = require("mongoose");

// Enumeración para los niveles de importancia
const importanceLevels = ["bajo", "medio", "alto"];

const examSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // El título es obligatorio
      trim: true, // Eliminar espacios en blanco al inicio y final
    },
    materia: {
      type: String,
      required: true, // La materia es obligatoria
      trim: true,
    },
    date: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
      trim: true,
    },
    resourceUrls: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.every((url) => /^https?:\/\//.test(url)); // Validar que cada URL comience con http o https
        },
        message: (props) => `${props.value} no es una URL válida!`,
      },
      default: [], // Por defecto, es un arreglo vacío
    },
    importanceLevel: {
      type: String,
      enum: importanceLevels, // Restringir a valores definidos en la enumeración
      default: "medio", // Valor predeterminado
    },
    tags: {
      type: [String],
      default: [], // Por defecto, es un arreglo vacío
    },
    studyGuideUrls: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.every((url) => /^https?:\/\//.test(url)); // Validar que cada URL comience con http o https
        },
        message: (props) => `${props.value} no es una URL válida!`,
      },
      default: [], // Por defecto, es un arreglo vacío
    },
    isFixed: {
      type: Boolean,
      default: false, // Por defecto, no está fijado
    },
  },
  {
    timestamps: true, // Agrega createdAt y updatedAt
  }
);

module.exports = mongoose.model("Exams", examSchema);
